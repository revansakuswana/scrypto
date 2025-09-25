import {
  IconTrendingUp,
  IconMessageCircle,
  IconCopy,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function SectionOne() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="
      w-full 
      flex 
      flex-col
      items-center
      justify-center
      text-center
      text-white
      pt-30
      px-5
      sm:pt-50
      sm:px-35
      sm:pb-30
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
        SCRYPTO on Radix
      </div>

      {/* Gambar utama berbentuk lingkaran di tengah */}
      <motion.img
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        src="/logo-home.jpeg"
        alt="Main Logo"
        className="w-80 h-80 rounded-full mx-auto mb-6"
      />

      {/* Teks deskripsi kecil */}
      <p
        className="
        text-lg 
        text-gray-400   // Warna teks abu-abu
        mb-6            // Margin bawah besar sebelum tombol
      ">
        Scrypto: The Cyber Husky Meme Coin unleashed on Radix!
      </p>

      {/* Grup Tombol */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="
        flex 
        flex-col sm:flex-row
        text-black
        font-light
        text-sm
        items-center 
        gap-6
      ">
        {/* Tombol "Buy Now" */}
        <motion.a
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          href="https://ociswap.com/resource_rdx1tkff46jkeu98jgl8naxpzfkn0m0hytysxzex3l3a8m7qps49f7m45c">
          <button
            className="
          flex items-center gap-2 
          px-6 py-5 
          rounded-lg 
          font-bold 
          bg-gradient-to-r from-pink-500 to-purple-600 
          hover:opacity-90 transition-opacity
        ">
            <IconTrendingUp size={20} />
            <span>BUY NOW</span>
          </button>
        </motion.a>

        {/* Tombol "X Account" */}
        <motion.a
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          href="https://x.com/Scrypto_Radix"
          target="_blank"
          rel="noopener noreferrer">
          <button
            className="
            flex items-center gap-2 
            px-6 py-5 
            rounded-lg 
            font-bold 
            bg-gradient-to-r from-blue-500 to-purple-600 
            hover:opacity-90 transition-opacity
          ">
            <span>𝕏</span>
            <span>FOLLOW US</span>
          </button>
        </motion.a>

        {/* Tombol "Join Telegram" */}
        <motion.a
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          href="https://t.me/scryptoxrd"
          target="_blank"
          rel="noopener noreferrer">
          <button
            className="
            flex items-center gap-2 
            px-6 py-5 
            rounded-lg 
            font-bold 
            bg-gradient-to-r from-blue-500 to-cyan-500 
            hover:opacity-90 transition-opacity
          ">
            <IconMessageCircle size={20} />
            <span>JOIN TELEGRAM</span>
          </button>
        </motion.a>

        {/* Tombol "Copy Contract" */}
        <motion.button
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          onClick={() => {
            navigator.clipboard.writeText(
              "resource_rdx1tkff46jkeu98jgl8naxpzfkn0m0hytysxzex3l3a8m7qps49f7m45c"
            );
            toast.success("Contract address has been copied to clipboard!");
          }}
          className="
          flex items-center gap-2 
          font-semibold 
          text-purple-400
          hover:text-white transition-colors
        ">
          <IconCopy size={20} />
          <span>COPY CONTRACT</span>
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
