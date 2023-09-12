import db from '../models/ssModels';

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

}

// GET /lobby/:lobbyId
// Get a lobby from database by lobby ID
lobbyController.getLobbyByLobbyID = (req, res, next) => {

}

// GET /lobby/:userId
// Get all lobbies of user
lobbyController.getLobbiesOfUser = (req, res, next) => {

}

// GET /lobby/createdBy/:userId
// Get all lobbies created by user
lobbyController.getLobbiesOfUser = (req, res, next) => {

}

// POST /lobby/create
// Create a lobby
lobbyController.createLobby = (req, res, next) => {

}

// PATCH /lobby/edit:lobbyId
// Edit a lobby
lobbyController.editLobby = (req, res, next) => {

}

// PATCH /lobby/join:userId
// Add a user to a lobby
lobbyController.joinLobby = (req, res, next) => {

}

// DELETE /lobby/delete:lobbyId
// Delete a lobby
lobbyController.deleteLobby = (req, res, next) => {

}

export default lobbyController;