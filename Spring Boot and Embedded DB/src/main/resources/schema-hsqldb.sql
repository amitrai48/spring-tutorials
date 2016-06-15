CREATE TABLE todos (
  id INTEGER IDENTITY PRIMARY KEY,
  completed bit(1) DEFAULT NULL,
  created_on TIMESTAMP DEFAULT NULL,
  title varchar(255) NOT NULL,
);