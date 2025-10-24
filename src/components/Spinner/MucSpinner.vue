<template>
  <!-- Live region controls announcement; focus target when fading in -->
  <div
    ref="liveRegionEl"
    role="status"
    aria-live="polite"
    aria-atomic="true"
    tabindex="-1"
  >
    <span class="visually-hidden">{{ announcement }}</span>
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
          :dy="i === 0 ? `-${((lines.length - 1) / 2) * lineHeightEm}em` : `${lineHeightEm}em`"
        >
          {{ line }}
        </tspan>
      </text>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed, ComputedRef, onMounted, onUnmounted, ref, nextTick } from "vue";

const { size = "300", text } = defineProps<{
  /**
   * Size of the spinner relative or absolute.
   * Typical units for styling size are allowed.
   */
  size: string;
  /**
   * Any text in the center of the spinner.
   * An empty value results in an empty string.
   */
  text?: string;
}>();


const MAX_TOTAL = 80;
const MAX_PER_LINE = 14;
const lineHeightEm = 1.2;

/** Reduction to 80 characters */
const displayText: ComputedRef<string> = computed(() => {
  const raw = text ? String(text) : "";
  if (raw.length <= MAX_TOTAL) return raw;
  return raw.slice(0, MAX_TOTAL - 1) + "…"; // insgesamt 60 Zeichen
});

/** Break at spaces with fallback to hard break for long words */
function wrapText(s: string, maxPerLine: number): string[] {
  if (!s) return [];
  const words = s.trim().split(/\s+/);
  const out: string[] = [];
  let line = "";

  const flush = () => { if (line) { out.push(line); line = ""; } };

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

const lines: ComputedRef<string[]> = computed(() => wrapText(displayText.value, MAX_PER_LINE));

const liveRegionEl = ref<HTMLElement | null>(null);
const announcement = ref<string>("");
let previouslyFocusedEl: HTMLElement | null = null;
let lastHeadingBefore: HTMLElement | null = null;

function findNearestPrecedingHeading(anchor: HTMLElement | null): HTMLElement | null {
  if (!anchor) return null;
  const headings = Array.from(document.querySelectorAll<HTMLElement>("h1, h2, h3, h4, h5, h6"));
  let candidate: HTMLElement | null = null;
  for (const h of headings) {
    const pos = h.compareDocumentPosition(anchor);
    const isBefore = !!(pos & Node.DOCUMENT_POSITION_FOLLOWING);
    if (isBefore) candidate = h;
  }
  return candidate;
}

function focusElement(el: HTMLElement | null) {
  if (!el) return;
  let addedTabindex = false;
  if (!el.hasAttribute("tabindex")) {
    el.setAttribute("tabindex", "-1");
    addedTabindex = true;
  }
  el.focus({ preventScroll: false });
  // Remove tabindex to not affect the tab order anymore
  queueMicrotask(() => {
    if (addedTabindex) el.removeAttribute("tabindex");
  });
}

function announceNow() {
  announcement.value = "";
  void nextTick(() => {
    announcement.value = displayText.value;
  });
}

function restoreFocus() {
  const target = lastHeadingBefore || previouslyFocusedEl;
  focusElement(target || null);
}

onMounted(() => {
  previouslyFocusedEl = document.activeElement as HTMLElement | null;
  lastHeadingBefore = findNearestPrecedingHeading(liveRegionEl.value);
  announceNow();
});

onUnmounted(() => {
  restoreFocus();
});
</script>

<style scoped>
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
