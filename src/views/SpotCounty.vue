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
                text-primary-700 border-primary-700 w-100 text-start"
                @click="isCountyPanelOpen = !isCountyPanelOpen">
                選擇地區
              </button>
              <AccordionSpot class="position-absolute top-100 start-0"
                v-show="isCountyPanelOpen" />
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
            <router-link :to="{
              name: 'spotList',
              params: {
                zipcode: currentZipcode,
              }
            }"
            class="btn btn-primary-700 text-gray-100 fs-7 p-0 w-34p h-34p rounded-circle
              d-flex justify-content-center align-items-center ms-auto">
              <i class="fa-solid fa-list"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container px-6 pt-5 pb-6 d-md-none">
        <div class="d-flex">
          <div class="col-4 me-4 position-relative">
            <button type="button" class="btn py-2 px-4 bg-gray-100 rounded-pill
              text-primary-700 border-primary-700 w-100 text-start" @click="isCountyPanelOpen = !isCountyPanelOpen">
              選擇地區
            </button>
            <AccordionSpot class="position-absolute top-100 start-0" v-show="isCountyPanelOpen" />
          </div>
          <div class="col-4">
            <button type="button" class="btn py-2 px-4 bg-gray-100 rounded-pill
              text-primary-700 border-primary-700 w-100 text-start">
              選擇日期
            </button>
          </div>
          <button class="btn btn-primary-700 text-gray-100 fs-7 p-0 w-34p h-34p rounded-circle
            d-flex justify-content-center align-items-center ms-auto">
            <i class="fa-solid fa-list"></i>
          </button>
        </div>
      </div>
      <div class="d-lg-none"
        v-if="currentPlaces.length">
        <LeafletMap mapId="mapPhone"
          class="min-vh-body"
          :lat="currentPosition.PositionLat"
          :lon="currentPosition.PositionLon"
          :places="currentPlaces" />
      </div>
      <div class="container pt-10 pb-12 d-none d-lg-block min-vh-body">
        <div class="row h-100 position-relative">
          <div class="col-4 overflow-y-auto h-body hide-scrollbar">
            <CardAttraction v-for="item in currentPlaces"
              :key="item"
              :type="'spot'"
              :placeData="item"
              class="h-auto mb-6"
              interAction="select"
              @set-spot-map="setMapPosition"/>
          </div>
          <div class="col-8" v-if="currentPlaces.length">
            <LeafletMap mapId="mapTable"
              :lat="currentPosition.PositionLat"
              :lon="currentPosition.PositionLon"
              :places="currentPlaces" />
          </div>
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
import LeafletMap from '@/components/LeafletMap.vue';

export default {
  data() {
    return {
      bannerImgUrl: new URL('../assets/images/banner-image/banner-list/banner-list.png',
        import.meta.url).href,
      places: [],
      mapPosition: '',
      isCountyPanelOpen: false,
      currentZipcode: 'all',
    }
  },
  components: {
    CardAttraction,
    AccordionSpot,
    LeafletMap,
  },
  computed: {
    ...mapState(usePlacesStore, [
      'randomPlaces',
      'placesByZipCode',
    ]),
    currentPlaces() {
      if (this.places.length) return this.places;
      return this.placesByZipCode;
    },
    currentPosition() {
      if (this.mapPosition) return this.mapPosition;
      return this.currentPlaces[0].Position;
    }
  },
  methods: {
    ...mapActions(usePlacesStore, [
      'getPlaces',
      'getPlacesByZipcode',
    ]),
    setMapPosition(position) {
      this.mapPosition = position;
    }
  },
  async created() {
    this.currentZipcode = this.$route.params.zipcode;
    if (this.currentZipcode !== 'all') {
      this.getPlacesByZipcode(this.currentZipcode);
    } else {
      await this.getPlaces();
      this.places = this.randomPlaces(4);
    }
  },
}
</script>