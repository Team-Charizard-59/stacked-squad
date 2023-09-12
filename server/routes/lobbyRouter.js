import express from 'express';
import lobbyController from '../controllers/lobbyController'

const router = express.Router();

// GET /lobby/
// Get all lobbies from database
router.get('/lobby/',
  lobbyController.getAllLobbies,
  (req,res) => res.status(200).json(res.locals.allLobbies));

// GET /lobby/:lobbyId
// Get a lobby from database by lobby ID
router.get('/lobby/:lobbyId',
  lobbyController.getLobbyByLobbyID,
  (req, res) => res.status(200));

// GET /lobby/:userId
// Get all lobbies of user
router.get('/lobby/:userId',
  lobbyController.getLobbiesOfUser,
  (req, res) => res.status(200));

// Get all lobbies created by user
// GET /lobby/createdBy/:userId
route.get('/lobby/createdBy/:userId',
  (lobbyController.getLobbiesCreatedByUser)
)

// POST /lobby/create
// Create a lobby
route.get('/lobby/create',
  (lobbyController.createLobby,
    (req, res) => { res.status(201)})
)

// PATCH /lobby/edit:lobbyId
// Edit a lobby
route.get('/lobby/edit:lobbyId',
  (lobbyController.editLobby)
)


// PATCH /lobby/join:userId
// Add a user to a lobby
route.get('/lobby/join:userId',
  (lobbyController.joinLobby)
)``


// DELETE /lobby/delete:lobbyId
// Delete a lobby
route.get('/lobby/delete:lobbyId',
  (lobbyController.deleteLobby)
)

export default router;