INSERT INTO lobbies (lobby_name, owner_id, game_name, rank, game_mode, curr_players, max_players, description, discord_link)
VALUES
('League of Legumes?', 1, 'League of Legends', 'Bronze', 'ARAM', 5, 5, 'Only noobs allowed', 'https://discord.gg/xR4cCAbR'),
('Let''s play Fortnite!', 1, 'Fortnite', 'Unreal', 'No Build', 2, 4, 'fortnitefortnitefortnite', 'https://discord.gg/xR4cCAbR'),
('I Hecking Love League of Legends!', 2, 'League of Legends', 'Gold', 'Solo/Duo', 1, 2, 'Let''s climb', 'https://discord.gg/xR4cCAbR'),
('LF > Kittens', 3, 'League of Legends', 'Iron', 'ARAM', 4, 5, 'wats your height', 'https://discord.gg/xR4cCAbR');



INSERT INTO users (username, password)
VALUES
('woobwi', 'woobster16'),
('gomdave', 'hunter2'),
('kbulau', 'justAKidneyStone420'),
('hernan_classico', 'badbunnyboy2020'),
('alisajin', 'glizzy5eva'),
('kittenMagnet', 'claytongilbertPW123'),
('claytongilbert', 'gottaCatchThemAll(Kittens)'),
('anchovysilicon', ':webcam:');

INSERT INTO users_in_lobbies (user_id, lobby_id)
VALUES (1, 1), (1, 2), (2, 3), (3, 4), (2, 1), (3, 1), (4, 1), (5, 1), (6, 4), (7, 4), (8, 4), (5, 2);