import vanguard from '../../assets/images/vanguard.png'
import Storage from 'local-storage';
import './index.scss';
import React,{ useEffect, useState } from 'react'
import Cabecalho from '../renderizacao'
import { useNavigate, Link } from 'react-router-dom'

export default function Destaques() {

  const navigate = useNavigate()

  const [usuario, setUsuario] = useState('-')

  function Sairclick () {
    Storage.remove('usuario-logado');
    navigate('/adm')
  }

  useEffect(() => {
    if(!Storage('usuario-logado')) {
      navigate('/adm')
    }
    else {
      const usuariologado = Storage('usuario-logado')
      setUsuario(usuariologado.data.nome);

    }
  }, []);

    return (  
  <div className='globamentoz'>
      <div className='fundo-adm'>
        <img style={{width:"200px"}} src={vanguard} />
        <div className='link-do-adm'>
          <a href='/'>Abrir Site</a>
          <hr />
          <a  href='' > Consultar  </a>
          <hr />
          <a href=''>Pedidos</a>
          <hr />
          <a href='/add'>Cadastro Produto</a>
          <hr />
          <a href=''>Opções de Venda</a>
          <hr />
          <a href=''>Detalhes da conta</a>
          <hr />
          </div>
          
          <a onClick={Sairclick} className='toninho' href='' >Sair</a>
          <div></div>
        
      </div>

      <div className='box'>
        <h1>Seja bem Vindo {usuario} : </h1>
        <div className='perfil-adm'> {usuario} </div>
      </div>
      </div>
    )}