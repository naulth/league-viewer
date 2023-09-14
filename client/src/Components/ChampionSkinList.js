import React, {useEffect, useRef} from 'react';
import ChampionSkinNameCard from './ChampionSkinNameCard';
import { animateScroll as scroll} from 'react-scroll'

function ChampionSkinsList({ skinData, selectedSkin, setSelectedSkin}) {
    const containerRef = useRef(null)

    useEffect(() => {
        if (containerRef.current) {
          const selectedSkinElement = containerRef.current.querySelector(
            `[data-skin="${selectedSkin}"]`
          );
    
          if (selectedSkinElement) {
            selectedSkinElement.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
          }
        }
      }, [selectedSkin]);

    const skinNameComponents = skinData?.map((skin, index) => ( <ChampionSkinNameCard key={index} name={skin.name} setSelectedSkin={setSelectedSkin} data-skin={skin.name}/>))

  return (
    <div className="h-full no-scrollbar overflow-y-scroll" ref={containerRef} id="skinListContainer" >
        {skinNameComponents}
      
    </div>
  );
}

export default ChampionSkinsList;