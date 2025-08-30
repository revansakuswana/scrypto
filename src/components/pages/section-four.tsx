import { useEffect, useRef, useState } from "react";
import {
  IconCurrencyDollar,
  IconTrendingUp,
  IconChartBar,
  IconClock,
} from "@tabler/icons-react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

export default function SectionFour() {
  const [stats, setStats] = useState([
    {
      icon: <IconCurrencyDollar size={28} className="text-gray-400" />,
      value: "-",
      label: "Current Price",
    },
    {
      icon: <IconTrendingUp size={28} className="text-gray-400" />,
      value: "-",
      label: "24h Change",
    },
    {
      icon: <IconChartBar size={28} className="text-gray-400" />,
      value: "-",
      label: "Market Cap",
    },
    {
      icon: <IconClock size={28} className="text-gray-400" />,
      value: "-",
      label: "24h Volume",
    },
  ]);

  useEffect(() => {
    async function fetchTokenData() {
      try {
        const res = await fetch("https://api.ociswap.com/tokens/scrypto");
        const data = await res.json();
        console.log("Token data:", data);
        // contoh data structure yang diharapkan
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
            value: `$${priceNow.toString().slice(0, 10)}`,
            label: "Current Price",
          },
          {
            icon: <IconTrendingUp size={28} className="text-green-400" />,
            value: `${change24h > 0 ? "+" : ""}${change24h.toFixed(2)}%`,
            label: "24h Change",
          },
          {
            icon: <IconChartBar size={28} className="text-blue-400" />,
            value: `$${(marketCap / 1e6).toFixed(2)}M`,
            label: "Market Cap",
          },
          {
            icon: <IconClock size={28} className="text-orange-400" />,
            value: `$${(volume24h / 1e3).toFixed(2)}K`,
            label: "24h Volume",
          },
        ]);
      } catch (err) {
        console.error("Error fetching token data", err);
      }
    }
    fetchTokenData();
  }, []);

  const barChartData = [60, 40, 80, 75, 30, 70, 50, 95, 65, 45, 85, 100];

  return (
    <section
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
          {/* Pill/Tag di atas judul */}

          <h2 className="text-4xl md:text-5xl font-bold text-pink-500 tracking-wider">
            Track the Pack
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid Kartu Statistik */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-900/40 p-6 rounded-lg border border-purple-400/30 text-center">
              {stat.icon}
              <p className="text-3xl font-bold my-2">{stat.value}</p>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Area Grafik (menggunakan posisi relatif & absolut) */}
        <div className="relative h-[500px] flex justify-center items-center">
          {/* Latar Belakang Grafik Utama (Bar Chart) */}
          {/* <div className="w-full max-w-4xl h-[400px] bg-gray-900/40 border border-gray-700/50 rounded-lg p-8 flex flex-col justify-between">
            <h3 className="font-bold text-xl text-gray-300">
              This years growth
            </h3>
            <div className="w-full h-full flex items-end justify-between gap-4 px-2">
              {barChartData.map((height, index) => (
                <div
                  key={index}
                  className="w-full bg-gradient-to-t from-pink-600 to-purple-500 rounded-t-sm"
                  style={{ height: `${height}%` }}></div>
              ))}
            </div>
          </div> */}

          {/* Kartu "Analytics" (Absolute) */}
          {/* <div
            className="
            absolute bottom-0 left-0 lg:left-24
            w-64 h-48
            bg-gray-900/60 backdrop-blur-sm 
            border border-gray-700/50 rounded-lg p-4
          ">
            <p className="font-semibold text-gray-300 mb-2">Analytics</p>
            {/* Mock Radial Chart */}
          {/*}
            <div className="relative w-24 h-24 mx-auto flex items-center justify-center rounded-full bg-gray-800">
              <div
                className="absolute w-full h-full rounded-full"
                style={{
                  background: "conic-gradient(#e879f9 80%, #374151 0%)",
                }}></div>
              <div className="relative w-[85%] h-[85%] bg-gray-900 rounded-full flex items-center justify-center">
                <span className="font-bold text-xl">80%</span>
              </div>
            </div>
          </div>

          {/* Kartu "KPIs" (Absolute) */}
          {/* <div
            className="
            absolute top-0 right-0 lg:right-24
            w-60
            bg-gray-900/60 backdrop-blur-sm 
            border border-gray-700/50 rounded-lg p-4
          ">
            <p className="text-sm font-semibold text-gray-400">KPIs</p>
            <p className="text-xs text-gray-500">Current HODL</p>
            <div className="flex justify-between items-end mt-1">
              <p className="text-3xl font-bold">$873.4K</p>
              <div className="flex items-center text-xs text-green-400">
                <IconArrowUpRight size={14} />
                <span>15%</span>
              </div>
            </div>
          </div> */}

          {/* Area Grafik Diganti dengan Widget TradingView */}
          <div className="w-full max-w-6xl h-[500px] mx-auto">
            <AdvancedRealTimeChart
              theme="dark"
              symbol="BITGET:BITCOINUSDT"
              width="100%"
              height="100%"
              autosize
              style="1"
              locale="en"
              timezone="Etc/UTC"
              interval="240" // 240 menit = 4 Jam
              allow_symbol_change={true}
              hide_side_toolbar={false}
              details={true}
              studies={["Volume@tv-basicstudies"]} // Menambahkan studi volume
              container_id="tradingview_chart_container"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
