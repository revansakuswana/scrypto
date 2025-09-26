import { motion } from "framer-motion";
import logoHeading from "@/assets/logo-heading.png";
import astrlImg from "@/assets/WhatsApp Image 2025-08-31 at 22.43.12 (1).jpeg";
import ociImg from "@/assets/WhatsApp Image 2025-08-31 at 22.43.12.jpeg";
import caviarImg from "@/assets/WhatsApp Image 2025-08-31 at 22.43.13 (1).jpeg";
import defiImg from "@/assets/WhatsApp Image 2025-08-31 at 22.43.13.jpeg";

export default function SectionDexs() {
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

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-10">
        <a
          href="https://astrl.trade"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity">
          <img
            src={astrlImg}
            alt="Astrl Trade"
            className="w-40 h-40 object-contain rounded-full"
          />
          <span className="text-sm">astrl.trade</span>
        </a>
        <a
          href="https://ociswap.com/resource_rdx1tkff46jkeu98jgl8naxpzfkn0m0hytysxzex3l3a8m7qps49f7m45c"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity">
          <img
            src={ociImg}
            alt="Ociswap"
            className="w-40 h-40 object-contain rounded-full"
          />
          <span className="text-sm">ociswap.com</span>
        </a>
        <a
          href="https://www.caviarnine.com/tokens/resource_rdx1tkff46jkeu98jgl8naxpzfkn0m0hytysxzex3l3a8m7qps49f7m45c"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity">
          <img
            src={caviarImg}
            alt="Caviarnine"
            className="w-40 h-40 object-contain rounded-full"
          />
          <span className="text-sm">caviarnine.com</span>
        </a>
        <a
          href="https://radix.defiplaza.net/token/resource_rdx1tkff46jkeu98jgl8naxpzfkn0m0hytysxzex3l3a8m7qps49f7m45c"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity">
          <img
            src={defiImg}
            alt="Defiplaza"
            className="w-40 h-40 object-contain rounded-full"
          />
          <span className="text-sm">defiplaza.net</span>
        </a>
      </div>
    </motion.section>
  );
}
