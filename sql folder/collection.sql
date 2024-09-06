create database temporary;
drop database temporary;
drop database temporary2;
create database temporary2;
create database college;
use college;

create database if not exists college;
drop database if exists company;

create table student (
id INT PRIMARY KEY,
name VARCHAR(50),
age INT NOT NULL
);

INSERT INTO STUDENT VALUES(1,  'MAAZ', 22);
INSERT INTO STUDENT VALUES(2, 'ADNAN', 23);

SELECT *FROM STUDENT;
SHOW databases;
SHOW TABLES;