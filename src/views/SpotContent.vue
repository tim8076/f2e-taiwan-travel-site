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
              新北市
            </router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link :to="{ name: 'spotList' }" class="text-gray-500 text-gray-600-hover">
              板橋區
            </router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link :to="{ name: 'spotList' }" class="text-gray-500 text-gray-600-hover">
              景點
            </router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            新北市歡樂耶誕城
          </li>
        </ol>
      </nav>
      <div class="d-flex justify-content-between align-items-center mb-1 mb-md-2">
        <h1 class="text-gray-700 fs-6 fs-lg-1 fw-bold letter-spacing-5">
          新北市歡樂耶誕城
        </h1>
        <ul class="d-flex justify-content-between align-items-center">
          <li class="me-2">
            <a href="#" class="btn btn-primary-700 d-none d-md-flex align-items-center
              text-gray-100">
              撥打電話
              <i class="fa-solid fa-phone-flip fs-7 ms-r1"></i>
            </a>
            <a href="#" class="w-30p h-30p rounded-circle border border-primary-700
              d-flex justify-content-center align-items-center text-primary-700
              text-gray-100-hover bg-primary-700-hover transition-base
              d-md-none">
              <i class="fa-solid fa-phone-flip fs-7"></i>
            </a>
          </li>
          <li class="me-2">
            <a href="#" class="w-30p h-30p rounded-circle border border-primary-700
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
        <li class="me-1">
          <router-link :to="{ name: 'spotList' }"
            class="btn btn-sm btn-primary-600 text-gray-100 rounded-pill fs-8 fw-bold">
            文化活動
          </router-link>
        </li>
        <li class="me-1">
          <router-link :to="{ name: 'spotList' }"
            class="btn btn-sm btn-primary-600 text-gray-100 rounded-pill fs-8 fw-bold">
            熱鬧
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
        <p class="text-gray-500 fs-7 ms-auto ms-lg-4">新北市板橋區</p>
      </div>
    </div>
  </section>
  <section class="mb-8">
    <img class="object-fit-cover h-220p h-md-300p d-lg-none w-100"
      src="https://images.unsplash.com/photo-1451772741724-d20990422508?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="spot-image">
    <div class="container px-7 px-lg-5">
      <div class="row gx-lg-4">
        <div class="col-lg-4 pt-7 px-lg-6 pb-7 order-last order-lg-first border-lg">
          <h2 class="fs-5 fs-md-3 fw-bold text-primary-800 letter-spacing-12 mb-2">
            關於
          </h2>
          <p class="text-gray-600 fs-7 fs-md-6 mb-5 mb-lg-9 lh-md-base">
            新北市也有濃濃的耶誕過節氣氛！每年一到12月，新北市歡樂耶誕城都會舉辦盛大的耶誕活動與美麗的裝置藝術，全台室外最高的聖誕樹也都吸引相當多路人駐足拍照！</p>
          <h2 class="fs-5 fs-md-3 fw-bold text-primary-800 letter-spacing-12 mb-2">
            地址
          </h2>
          <p class="text-gray-600 fs-7 fs-md-6 mb-5 mb-lg-9 lh-md-base">
            22001 新北市板橋區中山路一段161號
            地址可以放兩行唷</p>
          <h2 class="fs-5 fs-md-3 fw-bold text-primary-800 letter-spacing-12 mb-2">
            開放時間
          </h2>
          <p class="text-gray-600 fs-7 fs-md-6 lh-md-base">
            暫訂12月，17:30-22:00 每隔30分鐘主燈秀，每次5分鐘</p>
        </div>
        <div class="col-lg-8 d-none d-lg-block">
          <img class="object-fit-cover h-100"
            src="https://images.unsplash.com/photo-1451772741724-d20990422508?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="spot-image">
        </div>
      </div>
    </div>
  </section>
  <section class="mb-10">
    <div class="container px-7 px-lg-5">
      <h2 class="fs-5 fs-md-3 fw-bold text-primary-800 letter-spacing-12 mb-2">
        景點特色
      </h2>
      <p class="text-gray-600 fs-7 fs-md-6 mb-5 mb-lg-9 lh-md-base">
        新北市也有濃濃的耶誕過節氣氛！每年一到12月，新北市歡樂耶誕城都會舉辦盛大的耶誕活動與美麗的裝置藝術，全台室外最高的聖誕樹也都吸引相當多路人駐足拍照！</p>
      <h2 class="fs-5 fs-md-3 fw-bold text-primary-800 letter-spacing-12 mb-2">
        交通方式
      </h2>
      <p class="text-gray-600 fs-7 fs-md-6 mb-5 mb-lg-9 lh-md-base">
        新北市也有濃濃的耶誕過節氣氛！每年一到12月，新北市歡樂耶誕城都會舉辦盛大的耶誕活動與美麗的裝置藝術，全台室外最高的聖誕樹也都吸引相當多路人駐足拍照！</p>
      <h2 class="fs-5 fs-md-3 fw-bold text-primary-800 letter-spacing-12 mb-5">
        鄰近景點
      </h2>
    </div>
    <div class="h-352p h-md-452p d-lg-none">
      <img class="h-100 w-100 object-fit-cover"
        src="https://images.unsplash.com/photo-1451772741724-d20990422508?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="">
    </div>
    <div class="container d-none d-lg-block">
      <div class="row gx-5">
        <div class="col-lg-4">
          <ul class="h-436p overflow-y-auto spot-list hide-scrollbar">
            <li class="spot-list__item shadow-lg-hover">
              <CardHorizontal />
            </li>
            <li class="spot-list__item shadow-lg-hover">
              <CardHorizontal />
            </li>
            <li class="spot-list__item shadow-lg-hover">
              <CardHorizontal />
            </li>
            <li class="spot-list__item shadow-lg-hover">
              <CardHorizontal />
            </li>
          </ul>
        </div>
        <div class="col-lg-8">
          <img class="h-436p object-fit-cover w-100"
            src="https://images.unsplash.com/photo-1451772741724-d20990422508?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="">
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <h2 class="fs-5 fs-md-3 fw-bold text-primary-800 letter-spacing-12 mb-2">
        這些景點大家也推
      </h2>
      <ul class="row">
        <li class="col-md-6 col-lg-4">
          <!-- <CardAttraction /> -->
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import CardHorizontal from '@/components/CardHorizontal.vue';
// import CardAttraction from '@/components/CardAttraction.vue';

export default {
  components: {
    CardHorizontal,
    // CardAttraction,
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