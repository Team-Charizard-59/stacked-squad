DROP TABLE IF EXISTS users, lobbies, users_in_lobbies, sessions;

CREATE TABLE sessions (
user_id varchar(255) UNIQUE 
cookie_id varchar(255) UNIQUE NOT NULL
);

CREATE TABLE users (
  user_id serial PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(50) NOT NULL
  profile_picture BYTEA
);

CREATE TABLE lobbies (
  lobby_id serial PRIMARY KEY,
  lobby_name VARCHAR(100) NOT NULL,
  owner_id serial,
  game_name VARCHAR(50) NOT NULL,
  rank VARCHAR(20),
  game_mode VARCHAR(20),
  curr_players INT NOT NULL CHECK (curr_players <= max_players),
  max_players INT NOT NULL,
  description VARCHAR(200),
  discord_link VARCHAR(50)
);

/*
  Join Table for users table and lobbies table
*/
CREATE TABLE users_in_lobbies (
  user_id serial,
  lobby_id serial,
  PRIMARY KEY (user_id, lobby_id),
  FOREIGN KEY (user_id)
    REFERENCES users (user_id),
  FOREIGN KEY (lobby_id)
    REFERENCES lobbies (lobby_id)
);

