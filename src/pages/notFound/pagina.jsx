
import './index.scss'
import NaoEncontrada from '../../assets/images/ups-erro-404-com-ilustracao-de-conceito-de-robo-quebrado_114360-5529.avif'
import Notfoundd from '../../assets/images/Group 1.png'
import { Link } from 'react-router-dom'

export default function Notfound () {
    return (
        
        <main>
            <div className='elemento-notfound'>
                <img src={Notfoundd} />
                <div className='textos-not'>
                    <h1>página não encontrada</h1>
                    <p>a pagina que você busca não existe ou foi deletada, por favor, retorne ao menu  </p>
                    <div id='centro'>
                   <Link to='/' >
                    <button>Retornar</button>
                    </Link>
                    </div>
                </div>
              </div>
        </main>
    )
}