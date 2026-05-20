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

[🔗 Patternlab-Docs Detail-Variant](https://patternlab.muenchen.space/?p=components-intro-vertical-article)
[🔗 Patternlab-Docs Overview-Variant](https://patternlab.muenchen.space/?p=components-intro-summary-text-lhm)
`,
      },
    },
  },
};

export const Template = () => ({
  components: { MucIntro },
  template: `

    <MucIntro
        tagline="Tagline"
        title="Intro with Title"
        variant="overview"
    >
      <template #default>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua.
        </p>
      </template>
    </MucIntro>
  `,
});

export const Icon = () => ({
  components: { MucIntro },
  template: `

    <MucIntro
        tagline="Tagline"
        title="Intro with Icon"
        variant="detail"
        img="docs/images/muc-patternlab.png"
    >
      <template #default>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua.
        </p>
      </template>
    </MucIntro>
  `,
});

export const MinimalDetail = () => ({
  components: { MucIntro },
  template: `

    <MucIntro
        title="Smaller Intro with Title"
        :divider="false"
        variant="detail"
    >
      <template #default>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua.
        </p>
      </template>
    </MucIntro>
  `,
});

export const MinimalOverview = () => ({
  components: { MucIntro },
  template: `

    <MucIntro
        title="Smaller Intro with Title"
        :divider="false"
        variant="overview"
    >
      <template #default>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua.
        </p>
      </template>
    </MucIntro>
  `,
});

export const WithMultiplePTags = () => ({
  components: { MucIntro },
  template: `

    <MucIntro
        tagline="Tagline"
        title="Intro with Title"
        variant="overview"
    >
      <template #default>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua.
        </p>
        <p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua.
        </p>
      </template>
    </MucIntro>
  `,
});
