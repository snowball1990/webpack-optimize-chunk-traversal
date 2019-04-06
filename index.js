class OptimizeChunkTraversePlugin{
  apply(compiler) {
    // apply the plugin in webpack < 4 
    // webpack4+ fixed this performance bug
    // Reference: https://github.com/webpack/webpack/issues/6248
    if (!compiler.hooks) {
      compiler.plugin('compilation', compilation => {
        // optimize webpack built-in plugin : RemoveParentModulesPlugin
        compilation.plugin(['optimize-chunks-basic', 'optimize-extracted-chunks-basic'], chunks => {
          chunks.forEach(chunk => {
            chunk.parents = [];
          })
        })
      })
    }
  }
}

module.exports = OptimizeChunkTraversePlugin