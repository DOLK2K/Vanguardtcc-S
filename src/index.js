import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/pages/Home/App';
import Cadastro from './pages/cadastro';
import Loginadm from './pages/login-adm';
import Chupeta from '../src/pages/add-adm'
import Login from './pages/login';
import Produto from './pages/produto';
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


    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

      