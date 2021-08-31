import React from 'react';
import Toggle from "./Toggler";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 10.25vw;
  max-height: 60px;
  position: relative;
  margin-bottom: 3.9vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  background: ${({ theme }) => theme.body};
  z-index; 999;
`

const ULContainer = styled.div`
width: 60.2vw;
height: 100%;
vertical-align: middle;
max-height: 60px;
position: absolute;
right: 8vw;
display: flex;
align-items: center;
`

const Ul = styled.ul`
width: 60vw;
list-style-type: none;
display: flex;
height: 2vw;
width: inherit;
justify-content: space-between;
align-content: center;
align-items: middle;

`

const A = styled.a`
  font-family: 'DM Sans', sans-serif;
  font-size: 2vw;
  text-decoration: none;
  height: 2vw;
  display: block;
`


const NewToggle = styled(Toggle)`
    
        position: relative;
        bottom: .5vw;
        right: 3vw;

    
`

const Menu = (props) => {
    return (
        
            <Container>
                <ULContainer>
            <Ul>
            
                <li><A>Home</A></li>
                <li><A>About</A></li>
                <li><A>Skills</A></li>
                <li><A>Projects</A></li>
                <li><A>Contact</A></li>
                <li><A>Mode</A></li>
                <NewToggle theme={props.theme} toggleTheme={props.toggleTheme} ></NewToggle>
                
             
            </Ul>
            </ULContainer>
           </Container>
        
    )
}

export default Menu
