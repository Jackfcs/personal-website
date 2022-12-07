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

  @media (min-width: 1200px) {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
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
  flex: 8;
  font-size: 2vw;

  @media (max-width: 480px) {
    width: 90vw;
    flex: 1;
    font-size: 4vw;
  }
`;

const About = () => {
  return (
    <Container id="about">
      <SectionTitle>About me</SectionTitle>
      <SectionText>
        I am a highly motivated and diligent JavaScript developer, with a focus
        on Front End. I'm passionate about finding the right solution to the
        problem and focused on continually learning and developing my existing
        skills and expertise to enable this. I'm a team player, work well under
        pressure and enjoy projects that challenge me.
      </SectionText>
    </Container>
  );
};

export default About;
