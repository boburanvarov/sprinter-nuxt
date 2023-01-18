<template>
  <footer class="footer">
    <div class="container">
      <div class="wrapper">
        <div class="site_logo">
          <img src="../../assets/images/svg/Site_brend.svg" alt="" />
        </div>
        <div class="menu">
          <h1 class="foo_title">Магазин</h1>
          <ul class="foo_menu_list">
            <li class="foo_item">Главная</li>
            <li class="foo_item">Контакты</li>
            <li class="foo_item">Каталог</li>
            <li class="foo_item">Помощь</li>
          </ul>
        </div>
        <div class="product">
          <h1 class="foo_title">Продукция</h1>
          <ul class="foo_product_list">
            <li class="foo_item">Спортивная одежда</li>
            <li class="foo_item">Кардио тренажеры</li>
            <li class="foo_item">Коврики для йоги</li>
            <li class="foo_item">Аксессуары</li>
            <li class="foo_item">Crossfit</li>
          </ul>
        </div>
        <div class="contact">
          <h1 class="foo_title">Контакты</h1>
          <ul class="foo_contact_list">
            <li class="foo_item"><a href="tel:+998787770890">+998 (78) 777-08-90</a></li>
            <li class="foo_item"><a href="tel:+998787770890">+998 (78) 777-08-90</a></li>
            <li class="foo_item"><a href="mailto:insertemailhere@xyz.com" target="_blank">Sprinter.uz.@gmail.com</a></li>
            <li class="foo_item"><a href="https://goo.gl/maps/8dtRh7DYAGXPtiAw5">Ул.КараСарай 7, ориентир медресе ХастиИмом</a></li>
          </ul>
        </div>
        <div class="social">
          <h1 class="foo_title">Наши Соц. сети</h1>
          <ul class="foo_social_list">
            <li class="foo_item">
              <a href="#" target="_blank">
                <img src="../../assets/images/svg/facebook.svg" />
                <span>Facebook</span>
              </a>
            </li>

            <li class="foo_item">
              <a href="#" target="_blank">
                <img src="../../assets/images/svg/telegram.svg" />
                <span>Telegram</span>
              </a>
            </li>

            <li class="foo_item">
              <nuxt-link to="/" target="_blank">
                <img src="../../assets/images/svg/instagram.svg" />
                <span>Instagram</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./Footer.scss";
</style>