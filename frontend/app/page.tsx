import Image from "next/image";
import { Footer, Hero, Navbar, Navbar2, Welcome } from "./components";
import heroimage from "./public/landingpagehero.jpg";
import bigtext from "./public/text_logo_big.png";

export default function Home() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <header className="relative z-30">
        <Navbar className="z-40" />
      </header>

      {/* Hero Image Container */}
      <div className="relative w-full">
        {/* Background Image */}
        <Image
          src={heroimage}
          alt="sample-image"
          className="w-full object-cover"
        />

        {/* Content Overlay */}
        <div className="absolute top-0 left-0 w-full flex flex-col items-start text-center z-50 space-y-4">
          {/* Secondary Navigation Bar */}
          <Navbar2 className="w-full py-1" />
          <p className="text-lg md:text-2xl font-semibold text-gray-300">
            &quot;Struggling...?&quot;
          </p>
          {/* Logo Text */}
          <Image
            src={bigtext}
            alt="big-text-logo"
            className="w-3/4 max-w-md"
          />

          {/* Tagline */}
          <p className="text-lg md:text-xl text-purple-400 font-semibold">
            &quot;Unleash Seamless Creation with us&quot;
          </p>

          {/* Additional Description Text */}
          <p className="text-sm md:text-base text-gray-300 px-4 max-w-lg">
            &quot;FlowerWork revolutionizes project management with AI-powered task optimization and blockchain-secured tracking.&quot;
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="bg-neutral-400">
        <Welcome />
        <Hero />
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
