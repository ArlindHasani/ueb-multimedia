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
    gameName: "Counter-Strike 2",
    gamePrice: 19.99,
    gameImage: "cs2.webp"
  },
  {
    gameName: "Wolfenstein II: The New Colossus",
    gamePrice: 29.99,
    gameImage: "wf.webp"
  },
  {
    gameName: "Far Cry 6",
    gamePrice: 49.99,
    gameImage: "fc6.webp"
  },
  {
    gameName: "Borderlands 3",
    gamePrice: 49.99,
    gameImage: "borderl.webp"
  },
  {
    gameName: "Spiderman Remastered",
    gamePrice: 49.99,
    gameImage: "Spiderman-Remastered.webp"
  },
  {
    gameName: "Apex Legends",
    gamePrice: 29.99,
    gameImage: "Apex-Legends.webp"
  },
  {
    gameName: "BLack Mesa",
    gamePrice: 19.99,
    gameImage: "Black-Mesa.webp"
  },
  {
    gameName: "Call Of Duty 2042",
    gamePrice: 79.99,
    gameImage: "Cod-2042.webp"
  },
  {
    gameName: "Doom Eternal",
    gamePrice: 39.99,
    gameImage: "Doom-Eternal.webp"
  },

  {
    gameName: "Titan Fall",
    gamePrice: 49.99,
    gameImage: "titan-fall.webp"
  },
  {
    gameName: "Half Life 2",
    gamePrice: 49.99,
    gameImage: "Half-Life2.webp"
  },
  {
    gameName: "Metro Exodus",
    gamePrice: 49.99,
    gameImage: "Metro-Exodus.webp"
  },
  {
    gameName: "Rainbow 6 Siege",
    gamePrice: 49.99,
    gameImage: "Rainbow-6.webp"
  },
  {
    gameName: "Counter-Strike: Global Offensive",
    gamePrice: 1.99,
    gameImage: "csgo.webp"
  }
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