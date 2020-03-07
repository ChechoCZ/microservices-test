# Microservices - Test
This app intends to recreate a purchase scenario. It receives the purchase intention, persist description, price and status to the database and then as soon as the purchase status goes to approved an email is sent to confirm it to the user.

### This app uses: 
 - Express
 - MongoDB
 - Nodemailer
 - node-fetch

### For testing:
  - Jest
  - Supertest

### How to run:
***Please, make sure you have*** `yarn` ***and an instance of*** `MongoDB` ***running on your side.***

### First step:
Within **compras** directory, there is a file named `.env.example` and another `.env.test.example`. You should rename those files to `.env` and `.env.test` and set MONGO_URL according to your configuration. The `.env.test` intends to load a different database to run the tests.

In **avisos** directory there are fields to set the email configuration. I strongly recommend to use [mailtrap](mailtrap.io). This fakes an inbox and gives you the credentials and configuration necessary to set the environment.

### Second setp:
CD into **compras** directory:

First, install the dependencies.
```
yarn
```
Then you can run:
```
yarn start
```

*Repeat this process in* **avisos** *directory*

## API Endpoints

| URL                   |            Method              | Description                    |Payload                    |
| --------------------- | ------------------------------ | ------------------------------ | --------------------------|
| `/api/compras`        | POST                           | Creates new purchase           |`{ description: String, total: Number }`|
| `/api/compras/id`     | DELETE                         | Cancels a purchase             |                           |
| `/api/avisos`         | POST                           | Sends email with purchase info |`{ description: String, total: Number }`|


### Run Tests
CD into **compras** or **avisos** directory and run:
```
yarn test
```

### Next steps
  - Containerize using Docker.