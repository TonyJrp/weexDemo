<template>
  <div class="content">
      <div class="header">
          <text class="header-title">我厨生活馆</text>
      </div>
      <div class="top-content">
        <slider class="slider" interval="3000" auto-play="true">
            <div class="img-item" v-for="img in imgList" v-bind:key="img.id">
                <image class="image" resize="cover" :src="img.src" />
            </div>
            <indicator class="indicator"></indicator>
        </slider>
        <slider class="slider" interval="3000" auto-play="true">
            <div class="img-item" v-for="img in imgListss" v-bind:key="img.sort_num">
                <image class="image" resize="cover" :src="img.image_path" />
            </div>
            <indicator class="indicator"></indicator>
        </slider>
      </div>
  </div>
</template>
<style scoped>
.iconfont {
  font-family: iconfont;
}
.content{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.header{
    height: 90px;
    width: 750px;
    background-color: #ffffff;
    border-bottom-width: 1px;
    border-style: solid;
    border-bottom-color: #f4f4f4;
}
.header-title{
    font-size: 30px;
    text-align: center;
    line-height: 90px;
    color: #333333;
}

.top-content{
    width: 750px;
    height: 350px;
}

.img-item{
    width: 750px;
    height: 350px;
}

.slider, .image {
    width: 750px;
    height: 350px;
  }
  .indicator{
    width: 750px;
    height: 350px;
    item-color: #ffffff;
    item-selected-color: #FF0000;
    item-size: 28px;
    position: absolute;
    top: 120px;
  }
</style>
<script>
const baseUrl = 'http://api.newretail.wochu.cn/'
const stream = weex.requireModule('stream')
export default {
  computed: {},
  data() {
    return {
      addrTitle: '上海',
      imgList: [
        {src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg', id: 0},
        {src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg', id: 1},
        {src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg', id: 2}
      ],
      imgListss: []
    }
  },
  created() {
    stream.fetch({
      method: 'get',
      type: 'json',
      url: baseUrl + 'index',
      body: {platform: 4,
        access_token: '06603e33b28c91e720b9a8a55ceaf0de',
        shop_id: 17
      },
      headers: { 'content-type': 'application/x-www-form-urlencoded' }
    }, (res) => {
      this.imgListss = res.data.data.bannerList
    })
  },
  mounted() {},
  methods: {

  }
}
</script>
