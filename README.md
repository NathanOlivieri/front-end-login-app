# runner-app
created by Nathan Olivieri <br>
[Nathan Olivieri](mailto:nathan.olivieri1@gmail.com)<br>

App was created using create-react-app<br>

### Install dependencies

cd into repo <br>
run command: ls -al (ensure in same folder as package.json file)<br>
run command: npm install (install modules needed)<br>

### Test the app

run command: npm run test ( 3 tests will pass ) - The code for all tests is in ./src/App.test.js<br>
(ctrl C to exit)

### Run the app

run command: npm start (will launch the website locally at http://localhost:3000 and open a browser window to that address.)<br>
(ctrl C to exit)
<br>

## Notes

### Login Page
As per the requirements, the App features 2 pages, one login page, one posts page.<br>
In order to see the Posts page, the user must fill out the form including checking the "Remember me" box and click on the Login button
Although there are several ways this access restriction could be done,
I chose to use a Library that generates a JWT containing the user's email info and place it in the browser Cookies to achieve this in the spirit of having a working solution as quickly as possible.<br>

### Posts Page
In order to display the data in a way that made sense, I chose to create a new list of post objects based on what was returned from the api. <br>
The code that reformats the list can be found in ./src/Utils/formatPosts.js<br>
My new post objects contain all of the info from the api list but also adds a date created, userName and imageUrl value.
The list is then sorted into smaller lists of posts only pertaining to a single user.
This allowed me to achieve two things: <br>
1: Fit all 100 posts in a reasonable amount of space and<br>
2: Organize the data so that it could tell some sort of latin story.<br>

### Visual styles

I contemplated building this with Vue however, opted to built it in React since this is what I know best. I chose styled-Components to simulate the feel of Vue 
where possible. Used scss to set some default display properties to the pages themselves. Everything else uses styled-components and should be nicely reusable 
if scaled although one of the first things I would do if making this app bigger would be to implement Themes from styled-componeents to clean up the ternary 
operations in the css. The app is responsive down to 320px size however, was not made using a mobile-first aproach. All media queries are reversed.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

