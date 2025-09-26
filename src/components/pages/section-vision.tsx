import { IconEye, IconUsers } from "@tabler/icons-react";
import { motion } from "framer-motion";
import logoHeading from "@/assets/logo-heading.svg";
import logoWolf from "@/assets/logo-wolf.svg";

export default function SectionVision() {
  return (
    <motion.section
      id="vision"
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
      py-20
      px-5
      sm:px-35
      sm:py-30
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
        text-xs
        font-light
        tracking-wider
        mb-6
      ">
        <img src={logoHeading} alt="Logo heading" className="w-4 h-4 mx-auto" />
        Pack Vision
      </motion.div>
      <div className="text-center mb-16">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-pink-500 tracking-wider">
          Pack Vision Unleashed
        </motion.h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Konten Utama (Grid 2 Kolom) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
        {/* Kolom Kiri: Vision, Mission & Kartu Kecil */}
        <div className="flex flex-col gap-6">
          {/* Kartu Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="
              bg-gray-900/40 p-6 rounded-lg border border-purple-400
              flex gap-6 items-start
            ">
            <div className="bg-purple-500/20 p-3 rounded-full">
              <IconEye size={28} className="text-purple-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                Scrypto is more than just a meme coin — it was created to
                celebrate and bring awareness to Radix and its open-source smart
                contract language, Scrypto.
              </p>
            </div>
          </motion.div>

          {/* Kartu Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="
              bg-gray-900/40 p-6 rounded-lg border border-cyan-400
              flex gap-6 items-start
            ">
            <div className="bg-cyan-500/20 p-3 rounded-full">
              <IconUsers size={28} className="text-cyan-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                Longevity & Trust — Inspired by real technology and backed by
                locked liquidity, Scrypto is created for the Radix community to
                enjoy safely and securely.
              </p>
            </div>
          </motion.div>

          {/* Kartu Community Driven */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="
                bg-gray-900/40 p-6 rounded-lg border border-pink-400
                flex gap-6 items-start
              ">
            <div className="bg-pink-400/20 p-3 rounded-full">
              <IconUsers size={32} className="text-pink-400" />
            </div>
            <div>
              <h4 className="text-xl font-bold">Community Driven</h4>
              <p className="text-gray-400">
                Built by meme lovers, for meme lovers.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Kolom Kanan: Gambar dengan Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center relative">
          <img src={logoWolf} alt="Logo wolf" className="w-full max-w-sm" />
        </motion.div>
      </div>
    </motion.section>
  );
}
