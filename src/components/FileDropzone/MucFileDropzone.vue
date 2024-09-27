<template>
  <div
    class="drop-zone"
    :class="{
      'is-dragover': isDragOver,
      'is-not-disabled': !disabled,
    }"
    @dragover.prevent="onDragOver"
    @dragleave.prevent="onDragLeave"
    @drop.prevent="onDrop"
    @click="selectFiles"
  >
    <svg
      aria-hidden="true"
      width="108"
      height="56"
      viewBox="0 0 108 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_875_841)">
        <path
          d="M107.655 18.699L106.594 11.0435L98.9873 12.1173"
          stroke="#005A9F"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
        <path
          d="M106.594 11.0435C106.594 11.0435 94.1981 33.255 58.2578 27.2483"
          stroke="#005A9F"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
        <path
          d="M85.5371 32.8255C92.2897 31.142 97.5195 28.1144 101.261 25.2393"
          stroke="#005A9F"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
        <path
          d="M0.344727 45.982C0.344727 45.982 13.4778 24.2 49.1976 31.426"
          stroke="#005A9F"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
        <path
          d="M22.1184 24.9275C15.3107 26.3755 9.98438 29.2299 6.15332 31.9734"
          stroke="#005A9F"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
        <path
          d="M68.3603 2.69507H37.1055V55.6536H77.5314V11.9164L68.3603 2.69507Z"
          fill="#005A9F"
          stroke="#005A9F"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M73.7345 53.3119H33.3086V0.346436H64.5634L73.7345 9.57469V53.3119Z"
          fill="white"
          stroke="#005A9F"
          stroke-linejoin="round"
        />
        <path
          d="M38.5039 14.4868H45.3667"
          stroke="#005A9F"
          stroke-linejoin="round"
        />
        <path
          d="M38.5039 21.1584H68.5391"
          stroke="#005A9F"
          stroke-linejoin="round"
        />
        <path
          d="M38.5039 27.8372H68.5391"
          stroke="#005A9F"
          stroke-linejoin="round"
        />
        <path
          d="M38.5039 34.509H68.5391"
          stroke="#005A9F"
          stroke-linejoin="round"
        />
        <path
          d="M38.5039 41.1877H68.5391"
          stroke="#005A9F"
          stroke-linejoin="round"
        />
        <path
          d="M73.7346 9.57469H64.5635V0.346436L73.7346 9.57469Z"
          fill="white"
          stroke="#005A9F"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_875_841">
          <rect
            width="108"
            height="56"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
    <MucButton
      @click="selectFiles"
      variant="secondary"
      icon="upload"
      :disabled="disabled"
    >
      {{ buttonText }}
    </MucButton>
    <small>Maximale Dateigröße: {{ maxFileSize }} MB</small>
  </div>
  <span
    v-if="!validFileSize"
    class="m-error-message"
  >
    <MucIcon icon="warning" />
    Eine Datei hat mehr als {{ maxFileSize }} MB und kann nicht angefügt werden.
  </span>
  <span
    v-if="!validFilesAmount"
    class="m-error-message"
  >
    <MucIcon icon="warning" />
    Es kann nur eine Datei hochgeladen werden.
  </span>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, ref } from "vue";

import { MucButton } from "../Button";
import { MucIcon } from "../Icon";
import { FileDTO } from "./FileDTO";

const props = withDefaults(
  defineProps<{
    /**
     * Maximum file size in MByte
     */
    maxFileSize?: number;
    /**
     * Text on the upload button
     */
    buttonText?: string;
    /**
     * Flag to disable the upload field
     */
    disabled?: boolean;
    /**
     * Flag to switch between multiple and single file upload.
     */
    multiple?: boolean;
  }>(),
  {
    maxFileSize: 10,
    buttonText: "Dokument hochladen",
    disabled: false,
    multiple: true,
  }
);

const emit = defineEmits([
  /**
   * Dropped files as {@link FileDTO} array
   */
  "files",
]);

