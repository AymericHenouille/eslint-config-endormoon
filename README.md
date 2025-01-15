# eslint-config-endormoon

<center>

![NPM Version](https://img.shields.io/npm/v/eslint-config-endormoon?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat)

</center>

This project can be used to add the endormoon standard to a typescript project.
It is an arbitrary choice of lint rule to keep a typescript project clean.

## Table of content

* [Installation](#installation)
* [Configuration](#configuration)

## Installation

To install the config you need to add first eslint to your project.
```bash
npm install --save-dev eslint
```
Then you can add the endormoon config.
```bash
npm install --save-dev eslint-config-endormoon
```

## Configuration

Add the eslint config file at the root of your project.
Make sure your custom config extends of the eslint-config-endormoon.
Look at the exemple below
```javascript
// eslint.config.mjs
import eslintConfigEndormoon from 'eslint-config-endormoon';

export default [
    ...eslintConfigEndormoon,
    // your cutom config here...
];
```
