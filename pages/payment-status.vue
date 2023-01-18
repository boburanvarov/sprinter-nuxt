<template>
  <div class="container">
    <h1 class="status_title" v-if="failed">Оплата не прошла </h1>
    <h1 class="status_title" v-if="success">Спасибо за покупку. </h1>
    <div class="danger" :style="{
      background: success ? '#00b300' : '#ff0000'
    }">
      <i class="icon-error" v-if="failed"></i>
      <i class="icon-chiked" v-if="success"></i>
    </div>
    <div class="status_text">
      <p v-if="failed">Упс, что-то пошло не так, пожулуйста проверьте проавльность написания данных или же баланс вашей карты</p>
      <p v-if="success">Вы успешно провели оплату, вы можете посмотреть статус доставки в инстрии товара</p>
    </div>
    <div class="btn_send">

      <nuxt-link to="/">
        <button class="pushs">
          Вернуться на главную страницу
        </button>
        
      </nuxt-link>
    </div>

    <div class="more_product" v-if="success">
      <h1 class="section_title">Похожие товары</h1>
      <div class="product_wrapper">
        <LayoutsProductCard
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
    </div>
    </div>
</template>

<script>
import product_array from '../frags/productMin.js';
export default {
  data() {
    return {
      failed: false,
      success: true,
      product_array:  product_array,
    }
  },
    computed:{
    sliceProductArray(){
      return this.product_array.slice(0,4);
    },
  }
}
</script>

<style lang="scss">
@import '../assets/styles/payment-status.scss';
</style>