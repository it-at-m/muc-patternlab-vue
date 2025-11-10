<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="-10 -10 220 220"
    fill="none"
    color="#005a9f"
    aria-hidden="true"
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
      v-if="hasPercentage && !hasText"
      x="100"
      y="108"
      text-anchor="middle"
      fill="#3a5368"
      font-size="24"
      font-weight="bold"
    >
      {{ validPercentage }}
    </text>

    <text
      v-else-if="hasText && !hasPercentage"
      x="100"
      y="108"
      text-anchor="middle"
      dominant-baseline="middle"
      fill="#3a5368"
      font-size="16"
      font-weight="bold"
    >
      <tspan
        v-for="(line, i) in lines"
        :key="i"
        x="100"
        :dy="
          i === 0
            ? `-${((lines.length - 1) / 2) * lineHeightEm}em`
            : `${lineHeightEm}em`
        "
      >
        {{ line }}
      </tspan>
    </text>
  </svg>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from "vue";

const {
  size = "300",
  percentage,
  text,
} = defineProps<{
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
  /**
   * Any text in the center of the spinner.
   * An empty value results in an empty string.
   */
  text?: string;
}>();

const hasText = typeof text === "string" && text.trim().length > 0;
const hasPercentage = percentage || percentage === 0;

/** Runtime protection against simultaneous use */
if (hasText && hasPercentage) {
  const msg =
    "MucSpinner: Die Props 'text' und 'percentage' dürfen nicht gleichzeitig verwendet werden.";
  if (
    typeof import.meta !== "undefined" &&
    import.meta.env &&
    import.meta.env.MODE !== "production"
  ) {
    throw new Error(msg);
  } else {
    // eslint-disable-next-line no-console
    console.error(msg);
  }
}

/**
 * Ensures that the progress indication is within the reasonable range between 0 and 100 percent.
 * An empty property 'percentage' results in an empty string.
 */
const validPercentage: ComputedRef<string> = computed(() => {
  if (percentage || percentage === 0) {
    if (percentage < 0) return 0 + "%";
    if (percentage > 100) return 100 + "%";
    return Math.round(percentage) + "%";
  }
  return "";
});

const MAX_TOTAL = 80;
const MAX_PER_LINE = 14;
const lineHeightEm = 1.2;

/** Reduction to 80 characters */
const displayText: ComputedRef<string> = computed(() => {
  const raw = hasText ? String(text) : "";
  if (raw.length <= MAX_TOTAL) return raw;
  return raw.slice(0, MAX_TOTAL - 1) + "…";
});

/** Break at spaces with fallback to hard break for long words */
function wrapText(s: string, maxPerLine: number): string[] {
  if (!s) return [];
  const words = s.trim().split(/\s+/);
  const out: string[] = [];
  let line = "";

  const flush = () => {
    if (line) {
      out.push(line);
      line = "";
    }
  };

  for (const w of words) {
    if (w.length > maxPerLine) {
      flush();
      let i = 0;
      while (i < w.length) {
        out.push(w.slice(i, i + maxPerLine));
        i += maxPerLine;
      }
    } else {
      const candidate = line ? `${line} ${w}` : w;
      if (candidate.length <= maxPerLine) {
        line = candidate;
      } else {
        flush();
        line = w;
      }
    }
  }
  flush();
  return out;
}

const lines: ComputedRef<string[]> = computed(() =>
  wrapText(displayText.value, MAX_PER_LINE)
);
</script>
