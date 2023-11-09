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


import './index.scss';
import React,{ useState } from 'react'
import Cabecalho from '../renderizacao'


export default function Destaques() {

 const [inputValue, setInputValue] = useState('');



    return (  
  <div className='globamentoz'>
  <div className="Appz">
        <Cabecalho /> 
        
            

            
              <div className='Filtrosz'>
                <img src={vanguard} />
                
              </div>



              <div className='primeiraptz'>

              <div className='produtozz'>
                <div className='inputsz'>
                  
                  
                  <p id='abrirosite'>ABRIR O SITE  </p>
                  <hr />
                  <p id='gerenciarprodutos'>GERENCIAR PRODUTOS</p> 
                  <hr />
                  <p id='pppeedidos'>PEDIDOS</p>
                  <hr />
                  <p id='confiiguraacoes'>CONFIGURAÇÕES </p>
                  <hr />
                  <p id='vendaeprodu'>OPÇÕES DE VENDA DE PRODUTOS</p>
                  <hr />
                  <p id='detcoonta'>DETALHES DA CONTA</p>
                  <hr />
                  
                </div>

                <div className='objetossz'>

                <div className='objetoz'>                
                   <img src={comunidade} />
                </div>

                <div className='objeto1z'>
                <img src={dados} />
                </div>

                <div className='objeto2z'>
                <img src={avaliacao} />
                </div>

                </div>

                               
                </div>
                                            
              </div>




                <div className='detalhesz'>

                <div className='Nomesz'>
                  <h1>status do pedido do cliente</h1>
                  <h3>dados do cliente</h3>
                  <h4>Avaliação cliente</h4>

                </div>
                
                <div className='objetosssz'>

                <div className='objeto0z'>                
                   <img src={historico} />
                </div>
                <div className='objeto11z'>
               
                </div>

                <div className='objeto22z'>
              
                </div>

                </div>

                <div className='detalhes'>
                
                </div>

                <div className='detalhesz'>

                

                <div className='Nomes1z '>
                  <h1>Histórico de compras dos  usuarios</h1>
                

                </div>
                
                
                </div>
                <div className='rodape-home'>

<img src={vanguard}/>          

<img src={correio}/>

<img src={face}/>

<img src={twitter}/>

<img src={insta}/>

<img src={youtube}/>


<div className='elements'>
  <p>+012 345 6789</p>
  <p>sac@vanguardtactical.com</p>
  <p>Avenida Coronel Octaviano de Freitas Costa, 69, Socorro, São Paulo</p>

</div>
                </div>
    </div>
    </div>
    </div>
    )}