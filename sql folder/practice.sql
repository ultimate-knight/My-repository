CREATE DATABASE xyz;
USE xyz;

CREATE TABLE employee (
   --  ID INT PRIMARY KEY,
    NAME VARCHAR(50),
    SALARY INT NOT NULL,
    PRIMARY KEY(ID)
);

ALTER TABLE employee
CHANGE COLUMN SALARY AGE INT NOT NULL;

create table student (
	id int unique,
    name char(50),
    age int not null,
    primary key(name, id)
);


create table temporary25(
	id int unique,
    name char(50),
    age int not null,
    primary key(name, id)
);


create table temp90(
cust_id int,
foreign key (cust_id) references temporary25(id)
);


create table camp34(
id int not null,
salary int default 34000);







CREATE TABLE city (
    id INT PRIMARY KEY,
    city VARCHAR(50),
    age INT,
    CONSTRAINT age_check CHECK (city <> 'delhi' OR age >= 18)
);








INSERT INTO employee VALUES (1, 'maaz', 25);
INSERT INTO employee VALUES (2, 'adnan', 35);
INSERT INTO employee VALUES (3, 'ali', 65);
INSERT INTO employee VALUES (4, 'sarfaraaz', 70);
INSERT INTO employee VALUES (5, 'mohtashim', 80);
INSERT INTO employee VALUES (6, 'amaan', 90);
INSERT INTO employee VALUES (7, 'shahbaaz', 95);
INSERT INTO employee VALUES (8, 'murtaza', 80);
INSERT INTO employee VALUES (9, 'huzaifa', 87);
INSERT INTO employee VALUES (10, 'abdul rahman', 55);


insert into student values(101);
insert into student values(101);

insert into temporary25 values(1, 'maaz', 22);
insert into temporary25 values(2, 'adnan', 22);
insert into temporary25 values(1, 'maaz', 22);
insert into temporary25 values(3, 'maaz', 22);

INSERT INTO albain VALUES (25, 'baqtiyaar', 24);


insert into temp90 values(90,77);
insert into temp90 values(89);
insert into temp90 values(77);

insert into camp34(id) values(123);

SELECT * FROM employee;

SELECT * FROM camp34;

