import { IconEye, IconUsers } from "@tabler/icons-react";
import { motion } from "framer-motion";
import logoHeading from "@/assets/logo-heading.png";
import logoWolf from "@/assets/logo-header.png";

export default function SectionVision() {
  const visionCards = [
    {
      title: "Vision",
      description:
        "SCRYPTO is more than just a meme coin — it was created to celebrate and bring awareness to Radix and its open-source smart contract language, Scrypto.",
      icon: <IconEye size={28} className="text-purple-400" />,
      iconBg: "bg-purple-500/20",
      border: "border-purple-400",
      delay: 0.3,
      direction: -50,
    },
    {
      title: "Mission",
      description:
        "Longevity & Trust — Inspired by real technology and backed by locked liquidity & supply, SCRYPTO was created for the Radix & Solana communities to enjoy safely and securely.",
      icon: <IconUsers size={28} className="text-cyan-400" />,
      iconBg: "bg-cyan-500/20",
      border: "border-cyan-400",
      delay: 0.3,
      direction: 50,
    },
    {
      title: "Community Driven",
      description: "Built by meme lovers, for meme lovers.",
      icon: <IconUsers size={32} className="text-pink-400" />,
      iconBg: "bg-pink-400/20",
      border: "border-pink-400",
      delay: 0,
      direction: 0,
    },
  ];

  return (
    <motion.section
      id="vision"
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
        Pack Vision
      </motion.div>

      <div className="text-center mb-6">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-pink-500 tracking-wider">
          Pack Vision Unleashed
        </motion.h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Konten Utama (Grid 2 Kolom) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
        {/* Kolom Kiri: Vision, Mission & Kartu Kecil */}
        <div className="flex flex-col gap-6 text-2xl">
          {visionCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: card.direction,
                y: card.direction === 0 ? 30 : 0,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: card.delay }}
              className={`bg-gray-900/40 p-6 rounded-lg border ${card.border} flex gap-6 items-start`}>
              <div className={`${card.iconBg} p-3 rounded-full`}>
                {card.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
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
