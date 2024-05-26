import { Boxes } from "./ui/background-boxes";
import { FlipWords } from "./ui/flip-words";
import { Highlight } from "./ui/highlight-words";

export default function Hero() {
  const words = ["Latest", "Best", "Hottest"];

  return (
    <div className="h-[calc(100vh-96px)] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">

      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      <div className="relative flex text-center justify-center items-center">
        <h1 className="px-4 md:text-6xl text-xl w-full mx-auto font-extrabold text-white leading-relaxed lg:leading-snug relative z-20">
          Discover The
          <span className="min-w-[150px] whitespace-nowrap">
            <FlipWords words={words} />
          </span>
          Games
          <br />
          Only at {" "}
          <Highlight className="text-white">GAMEVERSE</Highlight>
        </h1>
      </div>

    </div>
  );
}
