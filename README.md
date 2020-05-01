# Skipping-Tracker
Skipping-Tracker is a node.js application for tracking your skipping exercises.
Built with express, mongoDB and node.js

It also has REST API can return a given users exercise data.

## Installation
install the package dependencies by running this in the program directory
```bash
npm install
```

## Usage
The application has a REST API which can be called by using simply using your email

```bash
curl http:localhost:3000/api/:email
```

to run the node server:
```bash
  npm run start
```
this will start the node server on the port 3000 or the selected port stated in process.env.PORT


to use the application simply type in your email, intensity and duration of workout
the application will store this data in the database and calulate calories burned.

