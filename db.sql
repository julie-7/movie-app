
create Table actor
(
actorID  SERIAL PRIMARY KEY,
name TEXT,
birthday DATE,
nationality TEXT
);
CREATE TABLE earning
(
earningID SERIAL PRIMARY KEY,
MovieID TEXT,
country TEXT,
Revnue NUMERIC
);
CREATE TABLE Movie
(
MovieID TEXT,
Title TEXT,
Releaseyear YEAR,
Genre TEXT,
Duration NUMERIC
);
