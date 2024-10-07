import MucFileDropzone from "./MucFileDropzone.vue";

export default {
  component: MucFileDropzone,
  title: "MucFileDropzone",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The \`muc-file-dropzone\` component provides a drop zone for selecting one or multiple files. It does not upload the files but emits an array of files for further handling, e. g. the real upload to a backend.`,
      },
    },
  },
};

export const Example = {
  args: {
    buttonText: "Dokument hochladen",
    additionalInformation: "Maximale Dateigröße: 2 MB",
    invalidAmountWarning: "Es kann nur eine Datei hochgeladen werden.",
    maxFileSize: 2,
    maxFileSizeWarning: "Eine Datei hat mehr als 2 MB und kann nicht angefügt werden.",
    maxTotalFileSize: 100,
    maxTotalFileSizeWarning: "Die Dateien haben zusammen mehr als 10 MB und können nicht angefügt werden."
  },
};
export const Default = {};