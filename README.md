# Weather Forecast App
This challenge was set by Toumetis on the 12th April for completion by the 19th April.

## The Brief
A client requires a simple web application that will enable their analysts to understand the weather in a specific location in the world 🌎. 
Your brief is to create a single page web application that will allow the user to enter a location and view weather details about it. The client would like to see the following details in particular:


Current temperature
Current weather conditions
Time till next sunset
Chart showing the forecast (min, max and average temperature) for the next six days including today.

Extra tasks:
The client would also like to see the current search location pinned on a map.
Implement an autocomplete widget for the location search - a basic implementation is all that is required. If you were to develop a full production implementation:
- What would the inputs/outputs look like?
- What performance considerations are there?
- What edge cases could there be?
- How would you decouple this widget from this particular use case?

## Setup Prerequisites
Installation of yarn on local machine

## Setup Install
cd to local desired folder

git clone git@github.com:vbro1293/weather-forecast-app.git

yarn install (This should run the package.json file and install all the relevant devpendencies to get the app running locally)

## Run app
yarn start (View on localhost:3000)

(yarn watch-css -Starts watching on sass files, if editing)


# The Project
Initially being given a clear defined brief and wireframe, I set out the following stages to the project in order to manage the project efficiently.
- Functional specification
- Technology choice
- Logic
- Setup/Documentation/Git
- File system planning
- MVP
- Testing

## Functional Specification
Following the brief, the app has a very clearly defined specification for the MVP

1. Show the current temperature
2. Show the current weather conditions
3. Show the time till next sunset
4. Show a chart showing the forecast (min, max and average temperature) for the next six days including today.

Extra Features
1. Show current location on a map
2. Autocomplete widget for location search

## Technology Choice
I chose to use React and Redux for this project and use axios to make requests to the API. It is a technology that I am still learning but enjoy using it and thought it was appropriate for the app, as it focuses on interactive UIs.

## Logic
This is a very high-level overview of the logic that I thought my MVP should have. It helped gain a better understanding of the steps for creating the app.
1. User inputs location name
2. "submit" button, takes inputtted location name
3. Uses location name in the request to API
4. API response contains location id
5. Use returned location id to make request to API
6. API response contains weather data
7. Store data locally
8. Display weather data

## Setup/Documentation/Git
1. Setup github repo page
2. Setup local folder to store app
3. create-react-app weather-forecast-app
4. git init, git remote add origin …, git add *, git commit -m “initial commit”, git push origin master
5. Create development branch to keep inline with GitFlow workflow
6. Created feature branches in order to commit work to and used pull requests, code reviews to merge branches into development. Create versions to release work onto master.
7. To startup app - yarn start, app runs on localhost:3000
8. Use yarn as the dependency manager
9. Additional libraries added using "yarn add [library]" : 
    - immutable (create immutable Map and List)
    - redux (state kept in store, data can be passed as props and dispatches can be passed as props in order to update the state)
    - react-redux (connect react and redux)
    <!-- - redux-thunk -->
    - node-sass-chokidar (used react documentation to enable the css preprocessor Sass, run "yarn watch-css")

## File system planning
This is a rough plan of the file system which I try to follow, in order to have clear places to stores specific parts of the app. This helped when having to find these files again and knowing where the best place to save them was, setting this up initially helps with ensuring nothing is forgotten.

In the app/src folder:

components/ [contains just the ui, minimal logic, no hard data - just passed in data]

containers/ [contains wrapped components, enabling dispatching]

data/ [all the data - actions(api and state), initial, reducer, store]

styles/ [all the styling files]

styles/scss [contains sass files]

styles/css [contains css files created from scss]

app.css [contains import of css file which was created priginally from sass files]

index.css [contains css of the general page styling - minimal]

index.js [contains the wrapped App.js with Provider (connecting components with store) and Router (allows routing withing app)]

## MVP
From experience with my previous similar project, pre-planning and ongoing planning throughout the project was very useful - it limited the decisions that needed to be made whilst creating it.

Work flow/Work Process
I chose to use Gitflow in order to do my work. Working a master branch, development branch and feature branches. The master was only merged into a limited amout of times. The development was the primary branch of focus as feature branches were created off of it in order to do specific pieces of work. I generally committed multiple times on the branch in order to track of my work with commenting the commits. I then created pull requests for them and merged them back into development. This allowed a controlled and smooth work flow. After a significant number of feature branches, I merged development into master and tagged each version.


## Testing
