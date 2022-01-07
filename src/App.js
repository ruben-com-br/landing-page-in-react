import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { createGlobalStyle } from 'styled-components'

function App() {
  return (
    <div >
      <GlobalStyle/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Righteous&family=Sarala:wght@400;700&display=swap');

body {
  font-size: 100%;
  background: linear-gradient(68.15deg, #2F2325 16.62%, #8E5D52 85.61%);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
`
