import bootstrap from "../icons/frontend/bootstrap.png";
import css3 from "../icons/frontend/css3.png";
import html5 from "../icons/frontend/html5.png";
import javascript from "../icons/frontend/javascript.png";
import react from "../icons/frontend/react.png";
import sass from "../icons/frontend/sass.png";
import styled from "../icons/frontend/styled-components.png";
import git from "../icons/other/git.png";
import github from "../icons/other/github.png";
import jest from "../icons/other/jest.png";
import npm from "../icons/other/npm.png";
import webpack from "../icons/other/webpack.png";
import battleship from "../icons/screenshots/battleship.png";
import shoppingCart from "../icons/screenshots/shopping-cart.png";
import cv from "../icons/screenshots/cv.png";
import weather from "../icons/screenshots/weather.png";
import website from "../icons/screenshots/website.png";
import clonedit from "../icons/screenshots/clonedit.png";
import typescript from "../icons/frontend/typescript.png";
import firebase from "../icons/other/firebase.png";
import SQL from "../icons/other/SQL.png";
import nodejs from "../icons/other/nodejs.png";

export const frontEnd = [
  { image: javascript, name: "JavaScript" },
  { image: html5, name: "HTML5" },
  { image: css3, name: "CSS3" },
  { image: react, name: "React.js" },
  { image: typescript, name: "TypeScript" },
  { image: bootstrap, name: "Bootstrap" },
  { image: sass, name: "Sass" },
  { image: styled, name: "Styled Components" },
];

export const misc = [
  { image: git, name: "Git" },
  { image: github, name: "GitHub" },
  { image: npm, name: "npm" },
  { image: nodejs, name: "Node.js" },
  { image: SQL, name: "SQL" },
  { image: webpack, name: "Webpack" },
  { image: jest, name: "Jest" },
  { image: firebase, name: "Firebase" },
];

export const projectInfo = [
  {
    name: "Clonedit",
    image: clonedit,
    repo: "https://github.com/Jackfcs/clonedit",
    live: "https://clonedit-production.web.app/",
    description: "Clone of Reddit. Using React, TypeScript and Firebase",
  },
  {
    name: "Shopping Cart",
    image: shoppingCart,
    repo: "https://github.com/Jackfcs/shopping-cart",
    live: "https://jackfcs.github.io/shopping-cart/",
    description: "React shopping cart using React Router",
  },
  {
    name: "Battleship",
    image: battleship,
    repo: "https://github.com/Jackfcs/battleship",
    live: "https://jackfcs.github.io/battleship/",
    description: "Battleship game using factory functions",
  },
  {
    name: "CV Generator",
    image: cv,
    repo: "https://github.com/Jackfcs/cv-project",
    live: "https://jackfcs.github.io/cv-project/",
    description: "A tool to generate a formatted CV with React Hooks",
  },
  {
    name: "Weather App",
    image: weather,
    repo: "https://github.com/Jackfcs/weather-forecast-app",
    live: "https://jackfcs.github.io/weather-forecast-app/",
    description: "Weather app using OpenWeatherMap API",
  },
  {
    name: "Personal Website",
    image: website,
    repo: "https://github.com/Jackfcs/personal-website",
    live: "https://jackcampbellsmith.com",
    description: "My personal portfolio using React with Styled Components",
  },
];
