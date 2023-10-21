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

            <div className='parte-meio'>
                <div className='parte2'>
                    <div className='labell'>
                    <label for="arquivo" >Envie sua imagem</label>
                <input className='input-file' name='arquivo' id='arquivo' type='file' />
                </div>
                <div>
                    <div>
                        <p>Descrição do produto</p>
                        <input type='text' />
                    </div>

                    <div className='produto-categoria'>
                        <div className='pra-baixo1'>
                            <p>Tipo do produto</p>
                            <select>
                                <option>Calça</option>
                                <option>Camiseta</option>
                                <option>Oculos </option>
                                <option>Jaqueta</option>
                                <option>Barraca</option>
                                <option>Chapéu</option>
                            </select>
                        </div>

                        <div className='pra-baixo2'>
                            <p>Categoria</p>
                            <select>
                                <option>Profissional</option>
                                <option>Acessesório</option>
                                <option>Vestuario</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='pro-lado'>
                    <div>
                        <p>Unidade</p>
                        <input type='number' />

                    </div>

                    <div className='pro-lado2'>
                        <p>Situação</p>
                        <select>
                            <option>ativo</option>
                            <option>Desativo</option>
                        </select>
                    </div>
                </div>
                </div>
            </div>

            </div>


     )}