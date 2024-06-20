<template>
  <div class="position-relative">
    <swiper-container
      :loop="true"
      :slides-per-view="slidesPerView"
      :space-between="spaceBetween"
      :grid="grid"
      :breakpoints="breakpoints"
      :navigation="{
        nextEl: '.swiper-button-custom-next',
        prevEl: '.swiper-button-custom-prev',
      }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }">
      <swiper-slide
        v-for="data in swiperData"
        :key="data.ScenicSpotID">
        <CardAttraction
          :placeData="data"
          :type="type" />
      </swiper-slide>
    </swiper-container>
    <div class="swiper-button-custom-prev transition-base bg-gray-300-hover">
      <i class="fa-solid fa-chevron-left"></i>
    </div>
    <div class="swiper-button-custom-next transition-base bg-gray-300-hover">
      <i class="fa-solid fa-chevron-right"></i>
    </div>
  </div>
</template>

<script>
  import CardAttraction from '@/components/CardAttraction.vue';
  import { register } from 'swiper/element/bundle';
  register();
  export default {
    props: {
      type: {
        type: String,
        required: true,
      },
      slidesPerView: {
        type: Number,
        default: 1,
      },
      swiperData: {
        type: Array,
        required: true,
      },
      grid: {
        type: Object,
        required: true,
      },
      breakpoints: {
        type: Object,
        required: true,
      },
      spaceBetween: {
        type: Number,
        default: 20,
      },
    },
    components: {
      CardAttraction,
    },
  }
</script>

<style lang="scss">
.swiper-button-custom-prev,
.swiper-button-custom-next {
  display: none;
  width: 4.75rem;
  height: 4.75rem;
  background-color: #FEFEFE;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 10;
  top: 50%;
  border-radius: 50%;
  box-shadow: 0px 4px 20px rgba(128, 128, 128, .2);
  transform: translateY(-50%);
  .fa-solid {
    font-size: 1.875rem;
    color: #616161;
  }

  @media (min-width: 768px) {
    display: flex;
  }
}

.swiper-button-custom-prev {
  left: -25px;
}
.swiper-button-custom-next {
  right: -25px;
}
</style>