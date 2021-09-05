import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    max-width: 100%;
    margin-top: 14vw;
    margin-bottom: 7.8vw;
    scroll-margin-top: 14vw;
    padding-left: 5.7vw;
    padding-right: 5.7vw;
`

const Name = styled.h1`
    font-size: 8vw;
    text-align: left;
    line-height: 1;
    color: ${({ theme }) => theme.text}
`

const Title = styled.h3`
    font-size: 4vw;
    font-family: 'Volkhov', serif;
    margin-top: 2vw;
    color: ${({ theme }) => theme.secondaryBG}
`

const Main = () => {
    return (
            <Container id="home">
                <Name>Jack</Name>
                <Name>Campbell-Smith</Name>
                <Title>frontend developer</Title>
            </Container>
    )
}

export default Main
