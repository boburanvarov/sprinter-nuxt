<template>
  <div class="container">
    <home_slider />
    <section class="new_product">
      <h1 class="section_title">Новинки</h1>
      <div class="new_product_wrapper">
          <productCard
            v-for="product in sliceProductArray"
            :key="product.id"
            :prod_img="product.images[0]"
            :prod_name="product.name"
            :status_new="product.status"
            :category="product.category"
            :prod_status="product.prod_status"
            :prod_price_new="product.price"
            :prod_price_old="product.oldPrice"
            :reviews="product.reviews"
            :slug="product.id"
          />
      </div>
    </section>
    <advertisings />
    <section class="new_product">
      <h1 class="section_title">Футбольный инвентарь</h1>
      <div class="new_product_wrapper">
          <productCard
            v-for="product in sliceProductArray"
            :key="product.id"
            :prod_img="product.image"
            :prod_name="product.name"
            :status_new="product.status"
            :category="product.category"
            :prod_status="product.prod_status"
            :prod_price_new="product.price"
            :prod_price_old="product.oldPrice"
            :reviews="product.reviews"
            :slug="product.id"
          />
      </div>
    </section>
    <section class="stock">
      <h1 class="section_title">Акции</h1>
      <div class="stock_wrapper">
        <swiper :options="stock_banner">
          <swiper-slide>
            <div class="stock_block">
              <h1 class="stock_title">Кешбек 20% на весь ассортимент</h1>
              <p class="stock_sub_title">
                Оформите заказ на сумму более 1.000.000 сум и получите горячий
                кешбек
              </p>
              <nuxt-link to="/"
                ><span class="stock_btn">Перейти каталог</span></nuxt-link
              >
            </div>
            <img
              src="../assets/images/advertising banners/7.png"
              alt=""
              class="stock_img"
            />
          </swiper-slide>
          <!--  -->
          <swiper-slide>
            <div class="stock_block">
              <h1 class="stock_title">Кешбек 20% на весь ассортимент</h1>
              <p class="stock_sub_title">
                Оформите заказ на сумму более 1.000.000 сум и получите горячий
                кешбек
              </p>
              <nuxt-link to="/"
                ><span class="stock_btn">Перейти каталог</span></nuxt-link
              >
            </div>
            <img
              src="../assets/images/advertising banners/7.png"
              alt=""
              class="stock_img"
            />
          </swiper-slide>
          <!--  -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </section>
    <section class="boards">
      <h1 class="section_title">Penny boards</h1>
      <div class="boards_wrapper">
          <productCard
            v-for="product in sliceProductArrayMin"
            :key="product.id"
            :prod_img="product.image"
            :prod_name="product.name"
            :status_new="product.status"
            :category="product.category"
            :prod_status="product.prod_status"
            :prod_price_new="product.price"
            :prod_price_old="product.oldPrice"
            :reviews="product.reviews"
            :slug="product.id"
          />
      </div>
    </section>
    <section class="reviews">
      <h1 class="section_title">Отзывы</h1>
      <div class="reviews_wrapper"></div>
      <swiper :options="swiperReviews">
        <swiper-slide v-for="review in reviews" :key="review.id">
          <div class="review">
            <div class="top">
              <div class="name">
                <h1>{{ review.reviewsNmae }}</h1>
                <span>{{ review.reviewsDate }}</span>
              </div>
              <div class="review_star">
                <i class="icon-otziv"></i><i class="icon-otziv"></i
                ><i class="icon-otziv"></i><i class="icon-otziv"></i
                ><i class="icon-otziv"></i>
              </div>
            </div>
            <div class="reviews_content">
              <h1 class="review_title">{{ review.reviewsTitle }}</h1>
              <p class="review_subtitle">
                {{ review.reviewsSubtitle }}
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </section>

  </div>
</template>

<script>
import reviews from "../frags/reviews.js";
import home_slider from "../components/home_slider.vue";
import productCard from "../components/layouts/product-card.vue";
import product_array from "../frags/productMin.js";
import Advertisings from "../components/advertisings.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.min.css";
export default {
  components: { home_slider, productCard, Advertisings, Swiper, SwiperSlide },
  data() {
    return {
      product_array: product_array,
      reviews: reviews,
      stock_banner: {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 3000,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperReviews: {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 3000,
        },
      },
    };
  },
  // created(){
  //   const authLocalKey = localStorage.getItem('auth');
  //   if(!authLocalKey){
  //      localStorage.setItem('auth', JSON.stringify({
  //        auth: false
  //      }));
  //   }
  // },
  computed:{
    sliceProductArray(){
      return this.product_array.slice(0,8);
    },
    sliceProductArrayMin(){
      return this.product_array.slice(0,4);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/home.scss';
</style>