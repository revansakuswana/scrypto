import { motion } from "framer-motion";
import { IconEye } from "@tabler/icons-react";
import logoHeading from "@/assets/logo-heading.png";
import WolfImage from "../../assets/file_000000006cf461faa80dd5ae9b11b738.png";

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
        text-xl
        font-light
        tracking-wider
        mb-6
      ">
        <img src={logoHeading} alt="Logo heading" className="w-4 h-4 mx-auto" />
        Tokenomics
      </div>
      <div className="text-center mb-6">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-pink-500  tracking-wider mb-4">
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
          <div className="overflow-x-auto">
            <table className="w-full text-gray-300 text-2xl border-separate border-spacing-y-2">
              <tbody>
                <tr>
                  <td className="font-semibold text-white pr-4">
                    Token Max Supply:
                  </td>
                  <td>1B on Radix and 1B on Solana</td>
                </tr>
                <tr>
                  <td className="font-semibold text-white pr-4">
                    Total Minted:
                  </td>
                  <td>1B on Radix and 1B on Solana</td>
                </tr>
                <tr>
                  <td className="font-semibold text-white pr-4">Tax:</td>
                  <td>0%</td>
                </tr>
                <tr>
                  <td className="font-semibold text-white pr-4">
                    Locked Supply:
                  </td>
                  <td>
                    Solana: 79.22% ,{" "}
                    <a
                      href="https://app.streamflow.finance/project-dashboard/solana/mainnet/2NJiEJceNSE5VJ2NLeRpWpCkvHXj2Z82TDoHREYtMrWw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 font-bold hover:underline">
                      Streamflow Vault
                    </a>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold text-white pr-4">
                    Locked Supply:
                  </td>
                  <td>
                    <td>
                      Radix: 38.5%,{" "}
                      <a
                        href="https://app.radlock.io/insights/projects/FungibleResource/resource_rdx1tkff46jkeu98jgl8naxpzfkn0m0hytysxzex3l3a8m7qps49f7m45c"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-400 font-bold hover:underline">
                        Radlock
                      </a>{" "}
                      – 285M for SCRYPTO (Radix) Staking & NFT Rewards (28.5%),
                      100M Creator bought via open market (10%)
                    </td>
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold text-white pr-4">Chain:</td>
                  <td>
                    Launched on{" "}
                    <a
                      href="https://rly.fun/SCRYPTO"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 font-bold hover:underline">
                      Rly.Fun
                    </a>
                    , a fair launchpad on Radix &{" "}
                    <a
                      href="https://pump.fun/coin/2NJiEJceNSE5VJ2NLeRpWpCkvHXj2Z82TDoHREYtMrWw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400
                      font-bold hover:underline">
                      Pump.Fun
                    </a>
                    , a fair launchpad on Solana.
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
                    The SCRYPTO (Radix) token powers rewards, staking, liquidity
                    pools, events, and a growing ecosystem of dApps.
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold text-white pr-4">
                    Radix Resource Address
                  </td>
                  <td className="break-all text-pink-400">
                    resource_rdx1tkff46jkeu98jgl8naxpzfkn0m0hytysxzex3l3a8m7qps49f7m45c
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold text-white pr-4">
                    Solana Contract Address
                  </td>
                  <td className="break-all text-pink-400">
                    2NJiEJceNSE5VJ2NLeRpWpCkvHXj2Z82TDoHREYtMrWw
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
                <span>VIEW SCRYPTO (Radix)</span>
              </button>
            </motion.a>
            <motion.a
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              href="https://solscan.io/token/2NJiEJceNSE5VJ2NLeRpWpCkvHXj2Z82TDoHREYtMrWw"
              target="_blank"
              rel="noopener noreferrer">
              <button
                className="
          flex items-center gap-2
          px-4 py-4
          rounded-lg 
          font-bold 
          bg-gradient-to-r from-red-600 to-pink-500 
          hover:opacity-90 transition-opacity
        ">
                <IconEye size={20} />
                <span>VIEW SCRYPTO (Solana)</span>
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
