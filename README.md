Northcoders News website
==========================
This is the code for the Northcoders News website. It is a full stack application that uses 
a React front end and a Node/Express back end. It is deployed on Netlify and uses
a PostgreSQL database.

Check out the live demo of Northcoders News at [NC News website](https://londonnews.netlify.app/). Please note, it may take a few seconds for the data to load.

## What is Northcoders News? 
Northcoders News is a news aggregation and discussion platform that I built as part of my studies on the Northcoders full-stack software development bootcamp. It showcases my skills in front-end development using React to create a fully functional and interactive website.

## Features

- Browse articles from various sources on the homepage
- Like articles
- Leave comments
- Delete your comments

## Backend and API

The data you see and interact with is powered by a backend server and API that I also created during the bootcamp. You can find the code for the backend server here:

Repository: NC News Server: [NC News Server](https://github.com/daniloczar/Backend-Project-NC-News)

Hosted Server: [Hosted Server](https://backend-project-nc-news-z6wy.onrender.com/)

## Installation and Setup
To get started you will first need to create a local copy of this repository.

1. Fork and clone the repository.

```sh
git clone https://github.com/daniloczar/fe-nc-news.git
```

2. Once the repo has been cloned, in the terminal ```cd``` in to the project directory.

```sh 
cd fe-nc-news
```
3. Install dependencies.

```sh 
npm install
```

Run the website locally.

```sh 
npm run dev
```

You will then see the following confirmation in the terminal.

 ```sh 
 VITE v5.1.5  ready in 363 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
  ```
You will then need to either ```cmd``` or ```ctrl``` click on the url to load the webpage.

```sh 
http://localhost:5173/ 
```
## Minimum requirements

Node.js (version 18.17.1 or higher)

## Main Technologies Used
- ```React``` - A JavaScript library for building user interfaces.
- ```Vite``` - Frontend build tool that significantly improves the development experience.
 - ```Axios``` - Promise based HTTP client for the browser and node.js.
- ```React Router``` - JavaScript framework to handle client and server-side routing in React apps.
- ```Jest``` - JavaScript Testing.
- ```ESLint``` - JavaScript linter.
- ```Babel``` - JavaScript compiler used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript.
- ```CSS``` - building custom designs.
- ```MaterialUI``` - List of React components and utilities.

## Scripts
- ```npm test```: Runs the Jest test suite.
- ```npm run dev```: Starts the development server using Vite.
- ```npm run lint```: Lints the codebase for potential errors.
- ```npm run build```: Creates a production build of the app for deployment.
- ```npm run preview```: Serves a production build locally for testing, USE AFTER BUILD SCRIPT.
___

deployed: https://londonnews.netlify.app


This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)
