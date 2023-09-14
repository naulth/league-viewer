import React, { useEffect, useRef } from "react";
import Slider from "react-slick";

import ChampionSkinImage from "./ChampionSkinImage";

export default function ChampionSkinCarousel({ skinData, selectedSkin }) {
    const slideRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const skinImages = skinData?.map((skin) => (
        <ChampionSkinImage key={skin.name} skinUrl={skin.imageUrl} />
    ));

    function getInitialSlideIndex(skinData, selectedSkin) {
        const defaultIndex = skinData?.findIndex((skin) => skin.name === "default")
        const selectedIndex = skinData?.findIndex((skin) => skin.name === selectedSkin)
        return selectedIndex !== -1 ? selectedIndex : defaultIndex
    }

    useEffect(() => {
        const selectedSlideIndex = getInitialSlideIndex(skinData, selectedSkin)

        if (slideRef.current) {
            slideRef.current.slickGoTo(selectedSlideIndex)
        }
    }, [selectedSkin, skinData])

    return (
        <Slider ref={slideRef} {...settings}>
            {skinImages}
        </Slider>
    );
}
