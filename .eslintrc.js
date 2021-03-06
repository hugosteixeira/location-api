module.exports = {
    "env": {
      "commonjs": true,
      "es6": true,
      "node": true
    },
    "extends": ["airbnb-base"],
    "plugins": ["prettier"],
    "globals": {
      "use": "readonly",
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
      "ecmaVersion": 2018
    },
    "rules": {
      "prettier/prettier": "error",
      "class-methods-use-this": "off",
      "strict": [0, "global"],
      "consistent-return": "off",
      "no-param-reasssign": "off"
    }
  }