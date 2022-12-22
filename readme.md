# UI Cypress Automation Challenge

This Framework tests 3 scenarios from an e-commerce site related to the functionality of adding and removing elements from the shopping cart

## Getting Started

These instructions will allow you to execute the tests in your local machine

### Prerequisites

You need to install: 
1. NodeJS
2. Cypress


### Project Set-up

1. Create a Folder in your machine
2. Using the terminal, navigate to the folder you created in the previous step
3. Download (or clone) this repository
3. Install the dependencies from `package.json`using the command `npm install`

## Running the tests

1. Using the terminal navigate to the folder where you cloned the project
   A. To open Cypress' GUI run `npx cypress open` Then you will have the ability to pick the tests to run
   B. To run the tests from the terminal run the command `npm run test`
   C. To run the tests in head mode run the command `npm run test:head-mode`

## Test Results

Depending on the command you choose to run the test results will look like the following examples.

A & B. Test results for headed mode using the command `npx cypress open` or  `npm run test`

Pick the spec file you wish to run

    ![spec file](executionExample/spec-files.png?raw=true)

Test results in headed mode

    ![headed results](executionExample/headed-results.png?raw=true)

C. Test results in headless mode using the command `npm run test:head-mode`

    ![headless results](executionExample/headless1.png?raw=true)


    ![headless results 2](executionExample/headless2.png?raw=true)




