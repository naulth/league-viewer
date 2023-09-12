import React, {useState} from 'react'

const ChampionsArrayContext = React.createContext()

function ChampionsArrayProvider({children}) {

    const [championsArray, setChampionsArray] = useState([])

    return <ChampionsArrayContext.Provider value={{championsArray, setChampionsArray}}>{children}</ChampionsArrayContext.Provider>
}

export {ChampionsArrayContext, ChampionsArrayProvider}