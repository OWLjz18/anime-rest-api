CREATE DATABASE animes_api;

\c animes_api postgres

CREATE TABLE animes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  episodes INT NOT NULL
);

INSERT INTO animes (name, episodes)
VALUES
  ('Angel Beats', 13),
  ('Toradora', 24);
