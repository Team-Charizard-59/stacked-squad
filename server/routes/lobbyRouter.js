import express from 'express';
import lobbyController from '../controllers/lobbyController.js'

const router = express.Router();

// GET /lobby/
// Get all lobbies from database
router.get('/',
  lobbyController.getAllLobbies,
  (req, res) => res.status(200).json(res.locals.allLobbies)
);

// // GET /lobby/:lobbyId
// // Get a lobby from database by lobby ID
router.get('/:lobbyId',
  lobbyController.getLobbyByLobbyID,
  (req, res) => res.status(200).json(res.locals.lobbyData));

// // GET /lobby/:userId
// // Get all lobbies of user
router.get('/:userId',
  lobbyController.getLobbiesOfUser,
  (req, res) => res.status(200).json(res.locals.lobbiesOfUser));

// // Get all lobbies created by user
// // GET /lobby/createdBy/:userId
// router.get('/lobby/createdBy/:userId',
//   (lobbyController.getLobbiesCreatedByUser)
// )

// POST /lobby/create
// Create a lobby
router.get('/create',
  (lobbyController.createLobby,
    (req, res) => { res.status(201)})
)

// // PATCH /lobby/edit:lobbyId
// // Edit a lobby
// router.get('/lobby/edit:lobbyId',
//   (lobbyController.editLobby)
// )


// // PATCH /lobby/join:userId
// // Add a user to a lobby
// router.get('/lobby/join:userId',
//   (lobbyController.joinLobby)
// )``


// // DELETE /lobby/delete:lobbyId
// // Delete a lobby
// router.get('/lobby/delete:lobbyId',
//   (lobbyController.deleteLobby)
// )

export default router;