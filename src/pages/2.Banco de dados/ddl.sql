create database catalogoFilmesDB;
USE catalogoFilmesDB;

CREATE TABLE tb_usuario (
	id_usuario	INT PRIMARY KEY AUTO_INCREMENT,
    nm_usuario	VARCHAR(200),
    ds_email	VARCHAR(200),
    ds_senha 	VARCHAR(20)
);


CREATE TABLE tb_filme (
	id_filme	 INT PRIMARY KEY AUTO_INCREMENT,
	id_usuario	 INT,
	nm_filme	 VARCHAR(200),
	ds_sinopse 	 VARCHAR(200),
    vl_avaliacao DECIMAL(15,2),
	dt_lancamento DATE,
    bt_disponivel boolean,
     IMG_filme     varchar(900),
    foreign key (id_usuario) references tb_usuario (id_usuario)
);