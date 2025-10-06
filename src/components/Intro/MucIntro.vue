<script setup lang="ts">
import { MucDivider } from "../Divider";
import {computed} from "vue";

//vertical = narrow = detail;
//horizontal = wide = overview;
type IntroType = "detail" | "overview";
//type IntroType = "narrow" | "wide";
//type IntroType = "vertical" | "horizontal";

const props = withDefaults(
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
     * Img to show next to title and tagline.
     * Only works with variant='vertical'
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
    /**
     * Variant of the Intro -
     * detail (https://patternlab.muenchen.space/?p=components-intro-vertical-article)
     * or
     * overview (default - https://patternlab.muenchen.space/?p=components-intro-summary-text).
     */
    variant?: IntroType;
  }>(),
  {
    divider: true,
    size: 64,
    variant: "overview"
  }
);

const isVertical = computed(() => (props.variant == 'vertical'));
const isHorizontal = computed(() => (props.variant == 'horizontal'))

defineSlots<{
  /**
   * Body of the Intro.
   */
  default(): unknown;
}>();
</script>

<template>
  <div
    v-if="isHorizontal"
  >
    <div class="m-intro m-intro-summary-text">
      <div class="container">
        <div class="m-intro-summary-text__body">
          <div class="m-intro-summary-text__grid">
            <div class="m-intro-summary-text__content">
              <p
                  v-if="tagline"
                  class="m-intro-vertical__tagline"
                  tabindex="0"
              >
                {{ tagline }}
              </p>
              <h1 class="m-intro-summary-text__title">{{ title }}</h1>

              <muc-divider v-if="divider" />

              <div class="m-intro-summary-text__text">
                <p tabindex="0">
                  <slot />
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>

  </div>
  <div
    v-if="isVertical"
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
                tabindex="0"
              >
                {{ tagline }}
              </p>
              <h1
                class="m-intro-vertical__title"
                tabindex="0"
              >
                {{ title }}
              </h1>
            </div>

            <muc-divider v-if="divider" />

            <div class="m-intro-vertical__content">
              <p tabindex="0">
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
  margin-bottom: 24px;
}
</style>
