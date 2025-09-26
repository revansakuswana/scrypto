import { motion } from "framer-motion";
import { IconEye } from "@tabler/icons-react";
import WolfImage from "../../assets/logo-wolf.svg";

export default function SectionTokenomics() {
  return (
    <motion.section
      id="tokenomics"
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
      <div className="text-center mb-12">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-pink-500  tracking-wider mb-4">
          Tokenomics
        </motion.h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full "></div>
      </div>

      {/* Konten Utama (Grid 2 Kolom) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Kolom Kiri: Langkah-langkah */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4 text-left text-gray-300">
          <table className="w-full text-gray-300 text-sm border-separate border-spacing-y-2">
            <tbody>
              <tr>
                <td className="font-semibold text-white pr-4">
                  Token Max Supply:
                </td>
                <td>1B</td>
              </tr>
              <tr>
                <td className="font-semibold text-white pr-4">Total Minted:</td>
                <td>1B</td>
              </tr>
              <tr>
                <td className="font-semibold text-white pr-4">Tax:</td>
                <td>0%</td>
              </tr>
              <tr>
                <td className="font-semibold text-white pr-4">Chain:</td>
                <td>
                  Launched on <span className="text-pink-400">Rly.Fun</span>, a
                  fair launchpad on Radix
                </td>
              </tr>
              <tr>
                <td className="font-semibold text-white pr-4">
                  Safe Contract:
                </td>
                <td>Not mintable, recallable, freezable</td>
              </tr>
              <tr>
                <td className="font-semibold text-white pr-4">
                  Scrypto Utility:
                </td>
                <td>
                  The Scrypto token powers rewards, staking, liquidity pools,
                  events, and a growing ecosystem of dApps.
                </td>
              </tr>
              <tr>
                <td className="font-semibold text-white pr-4">
                  Resource Address:
                </td>
                <td className="break-all text-pink-400">
                  resource_rdx1tkff46jkeu98jgl8naxpzfkn0m0hytysxzex3l3a8m7qps49f7m45c
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex gap-2 mt-6">
            <motion.a
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              href="https://www.radxplorer.com/resources/resource_rdx1tkff46jkeu98jgl8naxpzfkn0m0hytysxzex3l3a8m7qps49f7m45c"
              target="_blank"
              rel="noopener noreferrer">
              <button
                className="
          flex items-center gap-2
          px-4 py-4
          rounded-lg 
          font-bold 
          bg-gradient-to-r from-pink-500 to-red-600 
          hover:opacity-90 transition-opacity
        ">
                <IconEye size={20} />
                <span>VIEW SCRYPTO</span>
              </button>
            </motion.a>
          </div>
        </motion.div>

        {/* Kolom Kanan: Gambar */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center">
          <img src={WolfImage} alt="Cyber Wolf" className="w-full max-w-sm" />
        </motion.div>
      </div>
    </motion.section>
  );
}
