const path = require('path')

module.exports = {
  title: 'My Lib',
  description: 'Just playing around.',
  themeConfig: {
    repo: 'https://github.com/wuruoyun/vue-component-lib-starter',
    sidebar: [
      {
        text: 'Introduction',
        children: [
          { text: 'What is My Lib?', link: '/' },
          { text: 'Getting Started', link: '/guide/' },
        ],
      }, {
        text: 'Components',
        children: [
          { text: 'MucBanner', link: '/components/muc-banner' },
          { text: 'MucButton', link: '/components/muc-button' },
          { text: 'MucIntro', link: '/components/muc-intro' },
        ],
      }
    ],
  },
  vite: {
    resolve: {
      alias: {
        'muc-patternlab-vue': path.resolve(__dirname, '../../src'),
      },
      dedupe: ['vue'], // avoid error when using dependencies that also use Vue
    }
  }
}
