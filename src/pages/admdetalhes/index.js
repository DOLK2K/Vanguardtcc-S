import vanguard from '../../assets/images/vanguard.png'
import Storage from 'local-storage'
import './index.scss';
import React,{ useEffect, useState } from 'react'
import Cabecalho from '../renderizacao'
import { useNavigate, Link } from 'react-router-dom'

export default function Destaques() {

  const navigate = useNavigate()


  const [usuario, setUsuario] = useState('-')

  function Sairclick () {
    Storage.remove('usuario-logado')
    navigate('/adm')
  }

  useEffect(() => {
    if(!Storage('usuario-logado')) {
      navigate('/adm')
    }else {
      const usuariologado = Storage('usuario-logado')
      setUsuario(usuariologado.nome)

    }
  }, [])

    return (  
  <div className='globamentoz'>
  <div className="Appz">
                   
              <div className='Filtrosz'>
                <img src={vanguard} />
                
              </div>
              <div className='primeiraptz'>
                
              <div className='produtozz'>
                <div className='inputsz'>
                  
                  <Link to='/'>
                  <a id='abrirosite'>Abrir Site</a>
                   </Link>
                  <hr />
                    <Link to=''>
                  <a id='gerenciarprodutos'> Consultar</a>
                  </Link> 
                  <hr />
                  <Link to='#'>
                  <a id='pppeedidos'>PEDIDOS</a>
                  </Link>
                  <hr />
                  <Link to='/add'>
                  <a id='confiiguraacoes'>Cadastro Produto </a>
                  </Link>
                  <hr />
                  <Link to='/mochila'>
                  <a id='vendaeprodu'>Opções de Venda</a>
                  </Link>
                  <hr />
                  <Link to='#' >
                  <a id='detcoonta'>Detalhes da conta</a>
                  </Link>
                  <hr />
                  
                  <a onClick={Sairclick} style={{cursor:"pointer"}}> Sair</a>
                  <hr />
                  
                </div>

                <div className='objetossz'>
                <h1>seja bem vindo {usuario} </h1>

                <div>
                  <span> {usuario[0].toUpperCase()} </span>
                </div>
                </div>


    </div>
    </div>
    </div>
    </div>
    )}