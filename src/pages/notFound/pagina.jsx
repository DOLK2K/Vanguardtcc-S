import './index.scss'
import NaoEncontrada from '../../assets/images/ups-erro-404-com-ilustracao-de-conceito-de-robo-quebrado_114360-5529.avif'
import { Link } from 'react-router-dom'
export default function Notfound () {
    return (
        <main>
            <div className='elemento-notfound'>
                <div className='textos-aviso'>
                    <h1>Página não encontrada!</h1>
                    <p>Bem-vindo à nossa página de erro 404. Parece que você encontrou um beco sem saída na web. Isso pode ter ocorrido por conta de um erro de digitação no URL, ou talvez a página que você estava procurando tenha sido movida, excluída ou ela não exista. Mas não se preocupe, estamos aqui para ajudar a guiá-lo de volta ao caminho certo. Você pode retornar à nossa página inicial clicando no botão abaixo</p>
                    <a href='/' >
                    <button>  Voltar para Home</button>
                    </a>
                </div>
                <img src={NaoEncontrada} />
            </div>
        </main>
    )
}