import React, { useState } from 'react';
import gif from '../../images/gif-viagem.gif';
import logo from '../../images/turistando-logo.png';

function Carregamento({ userId }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
        <img src={logo} id='logo' alt="Logo do Turistando" style={{ width: '200px', marginBottom: '16px' }} />
        <h2 style={{ marginBottom: '8px' }}>Boas vindas ao Turistando!</h2>
        <p style={{ marginBottom: '24px' }}>Aguarde um momento, estamos personalizando a sua experiência!</p>
        <img id='gif' src={gif} alt="Gif de Viagem" style={{ maxWidth: '400px', maxHeight: '300px' }} />
      </div>
    </div>
  );
}

export default Carregamento;
