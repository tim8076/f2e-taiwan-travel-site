<template>
  <footer class="bg-primary-600 py-5">
    <div class="container d-flex flex-column align-items-center flex-lg-row
    justify-content-lg-around">
      <div class="d-flex justify-content-center align-items-center mb-2
        flex-lg-column align-items-lg-start">
        <router-link to="/" class="me-20 me-lg-0 mb-lg-2">
          <img src="@/assets/images/logo-white.svg" alt="footer-logo">
        </router-link>
        <ul class="d-flex align-items-center">
          <li class="me-2">
            <a href="#">
              <img src="../assets/images/facebook.svg" alt="facebook-icon">
            </a>
          </li>
          <li class="me-2">
            <a href="#">
              <img src="../assets/images/line.svg" alt="line-icon">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/images/twitter.svg" alt="twitter-icon">
            </a>
          </li>
        </ul>
      </div>
      <ul class="d-none d-lg-flex align-items-center">
        <li class="me-15">
          <router-link to="/" class="fs-7 fw-bold text-gray-100
            d-inline-flex flex-column align-items-center text-gray-600-hover transition-base">
            <span class="mb-1">找景點</span>
            <span>主題景點</span>
          </router-link>
        </li>
        <li class="me-15">
          <router-link to="/" class="fs-7 fw-bold text-gray-100
            d-inline-flex flex-column align-items-center text-gray-600-hover transition-base">
            <span class="mb-1">找飯店</span>
            <span>主題飯店</span>
          </router-link>
        </li>
        <li class="me-15">
          <router-link to="/" class="fs-7 fw-bold text-gray-100
            d-inline-flex flex-column align-items-center text-gray-600-hover transition-base">
            <span class="mb-1">找餐廳</span>
            <span>主題餐廳</span>
          </router-link>
        </li>
        <li>
          <router-link to="/" class="fs-7 fw-bold text-gray-100
            d-inline-flex flex-column align-items-center text-gray-600-hover transition-base">
            <span class="mb-1">會員登入</span>
            <span>商家專區</span>
          </router-link>
        </li>
      </ul>
      <p class="fs-8 fs-lg-7 text-gray-100 letter-spacing-15">
        Copyright ©
      </p>
    </div>
  </footer>
</template>