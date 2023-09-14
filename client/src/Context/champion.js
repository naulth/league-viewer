import React, {useState} from 'react'

const ChampionContext = React.createContext()

function ChampionProvider({children}) {

    const [champion, setChampion] = useState({})

    return <ChampionContext.Provider value={{champion, setChampion}}>{children}</ChampionContext.Provider>
}

export {ChampionContext, ChampionProvider}