/** Flag signals if file size is valid */
const validFileSize = ref(true);

/** Flag signals if files amount is valid */
const validFilesAmount = ref(true);

/** Flag signals if files where dragged over the drop zone */
const isDragOver = ref(false);

/** Hidden HTML input field that opens the file explorer */
const fileInput = document.createElement("input");

/**
 * Configuration of the HTML input field.
 */
onMounted(() => {
  fileInput.type = "file";
  fileInput.multiple = props.multiple;
  /* catch 'onchange' event and trigger emit to the surrounding element */
  fileInput.onchange = (event) => {
    const target = event.target as HTMLInputElement;
    if (target?.files && target.files.length > 0) {
      const filesArray = Array.from(target.files);
      _emitFiles(filesArray);
    }
  };
});

onUpdated(() => {
  fileInput.multiple = props.multiple;
});

/**
 * Opens the file explorer by firing a click event to the hidden file input field if the property {@link Props#disabled} is false.
 */
const selectFiles = () => {
  if (props.disabled) return;
  fileInput.click();
};

/** Sets flag {@link isDragOver} true. */
const onDragOver = (event: DragEvent) => {
  console.log("here1");
  console.log(fileInput?.multiple);
  if (! fileInput?.multiple) {
    console.log(event);
    const dataTransfer: DataTransfer = event.dataTransfer as DataTransfer;
    if (dataTransfer?.items?.length > 1) {
      console.log(dataTransfer?.files?.length);
      validFilesAmount.value = false;
      return;
    }
  }
  isDragOver.value = true;
};

/** Sets flag {@link isDragOver} false. */
const onDragLeave = () => {
  isDragOver.value = false;
  validFilesAmount.value = true;
};

/**
 * Catches a DragEvent in the drop zone and emits dropped files to the surrounding element if the property {@link Props#disabled} is false.
 * @param {DragEvent} event dropped files
 */
const onDrop = (event: DragEvent) => {
  if (!validFilesAmount.value || props.disabled) return;
  isDragOver.value = false;
  const dataTransfer: DataTransfer = event.dataTransfer as DataTransfer;
  if (dataTransfer?.files?.length > 0) {
    const filesArray = Array.from(dataTransfer.files);
    _emitFiles(filesArray);
  }
};

/**
 * Checks if all files are inside the allowed file size range that is given by {@link Props#maxFileSize}.
 * Reads the file contents and converts it to  Base64-encoded data preceded by a Data-URL declaration.
 * Emits the converted files to upload to the surrounding element.
 * @param {File[]} files array of dropped or chosen files to upload
 */
const _emitFiles = (files: File[]) => {
  if (!_areFilesValid(files)) {
    validFileSize.value = false;
    return;
  }
  validFileSize.value = true;

  const fileDataPromises = files.map((file) => {
    return new Promise<FileDTO>((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        const fileDTO = new FileDTO();
        fileDTO.filename = file.name;
        fileDTO.mimeType = file.type;
        fileDTO.data = reader.result as string;
        resolve(fileDTO);
      };
      reader.readAsDataURL(file);
    });
  });
  Promise.all(fileDataPromises).then((files) => {
    emit("files", files);
    console.log(files);
  });
};

/**
 * Checks if all files are inside the allowed file size range that is given by {@link Props#maxFileSize}.
 * @param {File[]} files array files
 */
const _areFilesValid = (files: File[]) => {
  return !files.some((file) => file.size > props.maxFileSize * 1024 * 1024);
};
</script>

<style scoped>
.drop-zone {
  background-color: #fff;
  width: 100%;
  height: 100%;
  position: relative;
  border: 2px dashed #337bb2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px;
  margin-bottom: 20px;
}

.drop-zone.is-dragover.is-not-disabled {
  background-color: #f1f1f1;
}

.drop-zone.is-not-disabled {
  cursor: pointer;
}
</style>
