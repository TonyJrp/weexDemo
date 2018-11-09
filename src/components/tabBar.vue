<template>
  <div :class="['wrapper']">
    <!--<div v-for="i in items">-->
    <!--<div class="bar-item" @click="tabTo(i.key)">-->
    <!--<text class="bar-ic iconfont">{{i.icon}}</text>-->
    <!--<text class="bar-txt">{{i.name}}</text>-->
    <!--</div>-->
    <!--</div>-->
    <div class="bar-item"
         @click="tabTo('index')">
      <image class="tabbar-icon" resize="stretch" src="http://192.168.13.208:8085/images/tabBar/tabBar-index-on.png" v-if="this.isActive('index') == 'bar-active'" />
      <image class="tabbar-icon" resize="stretch" src="http://192.168.13.208:8085/images/tabBar/tabBar-index.png" v-else/>
      <!-- <text class="bar-ic iconfont"
            :class="[this.isActive('home')]">&#xe660;</text> -->
      <text class="bar-txt"
            :class="[this.isActive('index')]">首页</text>
    </div>
    <div class="bar-item"
         @click="tabTo('classfiy')">
        <image class="tabbar-icon" resize="stretch" src="http://192.168.13.208:8085/images/tabBar/tabBar-diandan-on.png" v-if="this.isActive('classfiy') == 'bar-active'" />
        <image class="tabbar-icon" resize="stretch" src="http://192.168.13.208:8085/images/tabBar/tabBar-diandan.png" v-else/>
      <!-- <text class="bar-ic iconfont"
            :class="[this.isActive('class')]">&#xe605;</text> -->
      <text class="bar-txt"
            :class="[this.isActive('classfiy')]">点单</text>
    </div>
    <div class="bar-item"
         @click="tabTo('cart')">
      <image class="tabbar-icon" resize="stretch" src="http://192.168.13.208:8085/images/tabBar/tabBar-cart-on.png" v-if="this.isActive('cart') == 'bar-active'" />
      <image class="tabbar-icon" resize="stretch" src="http://192.168.13.208:8085/images/tabBar/tabBar-cart.png" v-else/>
      <!-- <text class="bar-ic iconfont"
            :class="[this.isActive('cart')]">&#xe61a;</text> -->
      <text class="bar-txt"
            :class="[this.isActive('cart')]">购物车</text>
      <text class="i-notice">99</text>
    </div>
    <div class="bar-item"
         @click="tabTo('my')">
      <image class="tabbar-icon" resize="stretch" src="http://192.168.13.208:8085/images/tabBar/tabBar-my-on.png" v-if="this.isActive('my') == 'bar-active'" />
      <image class="tabbar-icon" resize="stretch" src="http://192.168.13.208:8085/images/tabBar/tabBar-my.png" v-else/>
      <!-- <text class="bar-ic iconfont"
            :class="[this.isActive('my')]">&#xe639;</text> -->
      <text class="bar-txt"
            :class="[this.isActive('my')]">个人中心</text>
    </div>
  </div>
</template>
<style scoped>
.iconfont {
  font-family: iconfont;
}
.wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  flex-direction: row;
  justify-content: space-around;
  border-top-width: 1px;
  border-top-color: #d9d9d9;
  background-color: #fafafa;
}

.bar-item {
  flex: 1;
}
.tabbar-icon{
  width: 51.5px;
  height: 51.5px;
  margin-left: 68px;
  margin-right: 68px;
}
.bar-txt,
.bar-ic {
  color: #000000;
  text-align: center;
}
.bar-active {
  color: #89bc86;
}
.bar-ic {
  padding-top: 14px;
  font-size: 38px;
}
.bar-txt {
  font-size: 22px;
  padding-top: 2px;
}
.i-notice {
  position: absolute;
  top: 4px;
  right: 40px;
  height: 30px;
  min-width: 30px;
  padding-left: 6px;
  padding-right: 6px;
  border-radius: 30px;
  font-size: 26px;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
  background-color: #f00f00;
}
.notice-dot {
  position: absolute;
  top: 15px;
  right: 40px;
  height: 15px;
  width: 15px;
  border-radius: 15px;
  background-color: #f00f00;
}
</style>
<script>
export default {
  computed: {},
  data() {
    return {
      pIndexKey: 'index'
    }
  },
  mounted() {},
  methods: {
    isActive: function(_c) {
      return this.pIndexKey === _c ? 'bar-active' : ''
    },
    tabTo(_key) {
      if (this.pIndexKey === _key) return
      this.pIndexKey = _key
      this.$emit('tabTo', {
        status: 'tabTo',
        data: {
          key: _key
        }
      })
    }
  }
}
</script>
