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
    <IconFileUpload />
    <MucButton
      variant="secondary"
      icon="upload"
      :disabled="disabled"
    >
      {{ buttonText }}
    </MucButton>
    <small>{{ additionalInformation }}</small>
  </div>
  <span
    v-if="!validFileSizes && maxFileSizeWarning"
    class="m-error-message"
  >
    <MucIcon icon="warning" />
    {{ maxFileSizeWarning }}
  </span>
  <span
    v-if="!validTotalFileSizes && maxTotalFileSizeWarning"
    class="m-error-message"
  >
    <MucIcon icon="warning" />
    {{ maxTotalFileSizeWarning }}
  </span>
  <span
    v-if="!validFilesAmount"
    class="m-error-message"
  >
    <MucIcon icon="warning" />
    {{ invalidAmountWarning }}
  </span>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, ref } from "vue";

import { MucButton } from "../Button";
import { MucIcon } from "../Icon";
import IconFileUpload from "./IconFileUpload.vue";

const {
  buttonText = "Upload file",
  additionalInformation,
  disabled = false,
  multiple = true,
  invalidAmountWarning,
  maxFileSize = 0,
  maxFileSizeWarning,
  maxTotalFileSize = 0,
  maxTotalFileSizeWarning,
} = defineProps<{
  /**
   * Text on the upload button
   */
  buttonText: string;
  /**
   * Additional Information, e.g. max file size
   */
  additionalInformation?: string;
  /**
   * Flag to disable the upload field
   */
  disabled?: boolean;
  /**
   * Flag to switch between multiple and single file upload
   */
  multiple?: boolean;
  /**
   * Warning for invalid amount of files
   */
  invalidAmountWarning?: string;
  /**
   * Maximum file size in MByte
   */
  maxFileSize?: number;
  /**
   * Warning for invalid file size
   */
  maxFileSizeWarning?: string;
  /**
   * Maximum file size sum in MByte
   */
  maxTotalFileSize?: number;
  /**
   * Warning for invalid file size sum
   */
  maxTotalFileSizeWarning?: string;
}>();

const emit = defineEmits([
  /**
   * Dropped files as {@link File[]} array
   */
  "files",
]);

/** Flag signals if file size is valid */
const validFileSizes = ref(true);

const validTotalFileSizes = ref(true);

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
  fileInput.multiple = multiple;
  /* catch 'onchange' event and trigger emit to the surrounding element */
  fileInput.onchange = (event) => {
    const target = event.target as HTMLInputElement;
    if (target?.files && target.files.length > 0) {
      const filesArray = Array.from(target.files);
      _emitFiles(filesArray);
    }
  };
});

/**
 * Pass property {multiple} to the input tag.
 */
onUpdated(() => {
  fileInput.multiple = multiple;
});

/**
 * Opens the file explorer by firing a click event to the hidden file input field if the property {disabled} is false.
 */
const selectFiles = () => {
  if (disabled) return;
  fileInput.click();
};

/** Sets flag {@link isDragOver} true. */
const onDragOver = (event: DragEvent) => {
  if (disabled) return;
  if (!fileInput?.multiple) {
    const dataTransfer: DataTransfer = event.dataTransfer as DataTransfer;
    if (dataTransfer?.items?.length > 1) {
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
  if (disabled) return;
  if (!validFilesAmount.value) {
    /*
    user drops files with invalid amount
    -> warning disappears
     */
    validFilesAmount.value = true;
    return;
  }
  isDragOver.value = false;
  const dataTransfer: DataTransfer = event.dataTransfer as DataTransfer;
  if (dataTransfer?.files?.length > 0) {
    const filesArray = Array.from(dataTransfer.files);
    _emitFiles(filesArray);
  }
};

/**
 * Emits the files to upload to the surrounding element.
 * @param {File[]} files array of dropped or chosen files to upload
 */
const _emitFiles = (files: File[]) => {
  validFileSizes.value = _areFilesValid(files);
  validTotalFileSizes.value = _isTotalFilesSumValid(files);

  if (!validFileSizes.value || !validTotalFileSizes.value) {
    return;
  }

  emit("files", files);
};

/**
 * Checks if all files are inside the allowed file size range that is given by {@link Props#maxFileSize}.
 * @param {File[]} files array files
 */
const _areFilesValid = (files: File[]) => {
  if (maxFileSize)
    return !files.some((file) => file.size > maxFileSize * 1024 * 1024);
  return true;
};

/**
 * Checks if the sum of all files is inside the allowed range that is given by {@link Props#maxTotalFileSize}.
 * @param {File[]} files array files
 */
const _isTotalFilesSumValid = (files: File[]) => {
  if (maxTotalFileSize)
    return (
      files.reduce((acc, file) => acc + (file.size || 0), 0) <=
      maxTotalFileSize * 1024 * 1024
    );
  return true;
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
