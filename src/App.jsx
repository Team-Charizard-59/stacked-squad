import './App.css'
import Dashboard from './Components/ui/dashboard'
import UserGames from './Components/ui/userGames'
function App() {
  return (
      <div>
        <header>
          <h2>Stacked Squad</h2>
          {/* <UserGames/> */}
          <Dashboard/>
        </header>
      </div>
  )
}

export default App
