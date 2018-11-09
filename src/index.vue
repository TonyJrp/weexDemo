<template>
  <div class="wrapper">
    <router-view/>
    <tab-bar @tabTo="onTabTo"></tab-bar>
  </div>
</template>

<script>
import util from './assets/util.js'
import tabBar from './components/tabBar'
export default {
  data () {
    return {
    }
  },
  components: {
    tabBar
  },
  created() {
    util.initIconFont()
  },
  methods: {
    onTabTo(_result) {
      let _key = _result.data.key || ''
      this.$router && this.$router.push('/' + _key)
    }
  }
}
</script>

<style scoped>
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
