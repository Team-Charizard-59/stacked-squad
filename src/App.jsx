import Dashboard from './Components/ui/dashboard';
import './App.css';
import UserGames from './Components/ui/userGames'
import Login from './Login';

function App() {

  return (
    <div>
      <header>
        <h2>Stacked Squad</h2>
        <UserGames/>
        <Dashboard />
      </header>
      <Login/>
    </div>
  );
}

export default App
