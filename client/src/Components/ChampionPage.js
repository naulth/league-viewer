import { useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";

import ChampionSpellCard from "./ChampionSpellCard";
import ChampionPassiveCard from "./ChampionPassiveCard";
import ChampionSkinCarousel from "./ChampionSkinCarousel";
import ChampionSkinsList from "./ChampionSkinList";

import { ChampionContext } from "../Context/champion";

function ChampionPage() {
    const { champion, setChampion } = useContext(ChampionContext);

    const params = useParams();

    const champId = params.championId;

    useEffect(() => {
        fetch(
            `http://ddragon.leagueoflegends.com/cdn/13.17.1/data/en_US/champion/${champId}.json`
        ).then((res) => {
            if (res.ok) {
                res.json().then((r) => {
                    const champObj = r.data[champId];
                    setChampion(champObj);
                });
            } else {
                console.log("Champion not fetched ok");
            }
        });
    }, [champId, setChampion]);

    const [activeAbilityText, setActiveAbilityText] = useState(null);

    const abilityGroup = [];

    abilityGroup.push(
        <ChampionPassiveCard
            key={champion}
            champion={champion}
            setActiveAbilityText={setActiveAbilityText}
        />
    );

    champion.spells?.map((spell) =>
        abilityGroup.push(
            <ChampionSpellCard
                key={spell.id}
                id={spell.id}
                description={spell.description}
                setActiveAbilityText={setActiveAbilityText}
            />
        )
    );

    const skinImageUrl = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champId}_`;

    const skinData = champion?.skins?.map(skin => {
        const num = skin.num
        const name = skin.name
        const imageUrl = `${skinImageUrl}${num}.jpg`

        return {name, imageUrl}

    })

    const [selectedSkin, setSelectedSkin] = useState(null)
    

    return (
        <div className="bg-gray-950 h-max px-10 py-20">
            <div className="grid grid-cols-7 px-20">
                <div className="pt-10 col-span-2">
                    <h2 className="text-4xl text-slate-200">
                        {champion.title}
                    </h2>
                    <h1 className="text-8xl pb-10 text-slate-200">
                        {champion.name}
                    </h1>
                    <p className="text-lg text-slate-200">{champion.lore}</p>
                </div>
                <div className="col-span-5">
                    <img
                        className="mx-auto pl-20"
                        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champId}_0.jpg`}
                        alt={champId}
                    />
                </div>
            </div>
            <div className="px-20 pt-20 h-1/2">
                <div className="grid grid-cols-6 pt-20">
                    <div className="col-span-3">
                        <div>
                            <h1 className="text-6xl text-slate-200 py-20 ">
                                Abilities
                            </h1>
                        </div>
                        <div className="grid grid-cols-5">{abilityGroup}</div>
                        <div className="text-slate-200 pt-10 pr-10">
                            {activeAbilityText}
                        </div>
                    </div>
                    <div className="col-span-3">
                        <video loop muted width="100%" className="">
                            <source
                                src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_W1.webm"
                                type="video/webm"
                            />
                        </video>
                    </div>
                </div>
            </div>
            <div className="pt-24 px-20">
                <div className="grid grid-cols-7">
                    <div className="col-span-2 h-1/2">
                        <h2 className="text-6xl text-slate-200 pb-20">Available Skins</h2>
                        <ChampionSkinsList skinData={skinData} selectedSkin={selectedSkin} setSelectedSkin={setSelectedSkin} />
                    </div>
                    
                    <div className="col-span-5">
                        <ChampionSkinCarousel skinData={skinData} selectedSkin={selectedSkin}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChampionPage;
