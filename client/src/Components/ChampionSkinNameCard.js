

function ChampionSkinNameCard({name, setSelectedSkin}) {

    const capName = name.toUpperCase()

    const handleClick = () => {
        setSelectedSkin(name)
    }

    return(
        <div className="py-2 my-2">
            <h1 onClick={handleClick} className="text-slate-200 text-xl">{capName}</h1>
        </div>

    )
}

export default ChampionSkinNameCard