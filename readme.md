# DocuSet API Readme

## Technologies Used
  DocuSet's API is powered by NodeJS, Express and Mongoose, which all work together to seamlessly handle frontend user functionalities.
  Our controllers handle incoming get requests, whether it be get all, get by ID, or specially tailored endpoints to meet a user's need- like filter by title / subject / or search documents by words or phrases!

## Features
DocuSet allows users to create new sheets, edit and delete old ones and search the database using titles, subjects or keywords.

Future Features will include:
  - User Authentication:
    - Which will unlock:
      - Note Feeds
      - Collaborative Notes
      - Private Notes
      - Comment and Liking notes
  - Rich Text Editor

## Installation Instructions
Steps to Creating your own ✨ Private ✨ set of Notes:
It's important to note, in order to make this work on your local machine you'll need:
  - A MongoDB Atlas account, for storing your data
  - And both the front and backend deployed hosting sites of your choice! (We used Netlify for the Front and Heroku for the back!)

<ol>
  <li>Fork and Clone both the Front and Backends</li>
    - <a href="https://github.com/SEIR822-SquardFeelTheMERN/feelthemern-frontend">Frontend</a>
    - <a href="https://github.com/SEIR822-SquardFeelTheMERN/feelthemern-backend">Backend</a>
  <li>In your backend file, download dependencies, create a .env file and paste your DATABASE_URL (Remember to put your .env in your .gitignore!)</li>
  <li>In your frontend, you will need to update the URLs in each fetch request with the URL provided by your Backend Hosting service</li>
  <li>Now you can use your Frontend with the full functionality of our current app version, with the freedom of adding in features to make it your own! </li>
</ol>

If you wish to use _our_ browser based version, <a href="https://cheatsheetmern.netlify.app/"> 👉 click here 👈</a>

