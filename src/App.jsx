import Feed from './Components/ui/Feed';
import './App.css';
import { Link } from "react-router-dom";
import UserGames from './Components/ui/userGames'
import Login from './Login';
import NavBar from './Navbar';

function App() {

  return (
    <div>
      <NavBar/>
      <Link to={'/login'}>CLICK TO GO TO LOGIN</Link>
      <header>
        <h2>Stacked Squad</h2>
        <div className='flex mx-4 gap-4'>
          <Feed />
          <UserGames/>
        </div>
      </header>
    </div>
  );
}

export default App
