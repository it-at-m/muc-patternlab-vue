<template>
    <div class="m-component">
      <div class="container">
        <div class="m-component__grid">
          <div class="m-component__column">
            <section class="m-slider m-slider--visible-preview" aria-label="Slider mit Kommentaren" data-m-slider-splide="m-slider-comment">
              <p class="visually-hidden">This is a carousel with rotating cards. Use the previous and next buttons to
                navigate, and Enter to activate cards.</p>
              <button class="previous-button is-control" @click="prevSlide">
                <svg class="icon">
                  <use xlink:href="#icon-arrow-left"></use>
                </svg>
                <span class="visually-hidden">Vorheriger Slide</span>
              </button>
              <Splide :options="sliderOptions" aria-label="My Favorite Images" ref="splide" >
                <slot />
              </Splide>
              <button class="next-button is-control" @click="nextSlide">
                <svg class="icon">
                  <use xlink:href="#icon-arrow-right"></use>
                </svg>
                <span class="visually-hidden">Nächster Slide</span>
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Splide } from '@splidejs/vue-splide';
import type { Options } from '@splidejs/splide'

defineSlots<{
  /**
   * MucSliderItems can be put into this slot.
   */
  default(): any;
}>();

const splide = ref();

const nextSlide = () => {
  if (splide.value) {
    splide.value.go('>');
  }
};

const prevSlide = () => {
  if (splide.value) {
    splide.value.go('<');
  }
};

const sliderOptions: Options = {
  autoplay: false,
  keyboard: false,
  slideFocus: false,
  lazyLoad: false,
  arrows: false,
  perMove: 1,
  gap: '0',
  type: 'slide',
  perPage: 1,
  pagination: false,
  speed: 350,
  mediaQuery: 'min',
  breakpoints: {
    1: {
      perPage: 1,
      gap: '1.5rem',
    },
    768: {
      perPage: 1,
      gap: '1.5rem',
    },
    1200: {
      perPage: 1,
      gap: '2rem',
    },
  },
};

</script>

<style scoped></style>
