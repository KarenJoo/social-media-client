#Workflow CA

## Goal

The goal of this project has been to leverage the skills and knowledge gained from the Workflow course to enhance the quality of the existing Noroff API Social Media Client application by establishing the development workflows in action and implementing Unit testing and End-to-end testing.

## Brief

In this course assignment, the focus has been on improving the quality of the existing social-media-client application that fulfills the requirement for  these features:

- A front-end login form connected to an API JWT endpoint
- A front-end logout button connected to browser storage
- Front-end CRUD functionality for at least one object type
- A front-end profile page


## Project Configuration
The project incorporates the following configurations:
The project incorporates the following configurations:

- Prettier is installed and configured to run on commit > to ensure consistent code formatting.
- ESLint is installed and configured to run on commit > to catch potential issues early.
- The default branch is protected to maintain code stability.
- Babel is configured for JavaScript transpilation.
- Jest is installed and configured for unit testing.
- Cypress is installed and configured for end-to-end testing.
- Husky is used to run pre-commit hooks and formatting checks.

## Workflow Status Badge


## Unit-Test Badge
[![Unit-test](https://github.com/KarenJoo/social-media-client/actions/workflows/gpt.yml/badge.svg)](https://github.com/KarenJoo/social-media-client/actions/workflows/gpt.yml)


## E2E-Test Badge
[![E2E Test](https://github.com/KarenJoo/social-media-client/actions/workflows/e2e-test-2.yml/badge.svg)](https://github.com/KarenJoo/social-media-client/actions/workflows/e2e-test-2.yml)

- Current e2e-test situation: tests pass and run fine in command line and in Cypress. May encounter that the e2e-test is running fine in command line and in Cypress app but not passing in workflow actions, if so it's due to issues with Cypress (ref. tutor C.O'Brien).

## Testing

### Unit Tests
- The login function fetches and stores a token in browser storage.
- The logout function clears the token from browser storage.

### End-to-End Tests

- The user can log in and access their profile.
- The user cannot submit the login form with invalid credentials and is shown a message.
- The user can log out using the logout button.

## Test Commands

The following scripts are available for testing:

# Run unit tests with Jest
npm run test-unit

# Run end-to-end tests with Cypress
npm run test-e2e

### Prerequisites

- [Node.js](https://nodejs.org/) installed

### Installation

# Clone the repository
git clone https://github.com/KarenJoo/social-media-client.git

# Navigate to the project directory
cd social-media-client

# Install dependencies
npm install


## Authors and Contact
**Karen Jo**

📫 KarFik31658@stud.noroff.no


