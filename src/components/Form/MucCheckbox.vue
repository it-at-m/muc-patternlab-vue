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
      <span
        :id="'checkbox-hint-' + id"
        class="m-hint"
      >
        {{ hint }}
      </span>
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
   *  Unique identifier for the checkbox. Required property used to associate the checkbox with its label and hint text for accessibility.
   */
  id: string;
  /**
   * Label is displayed to the right of the checkbox as information for the user.
   */
  label: string;
  /**
   * Optional hint shown beneath the checkbox
   */
  hint?: string;
}>();

const emit = defineEmits<
  /**
   * Emits every time the checkbox or the label is clicked - thus switching the state.
   * @param e emits the click event.
   */
  (e: "click") => void
>();

/**
 * Called upon clicking the checkbox or label, switches the state of the checkbox and emits the event.
 */
const clickedCheckbox = () => {
  modelValue.value = !modelValue.value;
  emit("click");
};
</script>
