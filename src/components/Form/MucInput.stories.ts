import MucInput from "./MucInput.vue";

export default {
  component: MucInput,
  title: "Input/MucInput",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The muc-input component is a text-based input field. It supports various styling options like prefixes /suffixes, buttons and can also be displayed as a textarea.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-elements-forms)
`,
      },
    },
  },
};

export const Default = {
  args: {
    hint: "Dies ist ein ",
    label: "Dies ist ein Label",
    placeholder: "Bitte hier schreiben",
  },
};

export const Password = {
  args: {
    ...Default.args,
    type: "password",
  },
};

export const Error = {
  args: {
    ...Default.args,
    errorMsg: "Huch, hier ist ein Fehler aufgetreten",
  },
};

export const Prefix = {
  args: {
    ...Default.args,
    prefix: "Prefix",
  },
  slots: {
    prefix: {
      template: `<p>Prefix</p>`,
    },
  },
};

// TODO: template funktioniert hier irgendwie noch nicht.
export const Suffix = {
  components: { MucInput },
  template: `
      <MucInput
          hint="Some Hint"
          label="This is a label"
          placeholder="Write something"
      >
        <template #suffix>
          <button class="m-input__suffix">
            <svg aria-hidden="true" class="icon">
              <use xlink:href="#icon-search"></use>
            </svg>
            <span class="visually-hidden">Suchen</span>
          </button>
        </template>
      </MucInput>
    `,
};

export const Search = {
  args: {
    ...Default.args,
    type: "search",
  },
};
