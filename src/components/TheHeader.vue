<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-gray-200 bg-lg-gray-100 py-3">
      <div class="container px-4">
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa-solid fa-bars"></i>
        </button>
        <div class="d-flex align-items-center">
          <router-link to="/">
            <img src="../assets/images/logo.png" alt="tourist-logo">
          </router-link>
          <div class="search-input search-input-gray-200 d-none d-lg-flex ms-7" role="search">
            <input class="search-input__input" type="search" placeholder="想去哪裡?" aria-label="Search">
            <button class="search-input__btn" type="button">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
       <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="search-input search-input-gray-100 mt-6 mb-5 d-lg-none" role="search">
            <input class="search-input__input" type="search" placeholder="想去哪裡?" aria-label="Search">
            <button class="search-input__btn" type="button">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div class="d-flex justify-content-between align-items-center mb-5 mb-lg-0 ms-lg-auto
            justify-content-lg-start">
            <router-link to="/" class="btn btn-gray-100 text-gray-600 text-primary-700-hover">
              找景點
              <i class="fa-solid fa-paper-plane fs-7 ms-1"></i>
            </router-link>
            <router-link to="/" class="btn btn-gray-100 text-gray-600 text-primary-700-hover ms-lg-6">
              找飯店
              <i class="fa-solid fa-bed ms-1 fs-7"></i>
            </router-link>
            <router-link to="/" class="btn btn-gray-100 text-gray-600 text-primary-700-hover ms-lg-6">
              找餐廳
              <i class="fa-solid fa-utensils ms-1 fs-7"></i>
            </router-link>
            <router-link to="/" class="btn btn-primary-700 text-light d-none d-md-block ms-lg-6
              ms-xl-10">
              我的旅程
            </router-link>
          </div>
          <div class="d-flex justify-content-center d-md-none">
            <router-link to="/" class="btn btn-primary-700 text-light">
              我的旅程
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>