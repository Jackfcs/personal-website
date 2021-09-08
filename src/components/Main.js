import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    max-width: 100%x;
    margin-top: 14vw;
    margin-bottom: 7.8vw;
    scroll-margin-top: 14vw;
    padding-left: 5.7vw;
    padding-right: 5.7vw;
    @media (min-width: 1200px) {
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
    }
`

const Name = styled.h1`
    text-align: left;
    line-height: 1;
    color: ${({ theme }) => theme.text};
`

const Title = styled.h3`
    margin-top: 2vw;
    color: ${({ theme }) => theme.secondaryBG};

    @media (max-width: 480px) {
        margin-top: 5vw;
    }
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
