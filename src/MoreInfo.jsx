import React from 'react'

function MoreInfo() {
  return (
    <dialog id="more_info_modal" className="modal">
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
  )
}

export default MoreInfo

