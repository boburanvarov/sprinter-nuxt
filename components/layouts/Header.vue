<template>
  <div class="container">
    <header>
      <div class="header_top">
        <nuxt-link to="/">
          <div class="logo">
            <img src="../../assets/images/svg/Site_brend.svg" alt="sprinter" />
          </div>
        </nuxt-link>
        <div class="search" @click="open_search_modal = true">
          <input type="text" /><i class="icon-search"></i>
        </div>
        <div class="search_modal" v-if="open_search_modal">

          <div class="search_res">
            <i class="icon-dinkrement" @click="open_search_modal = false"></i>
            <div class="modal_search" @click="open_search_modal = true">
              <input v-model.trim="search_input_data" placeholder="Поиск..." type="text" /><i class="icon-search"></i>
            </div>
            <div class="item_res_wrapper" v-if="search_input_data.length > 0">
              <nuxt-link :to="`/catalog/${item.id}`" v-for="item in query_array" :key="item.id">
                <div class="item" @click="click_search_input()">
                  <div class="item_img">
                    <img :src="item.images[0]" alt="" />
                  </div>
                  <div class="item_info">
                    <div class="info_top">
                      <h3 class="name">{{ item.name }}</h3>
                      <h4>{{ item.prod_status }}</h4>
                    </div>
                    <div class="info_bottom">
                      <h3>{{ item.price }} сум</h3>
                      <h4>{{ item.oldPrice }} сум</h4>
                    </div>
                  </div>
                </div>
              </nuxt-link>

            </div>

          </div>
        </div>
        <div class="back_call" @click="openModal = true">
          <span>Обратный звонок</span>
        </div>
        <div class="phone_number"><span>+998 (78) 777-08-90</span></div>

        <div class="back_call_modal" v-show="openModal">
          <form class="modal_card">
            <div class="closeCard">
              <i class="icon-dinkrement" @click="openModal = false"></i>
            </div>
            <h4 class="back_call_modal_title">Закажите обратный звонок</h4>
            <input type="text" v-model.trim="phoneModal" class="phoneModal" v-mask="'+###  (##) ### ## ##'"
              placeholder="Номер телефона" />
            <input type="text" v-model.trim="contactModal" class="contactModal" placeholder="Контактные данные" />
            <p class="back_call_modal_text" v-show="application_sent">Ваша заявка принята, оператор позвонит вам в
              течении 15 мин</p>
            <p class="back_call_modal_text" v-show="error_contact">Ваша заявка не принята</p>
            <!-- <div @click.prevent>  -->
            <button class="btnModal" @click.prevent="validationContact()">
              Запросить
            </button>
            <!-- </div> -->
          </form>
        </div>
      </div>
      <!--  -->
      <div class="header_bottom">
        <div class="menu">
          <ul class="manu_list">
            <nuxt-link :to="menu.path" v-for="menu in menu_array" :key="menu.path">
              <li class="menu_item">{{ menu.text }}</li>
            </nuxt-link>
          </ul>
        </div>
        <div class="info">
          <div class="language">
            <ul>
              <li class="lang _active">RU</li>
              <li class="lang">UZB</li>
              <li class="lang">ENG</li>
            </ul>
          </div>
          <nuxt-link to="/basket">
            <div class="save"><i class="icon-korzian"></i><span>2</span></div>
          </nuxt-link>
          <nuxt-link to="/auth">
            <div class="my_prof"><i class="icon-profile"></i></div>
          </nuxt-link>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import menu_array from "~/frags/menu.js";
import product_array from "~/frags/productMin.js"
export default {
  data() {
    return {
      menu_array: menu_array,
      product_array: product_array,
      openModal: false,
      contactModal: "",
      phoneModal: "",
      application_sent: false,
      error_contact: false,
      open_search_modal: false,
      search_input_data: "",
    };
  },
  methods: {
    validationContact() {
      if (this.contactModal.length > 3 && this.phoneModal.length > 3) {
        this.error_contact = false;
        this.application_sent = true;
        this.contactModal = "";
        this.phoneModal = "";
      } else {
        this.application_sent = false;
        this.error_contact = true;
      }
    },

    click_search_input() {
      this.search_input_data = "";
      this.open_search_modal= false;
    },
  },

  computed: {
    query_array() {
      return this.product_array.filter(item => item.name.toLowerCase().includes(this.search_input_data.toLowerCase()));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Header.scss";
</style>