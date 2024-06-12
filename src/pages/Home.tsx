import Hero from "../components/hero";
import LargeCard from "../components/cards/large-card";
import SwiperSlider from "../components/swiper-slider";
import SaleCard from "../components/cards/sale-card";
import PromotionsBanner from "../components/promotions-banner";
import PixiJsText from "../components/PixiJsText";
import PixiJsMap from "../components/PixiJsMap";
import FlyAway from "../components/FlyAway";

const games = [
  {
    gameName: "Hogwarts Legacy",
    gamePrice: 49.99,
    gameImage: "Hogwarts-Legacy.webp"
  },
  {
    gameName: "Spiderman Remastered",
    gamePrice: 49.99,
    gameImage: "Spiderman-Remastered.webp"
  },
  {
    gameName: "Hogwarts Legacy",
    gamePrice: 49.99,
    gameImage: "Hogwarts-Legacy.webp"
  },
  {
    gameName: "Spiderman Remastered",
    gamePrice: 49.99,
    gameImage: "Spiderman-Remastered.webp"
  },
  {
    gameName: "Hogwarts Legacy",
    gamePrice: 49.99,
    gameImage: "Hogwarts-Legacy.webp"
  },
  {
    gameName: "Spiderman Remastered",
    gamePrice: 49.99,
    gameImage: "Spiderman-Remastered.webp"
  },
  {
    gameName: "Hogwarts Legacy",
    gamePrice: 49.99,
    gameImage: "Hogwarts-Legacy.webp"
  },
  {
    gameName: "Spiderman Remastered",
    gamePrice: 49.99,
    gameImage: "Spiderman-Remastered.webp"
  },
  {
    gameName: "Hogwarts Legacy",
    gamePrice: 49.99,
    gameImage: "Hogwarts-Legacy.webp"
  },
  {
    gameName: "Spiderman Remastered",
    gamePrice: 49.99,
    gameImage: "Spiderman-Remastered.webp"
  },
  {
    gameName: "Hogwarts Legacy",
    gamePrice: 49.99,
    gameImage: "Hogwarts-Legacy.webp"
  },
  {
    gameName: "Spiderman Remastered",
    gamePrice: 49.99,
    gameImage: "Spiderman-Remastered.webp"
  },
  {
    gameName: "Hogwarts Legacy",
    gamePrice: 49.99,
    gameImage: "Hogwarts-Legacy.webp"
  },
  {
    gameName: "Spiderman Remastered",
    gamePrice: 49.99,
    gameImage: "Spiderman-Remastered.webp"
  },
  {
    gameName: "Hogwarts Legacy",
    gamePrice: 49.99,
    gameImage: "Hogwarts-Legacy.webp"
  },
  {
    gameName: "Spiderman Remastered",
    gamePrice: 49.99,
    gameImage: "Spiderman-Remastered.webp"
  },
]

const promos = [
  {
    gameName: "Spiderman Remastered",
    gamePrice: 49.99,
    gameImage: "./assets/Spiderman-Remastered.webp",
    promoDescription: "Enjoy discounts on Warhammer titles during the weeklong Skulls event! Runs May 23 to May 30.",
    promoAction: "Save Now"
  },
  {
    gameName: "Hogwarts Legacy",
    gamePrice: 49.99,
    gameImage: "./assets/Hogwarts-Legacy.webp",
    promoDescription: "Enjoy discounts on Warhammer titles during the weeklong Skulls event! Runs May 23 to May 30.",
    promoAction: "Play For Free"
  }
];

export default function Home() {
  return (
    <>
      <Hero/>
      <section className="flex px-xsm lg:px-xlg my-4 gap-8 flex-wrap md:flex-nowrap">
        <SaleCard saleImage="./sales/mega-sale.webp" saleName="mega-sale"/>
        <SaleCard saleImage="./sales/shop-earn-redeem.avif" saleName="mega-sale"/>
        <SaleCard saleImage="./sales/featured-giveaways.avif" saleName="mega-sale"/>
      </section>
      <LargeCard/>
      <SwiperSlider className="px-xsm lg:px-xlg py-ylg" header="MEGA Spotlight" games={games}/>
      <SwiperSlider className="px-xsm lg:px-xlg py-ylg" header="Top New Releases" games={games}/>
      <div className="relative max-w-full h-[150px]">
        <PixiJsText poem="GAME ON WITHOUT BREAKING THE BANK: UNBEATABLE PRICES, UNLIMITED FUN!"/>
      </div>
      <PixiJsMap/>
      <PromotionsBanner/>
      <FlyAway/>
    </>
  )
}
``