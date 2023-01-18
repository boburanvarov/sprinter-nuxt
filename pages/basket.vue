<template>
  <div class="container">
    <h1 class="sectionTitle">Корзина</h1>
    <div class="section_wraper">
      <div class="basket_block">
        <div class="basket_header">
          <h6 class="prod_images">Картина</h6>
          <h6 class="prod_name">Товар</h6>
          <h6 class="quantity">Количество</h6>
          <h6 class="prod_price">Стоимость</h6>
        </div>
        <div class="basket_body">
          <div class="product_images">
            <img src="../assets/images/product_imeges/1.png" alt="" class="product_img" />
          </div>
          <div class="product_info">
            <h3 class="product_name">Penny Original 22</h3>
            <h3 class="product_color">Цвет: зеленый</h3>
            <h3 class="diametr">Диаметр: 50 см</h3>
          </div>
          <div class="product_quantity">
            <span class="minus">-</span>
            <span class="product_quan">1</span>
            <span class="puls">+</span>
          </div>
          <div class="product_price">
            <h3 class="product_price">500.000 сум x2</h3>
          </div>
          <div class="product_delete">
            <i class="icon-dinkrement"></i>
          </div>
        </div>
                <div class="basket_body">
          <div class="product_images">
            <img src="../assets/images/product_imeges/1.png" alt="" class="product_img" />
          </div>
          <div class="product_info">
            <h3 class="product_name">Penny Original 22</h3>
            <h3 class="product_color">Цвет: зеленый</h3>
            <h3 class="diametr">Диаметр: 50 см</h3>
          </div>
          <div class="product_quantity">
            <span class="minus">-</span>
            <span class="product_quan">1</span>
            <span class="puls">+</span>
          </div>
          <div class="product_price">
            <h3 class="product_price">500.000 сум x2</h3>
          </div>
          <div class="product_delete">
            <i class="icon-dinkrement"></i>
          </div>
        </div>
                <div class="basket_body">
          <div class="product_images">
            <img src="../assets/images/product_imeges/1.png" alt="" class="product_img" />
          </div>
          <div class="product_info">
            <h3 class="product_name">Penny Original 22</h3>
            <h3 class="product_color">Цвет: зеленый</h3>
            <h3 class="diametr">Диаметр: 50 см</h3>
          </div>
          <div class="product_quantity">
            <span class="minus">-</span>
            <span class="product_quan">1</span>
            <span class="puls">+</span>
          </div>
          <div class="product_price">
            <h3 class="product_price">500.000 сум x2</h3>
          </div>
          <div class="product_delete">
            <i class="icon-dinkrement"></i>
          </div>
        </div>
      </div>
        <div class="price_block">
          <div class="price_info">
            <span>Предворительно</span>
            <span>500.000</span>
          </div>
          <div class="price_info">
            <span>Доставка</span>
            <span>0</span>
          </div>
          <div class="price_info">
            <span>Скидка</span>
            <span>25.000</span>
          </div>
          <input type="text" class="promo_code" placeholder="Промокод" />
          <div class="price_info total_price">
            <span>Итого</span>
            <span>1.500.000 сум</span>
          </div>
          <nuxt-link to="/formation">
            <button class="product_desgin">Оформить</button>
          </nuxt-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/styles/basket.scss";
</style>