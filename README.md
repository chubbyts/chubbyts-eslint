# chubbyts-eslint

[![npm-version](https://img.shields.io/npm/v/@chubbyts/chubbyts-eslint.svg)](https://www.npmjs.com/package/@chubbyts/chubbyts-eslint)

## Description

ESLint Configuration for chubbyts libraries / framework / projects.

## Requirements

 * node: 18
 * [@eslint/js"][2]: ^9.17.0
 * [eslint][3]: ^9.17.0
 * [eslint-import-resolver-typescript][4]: ^3.7.0
 * [eslint-plugin-functional][5]: ^7.2.0
 * [eslint-plugin-import][6]: ^2.31.0
 * [eslint-plugin-unused-imports][7]: ^4.1.4
 * [typescript-eslint][8]: ^8.19.0

## Installation

Through [NPM](https://www.npmjs.com) as [@chubbyts/chubbyts-eslint][1].

```sh
npm i @chubbyts/chubbyts-eslint@^3.0.0
```

## Configuration

### Commonjs

#### tsconfig.eslint.json

Example for a codebase with typescript files in src and tests:

```json
{
  "extends": "./tsconfig.json",
  "include": [
    "eslint.config.cjs",
    "src",
    "tests"
  ],
}
```

#### eslint.config.cjs

```js
module.exports = require('@chubbyts/chubbyts-eslint/eslint.config').default;
```

### Module

#### tsconfig.eslint.json

Example for a codebase with typescript files in src and tests:

```json
{
  "extends": "./tsconfig.json",
  "include": [
    "eslint.config.mjs",
    "src",
    "tests"
  ],
}
```

#### eslint.config.mjs

```js
export { default } from '@chubbyts/chubbyts-eslint/eslint.config';
```

## Copyright

2025 Dominik Zogg

[1]: https://www.npmjs.com/package/@chubbyts/chubbyts-eslint
[2]: https://www.npmjs.com/package/@eslint/js
[3]: https://www.npmjs.com/package/eslint
[4]: https://www.npmjs.com/package/eslint-import-resolver-typescript
[5]: https://www.npmjs.com/package/eslint-plugin-functional
[6]: https://www.npmjs.com/package/eslint-plugin-import
[7]: https://www.npmjs.com/package/eslint-plugin-unused-imports
[8]: https://www.npmjs.com/package/typescript-eslint
