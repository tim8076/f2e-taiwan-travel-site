<template>
  <section class="pt-4 pt-lg-8 mb-2 mb-md-6">
    <div class="container d-flex flex-column px-7 px-lg-5">
      <router-link :to="{ name: 'spotList' }"
        class="fs-7 fw-bold text-gray-500 d-flex align-items-start d-md-none mb-1">
        <i class="fa-solid fa-chevron-left fs-5 me-1"></i>
        景點列表
      </router-link>
      <nav class="d-none d-md-block mb-1" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link :to="{ name: 'spotList' }" class="text-gray-500 text-gray-600-hover">
              {{ singlePlace.City }}
            </router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link :to="{ name: 'spotList' }" class="text-gray-500 text-gray-600-hover">
              景點
            </router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ singlePlace.ScenicSpotName }}
          </li>
        </ol>
      </nav>
      <div class="d-flex justify-content-between align-items-center mb-1 mb-md-2">
        <h1 class="text-gray-700 fs-6 fs-lg-1 fw-bold letter-spacing-5">
          {{ singlePlace.ScenicSpotName }}
        </h1>
        <ul class="d-flex justify-content-between align-items-center">
          <li class="me-2">
            <a :href="`tel:${singlePlace.Phone}`" class="btn btn-primary-700 d-none d-md-flex align-items-center
              text-gray-100">
              撥打電話
              <i class="fa-solid fa-phone-flip fs-7 ms-r1"></i>
            </a>
            <a :href="`tel:${singlePlace.Phone}`" class="w-30p h-30p rounded-circle border border-primary-700
              d-flex justify-content-center align-items-center text-primary-700
              text-gray-100-hover bg-primary-700-hover transition-base
              d-md-none">
              <i class="fa-solid fa-phone-flip fs-7"></i>
            </a>
          </li>
          <li class="me-2">
            <a :href="`${singlePlace.WebsiteUrl}`"
              class="w-30p h-30p rounded-circle border border-primary-700
              d-flex justify-content-center align-items-center text-primary-700
              text-gray-100-hover bg-primary-700-hover transition-base w-lg-40p h-lg-40p">
              <i class=" fa-solid fa-globe fs-7"></i>
            </a>
          </li>
          <li>
            <a href="#" class="w-30p h-30p rounded-circle border border-primary-700
              d-flex justify-content-center align-items-center text-primary-700
              text-gray-100-hover bg-primary-700-hover transition-base w-lg-40p h-lg-40p">
              <i class="fa-regular fa-heart fs-7"></i>
            </a>
          </li>
        </ul>
      </div>
      <ul class="d-flex align-items-center mb-2 order-md-last mb-md-0">
        <li class="me-1" v-if="singlePlace.Class1">
          <router-link :to="{ name: 'spotList' }"
            class="btn btn-sm btn-primary-600 text-gray-100 rounded-pill fs-8 fw-bold">
            {{ singlePlace.Class1 }}
          </router-link>
        </li>
        <li class="me-1" v-if="singlePlace.Class2">
          <router-link :to="{ name: 'spotList' }"
            class="btn btn-sm btn-primary-600 text-gray-100 rounded-pill fs-8 fw-bold">
            {{ singlePlace.Class2 }}
          </router-link>
        </li>
        <li class="me-1" v-if="singlePlace.Class3">
          <router-link :to="{ name: 'spotList' }"
            class="btn btn-sm btn-primary-600 text-gray-100 rounded-pill fs-8 fw-bold">
            {{ singlePlace.Class3 }}
          </router-link>
        </li>
      </ul>
      <div class="d-flex align-items-center mb-md-2">
        <img class="w-19p h-19p w-md-24p h-md-24p" src="../assets/images/star/star-filled-yellow.svg" alt="star-svg">
        <img class="w-19p h-19p w-md-24p h-md-24p" src="../assets/images/star/star-filled-yellow.svg" alt="star-svg">
        <img class="w-19p h-19p w-md-24p h-md-24p" src="../assets/images/star/star-filled-yellow.svg" alt="star-svg">
        <img class="w-19p h-19p w-md-24p h-md-24p" src="../assets/images/star/half-star-filled-yellow.svg"
          alt="star-svg">
        <img class="w-19p h-19p w-md-24p h-md-24p" src="../assets/images/star/star-outline-yellow.svg" alt="star-svg">
        <p class="text-gray-500 fs-8 ms-2">234 則評價</p>
        <p class="text-gray-500 fs-7 ms-auto ms-lg-4">
          {{ singlePlace.City }}
        </p>
      </div>
    </div>
  </section>
  <section class="mb-8">
    <img class="object-fit-cover h-220p h-md-300p d-lg-none w-100" :src="singlePlace.Picture.PictureUrl1"
      alt="spot-image">
    <div class="container px-7 px-lg-5">
      <div class="row gx-lg-4">
        <div class="col-lg-4 pt-7 px-lg-6 pb-7 order-last order-lg-first border-lg">
          <h2 class="fs-5 fs-md-3 fw-bold text-primary-800 letter-spacing-12 mb-2">
            關於
          </h2>
          <p class="text-gray-600 fs-7 fs-md-6 mb-5 mb-lg-9 lh-md-base">
            {{ shortDetail }}
          </p>
          <h2 class="fs-5 fs-md-3 fw-bold text-primary-800 letter-spacing-12 mb-2">
            地址
          </h2>
          <p class="text-gray-600 fs-7 fs-md-6 mb-5 mb-lg-9 lh-md-base">
            {{ singlePlace.Address || '無提供地址' }}
          </p>
          <h2 class="fs-5 fs-md-3 fw-bold text-primary-800 letter-spacing-12 mb-2">
            開放時間
          </h2>
          <p class="text-gray-600 fs-7 fs-md-6 lh-md-base">
            {{ singlePlace.OpenTime || '全天候開放' }}
          </p>
        </div>
        <div class="col-lg-8 d-none d-lg-block">
          <img class="object-fit-cover h-100 w-100"
           :src="singlePlace.Picture.PictureUrl1"
           alt="spot-image"
            v-if="singlePlace.Picture.PictureUrl1">
          <img class="object-fit-cover h-100 w-100"
            src="../assets/images/error/no-image-sm.svg"
            alt="spot-im" v-else>
        </div>
      </div>
    </div>
  </section>
  <section class="mb-10">
    <div class="container px-7 px-lg-5">
      <h2 class="fs-5 fs-md-3 fw-bold text-primary-800 letter-spacing-12 mb-4 mb-md-5">
        景點特色
      </h2>
      <p class="text-gray-600 fs-7 fs-md-6 mb-5 mb-lg-9 lh-md-base ps-md-8 text-justify">
        {{ singlePlace.DescriptionDetail }}
      </p>
      <template v-if="singlePlace.TravelInfo">
        <h2 class="fs-5 fs-md-3 fw-bold text-primary-800 letter-spacing-12 mb-2">
          交通方式
        </h2>
        <p class="text-gray-600 fs-7 fs-md-6 mb-5 mb-lg-9 lh-md-base">
          {{ singlePlace.TravelInfo }}
        </p>
      </template>
      <h2 class="fs-5 fs-md-3 fw-bold text-primary-800 letter-spacing-12 mb-5">
        鄰近景點
      </h2>
    </div>
    <div class="h-352p h-md-452p mb-8 d-lg-none">
      <LeafletMap
        v-if="placesByZipCode.length"
        mapId="mapPhone"
        :lat="singlePlace.Position.PositionLat"
        :lon="singlePlace.Position.PositionLon"
        :places="placesByZipCode"/>
    </div>
    <div class="container d-none d-lg-block">
      <div class="row gx-5">
        <div class="col-lg-4">
          <ul class="h-436p overflow-y-auto spot-list hide-scrollbar">
            <li class="spot-list__item shadow-lg-hover"
              v-for="place in placesByZipCode"
              :key="place.ScenicSpotID">
              <CardHorizontal v-bind="place"
                @set-position="changeSpotPosition"/>
            </li>
          </ul>
        </div>
        <div class="col-lg-8">
          <LeafletMap
            v-if="placesByZipCode.length"
            mapId="mapTable"
            :lat="currentPosition.PositionLat"
            :lon="currentPosition.PositionLon"
            :places="placesByZipCode"/>
        </div>
      </div>
    </div>
  </section>
  <section class="pb-10 pb-md-22">
    <div class="container">
      <h2 class="fs-5 fs-md-3 fw-bold text-primary-800 letter-spacing-12 mb-4 mb-md-5">
        這些景點大家也推
      </h2>
      <ul class="row">
        <li class="col-md-6 col-lg-4 mb-4 mb-md-0"
          v-for="item in places" :key="item">
          <CardAttraction type="spot" :placeData="item" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import CardHorizontal from '@/components/CardHorizontal.vue';
