<template>
  <dialog
    ref="dialogRef"
    style="max-width: 37rem"
    tabindex="-1"
    aria-labelledby="modalLabel"
  >
    <div tabindex="1">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            class="modal-title"
            id="modalLabel"
          >
            <slot name="title"></slot>
          </h5>
          <button
            type="button"
            class="modal-button-close"
            @click="emit('close')"
            aria-label="Dialog schliessen"
          >
            <muc-icon icon="close" />
          </button>
        </div>

        <div
          class="modal-body"
          style="padding-top: 16px; padding-bottom: 36px"
        >
          <slot name="body"></slot>
        </div>

        <div class="modal-footer">
          <div class="m-button-group">
            <slot name="buttons"></slot>
          </div>
        </div>

        <div class="muc-dialog-actions">
          <slot name="actions"></slot>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

import { MucIcon } from "../Icon";

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

defineSlots<{
  /**
   * Title slot of the Dialog
   */
  title(): unknown;
  /**
   * Inner body of the dialog.
   */
  body(): unknown;
  /**
   * Row beneath the body to house muc-buttons.
   */
  buttons(): unknown;
  /**
   * Lowest row in the modal, color seperated section to have actions for the user displayed.
   */
  actions(): unknown;
}>();

onMounted(() => {
  if (props.open) {
    dialogRef.value?.showModal();
  }
});

const emit = defineEmits(["close"]);

const dialogRef = ref<HTMLDialogElement>();

watch(
  () => props.open,
  (value) => {
    if (value) {
      dialogRef.value?.showModal();
    } else {
      dialogRef.value?.close();
    }
  }
);
</script>

<style>
#dialogRef .m-banner {
  padding: 16px;
}
</style>

<style scoped>
dialog {
  border: none;
  color: inherit;
  padding: 0;
  margin-top: 1.75rem;
  --mde-gutter-x: 0;
  min-width: 592px;
}

dialog::backdrop {
  background-color: var(--color-neutrals-grey);
  opacity: 70%;
}

.muc-dialog-actions {
  height: 69px;
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
  align-self: stretch;
  border-top: 1px solid var(--color-neutrals-blue);
  background: var(--color-neutrals-blue-xlight);
}

@media all and (max-width: 576px) {
  dialog {
    margin-left: 8px;
    margin-right: 8px;
  }
}
</style>
