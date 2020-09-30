# Webpack 5 ModuleFederationPlugin Boilerplate
This repository consists of the two following apps: 
#### root:
forms the wrapping react app.
#### about:
a micro frontend with shared components, which are consumed by the root app.

these apps can be run independently, but are wrapped by [lerna](https://github.com/lerna/lerna), a JS project managing tool.

## installation
install the dependencies of both apps:

`
npm i &&
cd /packages/about && npm i &&
cd ../root && npm i
`

## run
to get the apps running, you've got wo options.
if you have `lerna` installed, you could just start both apps with:

`npm run start`

if not, you could start up both apps independently, by executing `npm run start` in the respective folder.

either way, the root app will run on `localhost:3001` and the about-app on `localhost:3002`