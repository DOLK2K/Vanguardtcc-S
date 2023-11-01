import Simbolo from '../../assets/images/simbolo-esquerdo.png'
import Logo from '../../assets/images/LogoCabeçalho.png'
import Email from '../../assets/images/o-email 1.png'
import Chave from '../../assets/images/chave 1.png'
import Facebook from '../../assets/images/image 59.png'
import Google from '../../assets/images/image 60 (1).png'
import axios from 'axios'
import './index.scss'
import LoadingBar from 'react-top-loading-bar'
import {useNavigate} from 'react-router-dom'
import { useState, useRef } from 'react'



export default function Login () {
    const [email, setemail] = useState('')
    const [senha, setsenha] = useState('')
    const [erro, setErro] = useState('')

    const navigate = useNavigate()
    const ref = useRef();

   async function entrarClick() {
        ref.current.continuousStart()

    try {
        
        const r = await axios.post('http://localhost:5000/usuario/login', {
            email: email, 
            senha: senha 
         });
       
         setTimeout(() => {
          navigate('/')

         }, 2000);
         
    } catch (err) {
        ref.current.complete();
        if(err.response.status === 401) {
            setErro(err.response.data.erro)
        } 
    }
    }
    return(
        
        <div className='login'>
            <LoadingBar ref={ref} />
            <div className='login-elemento'>
            <img src={Simbolo} />
            <a href='/'>Inicio</a>
        </div>
        <div className='td-login'>
        <div className='logo'>
            <img src={Logo} />
            <hr />
        </div>
            <div className='centralizando'>
            <div className='login11'>
            <div className='login2'>
            <div className='primeiro-input-login'>
            <img src={Email} />
                <h1>ENDEREÇO DE EMAIL</h1>
                <input type='text' placeholder='Digite seu e-mail'  value={email} onChange={e => setemail(e.target.value)}/>
            </div>

            <div className='segundo-input-login'>
                <h1>DIGITE SUA SENHA</h1>
                <img src={Chave} alt=''/>
                <input type='text' placeholder='Digite sua senha' value={senha} onChange={e => setsenha(e.target.value)} />
            </div>
            <div className='botaoooo'>
            <button  onClick={entrarClick} >Continue</button>
            </div>

            <div className='erro'>
            {erro}
            </div>
            

            <div className='fim-bt'>

            <div className='botoes'>
                <div className='facebook'>
                <img src={Facebook} /> <button>Connect With Facebook</button>
                </div>
                <div className='google'>
                <img src={Google} /> <button>Connect With Google</button>
                </div>
            </div>

            </div>

            </div>
            </div>
            </div>
        

        </div>
        </div>
    )
}