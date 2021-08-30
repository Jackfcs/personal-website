import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components";

const Button = styled.button`
background: ${({ theme }) => theme.background};
border: 2px solid ${({ theme }) => theme.toggleBorder};
border-radius: 30px;
cursor: pointer;
display: flex;
font-size: 0.5rem;
justify-content: space-between;
margin: 0 auto;
overflow: hidden;
padding: 0.5rem;
position: relative;
width: 4rem;
height: 2rem;
`;

const Ball = styled.span`
    transition: all 0.3s linear

    content: "";
    position: relative;
    bottom: 0.4rem;
    right: 0.2rem;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 45px;
    transition: 0.2s;
    background: grey;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
    transform: ${prop => prop.isLight ? 'translateX(0)' : 'translateX(1.7rem)'};

`
const Toggle = ({theme,  toggleTheme }) => {
    const isLight = theme === 'dark'
    console.log(isLight)
    return (
        <Button onClick={toggleTheme}>
            <Ball onClick={toggleTheme} isLight={isLight} />
        </Button>
    );
};
console.log()
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;
