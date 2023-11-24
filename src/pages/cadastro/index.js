import Voltar from '../../assets/images/voltar.png'
import Logo from '../../assets/images/LogoCabeçalho.png'
import Olho from '../../assets/images/image 62 (1).png'
import Facebook from '../../assets/images/image 59.png'
import Google from '../../assets/images/image 60 (1).png'
import vanguard from '../../assets/images/vanguard.png';
import correio from '../../assets/images/correio.png';
import face from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twitter.png';
import insta from '../../assets/images/insta.png';
import youtube from '../../assets/images/youtube.png';
import './index.scss'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


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
                <Link to="https://www.facebook.com"> 
                <img src={Facebook} /> <button>Entrar com Facebook</button>
                </Link>
                </div>
                <div className='google'>
                <Link to="https://www.gmail.com"> 
                <img src={Google} /> <button>Entrar com Google</button>
                </Link>
                </div>
            </div>

            
            
            </div>
            <div className='rodape-home'>
      <a href='/'>
        <img src={vanguard} />
      </a>
        <img src={correio} />
        <Link to="https://www.facebook.com">
        <img src={face} />
        </Link>
        <Link to="https://twitter.com/"> 
        <img src={twitter} />
        </Link>
        <Link to="https://www.instagram.com/">
        <img src={insta} />
        </Link>
        <Link to="https://www.youtube.com/">
        <img src={youtube} />
        </Link>


        <div className='elements'>
          <p>+012 345 6789</p>
          <p>sac@vanguardtactical.com</p>
          <p>Avenida Coronel Octaviano de Freitas Costa, 69, Socorro, São Paulo</p>

        </div>

      </div>
            
        </div>
    )
}

