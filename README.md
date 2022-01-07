Pagina landing page HTML CSS

https://github.com/rubengyn/LANDING-PAGE-COM-HTML-e-CSS-
landing-page-html-css-rafa.netlify.app/
https://youtu.be/llF6vD-RljE

Pagina em React
https://landing-in-react.netlify.app/


# 1 criar projeto
npx create-react-app landing-page-react 

# 2 Limpe arquivos
```
cd landing-page-react

rm .\src\logo.svg
rm .\src\serviceWorker.js
rm .\src\setupTests.jsr
rm .\src\App.test.js
```

# 3 Substitua App.js
```js
import React from 'react';

function App() {
  return (
    <div >
    </div>
  );
}

export default App;

```

# 4 Limpe App.css e index.css

# 5 Crie pasta components
```
md .\src\components
md .\src\components\header
md .\src\components\main
md .\src\components\footer
```

# copie arquivo style.css para pasta public

# add no arquivo public/index.html
```html
<link rel="stylesheet" href="%PUBLIC_URL%/style.css" />
```

# crie arquivo src/Site.js
```js
import React from 'react'

const Site = props => {
    return (

    )
}

export default Site
```

# copie todo o conteudo do body e converta para react no site abaixo
```html
https://magic.reactjs.net/htmltojsx.htm
```

# Add componente em app.js
```js
import Site from './site';
<Site />
```

# Separe o conteudo, crie arquivo 
```html
src/components/Header.js
```
# crie conteudo,  atalho rfce

# Add no App.js

# Faça o mesmo com main e footer

# exclua arquivo Site.js

# adiciona imagems em pasta src/images

# add em Header.js 
```js
import logo from "../../images/logo.svg"

<img className="cabecalho-imagem" src={logo} alt="Logo da comunidade Ballerini" />
```

# add em Main.js 
```js
import ballebot from "../../images/ballebot.svg"

<img className="conteudo-principal-imagem" src={ballebot} alt="Imagem da Balle Bot" />
```
# add em Footer.js 
```js
import ballerini from "../../images/ballerini.svg"

<img className="rodape-imagem" src={ballerini} />
```

# site finalizado, vamos componentizar em styled-components

# instalar sytled components
```js
npm install styled-components
```
```js
import styled from 'styled-components';
```

# footer - componente cabecalho
troque
```js
 <header className="cabecalho">
```
por

```js
<Cabecalho>
const Cabecalho = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 24px;
`
```

# footer - componente CabecalhoImagem
troque
```js
 <img className="cabecalho-imagem" src={logo} alt="Logo da comunidade Ballerini" />
```
por

```js

<CabecalhoImagem src={logo} alt="Logo da comunidade Ballerini"/>
const CabecalhoImagem = styled.img`
    height: 72px;
`
```

# footer - componente CabecalhoMenu
troque
```js
 <nav className="cabecalho-menu">
```
por

```js
const CabecalhoMenu = styled.nav`
    display: flex;
    gap: 32px;
`
```

# footer - componente CabecalhoMenuItem
troque
```js
<a className="cabecalho-menu-item" href="https://discord.gg/wagxzStdcR">Comunidade Ballerini</a>
<a className="cabecalho-menu-item">Tutorial</a>
<a className="cabecalho-menu-item">Open Source</a>
<a className="cabecalho-menu-item">Comandos</a>
```
por

```js

<CabecalhoMenuItem href="https://discord.gg/wagxzStdcR">Comunidade Ballerini</CabecalhoMenuItem>
<CabecalhoMenuItem>Tutorial</CabecalhoMenuItem>
<CabecalhoMenuItem>Open Source</CabecalhoMenuItem>
<CabecalhoMenuItem>Comandos</CabecalhoMenuItem>

const CabecalhoMenuItem = styled.a`
    font-family: 'Sarala', sans-serif;
    color: #FFF2E7;
    font-weight: 400;
    font-size: 18px
`
```

# main - componente conteudo
troque
```js
<main className="conteudo">
```
por

```js
<Conteudo>

const Conteudo = styled.main`
    margin-bottom: 48px;
    border-top: 0.4px solid #FFF2E7;
`
```

# main - componente ConteudoPrincipal
troque
```js
<section className="conteudo-principal">
```
por

```js
<ConteudoPrincipal>

const ConteudoPrincipal = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`
```

# main - componente ConteudoPrincipalEscrito
troque
```js
<div className="conteudo-principal-escrito">
```
por

```js
<ConteudoPrincipalEscrito>

const ConteudoPrincipalEscrito = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`
```

# main - componente ConteudoPrincipalEscrito
troque
```js
<div className="conteudo-principal-escrito">
```
por

```js
<ConteudoPrincipalEscrito>

