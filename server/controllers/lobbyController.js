import db from '../models/ssModels.js';
// Error creator
const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `lobbyController.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
    message: { err: `Error occurred in lobbyController.${method}. Check server logs for more details.` }
  };
};

const lobbyController = {};

// GET /lobby/
// Get all lobbies from database
lobbyController.getAllLobbies = (req, res, next) => {
  db.query(`SELECT * FROM lobbies ORDER BY lobby_id DESC LIMIT 100`)
    .then((data) => {
      console.log('ALL LOBBIES DATA', data) //TODO: delete when confirmed good
      res.locals.allLobbies = data.rows;
      next();
    })
    .catch((err) => next(createErr({
      method:'getAllLobbies',
      type: 'retrieving (GET) data',
      err: err
    })));
}

// // GET /lobby/:lobbyId
// // Get a lobby from database by lobby ID
// lobbyController.getLobbyByLobbyID = (req, res, next) => {

// }

// // GET /lobby/:userId
// // Get all lobbies of user
// lobbyController.getLobbiesOfUser = (req, res, next) => {

// }

// // GET /lobby/createdBy/:userId
// // Get all lobbies created by user
// lobbyController.getLobbiesCreatedByUser = (req, res, next) => {

// }

// POST /lobby/create
// Create a lobby
lobbyController.createLobby = (req, res, next) => {
  const { lobby_name, game_name, rank, game_mode, max_players, description, discord_link } = req.body;

  db.query(`INSERT INTO lobbies (lobby_name, game_name, rank, game_mode, max_players, description, discord_link) VALUES (${lobby_name}, ${game_name}, ${rank}, ${game_mode}, ${max_players}, ${description}, ${discord_link})`)
    .then(() => {
      console.log('SUCCESS: lobbyController.createLobby created new lobby');
      return next();
    })
    .catch((err) => next(createErr({
      method:'createLobby',
      type: 'inserting (POST) data',
      err: err
    })));
}



// // PATCH /lobby/edit:lobbyId
// // Edit a lobby
// lobbyController.editLobby = (req, res, next) => {

// }

// // PATCH /lobby/join:userId
// // Add a user to a lobby
// lobbyController.joinLobby = (req, res, next) => {

// }

// // DELETE /lobby/delete:lobbyId
// // Delete a lobby
// lobbyController.deleteLobby = (req, res, next) => {

// }

export default lobbyController;


// INSERT INTO lobbies (lobby_name, game_name, rank, game_mode, max_players, description, discord_link) VALUES ('Test Lobby', 'League of Legends', 'Iron', 'ARAM', 5, 'Come play', 'https://discord.gg/xR4cCAbR');

// INSERT INTO users_in_lobbies (user_id, lobby_id) VALUES (2, 1), (3, 1), (4, 1), (5, 1), (6, 1);