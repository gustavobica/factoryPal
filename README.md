# Getting Started with FactoryPal Dashboard

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

For the graphs I used [Recharts](https://recharts.org/).

For styling styled components

For frontend testing (unit and functional) [Testing library](https://testing-library.com/). (jest with extra features)

And finally for end-to-end testing Cypress

This app can be used in https://factory-pal.vercel.app/ or by running locally, `nvm use 18` (pick the node version 18, to match mine, it should be fine with others, but I used 18) `yarn install` and then `yarn start`

## Considerations

For this project my idea was to create at same time a generic app (that can handle any type/category), in the event that in a real word situation, a new type/category is inserted the app would still function, but also still be capable to display usefull information. Although I wanted to make it generic enough to handle uknown cases, I felt that made sense to take advantage of the particularities and standard types. Meaning, if I known that I have percentages, then I should show the ideal graph for that, if I have info that for a specific category makes sense to bundle together I should do that. And because of that, I create Views that in this case use categories as the main way to bundle info. Because the views are just combinations of smaller components if I need to create a view for efficiency and shifts (i.e) , I could easily do that,by creating a new view that receives a filtered metrics array containing only those 2, and then just pick the graphs that I want to use from the components.

The table is connected to the graphs, by clicking on the table the macthing graph/entry will display and active state, by clicking in the graph/entry the reverse will happen, an entry in the table will reflect that

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn cypress`

Launches the cypress tests

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
