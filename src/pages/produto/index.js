import Carrinho from '../../assets/images/image 74.png'
import Calça from '../../assets/images/image 73.png'
import icone from '../../assets/images/LogoCabeçalho.png'

import './index.scss'


// nao usar position-relative/absolute desnecessariamente, vai atralhar a responsividade
// nao usar padding desnecessariamente, com proporção muito alta
// tem coisas q não está igual no figma, e não está alinhado direito
export default function  Produto() {
    return(
        <div>
            
 
    <div className='funndo'>
        <div className='cabecalho11'>
          <img src={icone} />

          </div> 
          </div>

       <div className='fuuundo'> 
        
            <div className='caarrriinnhhoo'>
                <h1>
                    Meus pedidos
                </h1>
                <img src={Carrinho} />

            </div>
            <hr />
        
            <div>
                <div className='prooduuto1'>
                    <div className='prro'>
                    <button>PRODUTO</button>

                   
                    </div>
                <div className='prreeçoo'>
                    <button>PREÇO</button>
                   
                    </div>

                    <div className='quaannttiiddaaddee'>
                        <button>QUANTIDADE</button>

                    </div>

                    <div className='ttoottaall'>
                        <button>TOTAL</button>

                    </div>
                </div>
            </div>



            <div>
                <div className='prooduuto2'>
                    <div className='prro2'>
                    
                    <p>Calça Cargo Tática Preta -Ribstop- 7 Bolsos</p>

                    
                    </div>
                <div className='prreeçoo2'>
                    
                    <p>R$49,90</p>
                   
                    </div>

                    <div className='quaannttiiddaaddee2'>
                        <p>1</p>

                    </div>

                    <div className='ttoottaall2'>
                        <p>R$49,90</p>

                    </div>
                </div>
            </div>





                 <div className='vveennddaass'></div>

            <div>
                <div className='suubbttoottaall'>
                    <p>SUBTOTAL</p>
                    <hr />
                    <p>...</p>
                    
                </div>
                <div className='eennttrreeggaa'>
                    <p>ENTREGA</p>
                    <hr />
                    <p>...</p>

                </div>

                <div className='ttoottaall'>
                    <p>TOTAL</p>
                    <hr />
                    <p>...</p>
                </div>

                <div className='fiinnaalliizzaarr'>
                <button id='finalizar-button'>FINALIZAR PEDIDO</button>
                <button id='adicionar-button'>ADICIONAR MAIS PRODUTOS</button>
                <button id='excluir-button'>EXCLUIR PEDIDO</button>
                </div>
            </div>
            </div>
        </div>
     
    )
}