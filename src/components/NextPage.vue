<template>
  <div>
    {{msg}}<br/>

    <div style="color: #b92c28" >点击下方，注意看网址</div>
    <div>
      <router-link :to="{name: 'child1',params: { sex: '男',age: '24' }}">老汤</router-link>
      <router-link to="/child2/男/22" >小方</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'next',
  data () {
    return {
      msg: '你的名字叫李晶敏'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
