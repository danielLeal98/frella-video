import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DivHome, DivInput, Title, Input, ButtonLogin } from '../Home/styles';

function Home() {
  const [password, setPassword] = useState('');
  const history = useHistory();
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
            className="video"
            style={{
              position: 'relative',
              paddingBottom: '56.25%' /* 16:9 */,
              paddingTop: 25,
              height: 0,
            }}
          >
            <iframe
              width="960"
              height="447"
              frameborder="0"
              src="https://www.youtube.com/embed/zKAAFsovtM4?autoplay=1"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
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
    if (password == '123456') {
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
