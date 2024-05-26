import Hero from "../components/hero";
import LargeCard from "../components/cards/large-card";
import MediumCard from "../components/cards/medium-card";
import SwiperSlider from "../components/swiper-slider";

const games = [
  {
    gameName: "Hogwarts Legacy",
    gamePrice: 49.99,
    gameImage: "Hogwarts-Legacy.jpg"
  },
  {
    gameName: "Spiderman Remastered",
    gamePrice: 49.99,
    gameImage: "Spiderman-Remastered.webp"
  },
  {
    gameName: "Hogwarts Legacy",
    gamePrice: 49.99,
    gameImage: "Hogwarts-Legacy.jpg"
  },
  {
    gameName: "Spiderman Remastered",
    gamePrice: 49.99,
    gameImage: "Spiderman-Remastered.webp"
  },
  {
    gameName: "Hogwarts Legacy",
    gamePrice: 49.99,
    gameImage: "Hogwarts-Legacy.jpg"
  },
  {
    gameName: "Spiderman Remastered",
    gamePrice: 49.99,
    gameImage: "Spiderman-Remastered.webp"
  },
  {
    gameName: "Hogwarts Legacy",
    gamePrice: 49.99,
    gameImage: "Hogwarts-Legacy.jpg"
  },
  {
    gameName: "Spiderman Remastered",
    gamePrice: 49.99,
    gameImage: "Spiderman-Remastered.webp"
  },
  {
    gameName: "Hogwarts Legacy",
    gamePrice: 49.99,
    gameImage: "Hogwarts-Legacy.jpg"
  },
  {
    gameName: "Spiderman Remastered",
    gamePrice: 49.99,
    gameImage: "Spiderman-Remastered.webp"
  },
  {
    gameName: "Hogwarts Legacy",
    gamePrice: 49.99,
    gameImage: "Hogwarts-Legacy.jpg"
  },
  {
    gameName: "Spiderman Remastered",
    gamePrice: 49.99,
    gameImage: "Spiderman-Remastered.webp"
  },
  {
    gameName: "Hogwarts Legacy",
    gamePrice: 49.99,
    gameImage: "Hogwarts-Legacy.jpg"
  },
  {
    gameName: "Spiderman Remastered",
    gamePrice: 49.99,
    gameImage: "Spiderman-Remastered.webp"
  },
  {
    gameName: "Hogwarts Legacy",
    gamePrice: 49.99,
    gameImage: "Hogwarts-Legacy.jpg"
  },
  {
    gameName: "Spiderman Remastered",
    gamePrice: 49.99,
    gameImage: "Spiderman-Remastered.webp"
  },
]

export default function Home() {
  return (
    <>
      <Hero/>
      <LargeCard/>
      <SwiperSlider className="mx-8 my-6" header="MEGA Spotlight" games={games}/>
      <SwiperSlider className="mx-8 my-6" header="Top New Releases" games={games}/>
    </>
  )
}
