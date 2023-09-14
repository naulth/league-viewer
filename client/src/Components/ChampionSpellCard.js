


function ChampionSpellCard({id, description, setActiveAbilityText}) {

    const handleImageClick = () => {
        setActiveAbilityText(description)
    };

    return(

        <div>

            <img 
                src={`http://ddragon.leagueoflegends.com/cdn/13.18.1/img/spell/${id}.png`}
                alt={id}
                onClick={handleImageClick}
            />

        </div>

    )
}

export default ChampionSpellCard