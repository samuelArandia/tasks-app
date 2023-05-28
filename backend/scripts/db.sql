CREATE DATABASE IF NOT EXISTS tareasdb;

USE tareasdb;

CREATE TABLE IF NOT EXISTS tareas(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  PRIMARY KEY(id)
); 

INSERT INTO tareas (title, description) VALUES 
  ('task 1', 'some description'),
  ('task 2', 'some description');