<template>
  <div
    class="card"
    @click="emit('click', $event)"
  >
    <div class="px-6 py-8">
      <div class="d-flex">
        <slot name="headerPrefix" />
        <div>
          <div
            v-if="tagline"
            class="card-tagline pb-1"
          >
            {{ tagline }}
          </div>
          <div>
            <h3>{{ title }}</h3>
          </div>
        </div>
      </div>

      <div class="my-4" />

      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  /**
   * @param e eventname
   * @param click click event itself
   */
  (e: "click", click: Event): void;
}>();

defineProps<{
  /**
   * Title the card displays at the top
   */
  title: string;

  /**
   * Optional tagline the card displays above the title
   */
  tagline?: string;
}>();

defineSlots<{
  /**
   * Icon shown above the callout. Defaults to icons matching the type.
   */
  headerPrefix(): any;
  /**
   * Content beneath the heading shown as text.
   */
  content(): any;
}>();
</script>

<style scoped>
.card {
  cursor: pointer;
  border: solid 1px var(--color-neutrals-blue);
  border-bottom: solid 5px var(--color-brand-main-blue);
  transition: background-color ease-in 150ms;
}

.card:hover {
  background-color: #f1f1f1;
}

.card-tagline {
  font-size: 16px;
  font-family:
    Open Sans,
    sans-serif;
  color: #005a9f;
  font-weight: 700;
  line-height: 24px;
  word-wrap: break-word;
}
</style>
