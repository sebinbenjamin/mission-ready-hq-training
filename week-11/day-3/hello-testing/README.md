## Running unit tests

Do an `npm run test` to run unit tests in the project.

## Eslint Setup

Do an `npm install --save-dev eslint-plugin-react`.

Add the following to a `.eslintrc.json` in the project root directory.

```
{
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parser": "babel-eslint"
}
```
