<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/lpc_log_jujueneihao.png">
    <Firsthtml msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Firsthtml from './components/Firsthtml.vue'

export default {
  name: 'App',
  components: {
    Firsthtml
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
