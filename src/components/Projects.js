import React from "react";
import styled from "styled-components";
import { projectInfo } from "./Images";
import {SectionTitle} from "./Skills"

const ProjectsComponent = styled.div`
  margin-top: 8vw;
  margin-bottom: 8vw;
  scroll-margin-top: 8vw;

  padding-left: 5.7vw;
  padding-right: 5.7vw;
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
    justify-content: space-between;
    width: 35vw;
    height: auto;
    background-color: ${({ theme }) => theme.secondaryBG};
    margin-bottom: 5vw;
    border-radius: 2vw;

    @media (max-width: 480px) {
        width: 80vw;
        height: 60vw;
        margin-bottom: 10vw;
    }
`;

const Img = styled.img`
    width: inherit;
    height: 20vw;
    object-fit: cover;
    object-position: 50% 0%;
    border-radius: 2vw 2vw 0 0;
    @media (max-width: 480px) {
        width: 80vw;
        height: 32vw;
    }
`

const ProjectName = styled.h3`
    margin-top: 1vw;
    margin-bottom: 1vw;
    font-size: 3vw;
    font-family: InterBold;

    @media (max-width: 480px) {
        font-size: 5vw;
    }
`

const ProjectDescription = styled.p`
    text-align: center;
    margin-left: 3vw;
    margin-right: 3vw;
`

const ButtonContainer = styled.div`
    margin: 2vw;
    width: 100%;
    display: inherit;
    justify-content: space-evenly;
`

const ProjectLink = styled.a`
    background-color: #171717;
    text-align: center;
    padding: 1vw;
    border-radius: 2vw;
    min-width: 10vw;
    max-width: 10vw;
    text-decoration: none;
    color: white;
    transition: background-color 0.4s;
    font-size: 1.6vw;
    &:hover {
        background-color: ${({ theme }) => theme.secondaryBG};
    }

    @media (max-width: 480px) {
        min-width: 20vw;
        max-width: 20vw;
        padding: 2vw;
        border-radius: 5vw;
        font-size: 3vw;
    }

`

const Projects = () => {
  const allProjects = projectInfo.map((project, index) => 
      <Project key={index}>
        <Img src={project.image} alt={"Screenshot of " + project.name + " project"}></Img>
        <ProjectName>{project.name}</ProjectName>
        <ProjectDescription>{project.description}</ProjectDescription>
        <ButtonContainer>
            <ProjectLink href={project.live} rel="noreferrer" target="_blank">Live Demo</ProjectLink>
            <ProjectLink href={project.repo} rel="noreferrer" target="_blank">Github Repo</ProjectLink>
        </ButtonContainer>
      </Project>
    );

  return (
    <ProjectsComponent id="projects">
      <SectionTitle>Projects</SectionTitle>
      <ProjectsContainer>{allProjects}</ProjectsContainer>
    </ProjectsComponent>
  );
};

export default Projects;
