import Cookies from 'js-cookie';

export const createLobby = (newData) => {
    const newLobby = {...newData}
    console.log('LOGGING NEW LOBBY DATA:', newLobby)
    const body = JSON.stringify({
        owner_id: Cookies.get('ssid'),
        lobby_name: newLobby.title,
        game_name: newLobby.game,
        rank: newLobby.userRank,
        game_mode: newLobby.gameMode,
        max_players: newLobby.numPlayers,
        description: newLobby.description,
        discord_link: newLobby.discordLink
    })
    console.log('this is what body is in helper function: ', body);
    const lobby = fetch('/api/lobby/create', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body
      })
        .then((res) => res.json())
        .then((data) => {
            console.log("Created lobby:", data)
        })
        .catch((err) => console.log(`Error creating lobby ${err}`));
} 