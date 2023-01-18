<template>
  <div class="container_login" :class="{ mode: sign_up }">
    <div class="forms-container">
      <div class="signin-signup">
        <form action="#" class="sign-in-form">
          <h2 class="title">С возвращением</h2>
          <div class="social-media">
            <a href="#" class="social-icon">
              <img src="../assets/images/svg/Google - Original.svg" alt="">
            </a>
            <a href="#" class="social-icon">
              <img src="../assets/images/svg/LinkedIn - Original.svg" alt="">
            </a>
            <a href="#" class="social-icon">
              <img src="../assets/images/svg/Vector.svg" alt="">
            </a>
          </div>

          <div class="social-media-line"></div>
          <h6 class="social-media-line-title">Или</h6>
          <div class="input-field">
            <input type="text" placeholder="Номер телефона или электронная почта" />
          </div>
          <div class="input-field">
            <input type="password" placeholder="Пароль" />
            <i class="icon-glass"></i>
          </div>
          <a href="#" class="social-text">Забыли пароль?</a>
          <nuxt-link to="/profile">
            <button type="submit" class="btn solid">Войти</button>
          </nuxt-link>

        </form>
        <form class="sign-up-form">
          <h2 class="title">Впервые у нас?</h2>
          <p class="social-media-line-title">Для того чтобы начать покупки в нашем магазине, пожалуйста пройдите
            регистрацию</p>
          <div class="set_up_1" v-if="!next_level">
            <div class="input-field">
              <input name="email" type="email" v-model="user_email" placeholder="Email" />
            </div>
            <div class="input-field" v-if="send_password">
              <input type="number" v-model="user_password" placeholder="Password" />
            </div>
            <p v-if="send_password" class="social-media-line-title">Ваш пароль отправлен на вашу почту {{ user_email }}
              See console for password
            </p>
            <p class="social-media-line-title" v-if="error_password">Ваш пароль не правильно</p>
            <div class="btn_wrapper">
              <button type="submit" class="btn solid" v-if="send_password" @click.prevent="check()">Проверьте</button>
              <button type="submit" class="btn" v-if="!send_password" @click.prevent="sendPassword()">Отправить
                код</button>
              <button type="submit" class="btn" v-if="send_password" @click.prevent="sendPassword()">Отправить
                снова</button>
            </div>
          </div>
          <div class="set_up_2" v-if="next_level">
            <div class="input-field">
              <input name="text" type="email" v-model="user_name" placeholder="Имя*" />
            </div>            
            <div class="input-field">
              <input type="text" v-model="user_last_name" placeholder="Фамилия" />
            </div>
            <div class="input-field">
              <input type="text" v-model="user_new_password" placeholder="Пароль" />
            </div>
            <div class="input-field">
              <input type="text" v-model="user_res_password" placeholder="Повторите пароль" />
            </div>
            <div class="input-field">
              <input type="text" v-mask="'+### (##) ### ## ##'" v-model="user_phone" placeholder="Номер телефона*" />
            </div>
            <div class="btn_wrapper" v-if="user_new_password === user_res_password && !user_name == 0 && !user_last_name == 0 && !user_phone == 0">
              <nuxt-link to="/profile" >
                <button type="submit" class="btn solid">Зарегистрироваться</button>
                </nuxt-link>
            </div>
          </div>

        </form>
      </div>
    </div>

    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content">
          <h3>Впервые у нас?</h3>
          <p>
            Вы можете зарегестрировать новый аккаунт,
            для того чтобы продолжить операции на сайте
          </p>
          <button class="btn transparent" id="sign-up-btn" @click="sign_up = true">
            Регистрация
          </button>
        </div>
      </div>
      <div class="panel right-panel">
        <div class="content">
          <h3>С возвращением</h3>
          <p>
            Для того чтобы совершать покупки на нашем сайте, пожалуйста пойдите в аккаунт
          </p>
          <button class="btn transparent" id="sign-in-btn" @click="sign_up = !sign_up">
            Войти
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {

  layout: 'auth',
  data() {
    return {
      sign_in: false,
      sign_up: false,
      send_password: false,
      user_email: '',
      user_name: '',
      user_last_name: '',
      user_new_password: '',
      user_res_password: '',
      user_phone: '',
      user_password: null,
      next_level: false,
      password: null,
      error_password: false,
    }
  },

  methods: {
    sendPassword() {
      this.password = Math.floor(Math.random() * 100000000);
      this.send_password = true;
      console.log(this.password);
      console.log(this.$mail);
      console.log(this.user_email);
      // this.$mail.send({
      //   from: 'jhon doe <',
      //   subject: 'Код подтверждения',
      //   text: 'Ваш код подтверждения: ' + this.password,
      //   to: this.user_email,
      // })
    },
    check() {
      if (this.password == this.user_password) {
        this.next_level = true;
        this.error_password = false;
      } else {
        this.next_level = false;
        this.error_password = true;
      }
    }
  },
  mounted() {
    this.$mail = axios.create({
      baseURL: 'https://api.mailgun.net/v3/',
      headers: {
        Authorization: 'Basic ' + btoa('api:key-')
      }
    })
  }

}

</script>

<style lang="scss" scoped>
@import '../assets/styles/auth.scss';
</style>