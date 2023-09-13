import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

function UserGames ({ setUpdate, update }){
  const [displayData, setDisplayData] = useState([]);
  const [currentLobby, setCurrentLobby] = useState({
    lobby_name: 'test'
  });

  const fetchLobbyData = () => {
    fetch(`/api/lobby/user/${Cookies.get('ssid')}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(`fetched data for user ${Cookies.get('ssid')}: `, data);
        setDisplayData([...data]);
      })
      .catch((err) => console.log(`Error getting lobbies ${err}`));
  };

  useEffect(() => {
    fetchLobbyData();
  }, [update]);

  const handleDelete = (lobby_id) => {
    fetch(`/api/lobby/delete/${lobby_id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(() => {
      console.log('Successfully deleted lobby');
      setUpdate(!update);
    })
    .catch((err) => {
      console.log(`Error deleting lobby ${err}`);
    });
  }

  const handleInputChange = (e) => {
    console.log('input change: ', e.value, e.name);
    const { name, value } = e.target;
    setCurrentLobby((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditLobby = (lobby_id) => {
    fetch(`/api/lobby/edit/${lobby_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(currentLobby),
    })
      .then(() => {
        setUpdate(!update);
        console.log('Lobby successfully edited');
      })
      .catch((err) => console.log(`Error editing lobby ${err}`));
  }

  const handleEdit = (game) => {
    // createLobby(lobbyData)
    // .then(lobId => {
    //   handleJoinLobby(lobId, Cookies.get('ssid'), 0)
    //   fetchLobbyData();
    // })
    // .catch(err => {
    // console.log(err);
    // })

    // const { lobbyId } = req.params;
    // const { lobby_name, rank, game_mode, max_players, description, discord_link } = req.body;
    setCurrentLobby(game);
    console.log(currentLobby);
    document.getElementById('my_modal_3').showModal()
  };

  const handleStart = () => {};
  const currentGames = [];
  displayData.forEach((game) => {
    const { lobby_name, game_name, game_mode, owner_id, lobby_id } = game;
    const uniqueKey = `game-${lobby_name}-${game_mode}`
    currentGames.push(
      <div
        key={uniqueKey}
        className='userActiveLobbies card w-96 bg-neutral text-neutral-content self-center'
      >
        <div className='card-body items-center text-center'>
          <p className="card-title">{lobby_name}</p>
          <p className="text-xs">{game_mode}</p>
              {
              owner_id == Cookies.get('ssid') &&
              <div className='card-actions flex flex-end w-full'>
                <button className="btn btn-ghost btn-xs justify-self-end" onClick={() => {handleDelete(lobby_id)}}>Close Lobby</button>{' '}
                <div className="flex ">
                  <button className='btn btn-active' onClick={() => {handleEdit(game)}}>Edit</button>
                  <button className='btn btn-primary'>Start</button>
                </div>
              </div>
              }
        </div>
      </div>
    );
  });
  return (
    <div className='card bg-primary text-neutral-content'>
      <header className='p-2'>
        <p className='text-center'>Your Games</p>
      </header>
      {currentGames}
      <dialog id='my_modal_3' className='modal'>
          <div className='modal-box'>
            <h3 className='font-bold text-lg text-center mb-2'>EDIT LOBBY</h3>
            <div className='flex flex-col justify-center items-center'>
              <input
                type='text'
                placeholder='Lobby Name'
                name='lobby_name'
                value={currentLobby.lobby_name}
                onChange={handleInputChange}
                className='input input-bordered input-sm w-full max-w-xs mb-2 text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 !outline-none'
              />
            </div>
            <div className='rounded-lg border border-gray-300 p-4'>
              <div className='flex justify-center items-center'>
                <input
                  type='text'
                  placeholder='Game Mode'
                  name='game_mode'
                  value={currentLobby.game_mode}
                  onChange={handleInputChange}
                  className='input input-bordered input-sm w-full max-w-xs mb-2 mr-2 text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 !outline-none'
                />
                <input
                  type='text'
                  placeholder='User Rank'
                  name='rank'
                  value={currentLobby.rank}
                  onChange={handleInputChange}
                  className='input input-bordered input-sm w-full max-w-xs mb-2  text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 !outline-none'
                />
              </div>
              <input
                type='text'
                placeholder='Number of Players'
                name='max_players'
                value={currentLobby.max_players}
                onChange={handleInputChange}
                className='input input-bordered input-sm w-full max-w-xs mb-2 text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 !outline-none'
              />
              <input
                type='text'
                placeholder='Description/More Info'
                name='description'
                value={currentLobby.description}
                onChange={handleInputChange}
                className='input input-bordered input-sm w-full max-w-xs mb-2 text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 !outline-none'
              />
              <input
                type='text'
                placeholder='Discord Link'
                name='discord_link'
                value={currentLobby.discord_link}
                onChange={handleInputChange}
                className='input input-bordered input-sm w-full max-w-xs mb-2 text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 !outline-none'
              />
            </div>
            <div className='modal-action'>
              <form method='dialog'>
                {/* if there is a button in form, it will close the modal */}
                <button className='btn' onClick={() => handleEditLobby(currentLobby.lobby_id)}>
                  Create
                </button>
              </form>
            </div>
          </div>
        </dialog>
    </div>
    
  );
}
export default UserGames;
