create database phantom;
use phantom;

create table blain (
id int primary key,
city varchar(50),
age int,
constraint age_check check(age>=18 and  city='delhi')
);


create table student(
rollno int not null,
name varchar(50) unique,
marks int not null,
grade varchar(1),
city varchar(50)
);



create table transaction(
customer_id int not null,
customer varchar(50) not null,
mode varchar(50) not null,
city varchar(50) not null
);




create table trainee (
id INT PRIMARY KEY,
name VARCHAR(50)
);


create table teacher(
id INT not null,
name VARCHAR(50) unique,
dept_id INT,
FOREIGN KEY (dept_id) REFERENCES trainee(id)
)ENGINE=InnoDB;




create table intern(
ID int PRIMARY KEY,
NAME VARCHAR(50)
);



create table tech(
ID INT not null,
NAME VARCHAR(50),
dept_id INT not null,
FOREIGN KEY (dept_id) REFERENCES intern(ID)
ON UPDATE CASCADE
ON DELETE CASCADE
);


drop table tech;






insert into intern  values(101, 'maaz');
insert into intern  values(102, 'Adnan');
insert into intern  values(103, 'Ali');

insert into tech values(101,'fayaaz', 102);
insert into tech values(104, 'faizan', 103);

UPDATE intern set id=105 where id=103;






insert into student values(14,'maaz',87,'A','HYDERABAD');
insert into student values(15,'feroze',67,'C','HYDERABAD');
insert into student values(16,'baqtiyaar',52,'D','HYDERABAD');
insert into student values(17,'adnan',44,'E','HYDERABAD');
insert into student values(18,'ali',73,'C','HYDERABAD');
insert into student values(19,'amaan',90,'A','HYDERABAD');
insert into student values(20,'saulat',21,'F','HYDERABAD');
insert into student values(21,'mirza',45,'E','HYDERABAD');
insert into student values(22,'fasahat',57,'D','HYDERABAD');
insert into student values(23,'taaha',82,'A','HYDERABAD');
insert into student values(23,'rounak',62,'C','Mumbai');



insert into transaction values(101, 'olivia', 'Netbanking', 'Portland');
insert into transaction values(102, 'Ethan', 'Credit card', 'Miami');
insert into transaction values(103, 'Maya', 'Credit card', 'seattle');
insert into transaction values(104, 'liam', 'Netbanking', 'Denver');
insert into transaction values(105, 'sophia', 'Credit card', 'New orleans');
insert into transaction values(106, 'Caleb', 'Debit Card', 'Minneapolis');
insert into transaction values(107, 'Ava', 'Debit Card', 'Phoenix');
insert into transaction values(108, 'Lucas', 'Netbanking', 'Boston');
insert into transaction values(109, 'isabella', 'Netbanking', 'Nashville');
insert into transaction values(110, 'Jackson', 'Credit card', 'Boston');


SET SQL_SAFE_UPDATES=0;

UPDATE student SET grade='o' WHERE grade='A';
UPDATE student SET grade='B' WHERE marks>70;
UPDATE student SET marks=marks+1;
UPDATE student SET grade='F' where marks<50;
DELETE from student where marks<50;


ALTER TABLE student
ADD COLUMN Teacher int;

ALTER TABLE student
DROP COLUMN rollno;


ALTER TABLE shaagird
RENAME to student;


ALTER TABLE shaagird
CHANGE name  names23 VARCHAR(50);


ALTER TABLE shaagird
MODIFY marks varchar(50);



select * from intern;
select * from tech;

select * from shaagird;
select * from student;
select rollno name from student;
select rollno from student;
select DISTINCT grade from student;
select * from student where marks>70;
select * from student where city='Mumbai';
select * from student where marks>50 and city='Mumbai';
select * from student where marks+10>80;
select * from student where marks=44;
select * from student where marks>50 or city='HYDERABAD';
select * from student where city in  ('delhi','HYDERABAD');-- it will select any city in in operator 
select * from student where city not in  ('manipur', 'pune');-- it will select which is not in manipur or pune
select * from student limit 4;-- it will print data upto 4 students
select * from student ORDER BY marks ASC;
select * from student ORDER BY marks DESC;
select * from student ORDER BY marks DESC limit 5;
select MAX(marks) from student;
select MIN(marks) from student;
select AVG(marks) from student;
select COUNT(marks) from student;
select city, COUNT(marks) from student GROUP BY city;
select city, AVG(rollno) from student GROUP BY city;
select name, MAX(marks) from student GROUP BY name;
select city, AVG(marks) from student GROUP BY city;
select city, count(marks) from student GROUP BY city having max(marks)>60;
select city from student where grade='A' GROUP BY city having max(marks)>80 ORDER BY city DESC;


select * from transaction;

select mode, Count(customer) from transaction GROUP BY mode;


TRUNCATE TABLE shaagird;

