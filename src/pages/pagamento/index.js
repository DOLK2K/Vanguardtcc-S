import icone from '../../assets/images/LogoCabeçalho.png'
import Lupa from '../../assets/images/Frame.png'
import Carro from '../../assets/images/Untitled.png'
import Barra from '../../assets/images/Untitled (2).png'
import Seta from '../../assets/images/Untitled (3).png'
import Cartao2 from '../../assets/images/cartao2.png'
import Pix from '../../assets/images/pix.png'
import Boleto from '../../assets/images/boleto.png'
import Carne from '../../assets/images/carne.png'
import Banqi from '../../assets/images/banqi.png'
import gift from '../../assets/images/cartaopresente.png'
import Incolor from '../../assets/images/fundotemporario.png'

import './index.scss'

export default function Pagamento(){

    return(
    <div className='globamento'>
       <div className="App">
        <div className='parte-inicial1'>
        <div className='cabecalho1'>
          <img src={icone} />
          <div className='alinhamento2'>
          <img id='Lupa' src={Lupa} alt='Lupa'  />  <input type='text' placeholder='Pesquisar...'  />
          </div>
          <div className='links'>
          <a href=''>Fale conosco</a>
          <a href='/login' >Entrar</a>
          <a href='/cadastro'>Cadastrar</a>
          </div>
          <img src={Carro} />
          
          </div> 
  
          <div className='cabecalho22'>
            <img src={Barra} />
            <p>Todas as Categorias</p>
            <img src={Seta} />
  
            <div className='lista1'>
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
                            <img src={Cartao2}/>
                            <h1>Cartao de Credito</h1>

                        </div>

                        <div className='pix'>
                        <img src={Pix}/>
                        <h1>PIX</h1>
                            
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
                            </div>
                            </div>

                            
                        
                        </div>
                                                                                                                          
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
        </div>
        </div>
    )


}