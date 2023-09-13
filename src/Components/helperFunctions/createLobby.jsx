

export const createLobby = (newData) => {
    const newLobby = {newData}
    const body = JSON.stringify({
        lobby_name: newLobby.title,
        game_name: newLobby.game,
        rank: newLobby.userRank,
        game_mode: newLobby.gameMode,
        max_players: newLobby.numPlayers,
        description: newLobby.description,
        discord_link: newLobby.discordLink
    })
    const lobby = fetch('http://localhost:3000/lobby', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body
      })
        .then((res) => res.json())
        .then((data) => {
            console.log("Here", data)
          return { data };
        })
        .catch((err) => console.log(`Error creating lobby ${err}`));
      return lobby;//returns _id in addition to the project object from the document
} 