import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/pages/Home/App';
import Cadastro from './pages/cadastro';
import Loginadm from './pages/login-adm';
import Chupeta from '../src/pages/add-adm'
import Login from './pages/login';
import Produto from './pages/produto';
import Estoquedesc from './pages/estoquedesc'
import Pedidos from './pages/pedidos'
import Compra from './pages/compra'
import Destaques from './pages/destaques'
import Pagamento from './pages/pagamento';
import Admdetalhes from './pages/admdetalhes'
import Acessórios from './pages/acessórios'
import Calçados from './pages/calçados'
import Jaquetas from './pages/jaquetas'
import Lanternas from './pages/lanternas'
import Luvas from './pages/luvas'
import Profissional from './pages/profissional'
import Mochilas from './pages/mochilas'
import Saiba from './pages/saiba-mais';
import Notfound from './pages/notFound/pagina';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Meuspedidos from './pages/meuspedidos';
import Minhaconta from './pages/minhaconta';
import Minhascompras from './pages/minhascompras';
import PaymentPage from './pages/cartao';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<App/>} />
      <Route path='/Cadastro' element = {<Cadastro/>} />
      <Route path='/adm' element = {<Loginadm/>} />
      <Route path='/add' element = {<Chupeta/>} />
      <Route path='/Login' element = {<Login/>} />
      <Route path='/produto' element = {<Produto/>} />
      <Route path='/estoquedesc' element = {<Estoquedesc/>} />
      <Route path='/pedidos' element = {<Pedidos/>} />
      <Route path= '/compra' element = {<Compra/>} />
      <Route path= '/destaques' element = {<Destaques/>} />
      <Route path='/pagamento' element ={<Pagamento/>} />
      <Route path='/admdetalhes' element ={<Admdetalhes/>} />
      <Route path='/meuspedidos' element ={<Meuspedidos/>} />
      <Route path= '/acessórios' element ={<Acessórios/>} />
      <Route path= '/calçados' element ={<Calçados/>} />
      <Route path= '/jaquetas' element ={<Jaquetas/>} />
      <Route path= '/lanternas' element ={<Lanternas/>} />
      <Route path= '/luvas' element ={<Luvas/>} />
      <Route path= '/mochilas' element ={<Mochilas/>} />
      <Route path= '/profissional' element ={<Profissional/>} />
      <Route path='/saiba' element = {<Saiba/>} />
      <Route path='*' element = {<Notfound/>} />
      <Route path='/minhaconta' element = {<Minhaconta/>} />
      <Route path= '/minhascompras' element = {<Minhascompras/>} />
      <Route path= '/cartao' element = {<PaymentPage/>} />


    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

      