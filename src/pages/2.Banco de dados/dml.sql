use catalogosFilmesDB;


-- carga inicial usuario
insert into tb_usuario (nm_usuario, ds_email, ds_senha)
	VALUES ('admin', 'admin@admin.com.br', '1234');
    
	-- efetuar login
	select id_usuario	id,
			nm_usuario	nome,
			ds_email	email
	from tb_usuario
	where ds_email   = 	'admin@admin.com.br'
	and ds_senha 	= 	'1234';
    
    
	-- cadastrar novo filmee
    insert into tb_filme (id_usuario, nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
			values (1, 'harry potter e a camada Secreta', 'filme bem tops', 8.2, '2010-05-03', false); 
            
		
        -- altera o filme
        
        update tb_filme
        set nm_filme  = 'Harry potter e a pedra  filosofal',
			ds_sinopse = 'Filme bens topss',
            vl_avaliacao = 9.5,
            dt_lancamento = '2009-06-05',
            bt_disponivel = true
            where id_filme = 1;
            
            -- deleta o filme
		delete from tb_filme 
				where id_filme = 1;
                
		-- consultar todos os filmes 
        select id_filme 	id,
				nm_filme	nome,
                vl_avaliacao avaliacao,
                dt_lancamento lancamento,
                bt_disponivel	disponivel
                from tb_filme;
                
                -- CONSULTAR FILMES POR NOME
                select id_filme 	id,
				nm_filme	nome,
                vl_avaliacao avaliacao,
                dt_lancamento lancamento,
                bt_disponivel	disponivel
                from tb_filme
                where nm_filme 		like '%a%';
                
                
                select id_filme 	id,
						nm_filme	nome,
                        vl_avaliacao avaliacao,
                        ds_sinopse 	 sinopsem,
                        dt_lancamento	lancamento,
                        bt_disponivel	disponivel
                        from tb_filme
                        where id_filme  like 1;
                