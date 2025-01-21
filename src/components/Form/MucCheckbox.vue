<template>
  <div
    class="m-checkboxes__item"
    @click="clickedCheckbox"
  >
    <input
      :id="'checkbox-' + id"
      class="m-checkboxes__input"
      name="checkbox"
      type="checkbox"
      :checked="modelValue"
      @click.stop="clickedCheckbox"
    />
    <label
      class="m-label m-checkboxes__label"
      :for="'checkbox-' + id"
    >
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
/**
 * Input value from the checkbox component.
 */
const modelValue = defineModel<boolean>({ default: false });

const { label } = defineProps<{
  /**
   * id of checkbox
   */
  id: string;
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
  modelValue.value = !modelValue.value;
  emit("click");
};
</script>
