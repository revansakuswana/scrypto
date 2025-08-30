import { useEffect, useState } from "react";
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
          <h2 className="text-4xl md:text-5xl font-bold text-pink-500 tracking-wider">
            Track the Pack
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid Kartu Statistik */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 w-full max-w-6xl mx-auto px-4 overflow-hidden break-words">
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
        <div className="relative h-[500px] flex justify-center items-center">
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
              interval="240"
              allow_symbol_change={true}
              hide_side_toolbar={false}
              details={true}
              studies={["Volume@tv-basicstudies"]}
              container_id="tradingview_chart_container"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
