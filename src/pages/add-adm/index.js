import './index.scss'
import Atualizar from '../../assets/images/refrescar (1) 1 (1).png'
import Lixeira from '../../assets/images/lata-de-lixo 1.png'
import { useState } from 'react'


// nao usar position-relative/absolute desnecessariamente, vai atralhar a responsividade
// nao usar padding desnecessariamente, com proporção muito alta
// tem coisas q não está igual no figma, e não está alinhado direito
export default function Produtoo() {

    const [desc, setDesc] = useState('');
    const [tipoproduto, setTipoproduto] = useState('')
    const [categoria, setCategoria] = useState('')
    const [imagem, setImagem] = useState('')
    const [unidade, setUnidade] = useState('')
    const [situacao, setSituacao] = useState('')
    const [precoproduto, setPrecoproduto] = useState(0)
    const [frete, setFrete] = useState(0);
    const [total, setTotal] = useState(0)
    

    
  

    function EscolherImagem() {
        document.getElementById('arquivo').click()
    }

    function mostrarImagem() {
        return URL.createObjectURL(imagem);
    }

    const target1 = (e) => {
        setPrecoproduto(Number(e.target.value))
    }

    const target2 = (e) => {
        setFrete(Number(e.target.value))
    }
    const valortotal =  (e) => {
       const r =  precoproduto + frete
       setTotal(r);
    }
    return (
        <div className='Cadastro-produtos'>
            <div className='cadastro-produto-cabecalho'>
                <h1>CADASTRO DO PRODUTO</h1>
                <hr />
            </div>

            <div className='parte-meio'>
                <div className='parte2'>
                    <div className='labell'>
                        <label for="arquivo" >Envie sua imagem</label>
                        <div onClick={EscolherImagem}>

                            {imagem &&
                                <img className='upload-imagem-produto' src={mostrarImagem()} />
                            }
                            <input className='input-file' name='arquivo' id='arquivo' type='file' onChange={e => setImagem(e.target.files[0])} />
                        </div>

                    </div>
                    <div className='element-produto'>
                        <div className='input-produto'>
                            <p>Descrição do produto</p>
                            <input value={desc} onChange={e => setDesc(e.target.value)} type='text' />
                        </div>

                        <div className='produto-categoria'>
                            <div className='pra-baixo1'>
                                <p>Tipo do produto</p>
                                <select value={tipoproduto} onChange={e => setTipoproduto(e.target.value)}>
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
                                <select value={categoria} onChange={e => setCategoria(e.target.value)}>
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
                            <input value={unidade} onChange={e => setUnidade(e.target.value)} type='number' />

                        </div>

                        <div className='pro-lado2'>
                            <p>Situação</p>
                            <select value={situacao} onChange={e => setSituacao(e.target.value)}>
                                <option>ativo</option>
                                <option>Desativo</option>
                            </select>
                        </div>
                    </div>
                </div>


            </div>

           
            <hr id='hr' />



            <div className='parte-do-preco'>
                <div>
                    <p>preço do produto</p>
                    <input value={precoproduto} onChange= {target1} type='number' />

                </div>

                <div className='valor-venda'>
                    <p>preço da venda</p>
                    <input value={frete} onChange={target2} type='number' />
                </div>

                <div className='valor-total'>
                    <p>valor total</p>
                    <input value={total} onChange={setTotal} type='number'  />
                </div>
            </div>
                
                <button className='produto-botao2' onClick={valortotal}>calcular</button>
               <div className='produto-botao'>
                <button className='produto-botao2'>Cancelar</button>
                <button className='produto-botao3'>Salvar</button>
            </div>
        </div>



    )
}