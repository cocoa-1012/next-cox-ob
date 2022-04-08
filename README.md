# Justhome Customer Frontend

## Configuration

Configuration happens via Environment variables. All these variables are prefixed with
`NEXT_PUBLIC_`.
Defaults for all variables are defined in `.env` files. These files are hierarchical in the following order:

`Machine Environment variables` > `.env.environment.local` > `.env.environment` > `.env.local` > `.env`

The variables are only read during build time. The "enviroment" is set by npm. E.g. `npm start` results in
an `environment = development`, `npm build` will result in an `environment = production`

## TODOs

Documentation for bootstrap integration
Webvitals?
npm audit

## How to setup / use

You need NPM for this project TODO link

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

### `docker build -t swiftbrick-frontend .`

Creates a docker image of a nginx container with the build output server on port 80

### Run prettier on pre-commit event

Install
`npx mrm@2 lint-staged`
