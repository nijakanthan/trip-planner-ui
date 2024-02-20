const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, '/src'),
      },
    },
  },
  outputDir: 'dist/ui',
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
    },
  },
})
