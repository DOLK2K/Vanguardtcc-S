import icone from '../../assets/images/LogoCabeçalho.png';
import Lupa from '../../assets/images/Frame.png';
import Carro from '../../assets/images/Untitled.png';
import Barra from '../../assets/images/Untitled (2).png';
import Seta from '../../assets/images/Untitled (3).png';
import './index.scss'
import { Link } from 'react-router-dom'

export default function Cabecalho () {
    return (
        
      <main id='fixed'>
        <div className='cabecalho'>
          <a href='/'> <img src={icone} /> </a> 
          <div className='alinhamento'>
            <img id='Lupa' src={Lupa} alt='Lupa' />  <input type='text' placeholder='Pesquisar...' />
          </div>
          <div className='links'>
            <a href=''>Fale conosco</a>
            <a href='/login' >Entrar</a>
            <a href='/cadastro'>Cadastrar</a>
          </div>
          <img src={Carro} />

        </div>

        <div className='cabecalho2'>
          <img src={Barra} />
          <p>Todas as Categorias</p>
          <img src={Seta} />

          <div class='lista'>
            <nav>
              <ul>
                <li class='dropdown'>

                  <ul class='dropdown-menu'>
                    <li>Camiseta</li>


                    <li>Boné</li>
                  </ul>
                </li>
                <Link style={{textDecoration:"none"}} to="/destaques">
                  <a>Vestuario</a>
                </Link>
                <Link id='linha-redirecionada' style={{textDecoration:"none"}} to="/mochilas">
                  <span>Mochilas</span>
                </Link>
                <Link id='linha-redirecionada' style={{textDecoration:"none"}} to="/Calçados">
                  <span>Calçados</span>
                </Link>
                <Link  id='linha-redirecionada'style={{textDecoration:"none"}} to="/Profissional">
                  <span>Profissional</span>
                </Link>
                <Link id='linha-redirecionada' style={{textDecoration:"none"}} to="/Acessórios">
                  <span>Acessórios</span>
                </Link>

              </ul>
            </nav>

          </div>
          </div>
      </main>
        
    )
}