import {useEFfect, useEffect} from 'react'


function ChampionPassiveCard({champion, setActiveAbilityText}) {

    const image = champion?.passive?.image.full
    const imageName = image?.replace(".png", "");

    const description = champion?.passive?.description

    const cleanedDescription = description?.replace(/<[^>]*>/g, '');

    const handleImageClick = () => {
        setActiveAbilityText(cleanedDescription)
    }

    useEffect(() => {
        setActiveAbilityText(cleanedDescription)
    },[cleanedDescription])

    return(

        <div>

            <img 
                src={`http://ddragon.leagueoflegends.com/cdn/13.18.1/img/passive/${imageName}.png`}
                alt={imageName}
                onClick={handleImageClick}
            />

        </div>

    )
}

export default ChampionPassiveCard