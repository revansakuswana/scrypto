import { motion } from "framer-motion";
import logoHeading from "@/assets/logo-heading.png";
import logoWolf from "@/assets/logo-wolf.png";

export default function SectionAbout() {
  return (
    <motion.section
      id="about"
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
      py-20
      px-5
      sm:px-10
      lg:px-20
    ">
      {/* Pill/Tag di atas judul */}
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
        text-xl
        font-light
        tracking-wider
        mb-6
      ">
        <img src={logoHeading} alt="Logo heading" className="w-4 h-4 mx-auto" />
        About
      </div>

      <div className="text-center mb-6">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-pink-500 tracking-wider">
          About SCRYPTO
        </motion.h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Konten Utama (Grid 2 Kolom) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Kolom Kiri: Teks */}
        <div className="flex flex-col gap-6 mt-4 text-left">
          <div className="bg-transparent border rounded-lg shadow-2xl p-6">
            <p className="text-2xl text-gray-400 leading-relaxed">
              Scrypto was launched on Rly.Fun, a fair launchpad for new coins
              without presales on Radix, in August 2025. It quickly reached a
              bonding curve market cap of 690k XRD. The liquidity raised was
              deposited into an Ociswap pool, one of the leading DEXs on Radix,
              and permanently locked. Additionally, Scrypto was the first token
              in the Radix ecosystem to create and lock liquidity pools on
              CaviarNine, another leading DEX on Radix, following the Hyperlane
              integration in September 2025. Initial pools include hUSDC, hUSDT,
              hWBTC, and hETH, with plans to add more major asset-class LPs.
            </p>
          </div>
          <div className="bg-transparent border rounded-lg shadow-2xl p-6">
            <p className="text-2xl text-gray-400 leading-relaxed">
              Inspired by the futuristic and loyal vibe of a cyber-enhanced
              husky, Scrypto is a wild, community-driven meme coin that embodies
              strength, adaptability, and innovation within the Radix ecosystem.
            </p>
          </div>
          <div className="bg-transparent border rounded-lg shadow-2xl p-6">
            <p className="text-2xl text-gray-400 leading-relaxed">
              Scrypto is more than just a meme coin — it celebrates and pays
              homage to Radix and its open-source smart contract language,
              Scrypto. It empowers developers to build and deploy their most
              creative ideas quickly and securely on Radix.
            </p>
          </div>
        </div>

        {/* Kolom Kanan: Gambar */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center">
          <img
            src={logoWolf}
            alt="Logo wolf"
            className="w-full max-w-sm md:max-w-md"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
