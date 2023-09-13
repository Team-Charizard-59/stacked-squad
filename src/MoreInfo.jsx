import React from 'react'

function MoreInfo({ lobbyInfo }) {
    const { lobby_id, lobby_name, game_name, game_mode, curr_players, max_players, description, discord_link } = lobbyInfo;
  return (
    <dialog id={`moreInfo-${lobby_id}`} className="modal">
<div className="modal-box pb-10">
<button className="btn text-xl" onClick={()=>{document.getElementById(`moreInfo-${lobby_id}`).close()}}>X</button>
  <h2 className="font-bold text-[30px] text-center mb-2">{lobby_name}</h2>
<div className="flex flex-col justify-center items-center">
  <div><span className='font-extrabold'>Game:</span> {game_name}</div>
  <div><span className='font-extrabold'>Mode:</span> {game_mode}</div>
  <div><span className='font-extrabold'>Max Players: </span>{max_players}</div>
  <div>{description}</div>
  <div>{discord_link}</div>
</div>
  </div>
  <div className="modal-action">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      
    </form>
  </div>
</dialog>
  )
}

export default MoreInfo

