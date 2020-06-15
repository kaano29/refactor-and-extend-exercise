# Solid Principles In React

This is the starter project for the Solid Principles in React exercise.  Use the below practices and principles while performing this exercise.

## Practices & Principles

Use the following practices and principles during this exercise.

- Iteration Planning
- Automated Testing
- Test Driven Development
    - Red, Green, Refactor
    - 3 Laws Of TDD
    - N-ZOMBIES
- Paired Programming (If possible)
- DRY (Rule of 3)
- SOLID
- Clean Code
- YAGNI

## Architectural Guidelines (Optional)

Use the following optional architectural guidelines while refactoring and implementing user stories:

- Use a centralized git repository (GitHub, GitLab, BitBucket, etc...)
- Use a CI/CD pipeline for your builds
- Use a RESTful API for business rules and storing to a persistence layer
- Organize your application into appropriate domains and slice it into micro services
- Use message queues, events, and services buses to pass information between services
- Run your services in Docker containers
- Deploy the master branch of your application to a cloud host

## Refactor Goals (Phase 1)

Refactor this code using the above listed principles to accomplish the following goals:

- Add the proper automated testing including:
    - End to End Tests
    - Integration Tests
    - Unit Tests
- Split the components into Stateful and Stateless components
- Properly architect the solution into appropriate layers
- Organgize the solution using feature foldering (optional)

## Customer User Stories (Phase 2)

- As a customer I want to see a validation message so that I know when a car is valid or invalid.
- As a customer I want to see a message that tells me why a car is not valid so that I know why my submission is being rejected.
- As a customer I want to be able to see information about the company I am submitting the car information to so that I know it is a legitimate business.
- As a customer I want to be able to send the business owner a message so that I can ask a follow up quetstion if my car is accepted or rejected.
- As a customer I want to see a history of the cars I have submitted to the form so that I don't submit a vehicle a second time.

## Business Owner User Stories (Phase 3)

- As the business owner I want to be able to accept specific models of vehicles along with their year and make so that I can accept a wider range of vehicles.
- As the business owner I want to be able to know the colors of the vehicles being submitted to the form so that I can make better decisions about my inventory.
- As the business owner I want to advertise my company logo on the landing page so that users will know they have come to the correct page.
- As the business owner I want the color scheme of my logo to also be the color scheme of the website so that customers will have a better impression of the company in their mind.
- As the business owner I want to be able to create new acceptance rules so that I can accept more types of vehicles.
- As the busienss owner I want to be able to remove acceptance rules so that I can stop accepting vehicles that are already in my inventory.