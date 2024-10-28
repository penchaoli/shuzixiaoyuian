import Ercihanshu from '../src/components/Ercihanshu.vue'
<template>
  <div style="font-size:250%;color:red;">
    <p>我同事累了，上班期间，睡着了，要不要举报他？？？</p>
    <p>不举报！？</p>
    <p>举报到纪委！！！</p>
    <a href="../components/yang.html">Go to Next Page</a>
    <router-link to="/ercihanshu">Go to About Page</router-link>
    <button @click="goToAbout">Go to About Page</button>
  </div>
</template>

export default {
       methods: {
         goToAbout() {
           this.$router.push('../src/components/Ercihanshu.vue');
         }
       }
     };

const routes = [
  {
  path: '/ercihanshu',
  name: 'Ercihanshu',
  component: Ercihanshu
  }
  ]