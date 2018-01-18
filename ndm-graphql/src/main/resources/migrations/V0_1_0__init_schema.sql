CREATE SCHEMA IF NOT EXISTS ndm;

CREATE TABLE ndm.country(
  id UUID PRIMARY KEY,
  name varchar(20)
);

CREATE TABLE ndm.newspaper(
  id UUID PRIMARY KEY,
  name varchar(100),
  link varchar(500),
  country_id UUID,
  FOREIGN KEY (country_id) REFERENCES ndm.country(id)
);

INSERT INTO ndm.country (id, name) VALUES (uuid_generate_v1(), 'Spain');
INSERT INTO ndm.country (id, name) VALUES (uuid_generate_v1(), 'Italy');
INSERT INTO ndm.country (id, name) VALUES (uuid_generate_v1(), 'France');
INSERT INTO ndm.country (id, name) VALUES (uuid_generate_v1(), 'Portugal');
INSERT INTO ndm.country (id, name) VALUES (uuid_generate_v1(), 'Germany');
INSERT INTO ndm.country (id, name) VALUES (uuid_generate_v1(), 'Belgium');
INSERT INTO ndm.country (id, name) VALUES (uuid_generate_v1(), 'Netherlands');
INSERT INTO ndm.country (id, name) VALUES (uuid_generate_v1(), 'Austria');
INSERT INTO ndm.country (id, name) VALUES (uuid_generate_v1(), 'Bulgaria');
INSERT INTO ndm.country (id, name) VALUES (uuid_generate_v1(), 'Greece');
INSERT INTO ndm.country (id, name) VALUES (uuid_generate_v1(), 'Poland');
INSERT INTO ndm.country (id, name) VALUES (uuid_generate_v1(), 'Ireland');

INSERT INTO ndm.country (id, name) VALUES (uuid_generate_v1(), 'United Kingdom');
INSERT INTO ndm.country (id, name) VALUES (uuid_generate_v1(), 'United States');
INSERT INTO ndm.country (id, name) VALUES (uuid_generate_v1(), 'Canada');
