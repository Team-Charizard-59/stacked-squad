import Feed from './Components/ui/Feed';
import './App.css';
import { Link } from 'react-router-dom';
import UserGames from './Components/ui/userGames';
import Login from './Login';
import NavBar from './Navbar';
import Hero from './Components/ui/Hero.jsx';
import { useState } from 'react'

function App() {
  const [update, setUpdate] = useState(true);
  return (
    <div className='w-screen bg-base-100 h-full'>
      <Link to={'/login'}>CLICK TO GO TO LOGIN</Link>
      <NavBar />
          {/* <Hero /> */}
      <header className=''>
        <div id='main-container' className='flex  gap-4 mx-10'>
          <Feed setUpdate={setUpdate} update={update}/>
          <UserGames setUpdate={setUpdate} update={update}/>
        </div>
      </header>
    </div>
  );
}

export default App;
