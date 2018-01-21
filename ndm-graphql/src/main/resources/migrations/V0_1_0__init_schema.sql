CREATE SCHEMA IF NOT EXISTS ndm;

CREATE TABLE ndm.country(
  id UUID PRIMARY KEY,
  published date,
  name varchar(20)
);

CREATE TABLE ndm.words_by_country(
  id UUID PRIMARY KEY,
  published timestamp,
  words hstore,
  country_id UUID,
  FOREIGN KEY (country_id) REFERENCES ndm.country(id)
);

CREATE TABLE ndm.newspaper(
  id UUID PRIMARY KEY,
  published date,
  name varchar(100),
  link varchar(500),
  country_id UUID,
  FOREIGN KEY (country_id) REFERENCES ndm.country(id)
);

CREATE TABLE ndm.article(
  id UUID PRIMARY KEY,
  title text,
  link text,
  category text,
  published timestamp,
  newspaper_id UUID,
  authors text[][],
  FOREIGN KEY (newspaper_id) REFERENCES ndm.newspaper(id)
);
