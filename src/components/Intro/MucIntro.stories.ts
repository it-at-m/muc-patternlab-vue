import MucIntro from "./MucIntro.vue";

export default {
  component: MucIntro,
  title: "MucIntro",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `A header-like component which can be used as first heading for a component that replaces a whole page on muenchen.de.

Used e.g. in https://stadt.muenchen.de/buergerservice/anliegen.html.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=components-intro-horizontal-event)
`,
      },
    },
  },
};

export const Default = {
  args: {
    tagline: "Tagline",
    title: "Intro with Title",
    divider: true,
    default:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n" +
      "    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
};

export const Minimal = {
  args: {
    title: "Smaller Intro with Title",
    default: Default.args.default,
  },
};
