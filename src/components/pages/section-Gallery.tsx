import {
  IconPhoto,
  IconHeart,
  IconMessageCircle,
  IconShare,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import logoHeading from "@/assets/logo-heading.png";
import meme1 from "@/assets/WhatsApp Image 2025-08-31 at 22.34.13 (1).jpeg";
import meme2 from "@/assets/WhatsApp Image 2025-08-31 at 22.34.13.jpeg";
import meme3 from "@/assets/WhatsApp Image 2025-08-31 at 22.34.14 (1).jpeg";
import meme4 from "@/assets/WhatsApp Image 2025-08-31 at 22.34.14 (2).jpeg";
import meme5 from "@/assets/WhatsApp Image 2025-08-31 at 22.34.14.jpeg";
import meme6 from "@/assets/WhatsApp Image 2025-08-31 at 22.34.15 (1).jpeg";

export default function SectionGallerySectionGallery() {
  const memes = [
    {
      number: 1,
      likes: 420,
      comments: 69,
      color: "text-pink-400",
      image: meme1,
    },
    {
      number: 2,
      likes: 1337,
      comments: 420,
      color: "text-pink-400",
      image: meme2,
    },
    {
      number: 3,
      likes: 888,
      comments: 123,
      image: meme3,
    },
    {
      number: 4,
      likes: 666,
      comments: 88,
      image: meme4,
    },
    {
      number: 5,
      likes: 990,
      comments: 200,
      image: meme5,
    },
    {
      number: 6,
      likes: 555,
      comments: 77,
      image: meme6,
    },
  ];

  return (
    <motion.section
      id="gallery"
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
      sm:pb-20
      overflow-x-hidden
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
        text-xl
        font-light
        tracking-wider
        mb-6
      ">
        <img src={logoHeading} alt="Logo heading" className="w-4 h-4 mx-auto" />
        Pack Memes
      </motion.div>
      <div className="text-center mb-6">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-pink-500 tracking-wider">
          Pack Memes Unleashed
        </motion.h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-2xl text-gray-300 flex items-center justify-center gap-2">
          Community fire that hits different
        </motion.p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Grid untuk Kartu Meme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-purple-400">
          {memes.map((meme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="
                bg-gray-900/40 rounded-lg border border-purple-400
                flex flex-col overflow-hidden group
              ">
              {/* Area Gambar Meme */}
              <div className="flex-grow h-64 bg-black/20">
                <img
                  src={meme.image}
                  alt={`Meme #${meme.number}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Footer Kartu */}
              <div
                className="
                bg-black p-4 flex justify-between items-center text-sm
              ">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-pink-400">
                    <IconHeart size={18} />
                    <span>{meme.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-cyan-400">
                    <IconMessageCircle size={18} />
                    <span>{meme.comments}</span>
                  </div>
                </div>
                <button className="text-purple-400 hover:text-white transition-colors">
                  <IconShare size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Kartu "Drop Your Fire" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="
            bg-gray-900/40 rounded-lg border border-purple-400
            flex flex-col items-center justify-center text-center p-8 gap-4
            sm:col-span-2 lg:col-span-1
          ">
          <IconPhoto size={48} className="text-pink-400" />
          <h3 className="text-2xl font-bold text-pink-400">Drop Your Fire!</h3>
          <p className="text-gray-400">
            Epic SCRYPTO memes? The pack wants them!
          </p>
          <a href="#" className="text-cyan-400 font-semibold hover:underline">
            Telegram = meme heaven
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
