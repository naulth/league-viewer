import React, {useEffect, useContext} from 'react'
import { ChampionsArrayContext } from '../Context/championsArray'

import RosterCard from './RosterCard'


function Roster() {

    const {championsArray, setChampionsArray} = useContext(ChampionsArrayContext)

    useEffect(() => {
        fetch('http://ddragon.leagueoflegends.com/cdn/13.17.1/data/en_US/champion.json')
        .then((res) => {
            if (res.ok) {
                res.json().then((data) => {

                    const championsData = Object.values(data.data)
                    setChampionsArray(championsData)
                })
            }
        })
    }, [setChampionsArray])

    //console.log(championsArray)
    const championCards = championsArray.map(champion => <RosterCard key={champion.id} id={champion.id} name={champion.name} title={champion.title} image={champion.image?.full} />)

    return(
        <div>
            <div>
                <h1>Champion Roster</h1>
            </div>
            <div className="grid-cols-4 justify-items-center max-w-7xl mx-auto grid">
                {championCards}
            </div>
        </div>
    )
}

export default Roster