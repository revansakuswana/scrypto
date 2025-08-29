import {
  IconTrendingUp,
  IconMessageCircle,
  IconExternalLink,
} from "@tabler/icons-react";

export default function SectionOne() {
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
      pt-50
      pb-30
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
        $SCRYPTO on Radix
      </div>

      {/* Judul utama */}
      <h1
        className="
        text-5xl md:text-7xl
        font-bold
        uppercase
        tracking-widest
        text-pink-500
        mb-6
      ">
        Bark to the
        <br />
        Moon
      </h1>

      {/* Subjudul */}
      <p
        className="
        text-2xl md:text-3xl  // Ukuran teks
        font-semibold          // Teks tebal
        text-blue-400          // Warna teks biru
        mb-6                   // Margin bawah
      ">
        Unleash the $SCRYPTO pack power.
      </p>

      {/* Teks deskripsi kecil */}
      <p
        className="
        text-lg 
        text-gray-400   // Warna teks abu-abu
        mb-6            // Margin bawah besar sebelum tombol
      ">
        Cyber Husky vibes on Radix DLT.
      </p>

      {/* Grup Tombol */}
      <div
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

        {/* Tombol "Join Telegram" */}
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

        {/* Tombol "View Chart" */}
        <button
          className="
          flex items-center gap-2 
          font-semibold 
          text-purple-400
          hover:text-white transition-colors
        ">
          <IconExternalLink size={20} />
          <span>VIEW CHART</span>
        </button>
      </div>
    </section>
  );
}
