import icone from '../../assets/images/LogoCabeçalho.png'
import Lupa from '../../assets/images/Frame.png'
import Carro from '../../assets/images/Untitled.png'
import Barra from '../../assets/images/Untitled (2).png'
import Seta from '../../assets/images/Untitled (3).png'
import Carrinho from '../../assets/images/carrinho.png'
import Linha from '../../assets/images/linha.png'

import './index.scss'

export default function Minhascompras(){
    return(
        <div className='todos11'>
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

            <div className='fundolg'>

            <div className='compratudo'>
            <div className='comprarné'>

                <div className='compradnv'>

                    <div className='pedidos1'>
                        <h1>Meus Pedidos</h1>
                        <img src= {Carrinho}></img>
                    </div>

                    <div className='line11'>
                        <img src= {Linha}></img>
                    </div>

                </div>


                <div className='classepropria'>
                    
                    <div className='comprabt'>
                        <button>PRODUTO</button>
                    </div>

                    <div className='comprabt1'>
                        <button>PREÇO</button>
                    </div>

                        
                        <div className='comprabt3'>
                        <button>TOTAL</button>
                        </div>

                     
                </div>

                <div className='englobadivsolta'>
                <div className='divsolta'>
                    
                </div>

                <div className='divsolta1'>
                    
                </div>

                <div className='divsolta2'>
                    
                </div>
                </div>

                <div className='englobasolta2'>
                    <div className='dvsolta'>

                    </div>

                    <div className='dvsolta1'>

                    </div>


                </div>

                <div className='englobasolta3'>

                <div className='dvsolta11'>

                </div>

                <div className='dvsolta22'>

                </div>

                </div>

                <div className='englobasolta4'>

                <div className='dvsolta12'>

                </div>

                <div className='dvsolta23'>

                </div>
                    
                </div>
                
            </div>
            </div>

        </div>
        </div>
        </div>


    )


}

