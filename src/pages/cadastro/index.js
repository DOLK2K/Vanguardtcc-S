import Simbolo from '../../assets/images/simbolo-esquerdo.png'
import Logo from '../../assets/images/LogoCabeçalho.png'
import Olho from '../../assets/images/image 62 (1).png'
import Facebook from '../../assets/images/image 59.png'
import Google from '../../assets/images/image 60 (1).png'
import './index.scss'
export default function Cadastro() {

    return(
        <div className='Cadastro'>
        <div className='ELEMENTO'>
            <img src={Simbolo} />
            <a href=''>Inicio</a>
        </div>
        <div className='logo'>
            <img src={Logo} />
            <hr />
        </div>
 
            <div className='primeiro-input'>
                <h1>ENDEREÇO DE EMAIL</h1>
                <input type='text' placeholder='Digite seu e-mail' />
            </div>

            <div className='segundo-input'>
                <h1>NÚMERO DE TELEFONE</h1>
                <input type='number' placeholder='Digite seu numero de telefone' />
            </div>

            <div className='terceiro-input'>
                <h1>CRIE SUA SENHA</h1>
                <div className='elemento-input'>
                    <input type='password' placeholder='Insira sua senha' /> <img src={Olho} />
                </div>
            </div>

            <div className='quarto-input'>
                <h1>CONFIRME SUA SENHA</h1>
                <input type='password' placeholder='Confirme sua senha' />
            </div>

            <div className='quinto-input'>
                <h1>NOME COMPLETO</h1>
                <div className='ele'>
                    <input className='input' type='text' placeholder='Nome e Sobrenome' />
                </div>
            </div>


            <button className='botao'>Continue</button>

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
