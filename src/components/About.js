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
        I am a results driven and problem solving programmer looking to start my
        career in software development. During a successful career in content
        delivery and management, I discovered my passion for programming when
        using Python to create a script that automated a previously
        time-intensive task for my team. I found the process of learning to code and execute the script to be both hugely rewarding and satisfying.
        <br />
        <br />
        Something clicked.
        <br />
        <br />
        From this point on I realised programming was something that I wanted to
        pursue. For over a year I have been developing my technical abilities
        and knowledge at every opportunity outside of my working hours. I have been meticulously following an online curriculum called The Odin Project, which provides both the resources and community in order to become a highly skilled developer.
        <br />
        <br />
        It has been an extremely enjoyable process; I relish the tough
        challenges caused by a problem, followed by the high that comes from
        solving them and the fact that there will always be something new to
        learn.
        <br />
        <br />
        Please get in touch if you have any questions or if you’d like to
        collaborate.
      </SectionText>
    </Container>
  );
};

export default About;
