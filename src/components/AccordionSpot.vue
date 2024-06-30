<template>
  <div class="py-7 px-6 bg-gray-100 rounded-3 vw-90 w-md-452p z-3 shadow">
    <div class="search-input search-input-gray-200 w-md-75 mb-3" role="search">
      <input class="search-input__input" type="search" placeholder="想去哪裡?" aria-label="Search">
      <button class="search-input__btn" type="button">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
    <div class="overflow-y-scroll h-300p h-md-500p hide-scrollbar">
      <div class="accordion accordion-flush" id="northSpots">
        <div class="accordion-item border-bottom border-gray-300"
          v-for="city in cityList"
          :key="city.CityID"
          @click="getCurrentTowns(city)">
          <h3 class="accordion-header">
            <button class="accordion-button ps-0 py-3 fs-6 fw-bold collapsed"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="`#flush-collapse-${city.CityID}`"
              aria-expanded="false"
              aria-controls="flush-collapseOne">
              <span class="me-2">{{ city.CityName }}</span>
            </button>
          </h3>
          <div :id="`flush-collapse-${city.CityID}`"
            class="accordion-collapse collapse"
            data-bs-parent="#northSpots">
            <ul class="accordion-body d-flex flex-wrap align-items-center
              px-0 pt-2 pb-0">
              <li class="mb-2 col-4 col-md-2"
                v-for="town in currentCityTowns"
                :key="town.TownCode">
                <a href="#"
                  class="text-gray-700 text-primary-700-hover fs-7"
                  @click.prevent="selectRegion(city.CityName, town.TownName)">
                  {{ town.TownName }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useCityStore } from '@/stores/county.js';
import { usePlacesStore } from '@/stores/places.js';

export default {
  emit: ['selectTown'],
  data() {
    return {
      currentCity: '',
    }
  },
  computed: {
    ...mapState(useCityStore, ['cityList', 'townList']),
    currentCityTowns() {
      const vm = this;
      return this.townList.find(function(town) {
        return town[0].CityName === vm.currentCity;
      });
    }
  },
  methods: {
    ...mapActions(useCityStore, [
      'getCities',
      'getTowns'
    ]),
    ...mapActions(usePlacesStore, [
      'getZipcodeByRegion'
    ]),
    async getCurrentTowns(city) {
      this.currentCity = city.CityName;
      await this.getTowns(city.City);
    },
    selectRegion(city, town) {
      const zipcode = this.getZipcodeByRegion(city, town);
      this.$emit('selectTown', zipcode);
    }
  },
  created() {
    this.getCities();
  }
}
</script>

<style lang="scss" scoped>

</style>