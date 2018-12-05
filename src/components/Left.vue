<template>
  <div class="left">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'left',
  data () {
    return {
      msg: 'LeftPage'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left {
  background: #b92c28;
  float: left;
  width: 50%;
  height: 300px;
}
</style>
