<template>
  <div>
    {{msg}}
    <div>
      性别：{{ $route.params.sex }}
      年龄：{{ $route.params.age }}
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'child2',
  data () {
    return {
      msg: '我的小弟小方'
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
