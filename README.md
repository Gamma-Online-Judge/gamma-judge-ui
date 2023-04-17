# Gamma Online Judge UI

## Dependencies

### Node

The node version used is 16. I'd suggest to install nvm using this [link](https://heynode.com/tutorial/install-nodejs-locally-nvm/) to manage node versions. After nvm installed, install Node 16 with this command:

```shell
nvm install 16
```

### Yarn

With node installed, we need to install yarn. Run the command:
```shell
npm install -g yarn
```

### Environment file:

Add a file `.env` on root folder with the following format:
```shell
REACT_APP_API_BASE_URL= # Endpoint to Gamma Judge API
```

## Running

First of all install all dependencies with:
```shell
yarn
```

Then start the application in watch mode with:
```shell
yarn start
```

## Running with docker

Run the following command: 
```shell
docker compose up --build
```
> At docker version 23, compose is a docker plugin and theren't need to install docker-compose.

> Some docker installations need a super user privilegies to run.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn deploy`

Deploy the app to a s3 bucket and the site will be available on [this url](http://gama-judge-poc.s3-website-sa-east-1.amazonaws.com/) 

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
