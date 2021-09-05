import React from "react";
import styled from "styled-components";
import { projectInfo } from "./Images";

const ProjectsComponent = styled.div`
  margin-top: 8vw;
  margin-bottom: 8vw;
  scroll-margin-top: 14vw;
`;

const SectionTitle = styled.h2`
  margin-bottom: 3.6vw;
  text-align: left;
`;



const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const Project = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35vw;
    background-color: #1a1a1a;
    margin-bottom: 5vw;
    border-radius: 2vw;
`;

const Img = styled.img`
    width: inherit;
    height: 20vw;
    object-fit: cover;
    object-position: 50% 0%;
    border-radius: 2vw 2vw 0 0;
`

const ProjectName = styled.h3`
    margin-top: 1vw;
    font-size: 3vw;
    font-family: 'Volkhov', serif;
`

const ProjectDescription = styled.p`
    text-align: center;
    margin: 1vw 0vw 1vw 0vw;
`

const ButtonContainer = styled.div`

`

const Projects = () => {
  const allProjects = projectInfo.map((project, index) => {
    return (
      <Project key={index}>
        <Img src={project.image} alt={"Screenshot of " + project.name + " project"}></Img>
        <ProjectName>{project.name}</ProjectName>
        <ProjectDescription>This is my project description that needs to be defined</ProjectDescription>
        <ButtonContainer>
            <a href={project.live} rel="noreferrer" target="_blank">Demo</a>
            <a href={project.repo} rel="noreferrer" target="_blank">Code</a>
        </ButtonContainer>
      </Project>
    );
  });

  return (
    <ProjectsComponent id="projects">
      <SectionTitle>Projects</SectionTitle>
      <ProjectsContainer>{allProjects}</ProjectsContainer>
    </ProjectsComponent>
  );
};

export default Projects;
