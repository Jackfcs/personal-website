import React from "react";
import styled from "styled-components";
import { projectInfo } from "./Images";

const ProjectsComponent = styled.div`
  margin-top: 8vw;
  margin-bottom: 8vw;
  scroll-margin-top: 14vw;

  padding-left: 5.7vw;
  padding-right: 5.7vw;
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
    height: auto;
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
    margin-bottom: 1vw;
    font-size: 3vw;
    font-family: 'Volkhov', serif;
`

const ProjectDescription = styled.p`
    text-align: center;
`

const ButtonContainer = styled.div`
    margin: 2vw;
    width: 100%;
    display: inherit;
    justify-content: space-evenly;
`

const ProjectLink = styled.a`
    background-color: brown;
    text-align: center;
    padding: 1vw;
    border-radius: 2vw;
    min-width: 12vw;
    max-width: 12vw;
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    transition: background-color 0.4s;
    &:hover {
        background-color: ${({ theme }) => theme.secondaryBG};
    }

`

const Projects = () => {
  const allProjects = projectInfo.map((project, index) => {
    return (
      <Project key={index}>
        <Img src={project.image} alt={"Screenshot of " + project.name + " project"}></Img>
        <ProjectName>{project.name}</ProjectName>
        <ProjectDescription>This is my project description that needs to be defined</ProjectDescription>
        <ButtonContainer>
            <ProjectLink href={project.live} rel="noreferrer" target="_blank">Live Demo</ProjectLink>
            <ProjectLink href={project.repo} rel="noreferrer" target="_blank">Github Repo</ProjectLink>
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
