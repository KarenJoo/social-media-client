# Workflow CA

## Goal

This project has aimed to leverage the skills and knowledge gained from the Workflow course to enhance the quality of the existing Noroff API Social Media Client application by establishing the development workflows in action and implementing Unit testing and End-to-end testing.

## Brief

In this course assignment, the focus has been on improving the quality of the existing social-media-client application that fulfills the requirement for  these features:

- A front-end login form connected to an API JWT endpoint
- A front-end logout button connected to browser storage
- Front-end CRUD functionality for at least one object type
- A front-end profile page


## Project Configuration
The project incorporates the following configurations:
The project incorporates the following configurations:

- Prettier is installed and configured to run on commit > to ensure consistent code formatting
- ESLint is installed and configured to run on commit > to catch potential issues early
- Babel is installed and and configured for Javascript
- Jest is installed and configured for unit testing
- Cypress is installed and configured for end-to-end testing
- Husky is installed and configured to run pre-commit hooks
- The default branch (master) is protected to maintain code stability


## Workflow Status Badges

[![Deploy static content to Pages](https://github.com/KarenJoo/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/KarenJoo/social-media-client/actions/workflows/pages.yml)

[![Code Review](https://github.com/KarenJoo/social-media-client/actions/workflows/gpt.yml/badge.svg)](https://github.com/KarenJoo/social-media-client/actions/workflows/gpt.yml)

[![Unit Test](https://github.com/KarenJoo/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/KarenJoo/social-media-client/actions/workflows/unit-test.yml)

[![E2E Test](https://github.com/KarenJoo/social-media-client/actions/workflows/e2e-test-2.yml/badge.svg)](https://github.com/KarenJoo/social-media-client/actions/workflows/e2e-test-2.yml)

- Current e2e-test situation: tests pass and run fine in command line and in Cypress. May encounter that the e2e-test is running fine in command line and in Cypress app but not passing in workflow actions, if so it's due to issues with Cypress (ref. tutor C.O'Brien).


## Testing

### Unit Tests

*login.test.js*:
- Tests if the login function fetches and stores a token in browser storage
  
*logout.test.js*
- Tests if the logout function clears the token from browser storage


### End-to-End Tests

*login_logout.cy.js*
- Tests if the user can log in with a registered account
- Tests if the logged-in user can access the profile page
- Tests if the user can log out using the logout button

*invalid_login.cy.js*
- Tests if the user can not log in with invalid credentials
- Tests if the user is shown a message when an invalid login 

## Test Commands

The following scripts are available for testing:

### Run unit tests with Jest
npm run test-unit

### Run end-to-end tests with Cypress
npm run test-e2e

### Prerequisites

- [Node.js](https://nodejs.org/) installed

## Installation

### Clone the repository
git clone https://github.com/KarenJoo/social-media-client.git

### Navigate to the project directory
cd social-media-client

### Install dependencies
npm install


## Authors and Contact
**Karen Jo**

📫 KarFik31658@stud.noroff.no


