import RouterApp from '../../../routes';
import React, { useState } from 'react';

import Carregamento from '../Carregamento/Carregamento';
import logo from '../../images/turistando-logo.png';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEntrar = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3333/turistando/login', {
        method: 'POST',
        body: JSON.stringify({ 
          email:email, 
          password:password 
        }),

        headers: {'Content-Type': 'application/json'}
      
      });

      const data = await response.json();

      if (data.success) {
        // Login válido
        console.log(data.user.name);

        setIsLoading(true);

        setTimeout(() => {
          setIsLogged(true);
          setIsLoading(false);
        }, 5000); // Após 5 segundos, define a validação como bem-sucedida
      } 
      else {
        // Login inválido
        setLoginError(data.message);
      }
    } 
    
    catch (error) {
      console.error('Ocorreu um erro ao fazer login:', error);
    }
  };

  let component;

  if (isLoading) {
    component = <Carregamento />;
  } 
  else if (isLogged) {
    component = <RouterApp />;
  } 
  
  else {
    component = (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <img src={logo} alt="Logo do Turistando" width="15%" />

        <form onSubmit={handleEntrar} style={{ paddingTop: "1rem" }}>

          <h4 style={{ marginBottom: "1rem" }}>Por favor, informe seus dados de acesso.</h4>
          <div id = 'dados' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <label style={{ width: "10rem" }}>
              <b><i>Email</i></b>

              <input type="email" 
              value={email} placeholder="Insira aqui seu usuário" 
              onChange={handleEmailChange} 
              />
            </label>
            
            <br />
            <label style={{ width: "10rem" }}>

              <b><i>Senha</i></b>
              <input 
              type="password" 
              value={password} placeholder="Insira aqui sua senha" 
              onChange={handlePasswordChange} 
              />
            </label>
            <br />
            <br />
            <button type="submit">Entrar</button>

          </div>
        </form>
      </div>
    );
  }

  return component;
}

export default Login;