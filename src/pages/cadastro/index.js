import Voltar from '../../assets/images/voltar.png'
import Logo from '../../assets/images/LogoCabeçalho.png'
import Olho from '../../assets/images/image 62 (1).png'
import Facebook from '../../assets/images/image 59.png'
import Google from '../../assets/images/image 60 (1).png'
import './index.scss'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Cadastro() {
    const [email, setEmail] = useState('')
    const[telefone, setTelefone] = useState('')
    const[senha, setSenha] = useState('')
    const[Confirme, setConfirme] = useState('')
    const[nomecompleto, setNomecompleto] = useState('')
    const [erro, setErro] = useState('')

    const navigate = useNavigate()

    async function entrarCadastro () {
        try {
            const api = await axios.post('http://129.148.42.252:5015/usuario', {
                email: email,
                telefone:telefone,
                senha:senha,
                nome_completo: nomecompleto

                
            })

            navigate('/Login')
        }catch(err) {
            if(err.response.status === 500) {
               setErro(err.response.data.erro)
               
               
            }
        }
    }

    return(
        <div className='Cadastro'>

        <div className='ELEMENTO'>
            <img src={Voltar} />
            <a href='/'>Inicio</a>
        </div>

        

        <div className='logo'>
            <img src={Logo} />
            <hr />
        </div>
        <div className='faixaz'>
            <div className='central'>
            <div className='td-cadastro'>

             <div className='inputzz'>   

             <div className='titulo-cd'>
                <h1>Cadastre-se Conosco</h1>
             </div>

             <div className='inputzz2'>
 
            <div className='primeiro-input'>
                <h1>ENDEREÇO DE EMAIL:</h1>
                <input type='text' placeholder='Digite seu e-mail' value={email} onChange={e => setEmail (e.target.value)} />
            </div>

            <div className='segundo-input'>
                <h1>NÚMERO DE TELEFONE:</h1>
                <input type='number' placeholder='Digite seu numero de telefone' value={telefone} onChange={e => setTelefone (e.target.value)} />
            </div>

            <div className='terceiro-input'>
                <h1>CRIE SUA SENHA:</h1>
                <div className='elemento-input'>
                    <input type='password' placeholder='Insira sua senha' value={senha} onChange={e => setSenha (e.target.value)} />  <img src={Olho} />
                </div>
            </div>

            <div className='quarto-input'>
                <h1>CONFIRME SUA SENHA:</h1>
                <input type='password' placeholder='Confirme sua senha' value={Confirme} onChange={e => setConfirme(e.target.value)} />
            </div>

            <div className='quinto-input'>
                <h1>NOME COMPLETO:</h1>
                <div className='ele'>
                    <input className='input' type='text' placeholder='Nome e Sobrenome' value={nomecompleto} onChange={e => setNomecompleto(e.target.value)} />
                </div>
            </div>

            </div>

            </div>
            </div>
            </div>

            <div className='botao-cadastro'>
            <button onClick={entrarCadastro} >Cadastrar</button>
            </div>

            <div className='erro-cadastro'>{erro}</div>

            <p className='texto'>Ao me cadastrar, aceito os <span> Termos de Serviços </span> & <span> Política de Privacidade </span>  </p>
            <div className='botoess'>
                <div className='facebook'>
                <img src={Facebook} /> <button>Entrar com Facebook</button>
                </div>
                <div className='google'>
                <img src={Google} /> <button>Entrar com Google</button>
                </div>
            </div>

            
            
            </div>
        </div>
    )
}