const ConteudoPrincipalEscrito = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`
```

# main - componente ConteudoPrincipalEscritoTitulo
troque
```js
<h1 className="conteudo-principal-escrito-titulo">Balle Bot</h1>
```
por

```js
<ConteudoPrincipalEscritoTitulo>

const ConteudoPrincipalEscritoTitulo = styled.h1`
    font-family: 'Righteous', cursive;
    font-weight: 400;
    font-size: 64px;
    color: #FFF2E7;
`
```

# main - componente ConteudoPrincipalEscritoSubTitulo
troque
```js
<h2 className="conteudo-principal-escrito-subtitulo">Deixe a sua comunidade segura de um jeito fácil</h2>
```
por

```js
<ConteudoPrincipalEscritoSubTitulo>Deixe a sua comunidade segura de um jeito fácil</ConteudoPrincipalEscritoSubTitulo>

const ConteudoPrincipalEscritoSubTitulo = styled.h2`
   font-family: 'Sarala', sans-serif;
    font-weight: 400;
    font-size: 24px;
    color: #ECD6C4;
`
```

# main - componente ConteudoPrincipalEscritoBotao
troque
```js
<h2 className="conteudo-principal-escrito-subtitulo">Deixe a sua comunidade segura de um jeito fácil</h2>
```
por

```js
<ConteudoPrincipalEscritoBotao>Me adicione!</ConteudoPrincipalEscritoBotao>

const ConteudoPrincipalEscritoBotao = styled.button`
    background-color: #ECD6C4;
    width: 180px;
    height: 60px;
    border: none;
    box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    font-family: 'Sarala', sans-serif;
    font-weight: 400;
    font-size: 24px;
    color: #2F2325;
    &:hover{
        background-color: rgba(236, 214, 196, 0.53);
    }
`
```

# main - componente ConteudoPrincipalImagem
troque
```js
<img className="conteudo-principal-imagem" src={ballebot} alt="Imagem da Balle Bot" />
```
por

```js
<ConteudoPrincipalImagem src={ballebot} alt="Imagem da Balle Bot" />

const ConteudoPrincipalImagem = styled.img`
 height: 430px;
`
```

# main - componente ConteudoSecundario
troque
```js
<section className="conteudo-secundario">
```
por

```js
<ConteudoSecundario>

const ConteudoSecundario = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-top: 48px;
`
```

# main - componente ConteudoSecundarioTitulo
troque
```js
<h3 className="conteudo-secundario-titulo">O que ela faz por você?</h3>
```
por

```js
<ConteudoSecundarioTitulo>O que ela faz por você?</ConteudoSecundarioTitulo>

const ConteudoSecundarioTitulo = styled.h3`
    border-top: 0.4px solid #FFF2E7;
    padding-top: 48px;
    font-family: 'Righteous', cursive;
    font-weight: 400;
    font-size: 24px;
    color: #FFF2EF;
    margin-bottom: 16px;
`
```

# main - componente ConteudoSecundarioParagrafo
troque
```js
<p className="conteudo-secundario-paragrafo">1. Cria um <strong>sistema de verificação capcha</strong> para novos membros garantirem que não são robôs</p>
<p className="conteudo-secundario-paragrafo">2. Possui um <strong>sistema de banimento automático</strong> para links suspeitos que forem enviados na comunidade</p>
<p className="conteudo-secundario-paragrafo">3. <strong>Sistema de avisos e banimento manual</strong>, para pessoas administradoras utilizarem</p>
```
por

```js
<ConteudoSecundarioParagrafo>1. Cria um <strong>sistema de verificação capcha</strong> para novos membros garantirem que não são robôs</ConteudoSecundarioParagrafo>
<ConteudoSecundarioParagrafo>2. Possui um <strong>sistema de banimento automático</strong> para links suspeitos que forem enviados na comunidade</ConteudoSecundarioParagrafo>
<ConteudoSecundarioParagrafo>3. <strong>Sistema de avisos e banimento manual</strong>, para pessoas administradoras utilizarem</ConteudoSecundarioParagrafo>

const ConteudoSecundarioParagrafo = styled.p`
  font-family: 'Sarala', sans-serif;
  font-weight: 300;
  font-size: 18px;
  color: #ECD6C4;
`
```

# footer - componente rodape
troque
```js
<footer className="rodape">
```
por

```js
<Rodape>

const Rodape = styled.footer`
    padding: 32px;
    border-top: 0.4px solid #FFF2E7;
`
```

# footer - componente rodapeImagem
troque
```js
<img className="rodape-imagem" src={ballerini} />
```
por

```js
<RodapeImagem src={ballerini} />

const RodapeImagem = styled.img`
  height: 48px;
  display: block;
  margin: 0 auto;
`
```
