<template>
  <div class="card mb-3 border-0 shadow-none-hover">
    <a href="#"
      class="stretched-link"
      @click.prevent="setSpotMap"></a>
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="Picture.PictureUrl1"
          class="img-fluid rounded-start h-125p w-125p rounded-3 object-fit-cover"
          :alt="Picture.PictureDescription1"
          v-if="Picture.PictureUrl1">
        <img src="../assets/images/error/no-image-sm.svg"
          class="img-fluid rounded-start h-125p w-125p rounded-3 object-fit-cover"
          alt="無提供圖片"
          v-else>
      </div>
      <div class="col-md-8 ">
        <div class="card-body pt-0 ps-5 pe-0 pb-0 d-flex flex-column h-100">
          <h3 class="card-title fs-6 mb-2">{{ ScenicSpotName }}</h3>
          <div class="d-flex align-items-center mb-auto">
            <img src="../assets/images/star/star-filled-yellow.svg" alt="star-icon" class="me-1">
            <img src="../assets/images/star/star-filled-yellow.svg" alt="star-icon" class="me-1">
            <img src="../assets/images/star/star-filled-yellow.svg" alt="star-icon" class="me-1">
            <img src="../assets/images/star/star-filled-yellow.svg" alt="star-icon" class="me-1">
            <img src="../assets/images/star/half-star-filled-yellow.svg" alt="star-icon">
          </div>
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div>
              <span class="badge fs-8 rounded-pill bg-primary-600 text-gray-100 lh-sm me-2">
                {{ Class1 }}
              </span>
              <span class="badge fs-8 rounded-pill bg-primary-600 text-gray-100 lh-sm me-2">
                {{ Class2 }}
              </span>
            </div>
            <p>25km</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['setSpotMap'],
  props: [
    'Picture',
    'ScenicSpotName',
    'ScenicSpotID',
    'Class1',
    'Class2',
    'Class3',
    'Position',
  ],
  methods: {
    setSpotMap() {
      this.$emit('setPosition', this.Position);
    }
  },
}
</script>