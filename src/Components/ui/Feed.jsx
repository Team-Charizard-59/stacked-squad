import { useState } from 'react'
import { createLobby } from "../helperFunctions/createLobby.jsx"

function Feed () {
  const data = [
    {game: 'league', mode: 'tryhard'},
    {game: 'fortnite', mode: 'for fun'},
    {game: 'valorant', mode: 'grind'},
    {game: 'call of duty', mode: 'for fun'},
    
  ];
  const [lobbyData, setLobbyData] = useState({
    title: '',
    game: '',
    gameMode: '',
    userRank: '',
    numPlayers: '',
    description: '',
    discordLink: '',
  });

  const lobbies =[];
  let rooms = 1;
  data.forEach ((currentLobbies) => {
    const lobbyNumber = rooms++;
    const game = currentLobbies.game;
    const mode = currentLobbies.mode;
    lobbies.push(
      <div className="lobbyContainer m-2 p-4 border-black border-2 rounded-3xl flex justify-between items-center">
        <p>
          Lobby {lobbyNumber} [ {game} <span className="text-xs"> mode: {mode}</span> ]{' '}
        </p>
        <div className="flex gap-2">
          <button className="btn">More Info</button>
          <button className="btn">Join</button>
        </div>
      </div>
    );
  })

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      console.log(name, value)
      setLobbyData((prevState) => ({
        ...prevState,
        [name]: value,
        
      }));
      console.log('data', lobbyData.game)
    };

  const handleCreateLobby = () => {
   createLobby(lobbyData)
  }

  return (
    <div className="feedContainer w-full border-black border-2 rounded-xl">
      <div className="flex justify-between m-4">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>
          Filter
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center mb-2">FILTER BY:</h3>
              <div className="flex flex-col justify-center items-center">
              <button className="btn w-full max-w-xs mb-2 mr-2" id="gameFilter" onClick={() => {}}>
                GAME
              </button>
              <button className="btn w-full max-w-xs mb-2 mr-2" id="attitudeFilter" onClick={() => {}}>
                GAME ATTITUDE
              </button>
              <button className="btn w-full max-w-xs mb-2 mr-2" id="rankFilter" onClick={() => {}}>
                Rank
              </button>
              </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>
          Create Lobby
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center mb-2">SETUP LOBBY</h3>
          <div className="flex flex-col justify-center items-center">
            <input type="text" placeholder="Title" name="title" value={lobbyData.title} onChange={handleInputChange}
            className="input input-bordered input-sm w-full max-w-xs mb-2 text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 !outline-none"/>
            <input type="text" placeholder="Game Here" name="game" value={lobbyData.game} onChange={handleInputChange}
            className="input input-bordered input-sm w-full max-w-xs mb-2 text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 !outline-none"/>
          </div>
            <div className="rounded-lg border border-gray-300 p-4">
              <div className="flex justify-center items-center">
              <input type="text" placeholder="Game Mode" name="gameMode" value={lobbyData.gameMode} onChange={handleInputChange}
              className="input input-bordered input-sm w-full max-w-xs mb-2 mr-2 text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 !outline-none" />
              <input type="text" placeholder="User Rank" name="userRank" value={lobbyData.userRank} onChange={handleInputChange}
              className="input input-bordered input-sm w-full max-w-xs mb-2  text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 !outline-none" />
              </div>
              <input type="text" placeholder="Number of Players" name="numPlayers" value={lobbyData.numPlayers} onChange={handleInputChange}
              className="input input-bordered input-sm w-full max-w-xs mb-2 text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 !outline-none" />
              <input type="text" placeholder="Description/More Info" name="description" value={lobbyData.description} onChange={handleInputChange}
              className="input input-bordered input-sm w-full max-w-xs mb-2 text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 !outline-none" />
              <input type="text" placeholder="Discord Link" name="discordLink" value={lobbyData.discordLink} onChange={handleInputChange}
              className="input input-bordered input-sm w-full max-w-xs mb-2 text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 !outline-none" />
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn" onClick={handleCreateLobby}>Create</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <div>
        {lobbies}
      </div>
    </div>
  );
}

export default Feed