import { motion } from "framer-motion";

export default function SectionFive() {
  return (
    <motion.section
      id="dexs"
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
      {/* <motion.div
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
      </motion.div> */}
      <div className="text-center mb-6">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-pink-500 tracking-wider">
          DEXs
        </motion.h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-lg text-gray-300 flex items-center justify-center gap-2">
          SCRYPTO available on:
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-10">
          <a
            href="https://astrl.trade"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity">
            <img
              src="/WhatsApp Image 2025-08-31 at 22.43.12 (1).jpeg"
              alt="Ociswap"
              className="w-40 h-40 object-contain rounded-full"
            />
            <span className="text-sm">astrl.trade</span>
          </a>
          <a
            href="https://ociswap.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity">
            <img
              src="/WhatsApp Image 2025-08-31 at 22.43.12.jpeg"
              alt="Astrl Trade"
              className="w-40 h-40 object-contain rounded-full"
            />
            <span className="text-sm">ociswap.com</span>
          </a>
          <a
            href="https://caviarnine.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity">
            <img
              src="/WhatsApp Image 2025-08-31 at 22.43.13 (1).jpeg"
              alt="Defiplaza"
              className="w-40 h-40 object-contain rounded-full"
            />
            <span className="text-sm">caviarnine.com</span>
          </a>
          <a
            href="https://defiplaza.net"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity">
            <img
              src="/WhatsApp Image 2025-08-31 at 22.43.13.jpeg"
              alt="Caviarnine"
              className="w-40 h-40 object-contain rounded-full"
            />
            <span className="text-sm">defiplaza.net</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
