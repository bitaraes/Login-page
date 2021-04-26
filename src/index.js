import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import Cabecalho from './Cabecalho'
import InputTexto from './InputTexto'
import LoginBtn from './LoginBtn';

ReactDOM.render(
      <div className="column">
      <Cabecalho />
      <InputTexto type="text" name="login" placeholder="Login"/>
      <InputTexto type="password" name="senha" placeholder="Senha"/>
      <LoginBtn />
      <div className="form-item" id="criar-conta"><p>Não tem uma conta? <a href="#">Criar Conta</a></p></div>
      <div className="form-item" id="recuperar-senha"><a href="#">Recuperar Senha</a></div>
      </div>,
    document.getElementById('root')
);