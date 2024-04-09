const path = require('path')

module.exports = {
  title: 'muc-patternlab-vue',
  description: 'Vue Component Library for MDE5 Patternlab.',
  base: '/muc-patternlab-vue/',
  themeConfig: {
    repo: 'https://github.com/it-at-m/muc-patternlab-vue',
    sidebar: [
      {
        text: 'Introduction',
        children: [
          { text: 'What is muc-patternlab-vue?', link: '/' },
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
