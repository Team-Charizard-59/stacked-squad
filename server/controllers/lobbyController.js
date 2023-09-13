import db from '../models/ssModels.js';
// Error creator
const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `lobbyController.${method} ${type}: ERROR: ${
      typeof err === 'object' ? JSON.stringify(err) : err
    }`,
    message: {
      err: `Error occurred in lobbyController.${method}. Check server logs for more details.`,
    },
  };
};

const lobbyController = {};

// GET /lobby/
// Get all lobbies from database
lobbyController.getAllLobbies = (req, res, next) => {
  db.query(`SELECT * FROM lobbies ORDER BY lobby_id DESC LIMIT 100`)
    .then((data) => {
      res.locals.allLobbies = data.rows;
      return next();
    })
    .catch((err) =>
      next(
        createErr({
          method: 'getAllLobbies',
          type: 'retrieving (GET) data',
          err: err,
        })
      )
    );
};

// // GET /lobby/:lobbyId
// // Get a lobby from database by lobby ID
lobbyController.getLobbyByLobbyID = (req, res, next) => {
  const { lobbyId } = req.params;

  db.query(`SELECT * FROM lobbies WHERE lobby_id = ${lobbyId}`)
    .then((data) => {
      res.locals.lobbyData = data.rows[0];
      return next();
    })
    .catch((err) =>
      next(
        createErr({
          method: 'getLobbyByLobbyID',
          type: 'retrieving (GET) data',
          err: err,
        })
      )
    );
};

// // GET /lobby/:userId
// // Get all lobbies of user
lobbyController.getLobbiesOfUser = (req, res, next) => {
  const { userId } = req.params;

  db.query(`
    SELECT
        lobbies.lobby_id AS lobby_id,
        lobby_name,
        game_name,
        rank,
        game_mode,
        curr_players,
        max_players,
        description,
        discord_link
    FROM
        lobbies
    LEFT JOIN
        users_in_lobbies ON lobbies.lobby_id = users_in_lobbies.lobby_id
    LEFT JOIN
        users ON users_in_lobbies.user_id = users.user_id
    WHERE
        users.user_id = $1
    `, [userId])
    .then((data) => {
      // console.log('Got lobbies of user: ', data.rows);
      res.locals.lobbiesOfUser = data.rows;
      return next();
    })
    .catch((err) =>
      next(
        createErr({
          method: 'getLobbiesOfUser',
          type: 'retrieving (GET) data',
          err: err,
        })
      )
    );
};

// // GET /lobby/createdBy/:userId
// // Get all lobbies created by user
lobbyController.getLobbiesCreatedByUser = (req, res, next) => {
  const { userId } = req.params;

  db.query(`SELECT * FROM lobbies WHERE owner_id = ${userId}`)
  .then((data) => {
    res.locals.lobbyData = data.rows;
    return next();
  })
  .catch((err) =>
    next(
      createErr({
        method: 'getLobbiesCreatedByUser',
        type: 'retrieving (GET) data',
        err: err,
      })
    )
  );
}

// POST /lobby/create
// Create a lobby
lobbyController.createLobby = (req, res, next) => {
  const {
    lobby_name,
    game_name,
    rank,
    game_mode,
    max_players,
    description,
    discord_link,
  } = req.body;
  // db.query(`INSERT INTO lobbies (lobby_name, game_name, rank, game_mode, max_players, description, discord_link) VALUES ('${lobby_name}, ${game_name}, ${rank}, ${game_mode}, ${max_players}, ${description}, ${discord_link})`)

  const queryString = `
  INSERT INTO lobbies (lobby_name, game_name, rank, game_mode, curr_players, max_players, description, discord_link)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;

  const values = [
    lobby_name,
    game_name,
    rank,
    game_mode,
    1,
    max_players,
    description,
    discord_link,
  ];

  db.query(queryString, values)
    .then(() => {
      return next();
    })
    .catch((err) =>
      next(
        createErr({
          method: 'createLobby',
          type: 'inserting (POST) data',
          err: err,
        })
      )
    );
};

// // PATCH /lobby/edit/:lobbyId
// // Edit a lobby
lobbyController.editLobby = (req, res, next) => {
  const { lobbyId } = req.params;
  const { lobby_name, rank, game_mode, max_players, description, discord_link } = req.body;

  db.query(`
  UPDATE lobbies
  SET lobby_name = $1, rank = $2, game_mode = $3, max_players = $4, description = $5, discord_link = $6
  WHERE lobby_id = $7
    `, [lobby_name, rank, game_mode, max_players, description, discord_link, lobbyId])
    .then((data) => {
      return next();
    })
    .catch((err) =>
      next(
        createErr({
          method: 'editLobby',
          type: 'updating (PATCH) data',
          err: err,
        })
      )
    );
}

// PATCH /lobby/join/:userId
// Add a user to a lobby
lobbyController.joinLobby = (req, res, next) => {
  const { userId } = req.params;
  const { lobbyId, curr_players } = req.body;

  db.query(`
  INSERT INTO users_in_lobbies (user_id, lobby_id) VALUES ($1, $2)
    `, [userId, lobbyId])
    .then((data) => {
      db.query(`
      UPDATE lobbies
      SET curr_players = $1
      WHERE lobby_id = $2
        `, [curr_players + 1, lobbyId])
        .then((data) => {
          return next();
        })
        .catch((err) =>
          next(
            createErr({
              method: 'joinLobby',
              type: 'updating (PATCH) data',
              err: err,
            })
          )
        );
    })
    .catch((err) =>
      next(
        createErr({
          method: 'joinLobby',
          type: 'inserting (PATCH) data',
          err: err,
        })
      )
    );
}

// // DELETE /lobby/delete/:lobbyId
// // Delete a lobby
lobbyController.deleteLobby = (req, res, next) => {
  const { lobbyId } = req.params;

  db.query(`
  DELETE FROM users_in_lobbies WHERE lobby_id = ${lobbyId};
  DELETE FROM lobbies WHERE lobby_id = ${lobbyId}
    `)
    .then((data) => {
      return next();
    })
    .catch((err) =>
      next(
        createErr({
          method: 'deleteLobby',
          type: 'deleting (DELETE) data',
          err: err,
        })
      )
    );
}

export default lobbyController;

