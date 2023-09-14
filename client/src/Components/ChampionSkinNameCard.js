

function ChampionSkinNameCard({name, setSelectedSkin}) {

    const capName = name.toUpperCase()

    const handleClick = () => {
        setSelectedSkin(name)
    }

    return(
        <div onClick={handleClick} className="py-2 my-2" data-skin={name}>
            <h1  className="text-slate-200 text-xl">{capName}</h1>
        </div>

    )
}

export default ChampionSkinNameCard