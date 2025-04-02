import { defineConfig } from 'vite';
import nunjucks from 'vite-plugin-nunjucks';
import { fileURLToPath } from 'node:url'

import newsConfig from './src/content-components/news/news.config.js';
import headerConfig from './src/page-components/header/header.config.js';

export default defineConfig({
  plugins: [
    nunjucks({
      variables: {
        'index.html': {newsItems: newsConfig.newsItems, navItems: headerConfig.navItems},

      }
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "./src/styles/_variables.scss"; @import "./src/styles/_mixins.scss";`, 
      },
    },
  },
  
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      },
    ]
  },
});
