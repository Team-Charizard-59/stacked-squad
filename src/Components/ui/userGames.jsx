
function UserGames (){
  const data = [{title: 'League', mode: 'Tryhard'}, {title: 'Fortnite', mode: 'For Fun'}]
  const currentGames = []
  data.forEach((game) => {
    const title = game.title;
    const mode = game.mode;
    const uniqueKey = `game-${title}-${mode}`
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
        className='lobbyContainer card w-96 bg-neutral text-neutral-content m-5 '>
        <div className='card-body items-center text-center'>
          <p className="card-title">{title}</p>
          <p className="text-xs">{mode}</p>
            <div className='card-actions flex flex-end w-full'>
              <button className="btn btn-ghost btn-xs justify-self-end">Close Lobby</button>{' '}
              <div classNmae="flex ">
                <button className='btn btn-active'>Edit</button>
                <button className='btn btn-primary'>Start</button>
              </div>
            </div>
        </div>
      </div>
    );
  })
  return (
    <div className="userGamesContainer border-black border-2 pt-2 rounded-xl p-4">
        <header className="p-2">
          <p className="text-center">Your Games</p>
        </header>
        {currentGames}
    </div>
  )
}

export default UserGames