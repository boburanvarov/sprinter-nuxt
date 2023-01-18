<template>
  <div class="container">
    <div class="sectionTitle">
      <h1 class="title">Профиль</h1>
      <p class="unicCode">#283112311</p>
    </div>
    <div class="profile_wrapper">
      <div class="info">
        <h6 class="infoTitle">Личные данные</h6>
        <table>
          <tr class="tableTr">
            <td>
              <h1 class="name">Имя</h1>
              <span class="data">Александр</span>
            </td>
            <td>
              <h1 class="fullName">Фамилия</h1>
              <span class="data">Новиков</span>
            </td>
            <td>
              <h1 class="phoneNumber">Номер телефона</h1>
              <span class="data">+998 (90) 555-96-55</span>
            </td>
          </tr>
          <tr>
            <td>
              <h1 class="email">E-mail</h1>
              <span class="data">Alex.nov221@mail.ru</span>
            </td>
            <td>
              <h1 class="unicID">id пользователя</h1>
              <span class="data">#283112311</span>
            </td>
            <td>
              <h1 class="password">Пароль</h1>
              <span class="data">jahd*************</span>
            </td>
            <td>
              <button class="btn_send">Изменить</button>
            </td>
          </tr>
        </table>

        <div class="delivery_addresses">
          <h1 class="deliveryTitle">Адреса доставки</h1>
          <div class="basket_heder">
            <h6 class="name">Имя адресанта</h6>
            <h6 class="number">Номер телефона</h6>
            <h6 class="index_num">Почтовый индекс</h6>
            <h6 class="adress">Адрес</h6>
          </div>
          <div class="basket_body">
            <h6 class="body_name">Alexand Novokov Evgenevich</h6>
            <h6 class="body_number">+998 (78) 777-08-90</h6>
            <h6 class="body_index_num">550441</h6>
            <h6 class="body_adress">Чиланзарский рн, корпус 2, квартира 39 </h6>
            <i class="icon-dinkrement"></i>
          </div>
          <!--  -->
                    <div class="basket_body">
            <h6 class="body_name">Alexand Novokov Evgenevich</h6>
            <h6 class="body_number">+998 (78) 777-08-90</h6>
            <h6 class="body_index_num">550441</h6>
            <h6 class="body_adress">Чиланзарский рн, корпус 2, квартира 39 </h6>
            <i class="icon-dinkrement"></i>
          </div>
        </div>
      </div>
      <div class="more">
        <h1 class="profile active">Профиль</h1>
        <nuxt-link to="/basket">
        <h1 class="basket">Корзина</h1></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/styles/profile.scss";
</style>