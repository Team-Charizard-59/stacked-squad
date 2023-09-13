import Feed from './Components/ui/Feed';
import './App.css';
import { Link } from "react-router-dom";
import UserGames from './Components/ui/userGames'
import NavBar from './Navbar';

function App() {

  return (
    <div>
      <NavBar/>
      <header>
        <div className='flex mx-4 gap-4'>
          <Feed />
          <UserGames/>
        </div>
      </header>
      <Link to={'/login'}>CLICK TO GO TO LOGIN</Link>
    </div>
  );
}

export default App
