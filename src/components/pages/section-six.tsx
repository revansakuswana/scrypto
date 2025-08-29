import { IconEye, IconUsers, IconBolt } from "@tabler/icons-react";

import WolfImage from "../../../public/logo-header.png";

export default function SectionSix() {
  return (
    <section
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
      {/* Judul Section */}
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
        Pack Vision
      </div>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-500 uppercase tracking-wider">
          Pack Vision Unleashed
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Konten Utama (Grid 2 Kolom) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
        {/* Kolom Kiri: Vision, Mission & Kartu Kecil */}
        <div className="flex flex-col gap-6">
          {/* Kartu Vision */}
          <div
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
                Leading the{" "}
                <span className="font-bold text-pink-400">meme revolution</span>{" "}
                with
                <span className="font-bold text-cyan-400">
                  {" "}
                  cyber loyalty
                </span>{" "}
                on Radix.
              </p>
            </div>
          </div>

          {/* Kartu Mission */}
          <div
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
                Building the{" "}
                <span className="font-bold text-cyan-400">strongest pack</span>{" "}
                with
                <span className="font-bold text-pink-400">
                  {" "}
                  zero rug energy
                </span>
                . Pure{" "}
                <span className="font-bold text-purple-400">
                  moon vibes
                </span>{" "}
                and loyal community power.
              </p>
            </div>
          </div>

          {/* Grid untuk Kartu Kecil di Bawah */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Kartu Anti-Rug */}
            <div
              className="
                bg-gray-900/40 p-6 rounded-lg border border-pink-400
                flex flex-col items-center text-center gap-3
              ">
              <IconUsers size={32} className="text-pink-400" />
              <h4 className="text-xl font-bold">Community Driven</h4>
              <p className="text-gray-400">From community, to the community</p>
            </div>
            {/* Kartu Innovation */}
            <div
              className="
                bg-gray-900/40 p-6 rounded-lg border border-purple-400
                flex flex-col items-center text-center gap-3
              ">
              <IconBolt size={32} className="text-purple-400" />
              <h4 className="text-xl font-bold">Innovation</h4>
              <p className="text-gray-400">Radix Technology</p>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Gambar dengan Tag */}
        <div className="flex justify-center items-center relative">
          <img
            src={WolfImage}
            alt="Cyber Wolf Vision"
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}
