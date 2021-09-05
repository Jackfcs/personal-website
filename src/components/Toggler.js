import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components";


const Button = styled.button`
background: ${({ theme }) => theme.body};
border: 2px solid ${({ theme }) => theme.toggleBorder};
border-radius: 30px;
cursor: pointer;
display: flex;
font-size: 0.5vw;
justify-content: space-between;
margin: 0 auto;
overflow: hidden;
padding: 0.2vw;
position: relative;
width: 6vw;
height: 3vw;
align-items: center;
`;

const Ball = styled.span`
    transition: all 0.5s linear
    position: absolute
    content: "";
    bottom: 0rem;
    right: 0rem;
    width: 2vw;
    height: 2vw;
    border-radius: 50px;
    transition: 0.5s;
    background: grey;
    transform: ${prop => prop.isLight ? 'translateX(0)' : 'translateX(3vw)'};
    left: ${prop => prop.isLight ?  'calc(ovw)' : 'calc(1vw)'};

`
const Toggle = ({theme,  toggleTheme, className}) => {
    const isLight = theme === 'dark'
    return (
        <div className={className}>
        
        <Button onClick={toggleTheme}>
            <Ball onClick={toggleTheme} isLight={isLight}/>
        </Button>
        </div>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;
