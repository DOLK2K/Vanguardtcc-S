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


import './index.scss';
import React,{ useState } from 'react'
import Cabecalho from '../renderizacao'


export default function Destaques() {

 const [inputValue, setInputValue] = useState('');



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
                  
                  <input type='checkbox' id='greencheckbox' className={inputValue}></input>
                  <input type='checkbox' id='inputclicavel' value={inputValue} onChange={onclick}></input>
                  <input type='checkbox' id='inputclicavel' value={inputValue} onChange={onclick}></input>
                  <input type='checkbox' id='inputclicavel' value={inputValue} onChange={onclick}></input>
                  <input type='checkbox' id='inputclicavel' value={inputValue} onChange={onclick}></input>
                  <input type='checkbox' id='inputclicavel' value={inputValue} onChange={onclick}></input>
                  
                </div>

                <div className='objetoss'>

                <div className='objeto'>                
                   <img src={Temporario} />
                </div>

                <div className='objeto1'>
                <img src={Temporario} />
                </div>

                <div className='objeto2'>
                <img src={Temporario} />
                </div>

                </div>

                               
                </div>
                                            
              </div>

                <div className='detalhes'>

                

                <div className='Nomes'>
                  <h1>Nome do Produto:</h1>
                  <h3>Nome do Produto:</h3>
                  <h4>Nome do Produto:</h4>

                </div>

                <div className='Preços'>
                  <h1>Preço do Produto:</h1>
                  <h3>Preço do Produto:</h3>
                  <h4>Preço do Produto:</h4>
                </div>

                <div className='butooes'>
                  <button>Comprar</button>
                  <button>Comprar</button>
                  <button>Comprar</button>
                </div>
                
                </div>


                <div className='objetosss'>

                <div className='objeto0'>                
                   <img src={Temporario} />
                </div>

                <div className='objeto11'>
                <img src={Temporario} />
                </div>

                <div className='objeto22'>
                <img src={Temporario} />
                </div>

                </div>

                <div className='detalhes'>

                

                <div className='Nomes1 '>
                  <h1>Nome do Produto:</h1>
                  <h3>Nome do Produto:</h3>
                  <h4>Nome do Produto:</h4>

                </div>

                <div className='Preços'>
                  <h1>Preço do Produto:</h1>
                  <h3>Preço do Produto:</h3>
                  <h4>Preço do Produto:</h4>
                </div>

                <div className='butooes'>
                  <button>Comprar</button>
                  <button>Comprar</button>
                  <button>Comprar</button>
                </div>
                
                </div>


                <div className='objetosss'>

                <div className='objeto0'>                
                   <img src={Temporario} />
                </div>

                <div className='objeto11'>
                <img src={Temporario} />
                </div>

                <div className='objeto22'>
                <img src={Temporario} />
                </div>

                </div>

                <div className='detalhes'>

                

                <div className='Nomes1 '>
                  <h1>Nome do Produto:</h1>
                  <h3>Nome do Produto:</h3>
                  <h4>Nome do Produto:</h4>

                </div>

                <div className='Preços'>
                  <h1>Preço do Produto:</h1>
                  <h3>Preço do Produto:</h3>
                  <h4>Preço do Produto:</h4>
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