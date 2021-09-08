import React, { useState, useEffect } from "react";
import Toggle from "./Toggler";
import styled from "styled-components";
import { stack as MobMenu } from "react-burger-menu";

const Container = styled.div`
  width: 100vw;
  height: 10.25vw;
  max-height: 60px;
  position: relative;
  margin-bottom: 3.9vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: ${({ theme }) => theme.body};

  @media (max-width: 480px) {
      
  }
`;

const ULContainer = styled.div`
  width: 60.2vw;
  height: 100%;
  vertical-align: middle;
  max-height: 60px;
  position: absolute;
  right: 8vw;
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
  }
`;

const Ul = styled.ul`
  width: 60vw;
  list-style-type: none;
  display: flex;
  height: 2vw;
  width: inherit;
  justify-content: space-between;
  align-content: center;
  align-items: middle;

  @media (max-width: 480px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const Li = styled.li`
  font-family: "DM Sans", sans-serif;
  font-size: 1.5vw;
  height: 2vw;
  display: block;
  color: ${({ theme }) => theme.text};
  @media (max-width: 480px) {
    font-size: 4vw;
    position: relative;
    right: 18vw;
    bottom: 1.1vw;
  }
`;

const A = styled.a`
  text-decoration: none;
  display: block;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const NewToggle = styled(Toggle)`
  position: relative;
  bottom: 0.5vw;
  right: 3vw;
  transform: scale(0.8);
  @media (max-width: 480px) {
    transform: scale(1.5);
    right: 15vw;
  }
`;

const StyledBurgerMenu = styled.div`
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 8vw;
    height: 6vw;
    left: 83vw;
    top: 2.5vw;
    z-index: 20;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: ${({ theme }) => theme.text};
    border-radius: 5vw;
    height: 0.1vw;
  }

  /* Color/shape of burger icon bars on hover*/
.bm-burger-bars-hover {
  background: ${({ theme }) => theme.secondaryBG};
}

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    transform: scale(2);
    
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: ${({ theme }) => theme.secondaryBG};
    position: relative;
  }

  /* General sidebar styles */
  .bm-menu {
    background: ${({ theme }) => theme.body};
    font-size: 10vw;
    color: ${({ theme }) => theme.text}
    position: relative;
  }


  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    max-height: 140vw;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
    margin: 2vw;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: ${({ theme }) => theme.body};
  }
`;



const Menu = (props) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 480);

  const [isOpen, setOpen] = useState(false)

  const updateMedia = () => {
    setDesktop(window.innerWidth > 480);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

    const handleIsOpen = () => {
        setOpen(!isOpen)
      }
    
      const closeSideBar = () => {
        setOpen(false)
      }
 

  return (
    <div>
      {isDesktop ? (
        <Container>
          <ULContainer>
            <Ul>
              <Li>
                <A href="#home">Home</A>
              </Li>
              <Li>
                <A href="#about">About</A>
              </Li>
              <Li>
                <A href="#skills">Skills</A>
              </Li>
              <Li>
                <A href="#projects">Projects</A>
              </Li>
              <Li>
                <A href="#contact">Contact</A>
              </Li>
              <Li>Mode</Li>
              <NewToggle
                theme={props.theme}
                toggleTheme={props.toggleTheme}
              ></NewToggle>
            </Ul>
          </ULContainer>
        </Container>
      ) : (
        <Container>
          <ULContainer>
            <Ul>
              <Li>Mode</Li>
              <NewToggle
                theme={props.theme}
                toggleTheme={props.toggleTheme}
              ></NewToggle>
            </Ul>
          </ULContainer>
          <StyledBurgerMenu>
            <MobMenu right width={"100%"}  isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
                <A onClick={closeSideBar} href="#home">Home</A>
                <A onClick={closeSideBar} href="#about">About</A>
                <A onClick={closeSideBar} href="#skills">Skills</A>
                <A onClick={closeSideBar} href="#projects">Projects</A>
                <A onClick={closeSideBar} href="#contact">Contact</A>
            </MobMenu>
          </StyledBurgerMenu>
        </Container>
      )}
    </div>
  );
};

export default Menu;
