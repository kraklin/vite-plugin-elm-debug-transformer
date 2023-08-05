# Vite plugin for Elm Debug Transformer

[![npm version](https://badge.fury.io/js/vite-plugin-elm-debug-transformer.svg)](https://badge.fury.io/js/vite-plugin-elm-debug-transformer)

Vite plugin for adding [Elm Debug transformer](https://github.com/kraklin/elm-debug-transformer) to the index.html page on dev server. 

## Installation

```
npm install -D vite-plugin-elm-debug-transformer elm-debug-transformer
```

## Usage

In `vite.config.js` just import and use this plugin.

```js
import { defineConfig } from 'vite'
import plugin from 'vite-plugin-elm'
import transformer from 'vite-plugin-elm-debug-transformer'

export default defineConfig({
  plugins: [plugin(), transformer() ]
})
```

## Options

Plugin is passing options to the [register](https://github.com/kraklin/elm-debug-transformer#options) function of the `elm-debug-transformer`.


| parameter     | type    | description                                                                                                                               | default value   |
|---------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------|----------------:|
| `limit`       | number  | number of message characters after which the parser won't parse the message. (Helpful for bypass the parsing of large datastructures)     | `1 000 000`     |
| `debug`       | boolean | include original message and parser error with the message                                                                                | `false`         |
| `simple_mode` | boolean | force output to be in simple object format                                                                                                | `false`         |
| `theme` | `light,dark` | sets theme colour of debug output. It is useful for switching on the dark mode of devtools.                                                                                                | `light`         |




