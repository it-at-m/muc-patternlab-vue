<template>
  <button
    @click="handleClick"
    :disabled="disabled"
    class="m-button"
    :class="buttonVariantClass + ' ' + iconAnimatedClass"
  >
    <span>
      <slot />
      <svg
        v-if="icon"
        aria-hidden="true"
        class="m-button__icon"
      >
        <use :xlink:href="'#icon-' + icon"></use>
      </svg>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

type buttonType = "primary" | "secondary" | "ghost";

const props = withDefaults(
  defineProps<{
    /**
     * The variant prop gives you easy access to several different button styles.
     *
     * Available are `primary`, `secondary` and `ghost`.
     */
    variant?: buttonType;
    /**
     * Let`s you indicate that the button is not currently interactive or clickable.
     */
    disabled?: boolean;
    /**
     * Choose an icon to be appended behind the slot. No icon will be placed if the prop is left empty.
     */
    icon?: string;
    /**
     * Wether the Icon should be animated on hover (slide-right) or not.
     *
     * Default is `false`
     */
    iconAnimated?: boolean;
  }>(),
  {
    variant: "primary",
    disabled: false,
    iconAnimated: false
  }
);

defineSlots<{
  /**
   * Display content inside the button.
   */
  default(): any;
}>();

const emit = defineEmits<{
  /**
   * Triggered when button is clicked.
   * @param e Click-Event
   */
  (e: "click"): void;
}>();

const buttonVariantClass = computed(() => {
  switch (props.variant) {
    case "secondary":
      return "m-button--secondary";
    case "ghost":
      return "m-button--ghost";
    default:
      return "m-button--primary";
  }
});

const iconAnimatedClass = computed(() => {
  if(props.iconAnimated) {
    return 'm-button--animated-right';
  } else {
    return '';
  }
});

const handleClick = () => {
  emit("click");
};
</script>
