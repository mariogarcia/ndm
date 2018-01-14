CREATE SCHEMA IF NOT EXISTS ndm;

CREATE TABLE ndm.country(
  id UUID PRIMARY KEY,
  name varchar(20)
);

CREATE TABLE ndm.newspaper(
  id UUID PRIMARY KEY,
  name varchar(100),
  link varchar(500),
  country_id INT,
  FOREIGN KEY (country_id) REFERENCES ndm.country(id)
);
