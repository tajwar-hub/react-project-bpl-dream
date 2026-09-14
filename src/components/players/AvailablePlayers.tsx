import  { type Dispatch, type SetStateAction } from 'react';
import type { Iplayer } from '../../types/playerType';
import PlayerCard from './PlayerCard';


interface AvailableProps{
    players:Iplayer[],
    coin:number
    setCoin: Dispatch<SetStateAction<number>>
    selectedPlayers : Iplayer[],
    setSelectedPlayers : Dispatch<SetStateAction<Iplayer[]>>
}

const AvailablePlayers = ({ players, coin, setCoin ,selectedPlayers,setSelectedPlayers} : AvailableProps) => {
   
    return (
        <div className='grid grid-cols-3 gap-5 mt-6'>
            {players.map((player: Iplayer, ind:number) => {
                    return <PlayerCard 
                    key={ind} 
                    player={player} 
                    coin={coin} 
                    setCoin = {setCoin}  
                    selectedPlayers={selectedPlayers}  
                    setSelectedPlayers={setSelectedPlayers} 
                    />
            })}
        </div>
    );
};

export default AvailablePlayers;