import icone from '../../assets/images/LogoCabeçalho.png'
import Lupa from '../../assets/images/Frame.png'
import Carro from '../../assets/images/Untitled.png'
import Barra from '../../assets/images/Untitled (2).png'
import Seta from '../../assets/images/Untitled (3).png'
import Cartaorico from '../../assets/images/cartaorico.png'
import Pix from '../../assets/images/pix.png'
import Incolor from '../../assets/images/fundotemporario.png'
import Somar from '../../assets/images/Somar.png'
import Menor from '../../assets/images/menor.png'
import Linha from '../../assets/images/linha.png'
import vanguard from '../../assets/images/vanguard.png'
import correio from '../../assets/images/correio.png'
import face from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import insta from '../../assets/images/insta.png'
import youtube from '../../assets/images/youtube.png'

import './index.scss'

export default function Pagamento(){

    return(
    <div className='globamento'>
       <div className="App">
       <div className='parte-inicial3'>
      <div className='cabecalho'>
        <img src={icone} />
        <div className='alinhamento'>
        <img id='Lupa' src={Lupa} alt='Lupa'  />  <input type='text' placeholder='Pesquisar...'  />
        </div>
        <div className='links'>
        <a href=''>Fale conosco</a>
        <a href='/login' >Entrar</a>
        <a href='/cadastro'>Cadastrar</a>
        </div>
        <img src={Carro} />

        </div> 

        <div className='cabecalho2'>
          <img src={Barra} />
          <p>Todas as Categorias</p>
          <img src={Seta} />

          <div className='lista'>
          <a id='Vestuario'>Vestuario</a>
          <a>Mochilas</a>
          <a>Calçados</a>
          <a>Profissional</a>
          <a>Acessórios</a>
          </div>
        </div>
          </div>

            

            <div className='engloba'>
                <div className='pg'>
                    <h1>Pagamento</h1>
                    <h3>Resumo do Pedido</h3>
                </div>
                <div className='osdois'>                  
                    <div className='pagarrr'>
                        <div className='titlezin'>
                        <h1>Formas de Pagamento:</h1>                     
                        </div>

                        <div className='cartao'>
                            <img src={Cartaorico}/>
                            <h1>Cartao de Credito</h1>

                        </div>

                        <div className='pix'>
                            <img src={Pix}/>
                            <h1>PIX</h1>
                            
                        </div>      

                        <div className='btpag'>
                        <div className='confirme'>
                            <button>Deletar Pedido</button>
                        </div>

                        <div className='confirme2'>
                            <button>Finalizar Compra</button>
                        </div>
                                                       
                         </div>                  
                                                                                                   
                    </div>

                    

                    

                    

                        <div className='resumo1'>
                            <div className='eles'>
                            <div className='imagemprd'>
                                <img src={Incolor} />   
                                <h1>Nome:</h1>                                                    
                            </div>

                            <div className='dtl'>
                                <h1>Saída do Produto:</h1>
                                <h3>Chegada do Produto:</h3>
                            </div>

                            <div className='divbt'>
                            <div className='botaoqtd'>
                                <button>QUANTIDADE</button>
                            </div>

                            <div className='globadiv'>
                            <div className='divqtd'>
                                <div className='qtd2'>
                                    <img src= {Somar}></img>
                                    <input></input>
                                    <img src= {Menor}></img>
                                    

                                </div>
                                </div> 

                        </div>
                            </div>
                              
                            </div>



                            </div>

                            
                        
                        </div>

                        <div className='pr1'>
                                <img src= {Linha}></img>                          
                        </div>

                        <div className='pr2'>
                            <h1>01 Produto:</h1>
                        </div>

                        <div className='pr3'>
                            <h1>Entrega:</h1>

                            <h3>Undefined</h3>
                            
                        </div>

                        <div className='line1'>
                        <img src= {Linha}></img>
                        </div>

                        <div className='pr4'>
                            <h1>Total:</h1>
                            <h3>Undefined</h3>
                        </div>
                                                                                                                          
                </div>
                        

        </div>
        <div className='emmbaix'>

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