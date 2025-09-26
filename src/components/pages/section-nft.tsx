import { IconTrendingUp } from "@tabler/icons-react";
import { motion } from "framer-motion";
import logoHeading from "@/assets/logo-heading.svg";
import nft1 from "@/assets/51.png";
import nft2 from "@/assets/145.png";
import nft3 from "@/assets/184.png";
import nft4 from "@/assets/627.png";

export default function SectionNft() {
  return (
    <motion.section
      id="nft"
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
        <img src={logoHeading} alt="Logo heading" className="w-4 h-4 mx-auto" />
        NFTS
      </motion.div>
      <div className="text-center mb-6">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-pink-500 tracking-wider">
          SCRYPTO NFTS and Game
        </motion.h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-lg text-gray-300 flex items-center justify-center gap-2">
          Total and max mint: 2,000 Cyber Huskies. Hold them to earn SCRYPTO
          rewards and join the Cyber Pack ecosystem, with SCRYPTO serving as the
          utility token. An NFT battle web app game is in development, featuring
          Play-to-Earn and Player-vs-Player gameplay, also utilizing SCRYPTO as
          the in-game utility token.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
        <img
          src={nft1}
          alt="NFT 1"
          className="w-full object-cover rounded-lg"
        />
        <img
          src={nft2}
          alt="NFT 2"
          className="w-full object-cover rounded-lg"
        />
        <img
          src={nft3}
          alt="NFT 3"
          className="w-full object-cover rounded-lg"
        />
        <img
          src={nft4}
          alt="NFT 4"
          className="w-full object-cover rounded-lg"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col gap-8">
        {/* Tombol "Buy Now" */}
        <a
          href="https://singularityx.net/nfts#scrypto"
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
