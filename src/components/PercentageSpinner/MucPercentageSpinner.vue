<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="-10 -10 220 220"
    fill="none"
    color="#005a9f"
  >
    <defs>
      <linearGradient id="spinner-firstHalf">
        <stop
          offset="0%"
          stop-opacity="1"
          stop-color="currentColor"
        />
        <stop
          offset="100%"
          stop-opacity="0.5"
          stop-color="currentColor"
        />
      </linearGradient>
      <linearGradient id="spinner-secondHalf">
        <stop
          offset="0%"
          stop-opacity="0"
          stop-color="currentColor"
        />
        <stop
          offset="100%"
          stop-opacity="0.5"
          stop-color="currentColor"
        />
      </linearGradient>
    </defs>

    <g stroke-width="12">
      <path
        stroke="url(#spinner-firstHalf)"
        d="M 4 100 A 96 96 0 0 1 196 100"
      />
      <path
        stroke="url(#spinner-secondHalf)"
        d="M 196 100 A 96 96 0 0 1 4 100"
      />
      <animateTransform
        from="90 100 100"
        to="450 100 100"
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="2300ms"
      />
    </g>
    <text
      x="100"
      y="108"
      text-anchor="middle"
      fill="#3a5368"
      font-size="24"
      font-weight="bold"
    >
      {{ validPercentage }}
    </text>
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    /**
     * Size of the spinner relative or absolute.
     * Typical units for styling size are allowed.
     */
    size: string;
    /**
     * Number that represents the progress.
     * Numbers lower than 0 result in '0%'.
     * Numbers greater than 100 result in '100%'.
     * An empty value results in an empty string.
     */
    percentage?: number;
  }>(),
  {
    size: "300",
  }
);

/**
 * Ensures that the progress indication is within the reasonable range between 0 and 100 percent.
 * An empty property 'percentage' results in an empty string.
 */
const validPercentage: string = computed(() => {
  if (props.percentage) {
    if (props.percentage < 0) return 0 + "%";
    if (props.percentage > 100) return 100 + "%";
    return Math.round(props.percentage) + "%";
  }
  return "";
});
</script>
