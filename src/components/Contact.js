import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import CV from "../icons/cv/jackcampbellsmithCV.pdf"

const ContactComponent = styled.div`
    scroll-margin-top: 14vw;

  padding: 5.7vw;
  background: ${({ theme }) => theme.secondaryBG};
`

const SectionTitle = styled.h2`
    margin-bottom: 3.6vw;
    text-align: center;
`;

const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 3vw;
    margin-bottom: 5vw;
`

const Icon = styled(FontAwesomeIcon)`
    margin-right: 2vw;
`

const ContactLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    margin-bottom: 4vw;
    font-size: 3.5vw;
    &:hover{
        text-decoration: underline;
    }
`


const Contact = () => {

    return (
       <ContactComponent id="contact">
           <SectionTitle>Contact</SectionTitle>
           <LinksContainer>
            <ContactLink href="mailto:jackfcs22@gmail.com"><Icon icon={faEnvelope}></Icon>jackfcs22@gmail.com</ContactLink>
            
            <ContactLink href="https://github.com/Jackfcs" rel="noreferrer" target="_blank"><Icon icon={faGithub}></Icon>Github</ContactLink>
            <ContactLink href="https://www.linkedin.com/in/jack-campbell-smith/" rel="noreferrer" target="_blank"><Icon icon={faLinkedin}></Icon>Linkedin</ContactLink>
            <ContactLink href={CV} download="jackcampbellsmithCV.pdf" ><Icon icon={faFile}></Icon>Download Resume</ContactLink>
           </LinksContainer>

       </ContactComponent>
    )
}

export default Contact;