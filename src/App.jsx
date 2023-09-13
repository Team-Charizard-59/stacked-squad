import Feed from './Components/ui/Feed';
import './index.css';
import { Link } from 'react-router-dom';
import UserGames from './Components/ui/userGames';
import Login from './Login';
import NavBar from './Navbar';
import Hero from './Components/ui/Hero.jsx';


function App() {
  return (
    <div className='w-screen bg-base-100 h-full'>
      {/* <Link to={'/login'}>CLICK TO GO TO LOGIN</Link> */}
      <NavBar />
          {/* <Hero /> */}
      <header className=''>
        <div id='main-container' className='grid grid-cols-2 mx-7'>
          <Feed />
          <UserGames />
        </div>
      </header>
    </div>
  );
}

export default App;
