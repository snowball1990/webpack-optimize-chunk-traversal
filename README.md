# webpack-optimize-chunk-traversal

> optimize chunk traversal in webpack v2

## About

In projects with a lot of chunks, a long time is spent on RemoveParentModulesPlugin in webpack v2. Because of the long module chain with many chunks having many parents, the built-in RemoveParentModulesPlugin has extra work to do.The solution is to (only in development mode) add a new custom plugin which removes the parents of every module as we don't need this optimization when running the app in development mode.

Reference: [slow-webpack-build-time-advanced-module-optimization](https://stackoverflow.com/questions/43341878/slow-webpack-build-time-advanced-module-optimization)

## Installation

``` bash

# npm
npm install webpack-optimize-chunk-traversal --save-dev

# yarn
yarn add webpack-optimize-chunk-traversal --save-dev

```

## Usage

``` javascript
// webpack.dev.conf.js

const OptimizeChunkTraversePlugin = require('webpack-optimize-chunk-traversal')
 
module.exports = {
  ...
  plugins: [
    new OptimizeChunkTraversePlugin()
  ]
  ...
}

```

## License

[MIT](https://github.com/snowball1990/webpack-optimize-chunk-traversal/blob/master/LICENSE)