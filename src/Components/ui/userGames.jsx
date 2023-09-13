import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

function UserGames({ update }) {
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

  const handleDelete = () => {};

  const handleEdit = () => {};

  const handleStart = () => {};
  const currentGames = [];
  displayData.forEach((game) => {
    const { lobby_name, game_name, game_mode, owner_id } = game;
    const uniqueKey = `game-${lobby_name}-${game_mode}`;
    currentGames.push(
      <div
        key={uniqueKey}
        className='userActiveLobbies card w-96 bg-neutral text-neutral-content self-center'
      >
        <div className='card-body items-center text-center'>
          <p className='card-title'>{lobby_name}</p>
          <p className='text-xs'>{game_mode}</p>
          <div className='card-actions flex flex-end w-full'>
            <button className='btn btn-ghost btn-xs justify-self-end'>
              Close Lobby
            </button>{' '}
            {owner_id == Cookies.get('ssid') && (
              <div className='flex '>
                <button className='btn btn-active'>Edit</button>
                <button className='btn btn-primary'>Start</button>
              </div>
            )}
          </div>
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
    </div>
  );
}

export default UserGames;
