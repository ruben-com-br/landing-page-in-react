import React from 'react'
import ballebot from "../images/ballebot.svg"
import styled from 'styled-components';

function Main() {
    return (
        <div>
            <Conteudo>
                <ConteudoPrincipal>
                    <ConteudoPrincipalEscrito>
                        <ConteudoPrincipalEscritoTitulo>Balle Bot</ConteudoPrincipalEscritoTitulo>
                        <ConteudoPrincipalEscritoSubTitulo>Deixe a sua comunidade segura de um jeito fácil</ConteudoPrincipalEscritoSubTitulo>
                        <ConteudoPrincipalEscritoBotao>Me adicione!</ConteudoPrincipalEscritoBotao>
                    </ConteudoPrincipalEscrito>
                    <ConteudoPrincipalImagem src={ballebot} alt="Imagem da Balle Bot" />
                </ConteudoPrincipal>
                <ConteudoSecundario>
                    <ConteudoSecundarioTitulo>O que ela faz por você?</ConteudoSecundarioTitulo>
                    <ConteudoSecundarioParagrafo>1. Cria um <strong>sistema de verificação capcha</strong> para novos membros garantirem que não são robôs</ConteudoSecundarioParagrafo>
                    <ConteudoSecundarioParagrafo>2. Possui um <strong>sistema de banimento automático</strong> para links suspeitos que forem enviados na comunidade</ConteudoSecundarioParagrafo>
                    <ConteudoSecundarioParagrafo>3. <strong>Sistema de avisos e banimento manual</strong>, para pessoas administradoras utilizarem</ConteudoSecundarioParagrafo>
                </ConteudoSecundario>
            </Conteudo>
        </div>
    )
}

export default Main

const Conteudo = styled.main`
    margin-bottom: 48px;
    border-top: 0.4px solid #FFF2E7;
`

const ConteudoPrincipal = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`
const ConteudoPrincipalEscrito = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`
const ConteudoPrincipalEscritoTitulo = styled.h1`
    font-family: 'Righteous', cursive;
    font-weight: 400;
    font-size: 64px;
    color: #FFF2E7;
`
const ConteudoPrincipalEscritoSubTitulo = styled.h2`
    font-family: 'Sarala', sans-serif;
    font-weight: 400;
    font-size: 24px;
    color: #ECD6C4;
`
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
const ConteudoPrincipalImagem = styled.img`
    height: 430px;
`
const ConteudoSecundario = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-top: 48px;
`
const ConteudoSecundarioTitulo = styled.h3`
    border-top: 0.4px solid #FFF2E7;
    padding-top: 48px;
    font-family: 'Righteous', cursive;
    font-weight: 400;
    font-size: 24px;
    color: #FFF2EF;
    margin-bottom: 16px;
`

const ConteudoSecundarioParagrafo = styled.p`
    font-family: 'Sarala', sans-serif;
    font-weight: 300;
    font-size: 18px;
    color: #ECD6C4;
`
