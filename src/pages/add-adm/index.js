import './index.scss'
import Atualizar from '../../assets/images/refrescar (1) 1 (1).png'
import Lixeira from '../../assets/images/lata-de-lixo 1.png'


// nao usar position-relative/absolute desnecessariamente, vai atralhar a responsividade
// nao usar padding desnecessariamente, com proporção muito alta
// tem coisas q não está igual no figma, e não está alinhado direito
export default function Produtoo() {
    return (
    <div className='aaaa'>
            <h1>CADASTRO DO PRODUTO</h1>

            <hr/>

            <div>
                <input type='file' />

                <div>
                    <p>Descrição do Produto</p>
                    <input type='text' />

                    <div>
                        <div>
                            <p>Tipo do produto</p>
                            <input type='text' />
                        </div>

                        <div>
                            <p>categoria</p>
                            <input type='text' />
                        </div>
                    </div>
                    <hr />

                </div>
            </div>

            <div>
                <div>
                    <p>preço do produto</p>
                    <input type='text' />
                </div>

                <div>
                    <p>preço da venda</p>
                    <input type='' />
                </div>

                <div>
                    
                </div>
            </div>
    </div>
    )
}