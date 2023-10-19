import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/pages/Home/App';
import Cadastro from './pages/cadastro';
import Loginadm from './pages/login-adm';
import Chupeta from '../src/pages/add-adm'
import Login from './pages/login';
import Produto from './pages/produto';
import Estoquedesc from './pages/estoquedesc'
import Pedido from './pages/pedidos'
import Compra from './pages/compra'
import Destaques from './pages/destaques'
import Pagamento from './pages/pagamento';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
      <Route path='/pedido' element = {<Pedido/>} />
      <Route path= '/compra' element = {<Compra/>} />
      <Route path= '/destaques' element = {<Destaques/>} />
      <Route path='/pagamento' element ={<Pagamento/>} />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

      