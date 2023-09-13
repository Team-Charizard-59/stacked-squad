import { useState, useEffect } from 'react';
import { createLobby } from '../helperFunctions/createLobby.jsx';
import Cookies from 'js-cookie';
import MoreInfo from '../../MoreInfo.jsx';
function Feed({ setUpdate, update }) {
  // initialize data to the lobbby data in DB
  const [displayData, setDisplayData] = useState([]);

  const fetchLobbyData = () => {
    fetch('/api/lobby/')
      .then((res) => res.json())
      .then((data) => {
        console.log('CAN WE SEE THE LOVER DATA IN HERE: ', data);
        setDisplayData([...data]);
      })
      .catch((err) => console.log(`Error getting lobbies ${err}`));
  };

  useEffect(() => {
    fetchLobbyData();
  }, [update]);

  const [lobbyData, setLobbyData] = useState({
    title: '',
    game: '',
    gameMode: '',
    userRank: '',
    numPlayers: '',
    description: '',
    discordLink: '',
  });

  const lobbies = [];
  const moreInfo = [];
  let rooms = 1;
  displayData.forEach((currentLobbies) => {
    const lobbyNumber = rooms++;
    const {
      lobby_id,
      lobby_name,
      game_name,
      game_mode,
      curr_players,
      max_players,
    } = currentLobbies;

    lobbies.push(
      <div className=''>
        <div className='indicator ml-6 mb-6'>
          {/* Conditionally render this span! but how?
              compare the lobby_id to your own games and change button

              if (lobby_id is in the list of lobbies player has then render)&&

          */}
          <span className='indicator-item badge badge-warning'>joined</span>{' '}
          <div className='lobbyContainer card w-96 bg-neutral text-neutral-content '>
            <div className='card-body items-center text-center'>
              <h2 className='card-title'>{lobby_name}</h2>
              <p>
                {game_name} <span className='text-xs'> mode: {game_mode}</span>{' '}
              </p>
              <div className='card-actions justify-end'>
                <button
                  className='btn btn-ghost'
                  onClick={() =>
                    document.getElementById(`moreInfo-${lobby_id}`).showModal()
                  }
                >
                  More Info
                </button>
                <button
                  className='btn btn-primary'
                  onClick={() =>
                    handleJoinLobby(lobby_id, Cookies.get('ssid'), curr_players)
                  }
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    moreInfo.push(<MoreInfo lobbyInfo={currentLobbies} />);
  });

  const handleJoinLobby = (lobby_id, user_id, curr_players) => {
    fetch(`/api/lobby/join/${user_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        lobbyId: lobby_id,
        curr_players: curr_players,
      }),
    })
      .then(() => {
        setUpdate(!update);
        console.log('Lobby successfully joined');
      })
      .catch((err) => console.log(`Error joining lobby ${err}`));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLobbyData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreateLobby = () => {
    createLobby(lobbyData)
      .then((lobId) => {
        handleJoinLobby(lobId, Cookies.get('ssid'), 0);
        fetchLobbyData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='feedContainer card flex bg-secondary '>
      <div className='flex justify-between m-4'>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className='btn'
          onClick={() => document.getElementById('my_modal_1').showModal()}
        >
          Filter
        </button>
        <dialog id='my_modal_1' className='modal'>
          <div className='modal-box'>
            <h3 className='font-bold text-lg text-center mb-2'>FILTER BY:</h3>
            <div className='flex flex-col justify-center items-center'>
              <button
                className='btn w-full max-w-xs mb-2 mr-2'
                id='gameFilter'
                onClick={() => {}}
              >
                GAME
              </button>
              <button
                className='btn w-full max-w-xs mb-2 mr-2'
                id='attitudeFilter'
                onClick={() => {}}
              >
                GAME ATTITUDE
              </button>
              <button
                className='btn w-full max-w-xs mb-2 mr-2'
                id='rankFilter'
                onClick={() => {}}
              >
                Rank
              </button>
            </div>
            <div className='modal-action'>
              <form method='dialog'>
                {/* if there is a button in form, it will close the modal */}
                <button className='btn'>Close</button>
              </form>
            </div>
          </div>
        </dialog>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className='btn'
          onClick={() => document.getElementById('my_modal_2').showModal()}
        >
          Create Lobby
        </button>
        <dialog id='my_modal_2' className='modal'>
          <div className='modal-box bg-secondary-focus'>
            <h3 className='font-bold text-lg text-center mb-2'>Create a New Lobby</h3>
            <div className='flex flex-col justify-center items-center m-8'>
              <input
                type='text'
                placeholder='Title'
                name='title'
                value={lobbyData.title}
                onChange={handleInputChange}
                className='input input-bordered input-sm w-full max-w-xs mb-2 text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 !outline-none'
              />
{/*
<div className="dropdown">
  <label tabIndex={0} className="btn m-1">Select game</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-neutral-focus rounded-box w-52">
    <li><a>League of Legends</a></li>
    <li><a>Fortnite</a></li>
  </ul>
</div> */}

              <input
                type='text'
                placeholder='Game Name'
                name='game'
                value={lobbyData.game}
                onChange={handleInputChange}
                className='input input-bordered input-sm w-full max-w-xs mb-2 text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 !outline-none'
              />
            </div>
            <div className='rounded-lg border border-gray-300 p-4'>
              <div className='flex justify-center items-center'>
                <input
                  type='text'
                  placeholder='Game Mode'
                  name='gameMode'
                  value={lobbyData.gameMode}
                  onChange={handleInputChange}
                  className='input input-bordered input-sm w-full max-w-xs mb-2 mr-2 text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 !outline-none'
                />
                <input
                  type='text'
                  placeholder='User Rank'
                  name='userRank'
                  value={lobbyData.userRank}
                  onChange={handleInputChange}
                  className='input input-bordered input-sm w-full max-w-xs mb-2  text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 !outline-none'
                />
              </div>
              <input
                type='text'
                placeholder='Number of Players'
                name='numPlayers'
                value={lobbyData.numPlayers}
                onChange={handleInputChange}
                className='input input-bordered input-sm w-full max-w-xs mb-2 text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 !outline-none'
              />
              <input
                type='text'
                placeholder='Description'
                name='description'
                value={lobbyData.description}
                onChange={handleInputChange}
                className='input input-bordered input-sm w-full max-w-xs mb-2 text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 !outline-none'
              />
              <input
                type='text'
                placeholder='Discord Link'
                name='discordLink'
                value={lobbyData.discordLink}
                onChange={handleInputChange}
                className='input input-bordered input-sm w-full max-w-xs mb-2 text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 !outline-none'
              />
            </div>
            <div className='modal-action'>
              <form method='dialog'>
                {/* if there is a button in form, it will close the modal */}
                <button className='btn bg-slate-400 mr-[10px]' onClick={()=>{document.getElementById('my_modal_2').close()}}>
                  Cancel
                </button>
                <button className='btn bg-primary' onClick={handleCreateLobby}>
                  Create
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <div className=''>{lobbies}</div>
      {moreInfo}
    </div>
  );
}

export default Feed;
