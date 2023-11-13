import icone from '../../assets/images/LogoCabeçalho.png'
import Lupa from '../../assets/images/Frame.png'
import Carro from '../../assets/images/Untitled.png'
import Barra from '../../assets/images/Untitled (2).png'
import Seta from '../../assets/images/Untitled (3).png'
import Retangulo from '../../assets/images/retanguloo.png'
import Temporario from '../../assets/images/fundotemporario.png'
import face from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import insta from '../../assets/images/insta.png'
import youtube from '../../assets/images/youtube.png'
import Formapag from '../../assets/images/bandeirascartoes.png'
import vanguard from '../../assets/images/vanguard.png'
import correio from '../../assets/images/correio.png'
import comunidade from '../../assets/images/comunidade.png'
import dados from '../../assets/images/dadoscliente.png'
import avaliacao from '../../assets/images/avaliacao.png'
import historico from '../../assets/images/historico.png'
import caveira from '../../assets/images/Leonardo_Diffusion_XL_faa_uma_logo_tatical_com_um_pouco_de_opa_3.jpg'
import Storage from 'local-storage'
import './index.scss';
import React,{ useEffect, useState } from 'react'
import Cabecalho from '../renderizacao'
import { useNavigate, Link } from 'react-router-dom'

export default function Destaques() {

  const navigate = useNavigate()


  function SairClick () {
    Storage.remove('usuario-logado')
    navigate('/adm')
  }

  useEffect(() => {
    if(!Storage('usuario-logado')) {
      navigate('/adm')
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
                  <Link id='sair-usuario' to=''>
                  <a  onClick={SairClick}>Sair</a>
                  <hr />
                  </Link>
                </div>

                <div className='objetossz'>



                </div>


    </div>
    </div>
    </div>
    </div>
    )}