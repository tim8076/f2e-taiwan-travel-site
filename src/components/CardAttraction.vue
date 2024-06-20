<template>
  <div class="card border-0 pt-5 px-5 pb-6 shadow position-relative h-100">
    <router-link to="/" class="stretched-link" />
    <div class="card-img-top h-171p rounded-3 position-relative bg-gray-300
      d-flex flex-column justify-content-center align-items-center">
      <img :src="placeData.Picture.PictureUrl1" class="card-img-top w-100 h-100 rounded-3 object-fit-cover
          position-absolute top-0 start-0" :alt="placeData.Picture.PictureDescription1">
      <img class="mb-1" src="../assets/images/error/no-image.svg" alt="沒有圖片顯示">
      <p class="fw-bold fs-6 text-gray-100">No image!</p>
    </div>
    <div class="card-body pt-2 px-0 pb-0">
      <h3 class="card-title fs-4 fw-bold text-gray-700 letter-spacing-12 mb-1 text-truncate">
        {{ cardTitle }}
        <div class="placeholder-glow">
          <span class="placeholder col-6" v-show="!cardTitle"></span>
        </div>
      </h3>
      <div class="d-flex align-items-center mb-5">
        <img class="me-1"
          v-for="(item, index) in rankStr"
          :key="index"
          :src="item" alt="star-icon">
      </div>
      <template v-if="placeData.City">
        <span class="badge fs-8 rounded-pill bg-primary-600 text-gray-100 lh-sm me-2">
          {{ placeData.Class1 }}
        </span>
        <span class="badge fs-8 rounded-pill bg-primary-600 text-gray-100 lh-sm me-2">
          {{ placeData.Class2 }}
        </span>
        <span class="badge fs-8 rounded-pill bg-primary-600 text-gray-100 lh-sm me-2">
          {{ placeData.Class3 }}
        </span>
        <span class="badge fs-8 rounded-pill bg-primary-600 text-gray-100 lh-sm">
          {{ placeData.City }}
        </span>
      </template>
    </div>
    <button type="button" class="card__favoriteBtn w-40p h-40p position-absolute end-28p top-28p bg-gray-100
      border border-primary-600 border-2 rounded-pill text-primary-600
      d-flex justify-content-center align-items-center z-2">
      <i class="fa-regular fa-heart fs-5" v-if="!isLike"></i>
      <i class="fa-solid fa-heart fs-5" v-else></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
    },
    placeData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isLike: false,
      rankLevel: [
        3.5,
        4,
        4.5,
        5
      ],
      rankStr: [],
    }
  },
  computed: {
    cardTitle() {
      if (this.type === 'spot') {
        return this.placeData.ScenicSpotName;
      } else if (this.type === 'event') {
        return this.placeData.ActivityName;
      } else {
        return '';
      }
    }
  },
  methods: {
    createRank() {
      const randomLevel = this.rankLevel[Math.floor(Math.random() * this.rankLevel.length)];
      const fullStar = new URL(`../assets/images/star/star-filled.svg`, import.meta.url).href;
      const halfStar = new URL(`../assets/images/star/half-star-filled.svg`, import.meta.url).href;
      const outLineStar = new URL(`../assets/images/star/star-outline.svg`, import.meta.url).href;
      if (randomLevel === 3.5) {
        this.rankStr = [fullStar, fullStar, fullStar, halfStar, outLineStar];
      } else if (randomLevel === 4) {
        this.rankStr = [fullStar, fullStar, fullStar, fullStar, outLineStar];
      } else if (randomLevel === 4.5) {
        this.rankStr = [fullStar, fullStar, fullStar, fullStar, halfStar];
      } else {
        this.rankStr = [fullStar, fullStar, fullStar, fullStar, fullStar];
      }
    },
  },
  created() {
    this.createRank();
  }
}
</script>