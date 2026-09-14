import {
    useState,
    type Dispatch,
    type SetStateAction
} from 'react';

import type { Iplayer } from '../../types/playerType';
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';


interface cardProps {
    player: Iplayer,
    coin: number,
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayers: Iplayer[],
    setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>
}

const PlayerCard = ({ player, coin, setCoin, selectedPlayers, setSelectedPlayers }: cardProps) => {

    const [isSelected, setIsSelected] = useState(false)

    const handleSelectPlayer = () => {
        setIsSelected(true);

        const newCoin = coin - player.price
        if (newCoin >= 0) {
            setCoin(newCoin)
            toast(`Player Purchaced ${player.playerName}`)
        }
        else {
            toast(`Coin Is not enough tp purchace the player `)
        }


        setSelectedPlayers([...selectedPlayers,player])




    };

    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img
                    src={player.playerImg}
                    alt={player.playerName} />
            </figure>



            <div className="card-body space y-3">

                <h2 className="card-title"><FaUser /> {player.playerName}</h2>

                <div className='flex justify-between gap-4'>
                    <p className='font-semibold'>{player.origin}</p>
                    <p className='btn'>{player.origin}</p>
                </div>


                <div className="divider"></div>

                <h2 className='font-semibold text-2xl'>Rating</h2>

                <div className='flex justify-between gap-4'>
                    <p className='font-semibold'>{player.battingStyle}</p>
                    <p className='btn'>{player.bowlingStyle}</p>
                </div>

                <div className="card-actions justify-between items-center">
                    <h2 className='font-semibold text-2xl'>{player.price}</h2>

                    <button onClick={() => handleSelectPlayer()}

                        className={`btn btn-primary`} disabled={isSelected}>

                        {isSelected === true ? "Player Selected" : "Choose Player"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;