<template>
  <section class="search">
    <HeaderTop title="搜索"/>
    <form class="search_form clearfix" @submit.prevent="search">
      <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input" v-model="keyword">
      <input type="submit" name="submit" class="search_submit">
    </form>
    <div class="list" v-if="!noSearchShops">
      <ul class="list_container">
        <!--:to="'/shop?id='+item.id"-->
        <!-- <router-link :to="{path:'/shop', query:{id:item.id}}" tag="li"
                     v-for="item in searchShops" :key="item.id" class="list_li"> -->
        <router-link :to="{path:'/shop'}" tag="li"
                     v-for="item in searchShops" :key="item.id" class="list_li">
          <div class="item_left">
            <img :src="imgBaseUrl + item.image_path" class="restaurant_img">
          </div>
          <div class="item_right">
            <div class="item_right_text">
              <p>{{item.name}}</p>
              <p>月售 {{item.month_sales||item.recent_order_num}} 单</p>
              <p>{{item.delivery_fee||item.float_minimum_order_amount}} 元起送 / 距离{{item.distance}}</p>
            </div>
          </div>
        </router-link>
      </ul>
    </div>

    <div class="search_none" v-else>很抱歉！无搜索结果</div>
  </section>
</template>

<script>
import './Search.css'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'

import {mapState} from 'vuex'

export default {
  data () {
    return {
      keyword: '',
      imgBaseUrl: 'https://gimg2.baidu.com/image_search/src=',
      noSearchShops: false
    }
  },

  computed: {
      ...mapState(['searchShops'])
  },

  methods: {
    search () {
      // 得到搜索关键字
      const keyword = this.keyword.trim()
      // 进行搜索
      if(keyword) {
        this.$store.dispatch('searchShops', keyword)
      }
    }
  },

  watch: {
    searchShops (value) {
      if(!value.length) { // 没有数据
        this.noSearchShops = true
      } else {// 有数据
        this.noSearchShops = false
      }
    }
  },
  
  components: {
    HeaderTop
  }
}  
</script>


