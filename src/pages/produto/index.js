import Carrinho from '../../assets/images/image 74.png'
import Calça from '../../assets/images/image 73.png'
export default function  Produto() {
    return(
        <div>
            <div>
                <h1>
                    Meus pedidos
                </h1>
                <img src={Carrinho} />

            </div>
            <hr />

            <div>
                <div>
                    <button>PRODUTO</button>
                    <div>
                    <img src={Calça} />
                    <p>Calça Cargo Tática Preta -Ribstop- 7 Bolsos</p>
                    </div>

                    <div>
                    <button>PREÇO</button>
                    <p>R$49,90</p>
                    </div>

                    <div>
                        <button>QUANTIDADE</button>
                        <input type='' />
                    </div>

                    <div>
                        <button>TOTAL</button>
                        <p>r$49,90</p>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <p>SUBTOTAL</p>
                    <p>49,90</p>
                    <button>ADICIONAR MAIS PRODUTOS</button>
                </div>
                <div>
                    <p>ENTREGA</p>
                    <p>15 DIAS</p>

                </div>

                <div>
                    <p>TOTAL</p>
                    <p>R$49,90</p>
                </div>
                
                <div>
                <button>FINALIZAR PEDIDO</button>
                <button>EXCLUIR PEDIDO</button>
                </div>
            </div>
        </div>
    )
}