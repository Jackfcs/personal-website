import React from "react";
import styled from "styled-components";
import { frontEnd, misc } from "./Images";

const SkillsComponent = styled.div`
  margin-top: 8vw;
  margin-bottom: 8vw;
  scroll-margin-top: 14vw;

  padding: 5.7vw;

  background: ${({ theme }) => theme.secondaryBG};
`;

const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 3.6vw;
  text-align: left;
  &:after {
    content: "";
    position: relative;
    top: 0.2vw;
    flex: 1;
    margin-left: 1rem;
    height: 0.4vw;
    margin-right: 50vw;
    background-color: ${({ theme }) => theme.text};
    border-radius: 1vw;
  }
`;

const SkillsContainer = styled.div`
  position: relative;
  height: 7.1vw;
  display: flex;
  flex-direction: row;
  margin-bottom: 48px;
  justify-content: flex-start;
`;

const AreaTitle = styled.p`
  margin-bottom: 1.25vw;
  font-size: 2vw;
`;

const ImageContainer = styled.div``;

const Image = styled.img`
  height: auto;
  vertical-align: middle;
  margin: 0;
  background-color: white;
  border-radius 12px;
  height: 100%;
  width: 7vw;
  margin-right: 2.2vw;
  display: flex;
  align-items: center;
  justify-items: center;
  position: relative;
  bottom: 0;
  transition: transform 0.2s;
  padding: 0.5vw;

  ${ImageContainer}: hover & {
    transform: scale(1.2) translateY(-0.9vw)
    
  }
  `;

const Name = styled.p`
    width: 8vw;
    text-align: center;
    transform: scale(0) translateY(-2vw)
    transition: transform 0.2s;
    visibility: hidden;
    ${ImageContainer}: hover & {
        visibility: visible;
    }
    
`;

const Skills = () => {
  const frontEndImages = frontEnd.map((image, index) => {
    return (
      <ImageContainer>
        <Image src={image.image} key={index}></Image>
        <Name>{image.name}</Name>
      </ImageContainer>
    );
  });
  const miscImages = misc.map((image, index) => {
    return (
      <ImageContainer>
        <Image src={image.image} key={index}></Image>
        <Name>{image.name}</Name>
      </ImageContainer>
    );
  });

  return (
    <div>
      <SkillsComponent id="skills">
        <SectionTitle>Skills</SectionTitle>
        <AreaTitle>frontend</AreaTitle>
        <SkillsContainer>{frontEndImages}</SkillsContainer>
        <AreaTitle>other</AreaTitle>
        <SkillsContainer>{miscImages}</SkillsContainer>
      </SkillsComponent>
    </div>
  );
};

export default Skills;
