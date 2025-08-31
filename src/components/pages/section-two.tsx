import { motion } from "framer-motion";
import {
  IconBolt,
  IconUsers,
  IconShieldLock,
  IconRocket,
} from "@tabler/icons-react";

import WolfImage from "../../../public/logo-header.png";

export default function SectionTwo() {
  const features = [
    {
      icon: <IconBolt size={42} className="text-purple-400" />,
      title: "Lightning Fast",
      description: "Built on Radix",
      color: "text-purple-400",
    },
    {
      icon: <IconUsers size={42} className="text-blue-400" />,
      title: "Community Driven",
      description: "From community, to the community",
      color: "text-blue-400",
    },
    {
      icon: <IconShieldLock size={42} className="text-pink-400" />,
      title: "Anti-Rug",
      description: "Loyalty guaranteed",
      color: "text-pink-400",
    },
    {
      icon: <IconRocket size={42} className="text-purple-400" />,
      title: "To The Moon",
      description: "Woof woof!",
      color: "text-purple-400",
    },
  ];

  return (
    <motion.section
      id="about"
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
        text-xs
        font-light
        tracking-wider
        mb-6
      ">
        <img src="/logo-heading.png" alt="Logo" className="w-4 h-4 mx-auto" />
        $SCRYPTO on Radix
      </div>
      <div className="text-center mb-12">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-pink-500 tracking-wider">
          Cyber Pack Unleashed
        </motion.h2>
        {/* Aksen garis bawah */}
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Konten Utama (Grid 2 Kolom) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Kolom Kiri: Teks & Features */}
        <div className="flex flex-col gap-8 text-left">
          <p className="text-lg  text-gray-400  leading-relaxed">
            Inspired by the futuristic and loyal vibe of a cyber- enhanced
            husky, Scrypto is a wild, community-driven meme coin that embodies
            strength, adaptability, and innovation within the Radix ecosystem.
          </p>

          {/* Grid untuk Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`
                    bg-transparent
                    border
                    rounded-lg
                    shadow-2xl
                    flex flex-col
                    gap-3
                    p-6
                    ${feature.color}
                  `}>
                {feature.icon}
                <h3 className={`font-bold text-xl ${feature.color}`}>
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
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
            src={WolfImage}
            alt="Cyber Wolf"
            className="w-full max-w-sm md:max-w-md"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
