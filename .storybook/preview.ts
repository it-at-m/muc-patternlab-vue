import "../public/assets/temporary/muenchende-style.css";
import "../public/assets/temporary/custom-style.css";
import "../public/assets/temporary/muenchende-fontfaces.css";
import "../public/assets/temporary/central_css.scss";

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
