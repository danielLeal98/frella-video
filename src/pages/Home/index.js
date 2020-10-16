import React, { useState } from 'react';
import { DivHome, DivInput, Title, Input, ButtonLogin } from '../Home/styles';

function Home() {
  const [password, setPassword] = useState('');
  const isToken = localStorage.getItem('token');

  function handlePassword(e) {
    const term = e.target.value;
    setPassword(term);
    console.log(term);
  }
  return (
    <DivHome>
      <button onClick={() => clearCache()}> clearCache</button>
      {isToken ? (
        <div>
          <Title>Video Youtube</Title>
          <div
            style={{
              overflow: 'hidden',
              height: '100%',
              margin: '20px',
              width: '1024px',
              maxWidth: '800px',
            }}
          >
            <iframe
              scrolling="yes"
              src="https://www.youtube.com/embed/snTlMy80c_E?autoplay=1&amp;enablejsapi=1&amp;rel=0;modestbranding=1&amp;showsearch=0"
              style={{ border: '0px none', marginLeft: '0px', height: '500px', marginTop: '-60px', width: '100%' }}
              frameborder="0"
              title="Video Youtube"
            ></iframe>
          </div>
        </div>
      ) : (
        <DivInput>
          <div>
            <Title>Digite a sua senha para assistir o video</Title>
            <Input type="password" onChange={handlePassword} />
            <ButtonLogin onClick={() => viewVideo()}>
              {' '}
              Entrar <i className="fas fa-sign-in-alt"></i>
            </ButtonLogin>
            <ButtonLogin onClick={() => clearCache()}> clearCache</ButtonLogin>
          </div>
        </DivInput>
      )}
    </DivHome>
  );

  function viewVideo() {
    if (password === '123456') {
      localStorage.setItem('token', password);
      window.location.reload();
    } else {
      alert(`Senha inválida, tente novamente!`);
    }
  }
  function clearCache() {
    localStorage.clear();
    window.location.reload();
  }
}

export default Home;
