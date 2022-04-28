# Rick and Morty Challenge

Command line app that solves the [Rick And Morty Challenge proposed by Chipax](https://www.notion.so/Rick-and-Morty-Challenge-84a1b794dc09429fb3178c2a24e7c217).

## Technicals

### About the project

To solve the challenge I used **NodeJS** to make a command line application with **JavaScript** because it is one of my favorites programming languages and I feel quite comfortable using it.

This project depends on **Axios** to make HTTPS requests to the Rick and Morty API.

Also, instead of the default Rick and Morty REST API, I chose to use the **GraphQL** API so I could get all the data that I wanted at once, and shape it right from the API server itself for further processing.

For testing purposes, I opted to use **Jest**, as it's one the the most popular NodeJS testing libraries and it's pretty easy to setup.

### Project installation and setup

1. Clone this repository and cd into it.
```bash
git clone https://github.com/RobertoCDiaz/rick-and-morty-challenge
cd rick-and-morty-challenge
```

2. Install npm dependencies
```bash
npm i
```

### Run app
To execute this solution, simply run the following command:

```bash
npm start
```

Or run the main file using:
```bash
node index.js
```

### Testing

To run this project's tests, execute this command
```bash
npm test
```

The most relevant test will check if all of the challenge's exercises are correctly executed (i.e. their results have a proper and correct output) and if they're executed inside of the given time frame (3 seconds).

Also, within the project test suits, a function that transforms a given time (in ms) to a human-readable format will be tested.
