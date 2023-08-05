const plugin = (transformerOpts) => {
  return {
    name: 'html-transform',
    enforce: 'pre',
    transformIndexHtml: {
      enforce: 'pre',
      transform(html, ctx) {
        if(ctx.server.config.isProduction){
          return []
        }

        return [
          {
            tag: "script", 
            attrs: {"type": "module", "id": "injected"}, 
            children: `import * as ElmDebug from 'elm-debug-transformer'; ElmDebug.register(${JSON.stringify(transformerOpts)}); console.log(window.__ELM_DEBUG_TRANSFORM_OPTIONS__);`,
            injectTo: 'head'
          }
        ]
      }
    }
  }
}

export default plugin;
