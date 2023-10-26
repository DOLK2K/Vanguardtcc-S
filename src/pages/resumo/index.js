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

export default function Resumo(){

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

            <div className='resu'>
                <h1>RESUMO DO PEDIDO</h1>
            </div>

            <div className='engloba'>
                <div className='osdois'>
                    <div className='pagarrr'>
                        <div className='titlezin'>
                        <h1>COMO VOCÊ DESEJA PAGAR</h1>                     
                        </div>

                        <div className='cartao'>
                            <img src={Cartao2}/>
                            <h1>Cartao de Credito</h1>

                        </div>

                        <div className='pix'>
                        <img src={Pix}/>
                        <h1>PIX</h1>
                            
                        </div>

                        <div className='boleto'>
                        <img src={Boleto}/>
                        <h1>Boleto Bancário</h1>

                        </div>

                        <div className='carne'>
                        <img src={Carne}/>
                        <h1>Carnê Digital</h1>

                        </div>                

                        <div className='banqi'>
                        <img src={Banqi}/>
                        <h1>BANQI</h1>
                            
                        </div>

                        <div className='giftcard'>
                        <img src={gift}/>
                        <h1>Cartão Presente</h1>

                        </div>


                    </div>

                        <div className='resumo1'>
                            <div className='eles'>
                            <div className='imagemprd'>
                                <img src={Incolor} />   
                                <h1>Nome do Produto:</h1>                                                    
                            </div>

                            <div className='dtl'>
                                <h1>Saída do Produto:</h1>
                                <h3>Chegada do Produto:</h3>
                            </div>

                            <div className='botaoqtd'>
                                <button>QUANTIDADE</button>
                            </div>
                            </div>

                            
                        
                        </div>

                        

                        

                        

                        
                </div>

                
                        

            </div>
        </div>
        </div>
    )


}