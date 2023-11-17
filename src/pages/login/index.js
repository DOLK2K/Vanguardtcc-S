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
import Volar from '../../assets/images/voltar.png'



export default function Login () {
    const [email, setemail] = useState('')
    const [senha, setsenha] = useState('')
    const [erro, setErro] = useState('')

    const navigate = useNavigate()
    const ref = useRef();

   async function entrarClick() {
        ref.current.continuousStart()

    try {
        
        const r = await axios.post('http://129.148.42.252:5015/usuario/login', {
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
            <img src={Volar} />
            <a href='/'>Inicio</a>
        </div>
        <div className='td-login'>
            <div className='logoas1'>
        <div className='logoas'>
            <img src={Logo} />
            </div>
            
            </div>
            <hr />
        
            <div className='centralizando'>
            <div className='login11'>

            <div className='login2'>

            <div className='log'>
                <h1>Faça seu Login</h1>
            </div>

            <div className='primeiro-input-login'>
            <img src={Email} />
                <h1>Endereço de Email:</h1>
                <input type='text' placeholder='Digite seu e-mail'  value={email} onChange={e => setemail(e.target.value)}/>
            </div>

            <div className='segundo-input-login'>
                <h1>Digite sua Senha:</h1>
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
                <div className='faceebook'>
                 <button> <img src={Facebook} />Entrar Com Facebook</button>
                </div>
                <div className='googgle'>
                <button> <img src={Google} />Entrar Com Google</button>
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