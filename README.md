# chubbyts-eslint

[![npm-version](https://img.shields.io/npm/v/@chubbyts/chubbyts-eslint.svg)](https://www.npmjs.com/package/@chubbyts/chubbyts-eslint)

## Description

ESLint Configuration for chubbyts libraries / framework / projects.

## Requirements

 * node: 16
 * [@typescript-eslint/eslint-plugin][2]: ^7.13.1
 * [@typescript-eslint/parser][3]: ^7.13.1
 * [eslint][4]: ^8.57.0
 * [eslint-import-resolver-typescript][5]: ^3.6.1
 * [eslint-plugin-functional][6]: ^6.6.0
 * [eslint-plugin-import][7]: ^2.29.1

## Installation

Through [NPM](https://www.npmjs.com) as [@chubbyts/chubbyts-eslint][1].

```sh
npm i @chubbyts/chubbyts-eslint@^2.0.4
```

## Configuration

### tsconfig.eslint.json

If you want to lint files that are not part of your tsconfig.json. Like for example tests you need a custom `tsconfig.eslint.json`.

```json
{
    "extends": "./tsconfig.json",
    "include": [
        "src",
        "tests"
    ],
}

```

### .eslintrc.cjs

```js
const config = require('@chubbyts/chubbyts-eslint/dist/eslintrc').default;

module.exports = {
  ...config,
  parserOptions: {
    ...config.parserOptions,
    project: './tsconfig.eslint.json', // or tsconfig.json if no custom tsconfig is needed
  },
};

```

## Copyright

2024 Dominik Zogg

[1]: https://www.npmjs.com/package/@chubbyts/chubbyts-eslint
[2]: https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
[3]: https://www.npmjs.com/package/@typescript-eslint/parser
[4]: https://www.npmjs.com/package/eslint
[5]: https://www.npmjs.com/package/eslint-import-resolver-typescript
[6]: https://www.npmjs.com/package/eslint-plugin-functional
[7]: https://www.npmjs.com/package/eslint-plugin-import
