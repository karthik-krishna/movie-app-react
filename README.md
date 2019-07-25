This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and uses redux for state management system and consists of 3 pages home, upcoming and movie detail page, search page gives you list of all the movies based on the search query and upcoming movies page gives you a list of all upcoming movies and by clicking on any movie , it will be re-directed to its detail page where a brief description of the movie and few details related to the movie will be displayed. Below you can also find cast and crew, the trailers related to the movie, reviews and similar movies.

The application uses axios for http requests and uses [TMDB](https://developers.themoviedb.org/3/getting-started/introduction) (The Movie Data Base) apis for the data. 

DEMO : https://movie-guide-react.netlify.com/

[![Netlify Status](https://api.netlify.com/api/v1/badges/a85124bd-ec5b-46e0-808d-745cded4ed51/deploy-status)](https://app.netlify.com/sites/movie-guide-react/deploys)

## Features which can be implemented in future.
* Show recommended movies based on search
* Rate the movie as a guest user
* Authentication 
* Display TV shows, add fav shows, latest episodes etc.,
* Can display 6-7 lines of reviews and then can have a read more button which can be re-directed to another page with complete review. There another service call can be made based on review-id

After authentication
* Add movie to favourite,
* Show the favourite movies
* Rate the movie or Link the rated movie as guest user to the authenticated user

Unit testing for newly added services


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Making a Progressive Web App

In order to serve the app, install serve by running `npm install -g serve`. Run command `npm run build` , since PWA's work only in production build and serve the application using `serve -s build`.

