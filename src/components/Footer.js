import React from 'react'
import ballerini from "../images/ballerini.svg"
import styled from 'styled-components';

function Footer() {
    return (
        <div>
            <Rodape>
                <RodapeImagem src={ballerini} />
            </Rodape>
        </div>
    )
}

export default Footer

const Rodape = styled.footer`
    padding: 32px;
    border-top: 0.4px solid #FFF2E7;
`

const RodapeImagem = styled.img`
    height: 48px;
    display: block;
    margin: 0 auto;
`