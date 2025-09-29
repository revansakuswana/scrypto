import { motion } from "framer-motion";
import logoHeading from "@/assets/logo-heading.png";
import astrlImg from "@/assets/WhatsApp Image 2025-08-31 at 22.43.12 (1).jpeg";
import ociImg from "@/assets/WhatsApp Image 2025-08-31 at 22.43.12.jpeg";
import caviarImg from "@/assets/WhatsApp Image 2025-08-31 at 22.43.13 (1).jpeg";
import defiImg from "@/assets/WhatsApp Image 2025-08-31 at 22.43.13.jpeg";
import pumpfunImg from "@/assets/Pump-Fun-Logo.png";

export default function SectionDexs() {
  const dexs = [
    {
      href: "https://astrl.trade",
      img: astrlImg,
      alt: "Astrl Trade",
      label: "astrl.trade",
    },
    {
      href: "https://ociswap.com/resource_rdx1tkff46jkeu98jgl8naxpzfkn0m0hytysxzex3l3a8m7qps49f7m45c",
      img: ociImg,
      alt: "Ociswap",
      label: "ociswap.com",
    },
    {
      href: "https://www.caviarnine.com/tokens/resource_rdx1tkff46jkeu98jgl8naxpzfkn0m0hytysxzex3l3a8m7qps49f7m45c",
      img: caviarImg,
      alt: "Caviarnine",
      label: "caviarnine.com",
    },
    {
      href: "https://radix.defiplaza.net/token/resource_rdx1tkff46jkeu98jgl8naxpzfkn0m0hytysxzex3l3a8m7qps49f7m45c",
      img: defiImg,
      alt: "Defiplaza",
      label: "defiplaza.net",
    },
    {
      href: "https://pump.fun/coin/2NJiEJceNSE5VJ2NLeRpWpCkvHXj2Z82TDoHREYtMrWw",
      img: pumpfunImg,
      alt: "Pumpfun",
      label: "Pump.Fun",
    },
  ];

  return (
    <motion.section
      id="dexs"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="
      w-full
      max-w-screen-xl
      mx-auto
      flex
      flex-col
      items-center
      justify-center
      text-center
      text-white
      pt-20
      px-5
      sm:px-10
      lg:px-20
      sm:pb-20
      overflow-x-hidden
    ">
      {/* Judul Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
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
        text-xl
        font-light
        tracking-wider
        mb-6
      ">
        <img src={logoHeading} alt="Logo heading" className="w-4 h-4 mx-auto" />
        DEXs
      </motion.div>
      <div className="text-center mb-6">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-pink-500 tracking-wider">
          DEXs
        </motion.h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-2xl text-gray-300 flex items-center justify-center gap-2">
        SCRYPTO available on:
      </motion.p>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-5 mt-10">
        {dexs.map((dex, index) => (
          <a
            key={index}
            href={dex.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity">
            <img
              src={dex.img}
              alt={dex.alt}
              className="w-40 h-40 object-contain rounded-full"
            />
            <span className="text-sm">{dex.label}</span>
          </a>
        ))}
      </div>
    </motion.section>
  );
}
