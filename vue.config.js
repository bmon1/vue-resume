const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  base: '/vue-resume/',

  outputDir: 'dist',

  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
