<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br/>{{$route.name}}
    <div>
      <router-link to="/">首页</router-link> |
      <router-link to="/next">next</router-link> |
      <router-link to="/goHome">goHome</router-link> |
      <router-link to="/goChild/女/2222">goChild</router-link>
    </div>
    <router-view/>
    <router-view name="left"/>
    <router-view name="right"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
