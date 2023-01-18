<template>
  <div class="wrapper">
    <div class="advertisingLeft">
      <div class="top">
        <div class="Crossfit">
          <swiper :options="swiperAdvertising">
            <swiper-slide>
              <nuxt-link to="/">
                <img src="../assets/images/advertising banners/1.png" alt="" />
              </nuxt-link>
            </swiper-slide>
            <!--  -->
            <swiper-slide>
              <nuxt-link to="/">
                <img src="../assets/images/advertising banners/1.png" alt="" />
              </nuxt-link>
            </swiper-slide>
          </swiper>
        </div>
        <!-- ---------- -->

        <div class="Dumbbelllar">
          <swiper :options="swiperAdvertising">
            <swiper-slide>
              <nuxt-link to="/">
                <img src="../assets/images/advertising banners/2.png" alt="" />
              </nuxt-link>
            </swiper-slide>
            <!--  -->
            <swiper-slide>
              <nuxt-link to="/">
                <img src="../assets/images/advertising banners/2.png" alt="" />
              </nuxt-link>
            </swiper-slide>
          </swiper>
        </div>
        <!-- ---------- -->

        <div class="tracks">
          <swiper :options="swiperAdvertising">
            <swiper-slide>
              <nuxt-link to="/">
                <img
                  src="../assets/images/advertising banners/Group 167.png"
                  alt=""
                />
              </nuxt-link>
            </swiper-slide>
            <!--  -->
            <swiper-slide>
              <nuxt-link to="/">
                <img
                  src="../assets/images/advertising banners/Group 167.png"
                  alt=""
                />
              </nuxt-link>
            </swiper-slide>
          </swiper>
        </div>
        <!-- ---------- -->

        <div class="balls">
          <swiper :options="swiperAdvertising">
            <swiper-slide>
              <nuxt-link to="/">
                <img src="../assets/images/advertising banners/4.png" alt="" />
              </nuxt-link>
            </swiper-slide>
            <!--  -->
            <swiper-slide>
              <nuxt-link to="/">
                <img src="../assets/images/advertising banners/4.png" alt="" />
              </nuxt-link>
            </swiper-slide>
          </swiper>
        </div>
        <!-- ---------- -->

        <!-- ---------- -->
      </div>
    </div>
    <div class="bikes">
      <swiper :options="swiperAdvertising">
        <swiper-slide>
          <nuxt-link to="/">
            <img src="../assets/images/advertising banners/5.png" alt="" />
          </nuxt-link>
        </swiper-slide>
        <!--  -->
        <swiper-slide>
          <nuxt-link to="/">
            <img src="../assets/images/advertising banners/5.png" alt="" />
          </nuxt-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.min.css";
export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      swiperAdvertising: {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 2000,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  gap: 40px;
  margin-bottom: 100px;

  img {
    width: 100%;
    height: 100%;
  }

  .advertisingLeft {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .top,
  .bottom {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
  }

  .Crossfit {
    width: 440px;
    height: 260px;
  }

  .Dumbbelllar {
    width: 440px;
    height: 260px;
  }

  .tracks {
    width: 560px;
    height: 300px;
  }

  .balls {
    width: 320px;
    height: 300px;
  }

  .bikes {
    width: 440px;
    height: 600px;
  }
}
</style>