import React from 'react';
import ChampionSkinNameCard from './ChampionSkinNameCard';

function ChampionSkinsList({ skinData, setSelectedSkin}) {

    const skinNameComponents = skinData?.map((skin, index) => ( <ChampionSkinNameCard key={index} name={skin.name} setSelectedSkin={setSelectedSkin} />))

  return (
    <div className="h-full no-scrollbar overflow-y-scroll">
        {skinNameComponents}
      
    </div>
  );
}

export default ChampionSkinsList;