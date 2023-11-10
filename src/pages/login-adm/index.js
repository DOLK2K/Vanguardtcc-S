import Simbolo from '../../assets/images/simbolo-esquerdo.png'
import './index.scss'
import { useNavigate } from 'react-router-dom'


import { useState } from 'react'
import axios from 'axios'


export default function Loginadm() {

    const[email, setemail] = useState('')
    const[senha, setsenha] = useState('')
    const[erro, seterro] = useState('')
    const navigate = useNavigate()

   async function Buscaapi () {
        
        
        try {
            const apiadmin = await axios.post  ('http://localhost:5015/administrador', {
                email2: email,
                senha2: senha
            })
            
            navigate('/add')
        }catch(err){
            if(err.response.status === 401) {
                seterro(err.response.data.erro)
            }
        }
    }




    return (
        <div className="loginadm">
             <div className='ELEMENTO'>
            <img src={Simbolo} />
            <a href='/'>Inicio</a>
        </div>

        <div className="principal">
            <h1>AREA RESTRITA</h1>

            <div className='login'>
            <p>Login</p>
            <input type="text" value={email} onChange={e => setemail(e.target.value)} />
            </div>
            <div className='senha'>
            <p>Senha</p>
            <input type="password" value={senha} onChange={e => setsenha(e.target.value)} />
            </div>
            <button onClick={Buscaapi} >Entrar</button>
            <div>{erro}</div>
        </div>
        </div>
    )
}