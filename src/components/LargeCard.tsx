import { useState } from "react";
import CategoryTag from "./CategoryTag";
import PrimaryButton from "./PrimaryButton";
import Wishlsit from "./WishlistButton";


export default function LargeCard() {

    const [hovered, setHovered] = useState(false);

    return (
        <div className="py-6 px-6 relative flex flex-col justify-between h-[550px] rounded-2xl" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>

            <div className="absolute w-full h-full left-0 top-0 bg-light-black/25 rounded-2xl"></div>
            {hovered ? (
                <video className="absolute left-0 top-0 w-full h-[300px] lg:h-[450px] object-cover rounded-2xl z-10" poster="./assets/Hogwarts-Legacy.jpg" controls muted>
                    <source src="./assets/Hogwarts-Legacy-Video.mp4" type="video/mp4" />
                </video>
            ) : (
                <div className="absolute w-full h-full left-0 top-0 rounded-2xl bg-[url('./assets/Hogwarts-Legacy.jpg')] bg-no-repeat bg-cover"></div>
            )}

            <div className="flex flex-wrap gap-2 z-10">
                <CategoryTag categoryName="Magic"/>
                <CategoryTag categoryName="Fantasy"/>
                <CategoryTag categoryName="Open World"/>
                <CategoryTag categoryName="Adventure"/>
            </div>

            <div className="text-white flex flex-col gap-6 justify-between lg:flex-row z-10 ">
                <div>
                    <h2 className="font-bold text-xl">Hogwart's Legacy</h2>
                    <p className="text-sm">
                        Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Poter books.
                    </p>
                </div>
                <div className="flex item-center lg:self-end space-x-4 h-12">
                    <PrimaryButton buttonCta="Read more" buttonLink="/hogwarts-legacy"/>
                    <Wishlsit buttonName="hogwarts-legacy"/>
                </div>
            </div>
        </div>
    )
}
