import { MucButton } from "../Button";
import MucCallout from "./MucCallout.vue";

export default {
  component: MucCallout,
  title: "MucCallout",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The \`muc-callout\` component is used to convey important information to the user through the use of contextual types, icons, and colors. The text within the content slot can be structured using paragraphs and bullet points. Plain text must be enclosed in a \`<p>\` tag.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-components-callout)
`,
      },
    },
  },
};

export const Default = () => ({
  components: { MucCallout },
  template: `
      <MucCallout
          type="info"
      >
        <template #header>
          Information
        </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
        </template>
      </MucCallout>
    `,
});

export const Success = () => ({
  components: { MucCallout },
  template: `
      <MucCallout
          type="success"
      >
        <template #header>
          Success
        </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
        </template>
      </MucCallout>
    `,
});

export const Warning = () => ({
  components: { MucCallout },
  template: `
      <MucCallout
          type="warning"
      >
        <template #header>
          Warning
        </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
        </template>
      </MucCallout>
    `,
});

export const Error = () => ({
  components: { MucCallout },
  template: `
      <MucCallout
          type="error"
      >
        <template #header>
          Error
        </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
        </template>
      </MucCallout>
    `,
});

export const WithButton = () => ({
  components: { MucCallout, MucButton },
  template: `
      <MucCallout
          type="info"
      >
        <template #header>
         Button
        </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua.
          </p>
        </template>
        <template #buttons>
          <muc-button icon="arrow-right" icon-animated> Button</muc-button>
        </template>
      </MucCallout>
    `,
});

export const WithMultiplePTags = () => ({
  components: { MucCallout },
  template: `
      <MucCallout
          type="info"
      >
        <template #header>
          Information
        </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
        </template>
      </MucCallout>
    `,
});
