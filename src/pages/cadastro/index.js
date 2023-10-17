import Simbolo from '../../assets/images/simbolo-esquerdo.png'
import Logo from '../../assets/images/LogoCabeçalho.png'
import Olho from '../../assets/images/image 62 (1).png'
import Facebook from '../../assets/images/image 59.png'
import Google from '../../assets/images/image 60 (1).png'
import './index.scss'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


// nao usar position-relative/absolute desnecessariamente, vai atralhar a responsividade
// nao usar padding desnecessariamente, com proporção muito alta
// tem coisas q não está igual no figma, e não está alinhado direito
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
            const api = await axios.post('http://localhost:5000/usuario', {
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
            <img src={Simbolo} />
            <a href='/'>Inicio</a>
        </div>
        <div className='logo'>
            <img src={Logo} />
            <hr />
        </div>
 
            <div className='primeiro-input'>
                <h1>ENDEREÇO DE EMAIL</h1>
                <input type='text' placeholder='Digite seu e-mail' value={email} onChange={e => setEmail (e.target.value)} />
            </div>

            <div className='segundo-input'>
                <h1>NÚMERO DE TELEFONE</h1>
                <input type='number' placeholder='Digite seu numero de telefone' value={telefone} onChange={e => setTelefone (e.target.value)} />
            </div>

            <div className='terceiro-input'>
                <h1>CRIE SUA SENHA</h1>
                <div className='elemento-input'>
                    <input type='password' placeholder='Insira sua senha' value={senha} onChange={e => setSenha (e.target.value)} />  <img src={Olho} />
                </div>
            </div>

            <div className='quarto-input'>
                <h1>CONFIRME SUA SENHA</h1>
                <input type='password' placeholder='Confirme sua senha' value={Confirme} onChange={e => setConfirme(e.target.value)} />
            </div>

            <div className='quinto-input'>
                <h1>NOME COMPLETO</h1>
                <div className='ele'>
                    <input className='input' type='text' placeholder='Nome e Sobrenome' value={nomecompleto} onChange={e => setNomecompleto(e.target.value)} />
                </div>
            </div>

            <div className='botao-cadastro'>
            <button></button>
            </div>

            <div className='erro-cadastro'>{erro}</div>

            <p className='texto'>Ao me inscrever, aceito os <span> Termos de Serviços </span> & <span> Poolítica de Privacidade </span>  </p>
            <div className='botoes'>
                <div className='facebook'>
                <img src={Facebook} /> <button>connect With Facebook</button>
                </div>
                <div className='google'>
                <img src={Google} /> <button>connect With Google</button>
                </div>
            </div>

        </div>
    )
}
