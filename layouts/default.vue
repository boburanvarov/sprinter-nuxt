<template>
  <div class="wrapper">
    <Header/>
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>