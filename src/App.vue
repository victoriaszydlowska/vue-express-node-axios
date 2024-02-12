<template>
  <HeaderApp/>
  <MainFunctionality />
  <SomeContent/>
  <FooterApp />

</template>

<script>
import MainFunctionality from './components/MainFunctionality.vue'
import SomeContent from './components/SomeContent.vue'
import HeaderApp from './components/HeaderApp.vue'
import FooterApp from './components/FooterApp.vue'

export default {
  name: 'App',
  components: {
    MainFunctionality, 
    SomeContent, 
    HeaderApp, 
    FooterApp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  text-size:3rem;
  margin-top: 20px;
  max-width:100%;
}
</style>
