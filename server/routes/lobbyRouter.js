import express from 'express';
import lobbyController from '../controllers/lobbyController.js'

const router = express.Router();

// GET /lobby/
// Get all lobbies from database
router.get('/',
  lobbyController.getAllLobbies,
  (req, res) => res.status(200).json(res.locals.allLobbies)
);

// GET /lobby/:lobbyId
// Get a lobby from database by lobby ID
router.get('/:lobbyId',
  lobbyController.getLobbyByLobbyID,
  (req, res) => res.status(200).json(res.locals.lobbyData));

// // GET /lobby/:userId
// // Get all lobbies user is participating in
// router.get('/user/:userId',
//   lobbyController.getLobbiesOfUser,
//   (req, res) => res.status(200).json(res.locals.lobbiesOfUser));

// GET /lobby/createdBy/:userId
// Get all lobbies CREATED by user
// router.get('/lobby/createdBy/:userId',
//   lobbyController.getLobbiesCreatedByUser,
//   (req, res) => res.status(200).json(res.locals.createdLobbies)
// )

// POST /lobby/create
// Create a lobby
router.post('/create',
  lobbyController.createLobby,
    (req, res) => {res.sendStatus(201)}
)

// PATCH /lobby/edit/:lobbyId
// Edit a lobby
router.patch('/edit/:lobbyId',
  lobbyController.editLobby,
    (req, res) => {res.status(200).json({})}
)


// // // PATCH /lobby/join/:userId
// // // Add a user to a lobby
// router.patch('/join/:userId',
//   lobbyController.joinLobby,
//     (req, res) => {res.status(200).json({})}
// )


// // DELETE /lobby/delete/:lobbyId
// // Delete a lobby
// router.delete('/delete/:lobbyId',
//   lobbyController.deleteLobby,
//     (req, res) => {res.status(200).json({})}
// )

export default router;