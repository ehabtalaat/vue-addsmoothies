<template>
  <div id="app">
   <navbar />
   <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/navbar'
export default {
  name: 'App',
  components: {
    navbar
  },
  data(){
    return{
     }
  }
};
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  line-height: 1.4;
}
</style>
