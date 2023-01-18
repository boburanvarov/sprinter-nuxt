<template>
  <div class="container">
    <div class="product_info">
      <div class="images">
        <div class="activeImg" @click="openImageModal = !openImageModal">
          <img :src="products.images[activeImage]" alt="" />
        </div>
        <div class="image_wrapper">
          <div
            class="image"
            v-for="(image, idx) in products.images"
            :key="idx"
            @click="activeImage = idx"
            :class="{ active: activeImage === idx }"
          >
            <img :src="image" alt="" />
          </div>
        </div>
        <div class="images_modal" v-show="openImageModal" @click="openImageModal= false">
          <swiper class="imageWrapper" :options="swiperModalImages">
            <swiper-slide
              class="imageModal"
              v-for="(image, idx) in products.images"
              :key="idx"
              @click.stop
            >
              <img  @click.stop :src="image" alt="" />
              <!-- <i class="icon-dinkrement" @click="openImageModal = false"></i> -->
            </swiper-slide>
            <div class="swiper-button-prev" @click.stop slot="button-prev"></div>
            <div class="swiper-button-next" @click.stop slot="button-next"></div>
          </swiper>
          <!-- <div class="swiper_pagination">
            <div class="swiper-pagination"></div>
          </div> -->
        </div>
        <div class="customer_reviews">
          <div class="top_title">
            <h1 class="subtitle">Отзывы покупателей</h1>
            <div class="otziv">
          <i class="icon-otziv_bg" v-for="otziv in products.reviews"></i>
          <i class="icon-otziv" v-for="otziv in 5-products.reviews"></i>
            </div>
          </div>
          <span class="reviews_length">0 отзывов </span>
        </div>
      </div>
      <div class="info">
        <h1 class="produc_title">{{ products.name }}</h1>
        <div class="produc_price">
          <span class="newPrice">{{ products.price }}</span>
          <div class="oldPrice">{{ products.oldPrice }}</div>
        </div>
        <div class="product_characteristics">
          <div
            class="item"
            v-for="(item, idx) in products.characteristics"
            :key="idx"
          >
            <span class="name">{{ item.name }}</span>
            <span class="atribute">{{ item.atribute }}</span>
          </div>
        </div>
        <div class="colors">
          <h1 class="subtitle">Цвет</h1>
          <div
            class="color"
            v-for="(color, idx) in products.colors"
            :key="idx"
            :style="{ background: color.color }"
            @click="activeColor = idx"
            :class="{ active: activeColor === idx }"
          ></div>
        </div>
        <div class="diameters">
          <h1 class="subtitle">Диаметр колес</h1>
          <span
            class="diameter"
            v-for="(diameter, idx) in products.Diameters"
            :key="idx"
            @click="activeDiameter = idx"
            :class="{ active: activeDiameter === idx }"
            >{{ diameter.diameter }}</span
          >
        </div>
        <div class="sale">
          <button class="btn_sale">
            <i class="icon-korzian"></i>В корзину
          </button>
          <div class="sale_number">
            <span class="minus" @click="removeNum()">-</span>
            <span class="number">{{ productPurchasedNumber }}</span>
            <span class="plus" @click="addNum()">+</span>
          </div>
        </div>
        <div class="description">
          <h1 class="subtitle">Описание</h1>
          <p>{{ products.Descriptions }}</p>
        </div>
      </div>
    </div>
    <div class="similar_products">
      <h1 class="section_title">Похожие товары</h1>
      <div class="product_wrapper">
        <LayoutsProductCard
          v-for="product in sliceProductArray"
          :key="product.id"
          :prod_img="product.image"
          :prod_name="product.name"
          :status_new="product.status"
          :category="product.category"
          :prod_status="product.prod_status"
          :prod_price_new="product.price"
          :prod_price_old="product.oldPrice"
          :reviews = "product.reviews"
          :slug="product.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.min.css";
import productList from "../../frags/productMin.js";
export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      itemId: this.$route.params.id,
      product_array: productList,
      activeImage: 0,
      productPurchasedNumber: 1,
      activeColor: 0,
      activeDiameter: 0,
      openImageModal: false,
      swiperModalImages: {
        loop: true,
        loopFillGroupWithBlank: true,
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
  methods: {
    addNum() {
      this.productPurchasedNumber++;
    },
    removeNum() {
      if (this.productPurchasedNumber > 1) {
        this.productPurchasedNumber--;
      }
    },
  },
  computed: {
    products() {
      return this.product_array.find((item) => item.id == this.itemId);
    },
    sliceProductArray() {
      return this.product_array.slice(0, 4);
    },
  },
  mounted() {
    console.log(this.products);
    // this.products();
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/product.scss";
</style>