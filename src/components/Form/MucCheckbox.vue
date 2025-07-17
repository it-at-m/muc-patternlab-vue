<template>
  <div
    class="m-checkboxes__item"
    :class="{ 'has-error': errorMsg }"
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
    <form-error-message
      id="checkbox-error"
      v-if="errorMsg"
      tabindex="0"
      role="alert"
      aria-live="polite"
    >
      {{ errorMsg }}
    </form-error-message>
  </div>
</template>

<script setup lang="ts">
import FormErrorMessage from "./FormErrorMessage.vue";
/**
 * Input value from the checkbox component.
 */
const modelValue = defineModel<boolean>({ default: false });

const { label, errorMsg } = defineProps<{
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
  /**
   * Optional error message to be displayed beneath the checkbox.
   */
  errorMsg?: string;
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
