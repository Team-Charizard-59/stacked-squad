function Feed() {
  const data = [
    { game: 'league', mode: 'tryhard' },
    { game: 'fortnite', mode: 'for fun' },
    { game: 'valorant', mode: 'grind' },
    { game: 'call of duty', mode: 'for fun' },
  ];
  const lobbies = [];
  let rooms = 1;
  data.forEach((currentLobbies) => {
    const lobbyNumber = rooms++;
    const game = currentLobbies.game;
    const mode = currentLobbies.mode;
    lobbies.push(
      // <div className="lobbyContainer m-2 p-4 border-black border-2 rounded-3xl flex justify-between items-center">
      // <p>
      //   Lobby {lobbyNumber} [ {game} <span className="text-xs"> mode: {mode}</span> ]{' '}
      // </p>
      //   <div className="flex gap-2">
      //     <button className="btn">More Info</button>
      //     <button className="btn">Join</button>
      //   </div>
      // </div>

      <div className='lobbyContainer card w-96 bg-neutral text-neutral-content m-5 '>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>Lobby {lobbyNumber}</h2>
          <p>
          [ {game}{' '}
            <span className='text-xs'> mode: {mode}</span> ]{' '}
          </p>
          <div className='card-actions justify-end'>
            <button className='btn btn-ghost'>More Info</button>
            <button className='btn btn-primary'>Join</button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className='feedContainer w-full border-black border-2 rounded-xl'>
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
            <h3 className='font-bold text-lg'>Hello!</h3>
            <p className='py-4'>
              Press ESC key or click the button below to close
            </p>
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
          onClick={() => document.getElementById('my_modal_1').showModal()}
        >
          Create Lobby
        </button>
        <dialog id='my_modal_1' className='modal'>
          <div className='modal-box'>
            <h3 className='font-bold text-lg'>Hello!</h3>
            <p className='py-4'>
              Press ESC key or click the button below to close
            </p>
            <div className='modal-action'>
              <form method='dialog'>
                {/* if there is a button in form, it will close the modal */}
                <button className='btn'>Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <div>{lobbies}</div>
    </div>
  );
}

export default Feed;
