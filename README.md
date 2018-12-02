# SI 649 NBA User Facing App

This website can be [access by this link](https://rivernews.github.io/nba-group-final-frontend/)

## Installation & Continuous Integration (CI) Setup

- Install all required npm package `npm i d3 gh-pages d3-selection-multi node-sass -S`

- Setup github page. Edit `package.json`:
  - Add in 1st level `"homepage" : "https://rivernews.github.io/[your-repo-name]/"`, or for this repo, `"homepage" : "https://rivernews.github.io/nba-group-final-frontend/"`
  - Add under `scripts`: `"predeploy" : "npm run build"` and `"deploy" : "gh-pages -d build"`
  - **Deploy on github page! `npm run deploy`**, you'll use this all the time whenever release.

- Use `.scss` for now on. You have to rename existing `App.css` to `App.scss` yourself. That's seem like the best way at this point.

## Scaffold D3 in React

- Write D3 in a saparate jsx.
- Import all the stuff 

```
import PropTypes from 'prop-types'
import * as d3 from "d3";
import "d3-selection-multi";

```

- Do this in `render()`

```
<svg className="svg-content" ref={node => this.node = node}>
</svg>
```

- Then bootstrap D3 by

```
this.svg = d3.select(this.node)
    ...
```

- Start D3 coding!

---

# Reference

- [Import and Export in modern js](https://stackoverflow.com/questions/41337709/what-is-use-of-curly-braces-in-es6-import-statement)
- [Many ways to integrate D3 with React](https://www.smashingmagazine.com/2018/02/react-d3-ecosystem/)
  - [Also about using D3 with React, give D3 more power to animate](https://cmichel.io/how-to-use-d3js-in-react)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
