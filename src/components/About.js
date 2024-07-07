import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  scroll-margin-top: 8vw;
  padding: 5.7vw;
  background: ${({ theme }) => theme.secondaryBG};

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
  &:after {
    background-color: ${({ theme }) => theme.text};
  }

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
        <br />
        <br />
        A few years ago during a successful career in content delivery and
        management, I discovered my passion for programming when using Python to
        create a script that automated a previously time-intensive task for my
        team. I found the process of learning to code and then writing and
        executing the script to be both hugely rewarding and satisfying.
        <br />
        <br />
        Something clicked, and from this point on I realised programming was
        something that I wanted to pursue. Over the next couple of years I
        developed my technical abilities and knowledge at every opportunity
        outside of my working hours. I meticulously following an online
        curriculum called The Odin Project, which provides both the resources
        and community in order to become a highly skilled developer.
        <br />
        <br />
        The below projects are a snapshot of my learning and development during
        this period.
        <br />
        <br />
        Please get in touch if you have any questions or if you&apos;d like to
        collaborate.
      </SectionText>
    </Container>
  );
};

export default About;
