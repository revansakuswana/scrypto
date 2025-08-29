import { IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";

interface HeaderProps {
  brandName?: string;
  onBuyButtonClick?: () => void;
}

export default function Header({
  brandName = "$SCRYPTO",
  onBuyButtonClick,
}: HeaderProps) {
  const navLinks = [
    { to: "#home", label: "Home" },
    { to: "#about", label: "About" },
    { to: "#chart", label: "Chart" },
    { to: "#buy", label: "Buy" },
    { to: "#gallery", label: "Gallery" },
    { to: "#vision", label: "Vision" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        className="
        fixed
        top-0
        left-0
        w-full
        bg-white/3
        flex
        flex-wrap
        items-center
        justify-between
        px-4 sm:px-10 lg:px-35
        py-4 sm:py-5
        gap-4
        z-50
      ">
        {/* Bagian Kiri: Logo dan Nama Brand */}
        <div className="flex items-center flex-shrink-0">
          <img
            src="/public/logo-header.png"
            alt="Logo"
            className="w-8 h-8 mr-4"
          />
          <span className="text-white text-2xl font-normal tracking-wider">
            {brandName}
          </span>
        </div>

        {/* Bagian Tengah: Navigasi */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-6 flex-wrap">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.to}
              className="
              text-gray-400
              font-normal
              text-sm
              hover:text-purple-400
              transition-colors
              duration-300
            ">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Bagian Kanan: Tombol "Buy now" dan Hamburger */}
        <div className="flex items-center flex-shrink-0">
          <button
            onClick={onBuyButtonClick}
            className="
            hidden md:block
            px-6 py-2
            text-black
            font-normal
            rounded-lg
            bg-gradient-to-r from-purple-600 to-blue-700
            hover:opacity-90
            transition-opacity
            duration-300
          ">
            Buy now
          </button>

          {/* Hamburger Menu untuk Mobile */}
          <div className="md:hidden ml-4">
            <button
              className="text-white"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label="Toggle menu">
              <IconMenu2 size={28} stroke={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          md:hidden
          fixed
          top-0
          left-0
          w-full
          h-full
          bg-black/90
          z-40
          flex
          flex-col
          items-center
          justify-center
          transition-opacity
          duration-300
          ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
        style={{
          // Optionally: smooth slide-down
          transitionProperty: "opacity",
        }}>
        <nav className="flex flex-col space-y-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.to}
              className="
                text-white
                text-2xl
                font-semibold
                tracking-wide
                hover:text-purple-400
                transition-colors
                duration-300
              "
              onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setIsMenuOpen(false);
              if (onBuyButtonClick) {
                onBuyButtonClick();
              }
            }}
            className="
              px-8 py-3
              text-black
              font-bold
              rounded-lg
              bg-gradient-to-r from-purple-600 to-blue-700
              hover:opacity-90
              transition-opacity
              duration-300
              text-lg
            ">
            Buy now
          </button>
        </nav>
      </div>
    </>
  );
}
