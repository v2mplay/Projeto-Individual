create database projetoindividual;
use projetoindividual;


create table usuario (
idusuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45));

select * from usuario;

create table quiz1 (
idquiz1 int primary key auto_increment,
totalacertos INT,
totalerros INT,
dtQuiz DATETIME,
fkUsuario int, foreign key (fkUsuario) references usuario(idusuario));

select * from quiz1;

create table quiz2 (
idquiz1 int primary key auto_increment,
gostaram INT,
recomendaria INT,
naogostou int,
naorecomendaria int,
dtQuiz DATETIME,
fkUsuario int, foreign key (fkUsuario) references usuario(idusuario));

select * from quiz2;