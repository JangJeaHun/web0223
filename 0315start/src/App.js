import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  
  let posts = '강남 고기 맛집';
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집']);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      {posts}
      {글제목[1]}
        
      </header>
   
    </div>
  );
}

export default App;
