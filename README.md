# Game Of Drones

This is A Game of Drones test application which involves both API and UI.

Game of Drones API is written with NodeJS version 8.9.1 and npm version 5.5.1.

Game of Drones UI is written in Angular version 7.0.6.

## Requirements
To have a global instance of `mongod` installed, up and running.

Once you clone this project please navigate to both `./game-of-drones-api` and `./game-of-drones-ui` and run 

`npm install`

In `./game-of-drones-api` run `node server` in order to start the API application.

In `./game-of-drones-ui` run either `npm start` or `ng serve` in order to start the UI application.

API should run on `http://localhost:3000`. Otherwise, it should run on the given port, if specified. You can use tools such as Postman or JMeter in order to check API's endpoints.

UI should run on `http://localhost:4200` which can be accessed through any browser.

#### Note
Remind to run API prior to UI since the Angular project makes calls to the Node one in order to work.

# TBD 
### Write single CLI command to run npm install on both projects at the same time. Same for projects starting up and test.


## Build
For the UI project, run `ng build` in order to build. 

## Running unit tests on UI

For unit testing in the UI run `ng test`.
