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

INSERT INTO ndm.country (id, name) VALUES (RANDOM_UUID(), 'Spain');
INSERT INTO ndm.country (id, name) VALUES (RANDOM_UUID(), 'Italy');
INSERT INTO ndm.country (id, name) VALUES (RANDOM_UUID(), 'France');
INSERT INTO ndm.country (id, name) VALUES (RANDOM_UUID(), 'Portugal');
INSERT INTO ndm.country (id, name) VALUES (RANDOM_UUID(), 'Germany');
INSERT INTO ndm.country (id, name) VALUES (RANDOM_UUID(), 'Belgium');
INSERT INTO ndm.country (id, name) VALUES (RANDOM_UUID(), 'Netherlands');
INSERT INTO ndm.country (id, name) VALUES (RANDOM_UUID(), 'Austria');
INSERT INTO ndm.country (id, name) VALUES (RANDOM_UUID(), 'Bulgaria');
INSERT INTO ndm.country (id, name) VALUES (RANDOM_UUID(), 'Greece');
INSERT INTO ndm.country (id, name) VALUES (RANDOM_UUID(), 'Poland');
INSERT INTO ndm.country (id, name) VALUES (RANDOM_UUID(), 'Ireland');

INSERT INTO ndm.country (id, name) VALUES (RANDOM_UUID(), 'United Kingdom');
INSERT INTO ndm.country (id, name) VALUES (RANDOM_UUID(), 'United States');
INSERT INTO ndm.country (id, name) VALUES (RANDOM_UUID(), 'Canada');
