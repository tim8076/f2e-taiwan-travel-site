<template>
  <main>
    <section class="index-banner d-flex flex-column justify-content-center align-items-center text-center bg-cover bg-position-center bg-repeat-0">
      <h1 class="text-gray-100 fw-bold letter-spacing-12 mb-5 lh-sm fs-2 fs-lg-1">
        開始實現<hr class="m-0 p-0 border-0 d-lg-none">你的夢想旅程
      </h1>
      <div class="search-input search-input-lg search-input-gray-200 w-lg-40"
        role="search">
        <input class="search-input__input fs-lg-5 py-lg-5 ps-lg-10" type="search"
          placeholder="想去哪裡?" aria-label="Search">
        <button class="search-input__btn fs-lg-5 pe-lg-10" type="button">
          <i class="fa-solid fa-magnifying-glass fs-lg-2"></i>
        </button>
      </div>
    </section>
    <section class="bg-gray-100 pt-7 pb-9 py-md-12">
      <div class="container">
        <div class="d-flex justify-content-center align-items-center justify-content-md-between
          mb-6 mb-md-3">
          <h2 class="fw-bold lh-sm fs-3">熱門打卡景點</h2>
          <router-link to="/" class="btn btn-primary-700 text-light d-none d-md-block">
            查看更多
          </router-link>
        </div>
        <TheSlide :breakpoints="swiperSetting.breakpoints"
          :spaceBetween="swiperSetting.spaceBetween"
          :grid="swiperSetting.grid"
          class="mb-8 mb-md-0"/>
        <div class="d-flex justify-content-center">
          <router-link to="/" class="btn btn-primary-700 text-center text-light d-md-none">
            查看更多
          </router-link>
        </div>
      </div>
    </section>
    <section class="index-attraction">
      <CarouselFade idName="attractionCarousel" :paths="carouseImages"/>
    </section>
    <section class="bg-gray-100 pt-7 pb-9 py-md-12">
      <div class="container">
        <div class="d-flex justify-content-center align-items-center justify-content-md-between
          mb-6 mb-md-3">
          <h2 class="fw-bold lh-sm fs-3">Rainbow Life!</h2>
          <router-link to="/" class="btn btn-primary-700 text-light d-none d-md-block">
            查看更多
          </router-link>
        </div>
        <TheSlide :breakpoints="swiperSetting.breakpoints"
          :spaceBetween="swiperSetting.spaceBetween"
          :grid="swiperSetting.grid"
          class="mb-8 mb-md-0"/>
        <div class="d-flex justify-content-center">
          <router-link to="/" class="btn btn-primary-700 text-center text-light d-md-none">
            查看更多
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import CarouselFade from '@/components/TheCarousel.vue';
import TheSlide from '@/components/TheSwiper.vue';

export default {
  data() {
    return {
      carouseImages: [
        {
          src: './src/assets/images/banner-image/banner-maple.png',
          title: '全台熱門景點',
          btnText: '賞楓秘境看這裡',
        },
        {
          src: './src/assets/images/banner-image/banner-gallery.png',
          title: '探索活動發掘精彩',
          btnText: '限時展覽看這裡',
        },
        {
          src: './src/assets/images/banner-image/banner-music.png',
          title: '全台演唱會資訊',
          btnText: '演唱會看這裡',
        },
      ],
      swiperSetting: {
        spaceBetween: 20,
        grid: {
          rows: 4,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
             grid: {
              rows: 1,
            },
          },
          960: {
            slidesPerView: 3,
            spaceBetween: 40,
            grid: {
              rows: 1,
            },
          },
        }
      },
    }
  },
  components: {
    CarouselFade,
    TheSlide,
  },
}
</script>