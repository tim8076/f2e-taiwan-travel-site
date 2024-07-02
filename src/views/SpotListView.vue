<template>
  <main>
    <section class="py-5 py-lg-9 bg-cover bg-repeat-0 bg-position-center"
      :style="{ backgroundImage: `url(${bannerImgUrl})` }">
      <div class="container">
        <h1 class="text-center fs-4 fs-lg-1 text-gray-100 fw-bold text-lg-start
          letter-spacing-5 mb-md-3">
          景點列表
        </h1>
        <div class="d-none d-md-flex justify-content-between align-items-center">
          <div class="w-50 d-flex">
            <div class="w-50 me-5 position-relative">
              <button type="button" class="btn py-2 px-4 bg-gray-100 rounded-pill
                text-primary-700 border-primary-700 w-100 text-start" @click="isCountyPanelOpen = !isCountyPanelOpen">
                選擇地區
              </button>
              <AccordionSpot class="position-absolute top-100 start-0" v-show="isCountyPanelOpen"
                @select-town="getPlacesByTown" />
            </div>
            <div class="w-50">
              <button type="button" class="btn py-2 px-4 bg-gray-100 rounded-pill
                text-primary-700 border-primary-700 w-100 text-start">
                選擇參觀日期
              </button>
            </div>
          </div>
          <div class="d-flex">
            <button class="btn btn-primary-700 text-gray-100 fs-7 me-5">
              <i class="fa-solid fa-filter me-1"></i>
              篩選
            </button>
            <router-link
              :to="{
                name: 'spotCounty',
                params: {
                  zipcode: currentZipcode
                }
              }"
              class="btn btn-primary-700 text-gray-100 fs-7 p-r1 w-34p h-34p rounded-circle
                d-flex justify-content-between align-items-center">
              <i class="fa-solid fa-location-dot"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-5 pb-9 pt-lg-10 pb-lg-15">
      <div class="container px-6 mb-4 d-md-none mb-md-none">
        <div class="d-flex flex-column">
          <div class="d-flex mb-3">
            <div class="w-50 me-4 position-relative">
              <button type="button" class="btn py-2 px-4 bg-gray-100 rounded-pill
                text-primary-700 border-primary-700 w-100 text-start" @click="isCountyPanelOpen = !isCountyPanelOpen">
                選擇地區
              </button>
              <AccordionSpot class="position-absolute top-100 start-0" v-show="isCountyPanelOpen"
                @select-town="getPlacesByTown" />
            </div>
            <div class="w-50">
              <button type="button" class="btn py-2 px-4 bg-gray-100 rounded-pill
                text-primary-700 border-primary-700 w-100 text-start">
                選擇日期
              </button>
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <button class="btn btn-primary-700 text-gray-100 fs-7 me-5">
              <i class="fa-solid fa-filter me-1"></i>
              篩選
            </button>
            <button class="btn btn-primary-700 text-gray-100 fs-7 p-r1 w-34p h-34p rounded-circle
              d-flex justify-content-between align-items-center">
              <i class="fa-solid fa-location-dot"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="container min-vh-body">
        <div class="row gy-4 gy-lg-6">
          <template v-if="currentPlaces.length">
            <div class="col-md-6 col-lg-4" v-for="data in currentPlaces" :key="data.ScenicSpotID">
              <CardAttraction :type="'spot'" :placeData="data" />
            </div>
          </template>
          <p class="fs-4 text-primary-700 fw-bold text-center" v-else>
            您尋找的區域，<br class="d-md-none" />目前沒有推薦景點喔
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { usePlacesStore } from '@/stores/places.js';
import CardAttraction from '@/components/CardAttraction.vue';
import AccordionSpot from '@/components/AccordionSpot.vue';

export default {
  data() {
    return {
      bannerImgUrl: new URL('../assets/images/banner-image/banner-list/banner-list.png',
        import.meta.url).href,
      places: [],
      isCountyPanelOpen: false,
      currentZipcode: 'all',
    }
  },
  components: {
    CardAttraction,
    AccordionSpot,
  },
  computed: {
    ...mapState(usePlacesStore, [
      'randomPlaces',
      'placesByZipCode',
    ]),
    currentPlaces() {
      if (this.currentZipcode !== 'all') return this.placesByZipCode;
      return this.places;
    }
  },
  methods: {
    ...mapActions(usePlacesStore, [
      'getPlaces',
      'getPlacesByZipcode',
    ]),
    getPlacesByTown(zipcode) {
      this.currentZipcode = zipcode;
      this.isCountyPanelOpen = false;
      this.getPlacesByZipcode(zipcode);
    },
  },
  async created() {
    this.currentZipcode = this.$route.params.zipcode;
    if (this.currentZipcode === 'all') {
      await this.getPlaces();
      this.places = this.randomPlaces(9);
    } else {
      await this.getPlacesByZipcode(this.currentZipcode);
    }
  },
}
</script>