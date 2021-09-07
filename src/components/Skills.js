import React from "react";
import styled from "styled-components";
import { frontEnd, misc } from "./Images";

const SkillsComponent = styled.div`
  margin-top: 8vw;
  margin-bottom: 8vw;
  scroll-margin-top: 5vw;

  padding: 5.7vw;

  background: ${({ theme }) => theme.secondaryBG};
`;

export const SectionTitle = styled.h2`
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

  @media (max-width: 480px) {
    &:after {
        margin-right: 30vw;
    }
 }
`;

const SkillsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-bottom: 48px;
  justify-content: flex-start;

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(3, 20.8vw);
    grid-column-gap: 12vw;
    grid-row-gap: 10vw;
    height: auto;
    }
`;

const AreaTitle = styled.p`
  margin-bottom: 1.25vw;
  @media (max-width: 480px) {
      font-size: 5vw;
      margin-bottom: 4vw;
  }
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
  height: auto;
  vertical-align: middle;
  background-color: white;
  border-radius 12px;
  height: 7vw;
  width: 7vw;
  margin-right: 1.1vw;
  margin-left: 1.1vw;
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

  @media (max-width: 480px) {
      width: 19vw;
      height: 19vw;
      ${ImageContainer}: hover & {
        transition: none !important;
        transform: scale(1);
        
      }
  }
    
  `;

const Name = styled.p`
    transform: scale(0) translateY(-2vw)
    transition: transform 0.2s;
    visibility: hidden;
    ${ImageContainer}: hover & {
        visibility: visible;
    }
    position: absolute;
    top: 8vw;
    
    @media (max-width: 480px) {
        margin-top: 1vw;
        visibility: visible;
        font-size: 3vw;
        position: static;
        text-align: center;
    }
`;

export const Skills = () => {
  const frontEndImages = frontEnd.map((image, index) => {
    return (
      <ImageContainer key={index}>
        <Image src={image.image}></Image>
        <Name>{image.name}</Name>
      </ImageContainer>
    );
  });
  const miscImages = misc.map((image, index) => {
    return (
      <ImageContainer key={index}>
        <Image src={image.image}></Image>
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

//export Skills;
//export SectionTitle;
