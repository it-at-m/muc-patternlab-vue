import MucFileDropzone from "./MucFileDropzone.vue";

export default {
  component: MucFileDropzone,
  title: "MucFileDropzone",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The \`muc-file-dropzone\` component provides a drop zone for selecting one or multiple files. It does not upload the files but emits an array of file information, including base64-encoded data, for further handling. 

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-components-all)
`,
      },
    },
  },
};

export const Default = {};
