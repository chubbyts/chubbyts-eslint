# chubbyts-eslint

[![CI](https://github.com/chubbyts/chubbyts-eslint/workflows/CI/badge.svg?branch=master)](https://github.com/chubbyts/chubbyts-eslint/actions?query=workflow%3ACI)
[![npm-version](https://img.shields.io/npm/v/@chubbyts/chubbyts-eslint.svg)](https://www.npmjs.com/package/@chubbyts/chubbyts-eslint)

[![bugs](https://sonarcloud.io/api/project_badges/measure?project=chubbyts_chubbyts-eslint&metric=bugs)](https://sonarcloud.io/dashboard?id=chubbyts_chubbyts-eslint)
[![code_smells](https://sonarcloud.io/api/project_badges/measure?project=chubbyts_chubbyts-eslint&metric=code_smells)](https://sonarcloud.io/dashboard?id=chubbyts_chubbyts-eslint)
[![duplicated_lines_density](https://sonarcloud.io/api/project_badges/measure?project=chubbyts_chubbyts-eslint&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=chubbyts_chubbyts-eslint)
[![ncloc](https://sonarcloud.io/api/project_badges/measure?project=chubbyts_chubbyts-eslint&metric=ncloc)](https://sonarcloud.io/dashboard?id=chubbyts_chubbyts-eslint)
[![sqale_rating](https://sonarcloud.io/api/project_badges/measure?project=chubbyts_chubbyts-eslint&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=chubbyts_chubbyts-eslint)
[![alert_status](https://sonarcloud.io/api/project_badges/measure?project=chubbyts_chubbyts-eslint&metric=alert_status)](https://sonarcloud.io/dashboard?id=chubbyts_chubbyts-eslint)
[![reliability_rating](https://sonarcloud.io/api/project_badges/measure?project=chubbyts_chubbyts-eslint&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=chubbyts_chubbyts-eslint)
[![security_rating](https://sonarcloud.io/api/project_badges/measure?project=chubbyts_chubbyts-eslint&metric=security_rating)](https://sonarcloud.io/dashboard?id=chubbyts_chubbyts-eslint)
[![sqale_index](https://sonarcloud.io/api/project_badges/measure?project=chubbyts_chubbyts-eslint&metric=sqale_index)](https://sonarcloud.io/dashboard?id=chubbyts_chubbyts-eslint)
[![vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=chubbyts_chubbyts-eslint&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=chubbyts_chubbyts-eslint)

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
npm i @chubbyts/chubbyts-eslint@^3.0.3
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
module.exports = require('@chubbyts/chubbyts-eslint/dist/eslint.config').default;
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
export { default } from '@chubbyts/chubbyts-eslint/dist/eslint.config';
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
