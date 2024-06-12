import React from 'react'
import PixiJsText from '../components/PixiJsText'
import SwiperSlider from "../components/swiper-slider";


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
]

const promos = [
  {
    gameName: "Hogwarts Legacy",
    gamePrice: 49.99,
    gameImage: "./assets/Hogwarts-Legacy.webp",
    promoDescription: "Enjoy discounts on Warhammer titles during the weeklong Skulls event! Runs May 23 to May 30.",
    promoAction: "Play For Free"
  }
];


export default function UpComingGames() {
  return (
        <>
        <div className="py-16 relative max-w-full h-[250px]">
            <PixiJsText poem="Currently there are no upcoming games, you can still check Top New Releases."/>
        </div> 
        
        <SwiperSlider className="px-xsm lg:px-xlg py-ylg" header="Top New Releases" games={games}/>
        </>
  )
}
