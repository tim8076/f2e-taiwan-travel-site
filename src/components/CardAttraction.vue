<template>
  <div class="card border-0 pt-5 px-5 pb-6 shadow position-relative">
    <router-link to="/" class="stretched-link"/>
    <img src="https://s3-alpha-sig.figma.com/img/f4e3/56f4/eedeee90f7ab6943eabf5a07670034fa?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hdGrzYT24e5PhzO6gZ05Uzx8pTIFsFxZIZvjcXEwmg~rPaEt5p4nsqpaoEDr8Vz9R4ZkRNJYna-BJfUXLKjb2Xwo00OO5S~3TPGPZu3Bx~ftGGtb6VmfqRWleBaBEq5HnWQZJQAHD7EpC4ldaEPAfPlido0pU1UDX5cdBjyD7caOGP9q6y3JguTOuoJN3WFUG0YoeTrv6yKpfbtM37Fd8DC8rD256aIAZrRK2T8IKCO4px1gIVLbQHg7JcYZpH6BhFzAG9a9Cwt4h45i-g-7T18EnlJz5rUtnnXoJckgJiliSOksrz9kXXOWQ66rgaAKIsoL18~UE95x5flvjG68MA__"
      class="card-img-top h-171p rounded-3 object-fit-cover"
      alt="...">
    <div class="card-body pt-2 px-0 pb-0">
      <h3 class="card-title fs-4 fw-bold text-gray-700 letter-spacing-12 mb-1">新北市歡樂耶誕城</h3>
      <div class="d-flex align-items-center mb-5">
        <img class="me-1" src="../assets/images/star/star-filled.svg" alt="star-icon">
        <img class="me-1" src="../assets/images/star/star-filled.svg" alt="star-icon">
        <img class="me-1" src="../assets/images/star/star-filled.svg" alt="star-icon">
        <img src="../assets/images/star/star-filled.svg" alt="star-icon">
      </div>
      <span class="badge fs-8 rounded-pill bg-primary-600 text-gray-100 lh-sm me-2">文化活動</span>
      <span class="badge fs-8 rounded-pill bg-primary-600 text-gray-100 lh-sm me-2">熱鬧</span>
      <span class="badge fs-8 rounded-pill bg-primary-600 text-gray-100 lh-sm">新北板橋</span>
    </div>
    <button type="button"
      class="card__favoriteBtn w-40p h-40p position-absolute end-28p top-28p bg-gray-100
      border border-primary-600 border-2 rounded-pill text-primary-600
      d-flex justify-content-center align-items-center z-2">
      <i class="fa-regular fa-heart fs-5" v-if="!isLike"></i>
      <i class="fa-solid fa-heart fs-5" v-else></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLike: false,
    }
  },
}
</script>