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

            <div className='elemento-produto'>
                <p>imagem</p>
                    <input type='file'  />

            </div>

            <div className='elemento2-produto'>
                <h3>Descrição do produto</h3>
                <input type='text' />

            
            </div>
            <div className='terror'>
            <div className='terror1'>
                <p>Quantidade</p>
                <input type='number' />
                <button>Cadastrar</button>
            </div>
            <div className='terror2'>
            <p className='cor'>preço do produto</p>
            <div>
                <input type='number' />
                <img src={Atualizar} />
                </div>
                <button>atualizar</button>
            </div>

            <div className='terror3'>
            <p>Valor total</p>
            <div>
                <input type='number' />
                <img src={Lixeira} />
                </div>
                <button>deletar</button>
            </div>
            </div>
    </div>
    )
}