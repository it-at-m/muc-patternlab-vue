<script setup lang="ts">
import { MucDivider } from "../Divider";

withDefaults(
  defineProps<{
    /**
     * Title of the Intro
     */
    title: string;
    /**
     * Tagline of the Intro (above the title)
     */
    tagline?: string;
    /**
     * Toggle to show a divider between title and body
     */
    divider?: boolean;
    /**
     * Img to show next to title and tagline
     */
    img?: string;

    /**
     * ImgAlt useful for screen readers
     */
    imgAlt?: string;
    /**
     * Size of the image
     */
    size?: number;
  }>(),
  {
    divider: true,
    size: 72,
  }
);

defineSlots<{
  /**
   * Body of the Intro.
   */
  default(): unknown;
}>();
</script>

<template>
  <div
    class="m-intro m-intro-vertical"
    :class="{ 'm-intro-vertical--with-pictogram': img }"
    style="background-color: var(--color-neutrals-blue-xlight)"
  >
    <div class="m-intro-vertical__body">
      <div class="container">
        <div class="m-intro-vertical__grid">
          <div
            v-if="img"
            class="m-intro-vertical__pictogram"
          >
            <img
              :src="img"
              :alt="imgAlt"
              :width="size"
              :height="size"
            />
          </div>
          <div class="m-intro-vertical__grid-inner">
            <div>
              <p
                v-if="tagline"
                class="m-intro-vertical__tagline"
              >
                {{ tagline }}
              </p>
              <h1 class="m-intro-vertical__title">
                {{ title }}
              </h1>
            </div>

            <muc-divider v-if="divider" />

            <div class="m-intro-vertical__content">
              <p style="padding-bottom: 32px">
                <slot />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.muc-divider {
  margin-top: 8px;
  margin-bottom: 16px;
}
</style>
