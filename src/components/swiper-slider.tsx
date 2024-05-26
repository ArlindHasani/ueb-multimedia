import { useCallback, useRef, useState } from "react";
import MediumCard from "./cards/medium-card";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";

interface SwiperSliderProps {
    header: string,
    games: Game[],
    className?: string
}

export default function SwiperSlider(props: SwiperSliderProps) {
    const { header, games, className } = props;

    const swiperRef = useRef<SwiperType | null>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handlePrev = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.slideNext();
    }, []);

    const updateNavigationState = useCallback(() => {
        if (!swiperRef.current) return;
        setIsBeginning(swiperRef.current.isBeginning);
        setIsEnd(swiperRef.current.isEnd);
    }, []);

    return (
        <div className={`flex flex-col gap-4 ${className}`}>
            <div className="flex justify-between items-center">
                <Link to={`/${header}`} className="w-fit">
                    <h3 className="text-white text-lg flex items-center gap-0.5 group">
                        {header} <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </h3>
                </Link>
                <div className="flex items-center gap-3">
                    <FiArrowLeft
                        className={`bg-light-black rounded-full p-2 cursor-pointer text-white w-8 h-8 ${isBeginning ? 'opacity-50 cursor-default' : ''}`}
                        onClick={handlePrev}
                    />
                    <FiArrowRight
                        className={`bg-light-black rounded-full p-2 cursor-pointer text-white w-8 h-8 ${isEnd ? 'opacity-50 cursor-default' : ''}`}
                        onClick={handleNext}
                    />
                </div>
            </div>

            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={"auto"}
                centeredSlides={false}
                className="w-full h-full"
                slidesPerGroup={1}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={updateNavigationState}
                onSwiper={updateNavigationState}
                breakpoints={{
                    768: {
                        slidesPerGroup: 2, // Skip 2 slides on vw>=768
                        allowTouchMove: false
                    },
                    1024: {
                        slidesPerGroup: 5, // Skip 5 slides on vw>=1024
                        allowTouchMove: false
                    }
                }}
            >
                {games.map((game, index) => (
                    <SwiperSlide key={index} style={{ width: 'auto' }}>
                        <MediumCard
                            gameName={game.gameName}
                            gameImage={game.gameImage}
                            gamePrice={game.gamePrice}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
