create database sequel;
use sequel;


create table suspense(
student_id int not null,
name varchar(50) not null
);


create table course(
student_id int not null,
course varchar(50) not null
);

create table trainee(
id int not null,
name varchar(50) not null,
manager_id int not null
);


create table student(
id int not null,
name varchar(50),
marks int not null,
city varchar(50)
);



insert into student values(101, 'maaz', 96, 'hyderabad');
insert into student values(102, 'adnan', 88, 'hyderabad');
insert into student values(103, 'amaan', 67, 'hyderabad');
insert into student values(104, 'sarfaraaz', 47, 'hyderabad');
insert into student values(105, 'feroze', 25, 'delhi');
insert into student values(106, 'abdul rahman', 34, 'bangalore');
insert into student values(107, 'mohtashim', 56, 'odisha');
insert into student values(108, 'riyaz', 59, 'mumbai');
insert into student values(109, 'khan', 79, 'lucknow');
insert into student values(110, 'nabeel', 19, 'hyderabad');



insert into trainee values(103,'maaz', 102);
insert into trainee values(103,'adnan', 101);
insert into trainee values(101,'maaz', 103);
insert into trainee values(104,'ali', 104);
insert into trainee values(102,'amaan', 103);



insert into suspense values(101, 'maaz');
insert into suspense values(102, 'baqtiyaar');
insert into suspense values(103, 'casey');


insert into course values(102, 'english');
insert into course values(105, 'math');
insert into course values(103, 'science');
insert into course values(107, 'computer science');


select * from student;
 
select *from suspense;
select *from suspense INNER JOIN course on suspense.student_id=course.student_id;
select *from suspense LEFT JOIN course on suspense.student_id=course.student_id;
select *from suspense RIGHT JOIN course on suspense.student_id=course.student_id;

select *from suspense LEFT JOIN course on suspense.student_id=course.student_id
UNION
select *from suspense RIGHT JOIN course on suspense.student_id=course.student_id;

select *from suspense LEFT JOIN course on suspense.student_id=course.student_id where course.student_id is null;

select *from suspense RIGHT JOIN course on suspense.student_id=course.student_id where suspense.student_id is null;

select * from trainee as a join trainee as b on a.id=b.id;

select name from suspense union select name from trainee;

select * from student where marks>67 and city='hyderabad';
select city, avg(marks) from student GROUP by city;


select name, marks from student where marks>(SELECT AVG(marks) FROM student);

select marks from student where marks%2=0;

select name, marks from student where rollno in(select marks from student where rollno%2=0);



