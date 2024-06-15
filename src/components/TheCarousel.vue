<template>
  <div :id="idName" class="carousel slide carousel-fade" ref="fadeCarousel" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item position-relative" :class="{ active: index === indexPath }"
        v-for="(path, index) in paths" :key="path">
        <img :src="path.src"
          class="d-block w-100 object-fit-cover" alt="maple-image">
        <div class="position-absolute inset-0 d-flex justify-content-center align-items-center
          flex-column">
          <h2 class="fs-2 text-center text-gray-100 letter-spacing-12 mb-5 mb-md-3">{{ path.title }}</h2>
          <router-link to="/" class="btn btn-primary-700 text-gray-100">
            {{ path.btnText }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as bootstrap from 'bootstrap';

export default {
  props: [ 
    'idName',
    'paths',
  ],
  data() {
    return {
      indexPath: 0,
    };
  },
  mounted() {
    const fadeCarousel = this.$refs.fadeCarousel;
    new bootstrap.Carousel(fadeCarousel, {
      interval: 4000,
      touch: false
    });
  },
}
</script>
