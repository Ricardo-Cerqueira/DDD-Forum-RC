


<p align="center">
 <img src="https://user-images.githubusercontent.com/6892666/67032637-fc237200-f0e1-11e9-8a46-f5d655e71962.png"/>
</p>
<h1 align="center">DDDForum.com</h1>

<p align="center">
 <a href="https://circleci.com/gh/stemmlerjs/ddd-forum"><img src="https://circleci.com/gh/circleci/circleci-docs.svg?style=svg"></a>
 <a href="#contributors"><img src="https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square"></a>
</p>

> A [SOLID](https://khalilstemmler.com/articles/solid-principles/solid-typescript/) hackernews-inspired forum site built with TypeScript using the [clean architecture](https://khalilstemmler.com/articles/software-design-architecture/organizing-app-logic/) and [DDD best practices](https://khalilstemmler.com/articles/domain-driven-design-intro/).

![DDDForum](https://user-images.githubusercontent.com/6892666/67032446-9931db00-f0e1-11e9-894d-7bccd240c851.png)

## About 

DDDForum.com is the application that we build in [solidbook.io - The Software Design and Architecture Handbook](https://solidbook.io). 

## Current project status

The current project will be continued by Ricardo Cerqueira, all documentation produced will be kept.
The focus will be:
- Introducing new features.
- Keep improving the quality by producing documentation and tests.
- Update libraries.

The main objetive is to keep learning and improving my skills has a QAE.



## Switch-QA Team's Project Technical Documentation

You may find a template for the project technical documentation in [docs/readme.md](docs/readme.md)
You should follow this examples as a template for your own work.
## Documentation

[Original Readme file](README-original.md)

[Readme file from dyarleniber](README-dyarleniber.md)


## Running the project

1. Install and start [Docker](https://docs.docker.com/compose/gettingstarted/) if you haven't already.
2. Copy the `.env` template file. Feel free to change passwords and app secrets. 

```bash
cp .env.template .env
```

3. Build and run the image to run the backend services.

```bash
docker-compose up
```

4. Open up an additional console and then run: 

```bash
npm run setup:dev
npm run start:both
```

You can visit the app by going to `http://localhost:3000`.

### Demo 

[You can visit the site here](https://dddforum.com).

> `Note`: It's currently deployed on free tier Heroku, which has some undesirable side-effects like shutting off the server during periods of inactivity. So if it's down for you, refresh a couple of times. Thinking about migrating this to a serverless architecture later on.

## Technical Notes (ISEP)

### Tool Dependencies - Very Important!

  This project requires the following tools to be present in your system.

  **Use node version v20.10.0** 

  The use of this node version is mandatory
  You an use **nvm** to manage several node version in your system (see https://github.com/nvm-sh/nvm)

  **Python**
  You may have to install **python v2.7** in your system (see https://www.python.org/)
### Using the API

Examples of using the API (without authentication, using postman)

  - Get popular posts:
  GET http://localhost:5001/api/v1/posts/popular

  - Get new posts:
  GET http://localhost:5001/api/v1/posts/recent

  - Get post by slug:
  GET http://localhost:5001/api/v1/posts/?slug=9526372-gosto-muito-de-dd

  - Get comments by slug:
  GET http://localhost:5001/api/v1/comments/?slug=9526372-gosto-muito-de-dd

  - Login
  POST http://localhost:5001/api/v1/users/login
  body:
  {
    "username": "user",
    "password": "password"
  }
  return:
  {
    "accessToken": "...",
    "refreshToken": "..."
  }
  You can then use the "accessToken" for actions that require authentication, by passing the value of the accessToken in a header named "Authentication". For example:
  - Get Me
  GET http://localhost:5001/api/v1/users/me
    Headers[
      ...
      Authorization: accessToken
    ]
  Response:
  {
    "user": {
        "username": "atb",
        "isEmailVerified": false,
        "isAdminUser": false,
        "isDeleted": false
    }
  }

### How to Admin da database
  
  - open browser use localhost:8080
  - use:
    - system: MySQL
    - server: mysql
    - username: tonysoprano
    - pass: 12345678
    - db name: data_dev

### How to Run Tests

  To run tests type: npm run test

  Existing unit tests:
  - src/shared/core/Guard.spec.ts
  - src/modules/forum/domain/postSlug.spec.ts
  - src/modules/forum/domain/services/postService.spec.ts

  The existing tests verify some services in the domain layer. The domain layer has no dependency on the other layers, so there is no need for mocking. The tests can be executed without any dependencies (e.g., database, etc.)

### How to Debug

  - start the services with *docker-compose up*
  - To debug the backend in VSCode go to the tab "Run and Debug", select "Debug TypeScript in Node.js" from the dropdown list and click the play button (this will execute the configuration with the same nsame that is located in the launch.json file (*.vscode/launch.json*))
  - start the front-end with *npm run  start:public*
  - open in browser: *localhost:3000*
 
### API Tests

  These tests are not part of the base project. They were added by the team to test the API. The tests are in the folder *src/api_test*.

  The tests are based on the project https://github.com/jmfiola/jest-api-test-typescript-example. **The tests are executed against the running docker containers as well as the backend**. These must be running. It is not necessary to execute the frontend to run these tests. The tests are executed in sequence, so they are not independent. The tests are executed in the order they are defined in the file (this is why we need to use the *--runInBand* jest option).

  Before running API tests, you must "clear" all the existing data and run the containers and the backend. This will ensure that the system is always at the same state when the tests area executed (i.e., an empty database). To do this, run the following commands:

  **1. Before Running Tests**

  Start the containers:

    docker-compose up

  Create the database:

    npm run db:create:dev
    npm run migrate:dev 

  And also run the backend & frontend:

    npm run start:both

  **2. Running Tests**

  To run all types of tests:

    npm run test --runInBand
  
  To run only API tests:
  
    npm run test --runInBand --testPathPattern=api

  To run only unit tests:

    npm run test --testPathIgnorePatterns=api

  **3. After Running Tests**

  Stop the backend by hitting Ctrl+C in the terminal where the backend is running.

  Clear the database:

    npm run db:delete:dev

  Stop the containers:

    docker-compose stop

  **4. Optional**

  Run a script for all tests with 
    
    npm run run-all

  to run:
  * npm run db:delete:dev
  * npm run db:create:dev
  * npm run migrate:dev
  * npm run test --runInBand --testPathPattern=api

  Run a script for a specific test (edit package.json accordingly)

    npm run run-test

    

  **5. Debugging**

  Docker containers must be running
  Database must be created and migrated

  To debug the API tests, run the following command:

    npm run build

  Then on Run and Debug select *Debug Typescript in Node.js* and click the play button.

    npm run start:public

  Or run for both:

    npm run run-debug

### Smoke Test

To run the smoke test properly please setup the following.

Using GitHub CLI (gh) to set up secrets is a convenient method, especially if you're comfortable with command-line tools.

1. Install GitHub CLI: If you haven't already, you'll need to install the GitHub CLI. You can find instructions on GitHub's website.
2. Authenticate with GitHub CLI: Run gh auth login and follow the prompts to authenticate with your GitHub account.
3. Set a Secret: To set a secret, use the gh secret set command:
```shell
gh secret set SECRET_NAME
```

4. List Secrets: To see the list of secrets you have set, use:
```shell
gh secret list
```