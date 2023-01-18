<template>
  <div class="container">
    <h1 class="sectionTitle">Оформление заказа</h1>
    <div class="formation_wrapper">
      <div class="left">
        <div class="my_data">
          <h1 class="data_title">Личные данные</h1>
          <div class="input_data">
            <label>
            <input type="text" class="my_data_input" placeholder="Имя">
          </label>
          <label>
            <input type="text" class="my_data_input" placeholder="Фамилия">
          </label>
          <label>
            <input type="text" class="my_data_input" placeholder="Почта">
          </label>
          <label>
            <input type="text" class="my_data_input" placeholder="Номер телефона">
          </label>
          </div>
        </div>
        <div class="my_data_address">
          <h1 class="data_title">Адрес</h1>
          <div class="input_data">
            <label>
              <input type="text" class="my_data_input" placeholder="Улица">
            </label>
            <label>
              <input type="text" class="my_data_input" placeholder="Квартира, корпус и т.д">
            </label>
            <label>
              <input type="text" class="my_data_input" placeholder="Город">
            </label>
            <label>
              <input type="text" class="my_data_input" placeholder="Почтовый индекс">
            </label>
          </div>
        </div>
        <nuxt-link to="/formation">
          <button class="pay">Сохранить</button>
        </nuxt-link>
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
  data() {
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