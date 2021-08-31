import React from "react";
import styled from "styled-components";
import react from "../icons/frontend/react.png";
import { frontEnd, misc } from "./Images";

const SkillsComponent = styled.div`
margin-top: 8vw;
margin-bottom: 8vw;
`;

const SectionTitle = styled.h2`
margin-bottom: 3.6vw;
text-align: left;
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
`

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
  transition: bottom 0.2s;
  padding: 0.5vw;
  &:hover {
    bottom: 20px;
  }
  
  `;

const Skills = () => {
  const frontEndImages = frontEnd.map((image, index) => {
    return <Image src={image} key={index}></Image>;
  });
  const miscImages = misc.map((image, index) => {
    return <Image src={image} key={index}></Image>;
  });

  return (
    <div>
      
      <SkillsComponent>
          <SectionTitle>Skills</SectionTitle>
          <AreaTitle>frontend</AreaTitle>
        <SkillsContainer>{frontEndImages}</SkillsContainer>
        <AreaTitle>misc</AreaTitle>
        <SkillsContainer>{miscImages}</SkillsContainer>
      </SkillsComponent>
    </div>
  );
};

export default Skills;
