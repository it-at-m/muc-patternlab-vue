<template>
  <div
    class="m-checkboxes__item"
    @click="clickedCheckbox"
  >
    <input
      class="m-checkboxes__input"
      name="checkbox"
      type="checkbox"
      :checked="checkBoxValue"
      @click.stop="clickedCheckbox"
    />
    <label class="m-label m-checkboxes__label">
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
/**
 * Input value from the checkbox component.
 */
const checkBoxValue = defineModel<boolean>("modelValue", { default: false });

defineProps<{
  /**
   * Label is displayed to the right of the checkbox as information for the user.
   */
  label: string;
}>();

const emit = defineEmits<{
  /**
   * Emits every time the checkbox or the label is clicked - thus switching the state.
   * @param e emits the click event.
   */
  (e: "click"): void;
}>();

/**
 * Called upon clicking the checkbox or label, switches the state of the checkbox and emits the event.
 */
const clickedCheckbox = () => {
  checkBoxValue.value = !checkBoxValue.value;
  emit("click");
};
</script>
