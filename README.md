# brightlinetrains
 
[![CypressAutomation](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/simple/67wg6e/main&style=flat&logo=cypress)](https://cloud.cypress.io/projects/67wg6e/runs) 
Brightline Trains
Brightline Trains is a web application that helps users find train schedules and purchase tickets for Brightline trains.

Getting Started
To run the Brightline Trains web application, first clone the repository:
git clone https://github.com/GentaZ18/brightlinetrains.git

Next, install the necessary dependencies:

cd brightlinetrains
npm install

This will install both the Cypress testing framework and the necessary dependencies for the Brightline Trains website.

Running Tests
To start the Cypress test runner and run the tests:
npx cypress run --record --key 90eeca09-b6d2-405b-ac1e-37a0682b10f1

This will run all of the tests in the terminal and output the results.

Test Structure
The Cypress test suite is organized into the following folders:

fixtures: contains sample data used in our tests
integration: contains the actual test cases
plugins: contains any plugins that modify the behavior of the Cypress test runner
support: contains utility functions and commands used in our tests

Test Scenarios
Our Cypress tests cover the following scenarios:

1. Testing if the form is updated when Boca Raton and West Palm Beach are selected
2. Testing if the user successfully purchases a Monthly Commuter Pass with auto-renew for Miami to Fort Lauderdale

Test Results:

1. The first test is pass, because the data is updated correctly
2. The second test should be fail and it is fail because the price when the ticket is added to cart is not the same as in cart page. 185 is different from 184.05 or 184(rounded)