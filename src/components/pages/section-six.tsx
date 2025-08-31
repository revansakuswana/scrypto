import { IconTrendingUp } from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function SectionSix() {
  return (
    <motion.section
      id="buy-now"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
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
        text-xs
        font-light
        tracking-wider
        mb-6
      ">
        <img src="/logo-heading.png" alt="Logo" className="w-4 h-4 mx-auto" />
        SCRYPTO NFTS
      </motion.div>
      <div className="text-center mb-6">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-pink-500 tracking-wider">
          SCRYPTO NFTS
        </motion.h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-lg text-gray-300 flex items-center justify-center gap-2">
          2000 cyber huskies, hold them to get $SCRYPTO airdrops and join the
          cyber pack
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col gap-8">
        {/* Tombol "Buy Now" */}
        <a
          href="https://singularityx.net/nfts"
          target="_blank"
          rel="noopener noreferrer">
          <button className="flex items-center gap-2 px-6 py-5 rounded-lg font-bold text-black bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition-opacity">
            <IconTrendingUp size={20} />
            <span>BUY NOW</span>
          </button>
        </a>
      </motion.div>
    </motion.section>
  );
}
