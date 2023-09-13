import Feed from './Components/ui/Feed';
import './App.css';
import { Link } from 'react-router-dom';
import UserGames from './Components/ui/userGames';
import Login from './Login';
import NavBar from './Navbar';

function App() {
  return (
    <div className='w-screen bg-base-100 h-screen'>
      <NavBar />
      <header className=''>
        <h2>Stacked Squad</h2>
        <div id='main-container' className='flex  gap-4 mx-10'>
          <Feed />
          <UserGames />
        </div>
      </header>
      <Link to={'/login'}>CLICK TO GO TO LOGIN</Link>
    </div>
  );
}

export default App;
