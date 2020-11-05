<template>
  <div id="app">
    <div id="nav">
      <router-link to="/1">1</router-link> 
      <router-link to="/2">2</router-link>
      <router-link to="/3">3</router-link> 
      <router-link to="/4">4</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '../src/css/style.css'
export default {
  
}
</script>
