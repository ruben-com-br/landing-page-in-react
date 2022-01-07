import React from 'react'
import logo from "../images/logo.svg"
import styled from 'styled-components';

function Header() {
    return (
        <div>
            <Cabecalho>
                <CabecalhoImagem src={logo} alt="Logo da comunidade Ballerini" />
                <CabecalhoMenu>
                    <CabecalhoMenuItem href="https://discord.gg/wagxzStdcR">Comunidade Ballerini</CabecalhoMenuItem>
                    <CabecalhoMenuItem>Tutorial</CabecalhoMenuItem>
                    <CabecalhoMenuItem>Open Source</CabecalhoMenuItem>
                    <CabecalhoMenuItem>Comandos</CabecalhoMenuItem>
                </CabecalhoMenu>
            </Cabecalho>
        </div>
    )
}

export default Header

const Cabecalho = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 24px;
`

const CabecalhoImagem = styled.img`
    height: 72px;
`
const CabecalhoMenu = styled.nav`
    display: flex;
    gap: 32px;
`

const CabecalhoMenuItem = styled.a`
    font-family: 'Sarala', sans-serif;
    color: #FFF2E7;
    font-weight: 400;
    font-size: 18px
`