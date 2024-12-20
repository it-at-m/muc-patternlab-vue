import "https://assets.muenchen.de/mde/1.0.6/css/muenchende-fontfaces.css";
import "https://assets.muenchen.de/mde/1.0.6/css/muenchende-style.css";
import "../public/assets/css/custom-style.css";
import "../public/assets/css/central_css.scss";

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
