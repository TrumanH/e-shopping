
# E-shopping
<img src="https://img.shields.io/github/languages/top/TrumanH/e-shopping?color=blue" alt="languages-top" />

<img src="https://img.shields.io/badge/HTML-2.8%25-red" alt="third language percentage">
<img src="https://img.shields.io/badge/Author-TrumanH-orange" alt="author">
<img src="https://img.shields.io/github/last-commit/TrumanH/e-shopping" alt="last-commit" />
<!-- <img src="https://img.shields.io/github/commit-status/TrumanH/e-shopping/main/:commit" alt="" /> -->
<img src="https://img.shields.io/github/issues/TrumanH/e-shopping" alt="open-issue"/>
<img src="https://img.shields.io/github/issues-closed/TrumanH/e-shopping" alt="closed-issue"/>
<img src="https://img.shields.io/github/issues-pr/TrumanH/e-shopping" alt="pr" />
<img src="https://img.shields.io/github/issues-pr-closed/TrumanH/e-shopping" alt="closed-pr" />
<img src="https://img.shields.io/static/v1?style=?style=flat&logo=appveyor&logo=appveyor&message=E-commerce&color=yellowgreen" alt="field"/>

An e-commerce web app, written with `react.js` framework, to experiment best practises.
* Use the react framework with modern functional component, typescript and styled-components.
* Use `redux` as a centric global store to manage global states.(Though also experimented `Context` in primeval version)
* Used `redux slice` and `redux saga` to implement functionalities and workflows of global states.
* Use firebase as persistence layer and authentication solution. 
* Use Serverless Lambda(Netlify Function) to implement server-side of stripe payment.
* Integrated stripe as payment solution.
* PWA enabled.

## Set up 
#### Config
Fill configures in the file '.env', which should in the root folder of the project:
```
# Stripe related
REACT_APP_STRIPE_PUBLIC_KEY = ""
STRIPE_SECRET_KEY = ""

# Firebase related
REACT_APP_Firebase_apiKey = ""
REACT_APP_Firebase_authDomain = ""
REACT_APP_Firebase_aprojectId = ""
REACT_APP_Firebase_astorageBucket = ""
REACT_APP_Firebase_amessagingSenderId = ""
REACT_APP_Firebase_aappId = ""
```

#### Install Dependences
Install packages:
`npm install`

Install netlify:
Since the server-side code of stripe payment workflow was implemented with serverless lambda function, we use netlify to run lambda functions.
`npm install netlify-cli -g`
*This installs Netlify CLI globally, so you can run netlify commands from any directory.*

Login netlify:
`netlify login`

#### Launch Dev APP
Use netlify to launch app in your local environment:
`netlify dev`

### Strip Credit Card Payment Configs
We can test payment workflow with a test credit card:
- Card number: 4242 4242 4242 4242
- Date: any date lagger than current

## Live demo
Live demo to have fun with: https://jocular-dolphin-4299ed.netlify.app    
Since most persistence data are stored in firebase, some API may not available in mainland China.
You can use VPN to get around this.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
