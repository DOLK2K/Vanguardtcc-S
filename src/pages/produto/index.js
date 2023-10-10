import Carrinho from '../../assets/images/image 74.png'
import Calça from '../../assets/images/image 73.png'
import './index.scss'


// nao usar position-relative/absolute desnecessariamente, vai atralhar a responsividade
// nao usar padding desnecessariamente, com proporção muito alta
// tem coisas q não está igual no figma, e não está alinhado direito
export default function  Produto() {
    return(
        <div>
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

                    <p></p>
                    </div>
                    <div className='prreeçoo'>
                    <button>PREÇO</button>
                    <p></p>
                    </div>

                    <div className='quaannttiiddaaddee'>
                        <button>QUANTIDADE</button>

                    </div>

                    <div className='ttoottaall'>
                        <button>TOTAL</button>

                    </div>
                </div>
            </div>




            <div className='bbaaiixxoo'>
                    <div className='ppproduto'>


                    </div>
                    <div className='pppreco'>


                    </div>
                    <div className='qqquant'>


                    </div>
                    <div className='tttotal'></div>





                </div>

                
                 <div className='vveennddaass'></div>

            <div>
                <div className='suubbttoottaall'>
                    <p>SUBTOTAL</p>
                    <hr />
                    <p>...</p>
                    <button>ADICIONAR MAIS PRODUTOS</button>
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
                <button>FINALIZAR PEDIDO</button>
                <button>EXCLUIR PEDIDO</button>
                </div>
            </div>
        </div>
    )
}