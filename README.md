# UI monorepo setup

This project is using [Lerna](https://github.com/lerna/lerna) to manage a monorepo for React apps development.

[Create React App](https://github.com/facebook/create-react-app) v2 with TypeScript _(without ejecting!)_ is used for React applications development and TypeScript compiler `tsc` (you can also use Babel or Rollup) is used to bundle the `@ui/shared` package which contains React components shared between two/multiple React apps.

## Development

First you need to install the dependencies, by runnig `lerna boostrap` command, or simply:

```javascript
yarn setup
```

Then run `yarn start` in the root of the monorepo. Lerna will then run start scripts in every package.

```javascript
yarn start
```

If everything works ok, any change to components within `@ui/shared` package will cause `tsc` to recompile the package (and TS types) and it will be picked up by running CRA dev servers recompiling React applications.

For ease of development you can create additional script for running only one app and shared components package compilation, ie. `yarn start:hooks` will run start scripts only in `@ui/react-app-hooks` and `@ui/shared` packages.

React apps were bootstraped by running `npx create-react-app react-app --typescript` inside `/packages` folder and then `rm -rf react-app/node_modules react-app/yarn.lock` to remove local `node_modules` and `*.lock` files.

If you have ideas how to improve this setup please file an issue.
