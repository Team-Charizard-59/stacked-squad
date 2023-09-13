import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

function UserGames ({ setUpdate, update }){
  const [displayData, setDisplayData] = useState([]);

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



  const handleEdit = () => {};

  const handleStart = () => {};
  const currentGames = [];
  displayData.forEach((game) => {
    const { lobby_name, game_name, game_mode, owner_id, lobby_id } = game;
    const uniqueKey = `game-${lobby_name}-${game_mode}`
    currentGames.push(
      <div
        key={uniqueKey}
        className='userActiveLobbies card w-96 bg-neutral text-neutral-content self-center mb-6 '
      >
        <div className='card-body items-center text-center  p-5'>
          <p className="card-title">{lobby_name}</p>
          <p className="text-xs">{game_mode}</p>
              {
              owner_id == Cookies.get('ssid') &&
              <div className='card-actions flex flex-end w-full justify-between'>
                <button className="btn btn-ghost btn-xs justify-self-end self-end" onClick={() => {handleDelete(lobby_id)}}>Close Lobby</button>{' '}
                <div className="flex justify-evenly">
                  <button className='btn btn-active mx-1'>Edit</button>
                  <button className='btn btn-primary ml-1'>Start</button>
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
        <p className='text-center text-2xl'>Your Games</p>
      </header>
      {currentGames}
    </div>
  );
}
export default UserGames;
