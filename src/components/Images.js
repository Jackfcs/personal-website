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
import todo from "../icons/screenshots/todo.png";
import calculator from "../icons/screenshots/calculator.png";
import library from "../icons/screenshots/library.png";

export const frontEnd = [
  { image: javascript, name: "JavaScript" },
  { image: html5, name: "HTML5" },
  { image: css3, name: "CSS3" },
  { image: react, name: "React.js" },
  { image: bootstrap, name: "Bootstrap" },
  { image: sass, name: "Sass" },
  { image: styled, name: "Styled Components" },
];

export const misc = [
  { image: git, name: "Git" },
  { image: github, name: "GitHub" },
  { image: npm, name: "npm" },
  { image: webpack, name: "Webpack" },
  { image: jest, name: "Jest" },
];

export const projectInfo = [
  {
    name: "Battleship",
    image: battleship,
    repo: "https://github.com/Jackfcs/battleship",
    live: "https://jackfcs.github.io/battleship/",
    description: "Battleship game using factory functions"
  },
  {
    name: "Shopping Cart",
    image: shoppingCart,
    repo: "https://github.com/Jackfcs/shopping-cart",
    live: "https://jackfcs.github.io/shopping-cart/",
    description: "React shopping cart using React Router"
  },
  {
    name: "CV Generator",
    image: cv,
    repo: "https://github.com/Jackfcs/cv-project",
    live: "https://jackfcs.github.io/cv-project/",
    description: "A tool to generate a formatted CV with React Hooks"
  },
  {
    name: "Weather App",
    image: weather,
    repo: "https://github.com/Jackfcs/weather-forecast-app",
    live: "https://jackfcs.github.io/weather-forecast-app/",
    description: "Weather app using OpenWeatherMap API"
  },
  {
    name: "Personal Website",
    image: website,
    repo: "https://github.com/Jackfcs/personal-website",
    live: "https://google.com",
    description: "My personal portfolio using React with Styled Components"
  },
  {
    name: "Todo App",
    image: todo,
    repo: "https://github.com/Jackfcs/to-do-library",
    live: "https://jackfcs.github.io/to-do-library/",
    description: "Todo list using modules in vanilla JavaScript"
  },
  {
    name: "Calculator",
    image: calculator,
    repo: "https://github.com/Jackfcs/calculator",
    live: "https://jackfcs.github.io/calculator/",
    description: "Calculator using vanilla JavaScript"
  },
  {
    name: "Book Library",
    image: library,
    repo: "https://github.com/Jackfcs/book_library",
    live: "https://jackfcs.github.io/book_library/",
    description: "Book library using vanilla JavaScript"
  },
];
