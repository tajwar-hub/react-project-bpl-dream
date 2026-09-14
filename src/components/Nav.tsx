import { AiFillDollarCircle } from 'react-icons/ai';
import Logo from '../assets/logo.png'


const Nav = ({coin} : {coin:number}) => {

  

  return (
    <nav className=" bg-red-100 ">

      <div className='container mx-auto flex justify-between items-center'>

        <img src={Logo} alt="" />

        <ul className='flex gap-4 items-center'>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>

        <strong className='flex gap-0.5 align items-center'><AiFillDollarCircle />{coin}</strong>

      </div>
    </nav>
  );
};

export default Nav;