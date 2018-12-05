<template>
  <div class="right">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'right',
  data () {
    return {
      msg: 'RightPage'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .right {
    background: cyan;

    float: left;
    width: 50%;
    height: 300px;
  }
</style>
