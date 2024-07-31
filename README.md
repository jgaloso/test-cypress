# test-cypress
This project is designed to automate the testing of a form on a test website using Cypress. The tests cover various aspects of form validation, submission, and responsive design.

## Project Structure
1. testform.cy.js: Contains tests cases for form submission.
2. apitest.cy.js: Contains tests for the Star Wars API.
3. cypress.config.js: Cypress configuration file.
4. package.json: Contains project metadata and dependencies.

## Prerequisites

- [Node.js](https://nodejs.org/en/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)

## Installation

1. Clone the repository:
   git clone https://github.com/jgaloso/test-cypress.git

2. Install dependencies:
   npm i or npm install

## Running the Tests

### Open Cypress Test Runner

To open the Cypress Test Runner for interactive testing:
npx cypress open

### Run Tests in Headless Mode

To run the tests in headless mode and generate a report:
npx cypress run
