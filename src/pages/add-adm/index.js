import './index.scss'
import Atualizar from '../../assets/images/refrescar (1) 1 (1).png'
import Lixeira from '../../assets/images/lata-de-lixo 1.png'


// nao usar position-relative/absolute desnecessariamente, vai atralhar a responsividade
// nao usar padding desnecessariamente, com proporção muito alta
// tem coisas q não está igual no figma, e não está alinhado direito
export default function Produtoo() {
    return (
    <div className='Cadastro-produtos'>
        <div className='cadastro-produto-cabecalho'>
            <h1>CADASTRO DO PRODUTO</h1>

            <hr/>
            </div>
            <div id='chuvisco'>
                <input type='file' />

                <div className='patre-do-meio-produto'>

                    <div className='relaxa'>
                        <div className='descricao-produto'>
                    <p>Descrição do Produto</p>
                    <input type='text' />
                    </div>
                    <label>
                        UNIDADE
                    </label>
                    <input type='number' /> 
                    </div>
                    <div>
                        <div>

                            <span>
                            <label>Tipo do produto</label>
                            
                            <select>
                                <option>Camiseta</option>
                                <option>Calça</option>
                                <option>Sapato</option>
                                <option>Chapéu</option>
                                <option>Óculos</option>
                                <option>Barraca</option>
                                <option>Lanterna</option>
                                <option>Mochila</option>
                                <option>Jaqueta</option>
                            </select>
                            </span>
                        </div>

                        <div>

                            <span>
                            <label>categoria</label>
                            <select>
                                <option > Vestuario</option>
                                <option>Acessorio</option>
                                <option>Profissional</option>
                                
                            </select>
                            </span>
                        </div>

                        <div>
                            <nav>
                            <label>
                                Situação
                            </label>
                            <section>Ativo</section>
                            <section>Desativo</section>
                            </nav>
                        </div>
                    </div>
                    

                </div>
                <hr id='hrr' />
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
                    <p>Valor total</p>
                    <input type='number'/>
                </div>
            </div>

            <div>
                <button>
                    Cancelar
                </button>

                <button>Salvar</button>
            </div>
    </div>
    )
}