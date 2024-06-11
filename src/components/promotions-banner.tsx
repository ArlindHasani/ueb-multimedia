import PromoCard from './cards/promo-card';
import OutlineButton from './buttons/outline-button';

import { FiGift } from "react-icons/fi";


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
    gameImage: "./assets/Hogwarts-Legacy.jpg",
    promoDescription: "Enjoy discounts on Warhammer titles during the weeklong Skulls event! Runs May 23 to May 30.",
    promoAction: "Play For Free"
  },
  {
    gameName: "Hogwarts Legacy",
    gamePrice: 49.99,
    gameImage: "./assets/Hogwarts-Legacy.jpg",
    promoDescription: "Enjoy discounts on Warhammer titles during the weeklong Skulls event! Runs May 23 to May 30.",
    promoAction: "Play For Free"
  }
];

export default function PromotionsBanner() {
  return (
    <section className='flex flex-col gap-6 p-4 lg:px-16 lg:py-8 bg-light-grey/50 my-8'>
      <div className='flex justify-between items-center text-white mb-4'>
        <h2 className='text-lg flex items-center gap-2'><FiGift className='w-8 h-8'/> Free Games</h2>
        <OutlineButton buttonCta='View More' buttonLink='/view-more'/>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {promos.map((promo, index) => (
          <PromoCard 
            key={index}
            gameName={promo.gameName}
            gameImage={promo.gameImage}
            gamePrice={promo.gamePrice}
            promoDescription={promo.promoDescription}
            promoAction={promo.promoAction}
          />
        ))}
      </div>
    </section>
  )
}
