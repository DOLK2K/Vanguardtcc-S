import './index.scss'
import vanguard from '../../assets/images/vanguard.png'
import { useEffect, useState } from 'react'
import donloawd from '../../assets/images/download.png'
import { cadastrarProduto, enviarImagem } from '../../api/cadastroProduto'
import { useNavigate } from 'react-router-dom'
import Storage from 'local-storage'

// nao usar position-relative/absolute desnecessariamente, vai atralhar a responsividade
// nao usar padding desnecessariamente, com proporção muito alta
// tem coisas q não está igual no figma, e não está alinhado direito
export default function Produtoo() {

    const [desc, setDesc] = useState('');
    const [tipoproduto, setTipoproduto] = useState('')
    const [categoria, setCategoria] = useState('')
    const [imagem, setImagem] = useState('')
    const [quantidade, setQuantidade] = useState(0)
    const [situacao, setSituacao] = useState(false);
    const [precoproduto, setPrecoproduto] = useState(0)
    const [frete, setFrete] = useState(0);
    const [total, setTotal] = useState(0)
    const [usuario, setUsuario] = useState ('')

    const Navigate = useNavigate()


    async function salvarClick() {
        try {
            const user = Storage('usuario-logado').id;
            const novoproduto = await cadastrarProduto(desc, tipoproduto, categoria, quantidade, situacao, precoproduto, frete, user);
            const r = enviarImagem(novoproduto.id, imagem)
            alert('produto cadastrado');

            if(!desc){
                throw new Error("Falta descricao")
            }
        } catch (err){
            alert(err.message)
            console.log(err)            
        }
    }

    function Sairclick () {
        Storage.remove('usuario-logado')
        Navigate('/adm')
    }

    useEffect(() => {
        if (!Storage('usuario-logado')) {
            Navigate('/adm')
        } else {
            const usuariologado = Storage('usuario-logado')
            setUsuario(usuariologado.data.nome)
        }
    }, [] )

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
    const valortotal = (e) => {
        const r = precoproduto + frete;
        setTotal(r);
    }
    return (
       
        <div className='globamentoz'>
        <div className='fundo-adm'>
          <img style={{width:"200px"}} src={vanguard} />
          <div className='link-do-adm'>
            <a href='/'>Abrir Site</a>
            <hr />
            <a  href='' > Consultar  </a>
            <hr />
            <a href=''>Pedidos</a>
            <hr />
            <a href='/add'>Cadastro Produto</a>
            <hr />
            <a href=''>Opções de Venda</a>
            <hr />
            <a href=''>Detalhes da conta</a>
            <hr />
            </div>
            
            <a onClick={Sairclick} className='toninho' href='' >Sair</a>
            <div></div>
          
        </div>
        
        <div>
        <div className='box'>
          <h1>Seja bem Vindo {usuario} :) </h1>
          <div className='perfil-adm'> {usuario} </div>
        </div>

        <div className='Cadastro-produtos'>
            <div className='cadastro-produto-cabecalho'>

                
                <div className='lateral'>
                        
                    <div className='parte-meio'>
                        
                        <div className='parte2'>
                            <div className='labell'>
                            

                                <div className='div-input' onClick={EscolherImagem}>

                                    {!imagem &&
                                        <img id='imagem-produto' src={donloawd} alt='imagem' />
                                    }

                                    {imagem &&
                                        <img id='imagem-adm' src={mostrarImagem()} />
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
                                       <input value={tipoproduto} onChange={ e => setTipoproduto(e.target.value)} type='text' />
                                    </div>

                                    <div className='pra-baixo2'>
                                        <p>Categoria</p>
                                       <input value={categoria} onChange={e => setCategoria(e.target.value)} type='text' />
                                    </div>
                                </div>
                            </div>

                            <div className='pro-lado'>
                                <div>
                                    <p>Unidade</p>
                                    <input value={quantidade} onChange={e => setQuantidade(e.target.value)} type='number' />
                                </div>

                                <div className='pro-lado2'>
                                    <p>Situação</p>
                                    <input type='checkbox' checked={situacao} onChange={e => setSituacao (e.target.checked)}  /> &nbsp; 
                                 </div>
                            </div>
                        </div>


                    </div>

                    <div>
                    <hr id='hr' />
                    </div>


                    <div className='parte-do-preco'>
                        <div>
                            <p>preço do produto</p>
                            <input value={precoproduto} onChange={target1} type='number' />

                        </div>

                        <div className='valor-venda'>
                            <p>preço da venda</p>
                            <input value={frete} onChange={target2} type='number' />
                        </div>

                        <div className='valor-total'>
                            <p>valor total</p>
                            <input value={total} onChange={setTotal} type='number' />
                        </div>
                    </div>

                    <button className='produto-botao2' onClick={valortotal}>calcular</button>
                    <div className='produto-botao'>
                        <button className='produto-botao2'>Cancelar</button>
                        <button className='produto-botao3' onClick={salvarClick} >Salvar</button>
                    </div>
                </div>
            </div>

        </div>
        </div>
        </div>


    )
}