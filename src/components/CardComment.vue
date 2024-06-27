<template>
  <div class="card-comment d-flex flex-column flex-md-row align-items-md-center
    pb-6 pb-lg-8 pe-lg-3">
    <img :src="userImgUrl" alt="user-img"
      class="d-none d-md-block w-75p h-75p w-lg-90p h-lg-90p rounded-circle me-md-9">
    <div class="flex-md-grow-1">
      <div class="d-flex align-items-end mb-2">
        <img :src="userImgUrl" alt="user-img"
          class="w-40p h-40p rounded-circle d-md-none">
        <h3 class="fw-bold fs-6 fs-lg-5 text-gray-700 ms-2 ms-md-0">
          {{ title }}
        </h3>
        <div class="d-flex align-items-center ms-auto">
          <img src="../assets/images/star/star-filled-yellow.svg" alt="star-filled-icon"
            class="w-14p h-14p w-lg-30p h-lg-28p">
          <img src="../assets/images/star/star-filled-yellow.svg" alt="star-filled-icon"
            class="w-14p h-14p w-lg-30p h-lg-28p">
          <img src="../assets/images/star/star-filled-yellow.svg" alt="star-filled-icon"
            class="w-14p h-14p w-lg-30p h-lg-28p">
          <img src="../assets/images/star/star-filled-yellow.svg" alt="star-filled-icon"
            class="w-14p h-14p w-lg-30p h-lg-28p">
          <img src="../assets/images/star/star-filled-yellow.svg" alt="star-filled-icon"
            class="w-14p h-14p w-lg-30p h-lg-28p">
        </div>
      </div>
      <p class="fs-8 fs-md-6 letter-spacing-5 text-justify">
        {{ comment }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    star: {
      type: Number,
      default: 3
    },
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      userImgUrl: this.user.picture.medium,
    };
  },
}
</script>

<style lang="scss" scoped>
.card-comment {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 1.75rem;
    bottom:0;
    height: 1px;
    background-color: #D4D4D4;

    @media(min-width: 960px) {
      right: 0;
    }
  }
}
</style>