import CardAttraction from '@/components/CardAttraction.vue';
import LeafletMap from '@/components/LeafletMap.vue';
import { mapActions, mapState } from 'pinia';
import { usePlacesStore } from '@/stores/places.js';

export default {
  data() {
    return {
      places: [],
      position: null,
    }
  },
  components: {
    CardHorizontal,
    CardAttraction,
    LeafletMap,
  },
  computed: {
    ...mapState(usePlacesStore, ['singlePlace', 'placesByZipCode', 'randomPlaces']),
    shortDetail() {
      const index = this.singlePlace.DescriptionDetail.indexOf('。');
      return this.singlePlace.DescriptionDetail.slice(0, index + 1);
    },
    currentPosition() {
      if (this.position) return this.position;
      return this.singlePlace.Position;
    }
  },
  methods: {
    ...mapActions(usePlacesStore, ['getSinglePlace', 'getPlacesByZipcode', 'getPlaces']),
    changeSpotPosition(position) {
      this.position = position;
    }
  },
  async created() {
    const spotId = this.$route.params.spotId;
    await this.getPlaces();
    this.places = this.randomPlaces(3);
    await this.getSinglePlace(spotId);
    await this.getPlacesByZipcode(this.singlePlace.ZipCode);
  },
  async beforeRouteUpdate(to) {
    const spotId = to.params.spotId;
    await this.getPlaces();
    this.places = this.randomPlaces(3);
    await this.getSinglePlace(spotId);
    await this.getPlacesByZipcode(this.singlePlace.ZipCode);
  }
}
</script>

<style scoped lang="scss">
.spot-list__item {
  position: relative;
  padding-bottom: 1.25rem;
}

.spot-list__item:not(:first-child) {
  padding-top: 1.25rem;
}

.spot-list__item::before {
  position: absolute;
  content: '';
  bottom: 0;
  left: 23px;
  right: 23px;
  height: 1px;
  background-color: #D4D4D4;
}
</style>