import Nav from "./components/Nav"
import Banner from "./components/Banner"
import Players from "./components/players/Players"
import { Suspense, useState } from "react"
import type { Iplayer } from "./types/playerType"

const playersFetch = async(): Promise<Iplayer[]> => {
  const res = await fetch('/public/data.json')
  const data = await res.json()
  return data
}

export default function App() {

  const playersPromise = playersFetch()
  const [coin, setCoin] = useState(1000)

  return (
    <>      
     <Nav coin = {coin}/>
     <Banner/>

     <Suspense fallback={`Loading... `}>
      <Players playersPromise = {playersPromise}  coin = {coin} setCoin = {setCoin} />  
     </Suspense>
         
    </>
  )
}