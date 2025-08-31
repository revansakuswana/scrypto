import { useEffect, useState } from "react";
import {
  IconCurrencyDollar,
  IconTrendingUp,
  IconChartBar,
  IconClock,
  IconExternalLink,
} from "@tabler/icons-react";

export default function SectionFour() {
  const [stats, setStats] = useState([
    {
      icon: <IconCurrencyDollar size={28} className="text-gray-400" />,
      title: "-",
      description: "Current Price",
      color: "text-purple-400",
    },
    {
      icon: <IconTrendingUp size={28} className="text-gray-400" />,
      title: "-",
      description: "24h Change",
      color: "text-cyan-400",
    },
    {
      icon: <IconChartBar size={28} className="text-gray-400" />,
      title: "-",
      description: "Market Cap",
      color: "text-pink-400",
    },
    {
      icon: <IconClock size={28} className="text-gray-400" />,
      title: "-",
      description: "24h Volume",
      color: "text-purple-400",
    },
  ]);

  const [chartData, setChartData] = useState({
    candles: [],
    volumes: [],
    closes: [],
    isLoaded: false,
  });

  const [selectedRange, setSelectedRange] = useState("All");

  useEffect(() => {
    async function fetchTokenData() {
      try {
        const res = await fetch("https://api.ociswap.com/tokens/scrypto");
        const data = await res.json();

        const priceNow = parseFloat(data.price?.usd?.now ?? "0");
        const price24h = parseFloat(data.price?.usd?.["24h"] ?? "0");
        const change24h =
          price24h > 0 ? ((priceNow - price24h) / price24h) * 100 : 0;
        const marketCap = parseFloat(
          data.market_cap?.circulating?.usd?.now ?? "0"
        );
        const volume24h = parseFloat(data.volume?.usd?.["24h"] ?? "0");

        setStats([
          {
            icon: <IconCurrencyDollar size={28} className="text-purple-400" />,
            title: `$${priceNow.toString().slice(0, 10)}`,
            description: "Current Price",
            color: "text-purple-400",
          },
          {
            icon: <IconTrendingUp size={28} className="text-cyan-400" />,
            title: `${change24h > 0 ? "+" : ""}${change24h.toFixed(2)}%`,
            description: "24h Change",
            color: "text-cyan-400",
          },
          {
            icon: <IconChartBar size={28} className="text-pink-400" />,
            title: `$${marketCap.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}`,
            description: "Market Cap",
            color: "text-pink-400",
          },
          {
            icon: <IconClock size={28} className="text-purple-400" />,
            title: `$${volume24h.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}`,
            description: "24h Volume",
            color: "text-purple-400",
          },
        ]);
      } catch (err) {
        console.error("Error fetching token data", err);
      }
    }
    fetchTokenData();
  }, []);

  useEffect(() => {
    async function fetchEvents() {
      try {
        let cursor = 0;
        let allEvents: any[] = [];
        const now = Date.now();
        let cutoff: number;
        let bucketMs: number;
        if (selectedRange === "1h") {
          cutoff = now - 1 * 60 * 60 * 1000;
          bucketMs = 5 * 60 * 1000; // 5 minutes / candle
        } else if (selectedRange === "4h") {
          cutoff = now - 4 * 60 * 60 * 1000;
          bucketMs = 15 * 60 * 1000; // 15 minutes / candle
        } else if (selectedRange === "24h") {
          cutoff = now - 24 * 60 * 60 * 1000;
          bucketMs = 60 * 60 * 1000; // 1 hour / candle
        } else {
          cutoff = now - 30 * 24 * 60 * 60 * 1000; // last 30 days
          bucketMs = 24 * 60 * 60 * 1000; // 1 day / candle
        }
        while (true) {
          const res = await fetch(
            `https://api.ociswap.com/tokens/resource_rdx1tkff46jkeu98jgl8naxpzfkn0m0hytysxzex3l3a8m7qps49f7m45c/events?cursor=${cursor}&limit=100`
          );
          const json = await res.json();
          const page = json.data || [];
          if (page.length === 0) break;
          allEvents = [...allEvents, ...page];
          // Early stop if this page already includes items older than cutoff
          const pageMinTs = Math.min(
            ...page.map((ev: any) => new Date(ev.timestamp).getTime())
          );
          if (isFinite(pageMinTs) && pageMinTs < cutoff) break;
          if (!json.next_cursor || json.next_cursor === cursor) break;
          cursor = json.next_cursor;
        }
        const events = allEvents.filter(
          (ev: any) =>
            ev.type === "swap" && new Date(ev.timestamp).getTime() >= cutoff
        );

        const ohlc: Record<
          number,
          { o: number; h: number; l: number; c: number; v: number }
        > = {};

        for (const ev of events) {
          const ts = new Date(ev.timestamp).getTime();
          const bucket = Math.floor(ts / bucketMs) * bucketMs;
          const price = parseFloat(
            ev.x?.price?.usd ??
              ev.y?.price?.usd ??
              ev.x?.price?.token ??
              ev.y?.price?.token ??
              "0"
          );

          const volume = parseFloat(
            ev.volume?.usd ??
              ev.volume?.xrd ??
              ev.x?.amount?.usd ??
              ev.y?.amount?.usd ??
              "0"
          );
          if (!price) continue;

          if (!ohlc[bucket]) {
            ohlc[bucket] = {
              o: price,
              h: price,
              l: price,
              c: price,
              v: volume,
            };
          } else {
            ohlc[bucket].h = Math.max(ohlc[bucket].h, price);
            ohlc[bucket].l = Math.min(ohlc[bucket].l, price);
            ohlc[bucket].c = price;
            ohlc[bucket].v += volume;
          }
        }

        const sortedTs = Object.keys(ohlc)
          .map(Number)
          .sort((a, b) => a - b);
        const candles = sortedTs.map((t) => ({
          x: new Date(t),
          y: [ohlc[t].o, ohlc[t].h, ohlc[t].l, ohlc[t].c],
        }));
        const volumes = sortedTs.map((t) => ({
          x: new Date(t),
          y: ohlc[t].v,
        }));
        const closes = sortedTs.map((t) => ({
          x: new Date(t),
          y: ohlc[t].c,
        }));

        setChartData({ candles, volumes, closes, isLoaded: true });
      } catch (err) {
        console.error("Error fetching events", err);
      }
    }
    fetchEvents();
  }, [selectedRange]);

  useEffect(() => {
    if (chartData.isLoaded) {
      const chart = new (window as any).CanvasJS.StockChart("chartContainer", {
        theme: "dark2",
        title: { text: "Scrypto Price Chart", padding: 10 },
        subtitles: [{ text: "Scrypto Price (USD)", padding: 5 }],
        charts: [
          {
            axisX: { crosshair: { enabled: true, snapToDataPoint: true } },
            axisY: { prefix: "$" },
            data: [
              {
                type: "candlestick",
                xValueType: "dateTime",
                yValueFormatString: "$0.########",
                dataPoints: chartData.candles,
              },
            ],
          },
        ],
        navigator: {
          data: [{ dataPoints: chartData.closes }],
          slider: {
            minimum: chartData.closes.length
              ? chartData.closes[0].x
              : new Date(),
            maximum: chartData.closes.length
              ? chartData.closes[chartData.closes.length - 1].x
              : new Date(),
          },
          axisX: {
            labelFormatter: function (e: any) {
              return (window as any).CanvasJS.formatDate(e.value, "DD MMM YY");
            },
          },
          axisY: { prefix: "$" },
        },
        rangeSelector: {
          inputFields: {
            startValue: chartData.closes.length
              ? chartData.closes[0].x
              : new Date(),
            endValue: new Date(),
          },
          buttons: [
            { label: "1m", range: 1, rangeType: "month" },
            { label: "3m", range: 3, rangeType: "month" },
            { label: "6m", range: 6, rangeType: "month" },
            { label: "YTD", rangeType: "ytd" },
            { label: "1y", range: 1, rangeType: "year" },
            { label: "All", rangeType: "all" },
          ],
          buttonClick: (e: any) => {
            setSelectedRange(e.label);
          },
        },
      });
      chart.render();
    }
  }, [chartData]);

  return (
    <section
      id="chart"
      className="
      w-full 
      flex 
      flex-col
      items-center
      justify-center
      text-center
      text-white
      pt-20
      px-5
      sm:px-35
      sm:py-30
    ">
      <div
        className="
        flex 
        items-center 
        justify-center 
        gap-2
        border 
        bg-white/3
        border-white/8
        rounded-lg
        p-3
        text-xs
        font-light
        tracking-wider
        mb-6
      ">
        <img src="/logo-heading.png" alt="Logo" className="w-4 h-4 mx-auto" />
        Track The Pack
      </div>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-500 tracking-wider">
            Track the Pack
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid Kartu Statistik */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 w-full max-w-6xl mx-auto overflow-hidden break-words">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-gray-900/40 p-6 rounded-lg border text-center ${stat.color} overflow-hidden`}>
              <div className="flex justify-center">{stat.icon}</div>
              <p className={`text-3xl font-bold my-2 ${stat.color}`}>
                {stat.title}
              </p>
              <p className="text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Area Grafik (menggunakan posisi relatif & absolut) */}
        <div className="relative flex flex-col gap-10 justify-center items-center">
          {/* Tombol "View Chart" */}
          <button
            className="
          flex items-center gap-2 
          font-semibold 
          border
          rounded-lg
          px-4 py-2
          text-purple-400
          hover:text-white transition-colors
        ">
            <IconExternalLink size={20} />
            <span>VIEW CHART</span>
          </button>
          <div className="w-full max-w-6xl h-[500px] mx-auto flex items-center justify-center">
            {chartData.isLoaded ? (
              <div
                id="chartContainer"
                style={{ width: "100%", height: "500px" }}
              />
            ) : (
              <div className="flex flex-col items-center gap-3">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-pink-500 border-solid"></div>
                <p className="text-gray-400">Loading chart data...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
