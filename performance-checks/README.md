# Performance Checks

Entity Properties or Forge Storage? A Performance Battle for Atlassian App Developers.
This example compares the performance of "Entity Properties" and "Forge Storage", explores when to use each one, and outlines how to conduct performance tests to evaluate their efficiency.

Feel free to check out the repository containing the app I used for these performance tests and share your own results!

## Installation

1. Run `yarn` to install dependencies.
2. Use `forge register` to apply for a unique app and register it at [Atlassian Developer Console](https://developer.atlassian.com/console/myapps/).
3. Execute `forge deploy` to check and deploy the app.
4. Run `forge install` to install the app on your Jira Cloud instance.
5. Use `forge webtrigger` to get a unique, permanent URL for the web trigger.

## Usage

Use the web trigger URL obtained from `forge webtrigger` with the following query parameters:

- `check`: Defines the type of check. Supported checks are:
  - `checkSetIssueProperty`
  - `checkGetIssueProperty`
  - `checkSetStorageEntity`
  - `checkGetStorageEntity`
- `issueIdOrKey`: A valid issue key or ID, used for entity property checks.
- `propertyKey`: The property key to create an entity property or storage entity.
- `repetitions`: The number of repetitions to perform for more stable and quality results.

Example URL: 
https://19a3e92e-03ba-4dc0-b894-b676f76cbbe3.hello.atlassian-dev.net/x1/GesZlSv7G4K9KahQlmmsnVsGBDc?check=checkSetIssueProperty&issueIdOrKey=TS-1&propertyKey=test-property&repetitions=100