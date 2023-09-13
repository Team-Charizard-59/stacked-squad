import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

function UserGames() {
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
  }, []);

  const handleDelete = () => {};

  const handleEdit = () => {};

  const handleStart = () => {};
  const currentGames = [];
  displayData.forEach((game) => {
    const { lobby_name, game_name, game_mode } = game;
    const uniqueKey = `game-${lobby_name}-${game_mode}`;

    console.log('owner: ', game.owner_id);
    console.log('cookie', Cookies.get('ssid'));
    console.log('bool', game.owner_id == Cookies.get('ssid'));
    currentGames.push(
      // <div
      //   key={uniqueKey}
      //   className="border-black border-2 my-2 p-2 rounded-xl">
      //   <div className="">
      //     <header className="flex justify-between items-center pr-4 pb-2 font-medium">
      //       <p className="text-lg">{title}</p>
      //       <p className="text-xs">{mode}</p>
      //     </header>
      //   </div>
      //   <div className="flex gap-2">
      //     <button className="btn btn-active">Del</button>{' '}
      //     <button className="btn btn-active">Edit</button>{' '}
      //     <button className="btn btn-active">Start</button>{' '}
      //   </div>
      // </div>

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
            <div classNmae='flex '>
              <button className='btn btn-active'>Edit</button>
              <button className='btn btn-primary'>Start</button>
            </div>
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
