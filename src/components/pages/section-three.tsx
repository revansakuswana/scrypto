import WolfImage from "../../../public/logo-wolf.png";

export default function SectionThree() {
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
        <h2 className="text-4xl md:text-5xl font-bold text-pink-500  tracking-wider mb-4">
          Grab Your $SCRYPTO
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full "></div>
        <p className="text-lg text-gray-300 mt-4">
          Join the cyber pack, unleash the moon vibes.
        </p>
      </div>

      {/* Konten Utama (Grid 2 Kolom) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Kolom Kiri: Langkah-langkah */}
        <div className="w-full flex justify-center">
          <iframe
            src="https://astrolescent.com/widget?to=resource_rdx1tkff46jkeu98jgl8naxpzfkn0m0hytysxzex3l3a8m7qps49f7m45c&amount=100"
            className="w-full max-w-md h-[535px] rounded-xl"
            frameBorder="0"></iframe>
        </div>

        {/* Kolom Kanan: Gambar */}
        <div className="flex justify-center items-center">
          <img src={WolfImage} alt="Cyber Wolf" className="w-full max-w-sm" />
        </div>
      </div>
    </section>
  );
}
