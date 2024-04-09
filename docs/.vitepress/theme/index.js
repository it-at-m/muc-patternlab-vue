import DefaultTheme from 'vitepress/theme'
import DemoContainer from '../components/DemoContainer.vue'
import MucPatternlabVue from 'muc-patternlab-vue'

import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(MucPatternlabVue)
    app.component('DemoContainer', DemoContainer)
  }
}
