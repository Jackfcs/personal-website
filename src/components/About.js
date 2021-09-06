import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  scroll-margin-top: 8vw;
  padding: 5.7vw;

  @media (max-width: 480px) {
      flex-direction: column;
  }
`;

const SectionTitle = styled.h2`
  flex: 5;

  @media (max-width: 480px) {
    flex: 1;
}
`;

const SectionText = styled.p`
  width: 45vw;
  max-width: 100%;
  height: auto;
  flex: 6;

  @media (max-width: 480px) {
    width: 90vw;
    flex: 1;
}
`;

const About = () => {
  return (
    <Container id="about">
      <SectionTitle>About me</SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at eros
        orci. Sed volutpat nisi eget sodales auctor. Praesent id massa at purus
        semper pellentesque. Vestibulum ac quam leo. Ut lacinia lorem at sapien
        faucibus, a tempor ex hendrerit. Maecenas lacinia mollis lectus, non
        facilisis sem accumsan in. Donec sit amet neque eleifend, porta leo
        porttitor, egestas ante. Sed tristique, magna sed pellentesque
        scelerisque, justo orci volutpat dolor, et sodales sapien velit sit amet
        lorem.
        <br />
        <br />
        semper pellentesque. Vestibulum ac quam leo. Ut lacinia lorem at sapien
        faucibus, a tempor ex hendrerit. Maecenas lacinia mollis lectus, non
        facilisis 
        lorem.
        <br />
        <br />
       sodales auctor. Praesent id massa at purus
        semper pellentesque. Vestibulum ac quam leo. Ut lacinia lorem at sapien
        faucibus, a tempor ex hendrerit. Maecenas lacinia mollis lectus, non
        facilisis sem accumsan in. Donec sit amet neque eleifend, porta leo
        porttitor, egestas ante. Sed tristique, magna sed pellentesque
        scelerisque, justo orci volutpat dolor, et sodales sapien velit sit amet
        lorem.
        <br />
        <br />
        semper pellentesque. Vestibulum ac quam leo. Ut lacinia lorem at sapien
        faucibus, a tempor ex hendrerit. Maecenas lacinia mollis lectus, non
        facilisis 
        lorem.
        
      </SectionText>
    </Container>
  );
};

export default About;
