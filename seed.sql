DROP TABLE IF EXISTS STUDENTS;

CREATE TABLE STUDENTS (
  id SERIAL PRIMARY KEY,
  FNAME VARCHAR(255) NOT NULL,
  LNAME VARCHAR(255) NOT NULL,
  EMAIL VARCHAR(255) NOT NULL,
  BIRTHDATE date
);

INSERT INTO STUDENTS (FNAME, LNAME, EMAIL, BIRTHDATE) VALUES ('Marsha', 'Storm', 'storm@yahoo.com', '2004-06-28');
INSERT INTO STUDENTS (FNAME, LNAME, EMAIL, BIRTHDATE) VALUES ('David', 'Levi', 'levi@yahoo.com', '2005-01-17');
INSERT INTO STUDENTS (FNAME, LNAME, EMAIL, BIRTHDATE) VALUES ('Henry', 'Markanson', 'hmark@gmail.com', '2002-05-29');
INSERT INTO STUDENTS (FNAME, LNAME, EMAIL, BIRTHDATE) VALUES ('Yves', 'Clinton', 'yve1@aol.com', '2003-08-03');
INSERT INTO STUDENTS (FNAME, LNAME, EMAIL, BIRTHDATE) VALUES ('Laura', 'Twenston', 'lt0458@gmail.com', '2001-07-19');
INSERT INTO STUDENTS (FNAME, LNAME, EMAIL, BIRTHDATE) VALUES ('Michelle', 'Lichenstein', 'michl@yahoo.com', '2002-11-04');
INSERT INTO STUDENTS (FNAME, LNAME, EMAIL, BIRTHDATE) VALUES ('Alan', 'Mulaney', 'mulaneya@gmail.com', '2005-10-10');
INSERT INTO STUDENTS (FNAME, LNAME, EMAIL, BIRTHDATE) VALUES ('Matthew', 'Diop', 'diopm@gmail.com', '2004-10-15');
INSERT INTO STUDENTS (FNAME, LNAME, EMAIL, BIRTHDATE) VALUES ('Luke', 'Rain', 'lukey@yahoo.com', '2003-12-23');
INSERT INTO STUDENTS (FNAME, LNAME, EMAIL, BIRTHDATE) VALUES ('John', 'Stamis', 'jstamis2#gmail.com', '2002-03-14');
INSERT INTO STUDENTS (FNAME, LNAME, EMAIL, BIRTHDATE) VALUES ('Linda', 'Law', 'doublel@gmail.com',
'2003-04-28');
INSERT INTO STUDENTS (FNAME, LNAME, EMAIL, BIRTHDATE) VALUES ('Stephanie', 'Suares', 'stephie3@yahoo.com', '2003-02-14');
INSERT INTO STUDENTS (FNAME, LNAME, EMAIL, BIRTHDATE) VALUES ('Andrea', 'Mentis', 'mentisa@aol.com', '2004-03-14');
INSERT INTO STUDENTS (FNAME, LNAME, EMAIL, BIRTHDATE) VALUES ('Steven', 'Hulgrove', 'shsh4@aol.com', '2004-08-15');








