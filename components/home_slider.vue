<template>
  <div class="swiper_wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide>
        <div class="slider_banner">
          <div class="bannet_title">
            <h1>FITLAND 07</h1>
            <span>Та самая беговая дорожка снова в наличии</span>
            <div class="price">
              <span class="newPrice">250.000 сум</span>
              <div class="oldPrice">450.000 сум</div>
            </div>
            <nuxt-link to="#">
              <span class="banner_btn">Перейти каталог</span>
            </nuxt-link>
          </div>
          <div class="banner_img">
            <img src="@/assets/images/advertising banners/3.png" alt="" />
          </div>
        </div>
      </swiper-slide>
      <!--  -->
      <swiper-slide>
        <div class="slider_banner">
          <div class="bannet_title">
            <h1>FITLAND 07</h1>
            <span>Та самая беговая дорожка снова в наличии</span>
            <div class="price">
              <span class="newPrice">250.000 сум</span>
              <div class="oldPrice">450.000 сум</div>
            </div>
            <nuxt-link to="#">
              <span class="banner_btn">Перейти каталог</span>
            </nuxt-link>
          </div>
          <div class="banner_img">
            <img src="@/assets/images/advertising banners/3.png" alt="" />
          </div>
        </div>
      </swiper-slide>
      <!--  -->
      <swiper-slide>
        <div class="slider_banner">
          <div class="bannet_title">
            <h1>FITLAND 07</h1>
            <span>Та самая беговая дорожка снова в наличии</span>
            <div class="price">
              <span class="newPrice">250.000 сум</span>
              <div class="oldPrice">450.000 сум</div>
            </div>
            <nuxt-link to="#">
              <span class="banner_btn">Перейти каталог</span>
            </nuxt-link>
          </div>
          <div class="banner_img">
            <img src="@/assets/images/advertising banners/3.png" alt="" />
          </div>
        </div>
      </swiper-slide>
      <!--  -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div class="swiper_pagination">
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'swiper/vue';
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.min.css";
export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      swiperOptions: {
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 3000,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>

<style lang="scss">
.swiper_wrapper .swiper-button-prev::after,
.swiper_wrapper .swiper-button-next::after {
  font-size: 24px;
  padding-top: 3px;
  padding-left: 3px;
}
.swiper_wrapper {
  border-radius: 70px;
  padding: 30px;
  background: #533d94;
  margin-bottom: 100px;
  .slider_banner {
    display: flex;
    justify-content: space-between;
    .bannet_title {
      margin-left: 120px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #fff;
      width: 330px;
      h1 {
        font-size: 50px;
        font-weight: 700;
        margin-bottom: 15px;
      }
      span {
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 30px;
      }
      .price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 50px;
        .newPrice {
          font-size: 30px;
          font-weight: 700;
          color: #3fc2cd;
          margin-bottom: 0;
        }
        .oldPrice {
          font-size: 20px;
          font-weight: 400;
          color: #a1a1a1;
        }
      }
      .banner_btn {
        width: 240px;
        font-size: 20px;
        color: #fff;
        background: #3fc2cd;
        border-radius: 20px;
        padding: 20px 40px;
      }
    }
    .banner_img {
      margin-right: 100px;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #fff;
    &::after {
      font-size: 24px;
    }
  }

  span.swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    background: #3fc2cd;
    border-radius: 50%;
    margin: 0 5px;
  }

  .swiper_pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
}
</style>