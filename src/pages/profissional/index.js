import icone from '../../assets/images/LogoCabeçalho.png'
import Lupa from '../../assets/images/Frame.png'
import Carro from '../../assets/images/Untitled.png'
import Barra from '../../assets/images/Untitled (2).png'
import Seta from '../../assets/images/Untitled (3).png'
import Retangulo from '../../assets/images/retanguloo.png'
import Temporario from '../../assets/images/fundocinza.png'
import face from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import insta from '../../assets/images/insta.png'
import youtube from '../../assets/images/youtube.png'
import Formapag from '../../assets/images/bandeirascartoes.png'
import vanguard from '../../assets/images/vanguard.png'
import correio from '../../assets/images/correio.png'
import capa1 from '../../assets/images/capa1.png'
import capa2 from '../../assets/images/capa2.png'
import capa3 from '../../assets/images/capa3.png'
import Bota from '../../assets/images/Untitled (4).png'
import Bota1 from '../../assets/images/Untitled (6).png'
import Bota2 from '../../assets/images/Untitled (5).png'
import Bota3 from '../../assets/images/oclinhos.png'
import Bota4 from '../../assets/images/bolsa3.png'
import Bota5 from '../../assets/images/barraca3.png'
import Bota6 from '../../assets/images/tenis3.png'


import './index.scss';
import React,{ useState } from 'react'
import Cabecalho from '../renderizacao'


export default function Destaques() {




    return (  
  <div className='globamento'>
  <div className="App">
  
        <Cabecalho />


            <div className='Title'>
              <h1>Profissional  </h1>
            </div>

            
              <div className='Filtros'>
                <h1>Filtrar por</h1>
                <h3>Produtos</h3>
              </div>



              <div className='primeirapt'>

              <div className='produtoz'>
                <div className='inputs'>
                  
                  <input type='checkbox' ></input>
                  <input type='checkbox' ></input>
                  <input type='checkbox'></input>
                  <input type='checkbox'></input>
                  <input type='checkbox' ></input>
                  <input type='checkbox' ></input>
                  
                </div>

                <div className='objetoss'>

                <div className='objeto'>                
                   <img src={capa1} />
                </div>

                <div className='objeto1'>
                <img src={capa2} />
                </div>

                <div className='objeto2'>
                <img src={capa3} />
                </div>

                </div>

                               
                </div>
                                            
              </div>

                <div className='detalhes'>

                

                <div className='Nomes'>
                  <h1>Capacete de Segurança</h1>
                  <h3>Cabo 12 mm 6 metros</h3>
                  <h4>Lanterna Tática Corvus </h4>

                </div>

                <div className='Preços'>
                  <h1>229,10</h1>
                  <h3>78,86</h3>
                  <h4>40,30</h4>
                </div>

                <div className='butooes'>
                  <button>Comprar</button>
                  <button>Comprar</button>
                  <button>Comprar</button>
                </div>
                
                </div>


                <div className='objetosss'>

                <div className='objeto0'>                
                   <img src={Bota} />
                </div>

                <div className='objeto11'>
                <img src={Bota1} />
                </div>

                <div className='objeto22'>
                <img src={Bota2} />
                </div>

                </div>

                <div className='detalhes'>

                

                <div className='Nomes1 '>
                  <h1>Bota Anti-Perfuro One</h1>
                  <h3>Luva Tática Militar Jyx Preta</h3>
                  <h4>Mochila Tatica Assault</h4>

                </div>

                <div className='Preços'>
                  <h1>78,30</h1>
                  <h3>35,70</h3>
                  <h4>52,10</h4>
                </div>

                <div className='butooes'>
                  <button>Comprar</button>
                  <button>Comprar</button>
                  <button>Comprar</button>
                </div>
                
                </div>


                <div className='objetosss'>

                <div className='objeto0'>                
                   <img src={Bota5} />
                </div>

                <div className='objeto11'>
                <img src={Bota6} />
                </div>

                <div className='objeto22'>
                <img src={Bota3} />
                </div>

                </div>

                <div className='detalhes'>

                

                <div className='Nomes1 '>
                  <h1>Barraca Iglu Luna 7 Pessoas</h1>
                  <h3>Tênis Nomade- Warskin Black</h3>
                  <h4>Óculos Tático Echo Laranja</h4>

                </div>

                <div className='Preços'>
                  <h1>449,80</h1>
                  <h3>199,90</h3>
                  <h4>39,10 </h4>
                </div>

                <div className='butooes'>
                  <button>Comprar</button>
                  <button>Comprar</button>
                  <button>Comprar</button>
                </div>
                
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
   

    )
}