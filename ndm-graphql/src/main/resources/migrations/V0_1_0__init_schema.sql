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

CREATE TABLE ndm.article(
  id UUID PRIMARY KEY,
  title text,
  published timestamp,
  newspaper_id UUID,
  authors text[][],
  FOREIGN KEY (newspaper_id) REFERENCES ndm.newspaper(id)
);

INSERT INTO ndm.country (id, name) VALUES ('74c93bac-fc85-11e7-8450-fea9aa178066', 'Spain');
INSERT INTO ndm.country (id, name) VALUES ('74c93f6c-fc85-11e7-8450-fea9aa178066', 'Italy');
INSERT INTO ndm.country (id, name) VALUES ('74c940ca-fc85-11e7-8450-fea9aa178066', 'France');
INSERT INTO ndm.country (id, name) VALUES ('74c9430e-fc85-11e7-8450-fea9aa178066', 'Portugal');

INSERT INTO ndm.newspaper VALUES ('9e2b8c98-fc85-11e7-8450-fea9aa178066', 'El Mundo', 'http://www.elmundo.es', '74c93bac-fc85-11e7-8450-fea9aa178066');
INSERT INTO ndm.newspaper VALUES ('9e2b8ed2-fc85-11e7-8450-fea9aa178066', 'El Pais', 'http://www.pais.com', '74c93bac-fc85-11e7-8450-fea9aa178066');
INSERT INTO ndm.newspaper VALUES ('9e2b90f8-fc85-11e7-8450-fea9aa178066', 'El ABC', 'http://www.abc.es', '74c93bac-fc85-11e7-8450-fea9aa178066');
INSERT INTO ndm.newspaper VALUES ('9e2b936e-fc85-11e7-8450-fea9aa178066', 'El Economista', 'http://www.eleconomista.es', '74c93bac-fc85-11e7-8450-fea9aa178066');
INSERT INTO ndm.newspaper VALUES ('9e2b9544-fc85-11e7-8450-fea9aa178066', 'La Vanguardia', 'http://www.lavanguardia.es', '74c93bac-fc85-11e7-8450-fea9aa178066');

INSERT INTO ndm.article VALUES ('7ec1ebaa-fc89-11e7-8450-fea9aa178066', 'Un simple análisis de sangre es capaz de detectar ocho tipos de cáncer', '2018-01-18 22:00:00', '9e2b8c98-fc85-11e7-8450-fea9aa178066', '{"LAURA TARDON"}');
INSERT INTO ndm.article VALUES ('7ec1efce-fc89-11e7-8450-fea9aa178066', 'Dylan Farrow acusa a su padre Woody Allen: "Abusó sexualmente de mí"', '2018-01-18 22:00:00', '9e2b8c98-fc85-11e7-8450-fea9aa178066', '{"EFE"}');
INSERT INTO ndm.article VALUES ('7ec1f230-fc89-11e7-8450-fea9aa178066', '"Excepcional" calentamiento global: los tres últimos años son los más cálidos', '2018-01-18 22:00:00', '9e2b8c98-fc85-11e7-8450-fea9aa178066', '{"TERESA GUERRERO"}');
INSERT INTO ndm.article VALUES ('7ec1f492-fc89-11e7-8450-fea9aa178066', 'El Atlético había expulsado al ultra detenido, implicado en el caso Zabaleta', '2018-01-18 22:00:00', '9e2b8c98-fc85-11e7-8450-fea9aa178066', '{"LUIS F. DURAN"}');
