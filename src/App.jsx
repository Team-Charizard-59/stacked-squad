import Feed from './Components/ui/Feed';
import './App.css';
import UserGames from './Components/ui/userGames'
import Login from './Login';

function App() {

  return (
    <div>
      <header>
        <h2>Stacked Squad</h2>
        <div className='flex mx-4 gap-4'>
          <Feed />
          <UserGames/>
        </div>
        
      </header>
      {/* <Login/> */}
    </div>
  );
}

export default App
