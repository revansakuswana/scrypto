import {
  IconPhoto,
  IconHeart,
  IconMessageCircle,
  IconShare,
} from "@tabler/icons-react";

export default function SectionFive() {
  const memes = [
    {
      title: "Cyber Doge Vibes",
      number: 1,
      likes: 420,
      comments: 69,
      color: "text-pink-400",
    },
    {
      title: "To The Moon!",
      number: 2,
      likes: 1337,
      comments: 420,
      color: "text-pink-400",
    },
    { title: "HODL Strong", number: 3, likes: 888, comments: 123 },
    { title: "Diamond Paws", number: 4, likes: 666, comments: 88 },
    { title: "Woof Energy", number: 5, likes: 990, comments: 200 },
    { title: "Neon Dreams", number: 6, likes: 555, comments: 77 },
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
      pt-20
      px-5
      sm:px-35
      sm:py-30
    ">
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
        Pack Memes
      </div>
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-500 tracking-wider">
          Pack Memes Unleashed
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        <p className="mt-6 text-lg text-gray-300 flex items-center justify-center gap-2">
          Community fire that hits different
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Grid untuk Kartu Meme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-purple-400">
          {memes.map((meme, index) => (
            <div
              key={index}
              className="
                bg-gray-900/40 rounded-lg border border-purple-400
                flex flex-col overflow-hidden group
              ">
              {/* Area Gambar Placeholder */}
              <div
                className="
                flex-grow h-64 flex flex-col justify-center items-center
                text-center p-4 bg-black/20
              ">
                <IconPhoto size={64} className="text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold">{meme.title}</h3>
                <p className="text-gray-400">Meme #{meme.number}</p>
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
            </div>
          ))}
        </div>

        {/* Kartu "Drop Your Fire" */}
        <div
          className="
            bg-gray-900/40 rounded-lg border border-purple-400
            flex flex-col items-center justify-center text-center p-8 gap-4
            sm:col-span-2 lg:col-span-1
          ">
          <IconPhoto size={48} className="text-pink-400" />
          <h3 className="text-2xl font-bold text-pink-400">Drop Your Fire!</h3>
          <p className="text-gray-400">
            Epic $SCRYPTO memes? The pack wants them!
          </p>
          <a href="#" className="text-cyan-400 font-semibold hover:underline">
            Telegram = meme heaven
          </a>
        </div>
      </div>
    </section>
  );
}
