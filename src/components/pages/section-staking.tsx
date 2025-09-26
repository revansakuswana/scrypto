import { motion } from "framer-motion";
import logoHeading from "@/assets/logo-heading.svg";

export default function SectionStaking() {
  return (
    <motion.section
      id="staking"
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
        Staking
      </motion.div>
      <div className="text-center mb-6">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-pink-500 tracking-wider">
          SCRYPTO Staking
        </motion.h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-lg text-gray-300 flex items-center justify-center gap-2">
          Stake SCRYPTO to earn your share of 250,000 SCRYPTO rewards,
          distributed weekly to stakers.
        </motion.p>
        <div className="mt-10">
          <iframe
            title="staking-widget"
            src="https://radix.defiplaza.net/widget/staking/resource_rdx1tkff46jkeu98jgl8naxpzfkn0m0hytysxzex3l3a8m7qps49f7m45c?theme=defiplaza"
            width="100%"
            scrolling="no"
            height="1000px"
          />
        </div>
      </div>
    </motion.section>
  );
}
