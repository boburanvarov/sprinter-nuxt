<template>
  <nuxt-link :to="`/catalog/${slug}`" class="product_card">
    <div class="product_img">
      <img :src="prod_img" :alt="prod_name" />
      <div class="product_status">{{ status_new }}</div>
    </div>
    <div class="product_title">
      <div class="category">
        <p class="category_title">{{ category }}</p>
        <span>
          <i class="icon-otziv_bg" v-for="otziv in reviews" ></i>
          <i class="icon-otziv" v-for="otziv in 5-reviews" ></i>

        </span>
      </div>
      <div class="prod_name">
        <h1>{{ prod_name }}</h1>
        <span class="status">{{ prod_status }}</span>
      </div>
      <div class="prod_price">
        <span class="newPrice">{{ prod_price_new }} сум</span>
        <div class="oldPrice">{{ prod_price_old }} сум</div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    prod_img: String,
    price: String,
    status_new: String,
    category: String,
    category_title: String,
    prod_name: String,
    prod_price_new: String,
    prod_price_old: String,
    prod_status: String,
    reviews: Number,
    slug: String,
  },

  methods: {
  },
};
</script>

<style lang="scss" scoped>
.product_card {
  width: 100%;
  width: 320px;
  .product_img {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 350px;
    border-radius: 40px;
    background: #dff1f4;
    margin-bottom: 15px;

    img {
      width: auto;
      height: auto;
      object-fit: cover;
    }

    .product_status {
      position: absolute;
      top: 0;
      left: 0;
      width: 100px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      border-radius: 60px 10px 10px 10px;
      font-weight: 700;
      background: #55ff05;
    }
  }

  .product_title {
    .category {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;

      span{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2px;
      }
      .category_title {
        font-size: 15px;
        color: #a1a1a1;
        font-weight: 400;
      }
      i {
        font-size: 15px;
        color: #3fc2cd;
      }
    }

    .prod_name {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;

      h1 {
        font-size: 25px;
        font-weight: 600;
      }

      .status {
        font-size: 15px;
        font-weight: 700;
        color: #ff0000;
      }
    }

    .prod_price {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .newPrice {
        font-size: 25px;
        font-weight: 700;
        color: #0092ad;
        // margin-bottom: 0;
      }

      .oldPrice {
        font-size: 15px;
        font-weight: 600;
        color: #a1a1a1;
        text-decoration: line-through;
      }
    }
  }
}
</style>