import Simbolo from '../../assets/images/simbolo-esquerdo.png'
import './index.scss'
import Atualizar from '../../assets/images/refrescar (1) 1.png'


// nao usar position-relative/absolute desnecessariamente, vai atralhar a responsividade
// nao usar padding desnecessariamente, com proporção muito alta
// tem coisas q não está igual no figma, e não está alinhado direito

export default function Login() {
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
            <input type="text" />
            </div>
            <div className='senha'>
            <p>Senha</p>
            <input type="password" />
            </div>
            <button>Entrar</button>
        </div>
        </div>
    )
}