<template>
  <div class="container">
    <h1 class="sectionTitle">Оформление заказа</h1>
    <div class="formation_wrapper">
      <div class="left">
        <div class="farmation_info">
          <div class="details_edit">
            <h4 class="details">Контактные данные</h4>
            <nuxt-link to="/edit-formation">
              <h6 class="detail_edit">Изменить</h6>
            </nuxt-link>
          </div>
          <h6 class="details_info">Александр Новиков</h6>
          <h6 class="details_info">Alex.nov221@mail.ru</h6>
          <h6 class="details_info">+998 (90) 555-96-55</h6>
        </div>
        <div class="address">
          <h4 class="section_address_title">Адреса</h4>
          <div class="address_item">
            <h4 class="address_title _active">Чиланзарский рн, корпус 2, квартира 39 </h4>
            <nuxt-link to="/edit-formation">
              <h6 class="address_edit">Изменить</h6>
            </nuxt-link>
          </div>
        </div>
        <div class="payment">
          <h1 class="payment_title">Способ оплаты </h1>
          <div class="payment_status">
            <div class="radio">
              <label class="radio__label">
                <input type="radio" class="radio__input" name="cash" value="plastic" id="" />
                Карта
              </label>
            </div>
            <div class="radio">
              <label class="radio__label">
                <input type="radio" class="radio__input" name="cash" value="cash" id="" />
                Наличные
              </label>
            </div>
          </div>
          <div class="plastic_card">
            <input type="text" class="plastic_unic_id" v-mask="'####  ####  ####  ####'" v-model="plastic_unic_id" placeholder="4444 4444 4444 4444" />
            <div class="month_num">
              <input type="text" v-mask="'## / ##'" class="month" v-model="plastik_month" placeholder="28/22" />
              <input type="text" class="pass" v-model="plastik_pass" v-mask="'AAA'" placeholder="CVV" />
              <img src="../assets/images/svg/master card.svg" alt="" class="visa_card" />
            </div>
          </div>
          <nuxt-link to="/payment-status">
            <button class="pay">Оплатить</button>
          </nuxt-link>
        </div>
      </div>
      <div class="right">
        <div class="order_list">
          <h1 class="order_title">Состав заказа </h1>
          <div class="order_item">
            <div class="order_img">
              <img src="../assets/images/product_imeges/3.png" alt="" />
            </div>
            <div class="order_titles">
              <h3 class="order_name">Penny board</h3>
              <h3 class="order_info">Cactus wanderlust 29” surfkate</h3>
            </div>
            <div class="delete_item">
              <i class="icon-dinkrement"></i>
            </div>
          </div>
          <!--  -->
          <div class="order_item">
            <div class="order_img">
              <img src="../assets/images/product_imeges/3.png" alt="" />
            </div>
            <div class="order_titles">
              <h3 class="order_name">Penny board</h3>
              <h3 class="order_info">Cactus wanderlust 29” surfkate</h3>
            </div>
            <div class="delete_item_toxa_dsk_dsak_dsakdas_DSak">
              <i class="icon-dinkrement"></i>
            </div>
          </div>
          <!--  -->
          <div class="order_item">
            <div class="order_img">
              <img src="../assets/images/product_imeges/3.png" alt="" />
            </div>
            <div class="order_titles">
              <h3 class="order_name">Penny board</h3>
              <h3 class="order_info">Cactus wanderlust 29” surfkate</h3>
            </div>
            <div class="delete_item">
              <i class="icon-dinkrement"></i>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      plastic_unic_id: '',
      plastik_month: '',
      plastik_pass: '',
    }
  },
  }
</script>

<style lang="scss" scoped >
@import "../assets/styles/formation.scss";
</style>