import React from "react";

import {
  IconWallet,
  IconBolt,
  IconExternalLink,
  IconArrowRight,
} from "@tabler/icons-react";

import WolfImage from "../../../public/logo-wolf.png";

export default function SectionThree() {
  const steps = [
    {
      step: 1,
      title: "Connect Wallet",
      description: "XIDAR or Radix Wallet - link up!",
      icon: <IconWallet size={36} className="text-purple-400" />,
      color: "text-purple-400",
      borderColor: "border-purple-400",
    },
    {
      step: 2,
      title: "Swap & Unleash",
      description: "$XRD -> $SCRYPTO via DEX. Easy!",
      icon: <IconBolt size={36} className="text-blue-400" />,
      color: "text-blue-400",
      borderColor: "border-blue-400",
    },
    {
      step: 3,
      title: "HODL & Enjoy",
      description: "Welcome to the pack! Time to go to the moon!",
      icon: <IconExternalLink size={36} className="text-pink-400" />,
      color: "text-pink-400",
      borderColor: "border-pink-400",
    },
  ];

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
      py-30
      px-35
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
        GRAB IT NOW!
      </div>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-500 uppercase tracking-wider mb-4">
          Grab Your $SCRYPTO
        </h2>
        <p className="text-lg text-gray-300">
          Join the cyber pack, unleash the moon vibes.
        </p>
      </div>

      {/* Konten Utama (Grid 2 Kolom) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Kolom Kiri: Langkah-langkah */}
        <div className="flex flex-col gap-4">
          <iframe
            src="https://astrolescent.com/widget?to=resource_rdx1tkff46jkeu98jgl8naxpzfkn0m0hytysxzex3l3a8m7qps49f7m45c&amount=100"
            width="467px"
            height="535px"
            className="mx-auto rounded-xl"></iframe>
        </div>

        {/* Kolom Kanan: Gambar */}
        <div className="flex justify-center items-center">
          <img src={WolfImage} alt="Cyber Wolf" className="w-full max-w-sm" />
        </div>
      </div>
    </section>
  );
}
