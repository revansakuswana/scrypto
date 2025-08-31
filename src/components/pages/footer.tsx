import {
  IconBrandTelegram,
  IconBrandTwitter,
  IconArrowsExchange,
} from "@tabler/icons-react";

import WolfLogo from "../../../public/logo-header.png";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    {
      name: "Telegram",
      icon: <IconBrandTelegram size={20} />,
      url: "https://t.me/scryptoxrd",
    },
    {
      name: "Twitter",
      icon: <IconBrandTwitter size={20} />,
      url: "https://x.com/Scrypto_Radix",
    },
    {
      name: "DEX",
      icon: <IconArrowsExchange size={20} />,
      url: "#",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[#131117] text-gray-400 px-5 sm:px-10 lg:px-35 pb-4 sm:pb-5 py-20"
    >
      <div className="container mx-auto justify-between">
        {/* Konten Atas (3 Kolom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left">
          {/* Kolom 1: Logo & Deskripsi */}
          <div className="flex flex-col items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <img src={WolfLogo} alt="Logo" className="w-12 h-12" />
              <h3 className="font-bold text-lg text-pink-400">
                Cyber Pack Energy
              </h3>
            </motion.div>
            <p className="text-sm max-w-xs">
              Cyber Husky vibes unleashed on Radix. Pack loyalty meets moon
              missions.
            </p>
          </div>

          {/* Kolom 2: Join the Movement */}
          <div className="text-center">
            <motion.h3
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-bold text-lg text-white mb-4"
            >
              Join the Movement
            </motion.h3>
            <div className="flex justify-between text-center px-16 mx-10 sm:mx-0">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center hover:text-cyan-400 transition-colors"
                >
                  {link.icon}
                  <span className="text-xs font-semibold">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Garis Pemisah */}
        <hr className="border-t border-gray-700/50 my-5" />

        {/* Konten Bawah (Copyright & Powered by) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-between items-center text-sm"
        >
          <p>&copy; {new Date().getFullYear()} $SCRYPTO</p>
          <p className="mt-2 sm:mt-0">
            Powered by{" "}
            <a href="#" className="font-bold text-cyan-400 hover:underline">
              Radix
            </a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
