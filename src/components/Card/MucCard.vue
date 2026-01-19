<template>
  <div
    class="card"
    @click="handleClick($event)"
  >
    <a
      :href="href"
      :target="target"
      class="no-link-style"
    >
      <div class="card-content">
        <div class="card-header">
          <slot name="headerPrefix" />
          <div>
            <div
              v-if="tagline"
              class="card-tagline"
            >
              {{ tagline }}
            </div>
            <div>
              <h3>{{ title }}</h3>
            </div>
          </div>
        </div>

        <muc-divider />

        <slot name="content" />
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { MucDivider } from "../Divider";

const emit = defineEmits<
  /**
   * Triggered when card is clicked and href is undefined.
   * @param e eventname
   * @param click click event itself
   */
  (e: "click", click: Event) => void
>();

const props = defineProps<{
  /**
   * Title the card displays at the top
   */
  title: string;

  /**
   * Optional tagline the card displays above the title
   */
  tagline?: string;

  /**
   * Optional href to link to another page
   */
  href?: string;

  /**
   * Optional target on the link
   */
  target?: string;
}>();

defineSlots<{
  /**
   * Icon shown above the callout. Defaults to icons matching the type.
   */
  headerPrefix(): unknown;
  /**
   * Content beneath the heading shown as text.
   */
  content(): unknown;
}>();

/**
 * Emit a click event if href is undefined.
 */
const handleClick = (event: Event) => {
  if (!props.href) emit("click", event);
};
</script>

<style scoped>
.card {
  cursor: pointer;
  border: solid 1px var(--color-neutrals-blue);
  border-bottom: solid 5px var(--color-brand-main-blue);
  transition: background-color ease-in 150ms;
}

.card:hover {
  background-color: var(--mde-color-neutral-beau-blue-x-light);
}

.card-content {
  padding: 24px 16px;
}

.card-header {
  display: flex;
}

.card-tagline {
  font-size: 16px;
  font-family:
    Open Sans,
    sans-serif;
  color: var(--mde-color-brand-mde-blue);
  font-weight: 700;
  line-height: 24px;
  word-wrap: break-word;

  padding-bottom: 4px;
}

.muc-divider {
  margin-top: 16px;
  margin-bottom: 16px;
}

.no-link-style {
  text-decoration: none !important;
  color: var(--mde-color-neutral-grey) !important;
}

/* CSS for desktop */
@media (min-width: 768px) {
  .card-content {
    padding: 32px 24px;
  }
}
</style>
