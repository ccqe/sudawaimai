<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="right" :to="userInfo._id ? '/profile': '/login'">
        <span class="header_login_text" v-if="!userInfo._id">
          登录|注册
        </span>
        <span class="header_login_text" v-else>
           <i class="iconfont icon-geren"></i>
        </span>
      </router-link>
    </HeaderTop>
    <div class="miste-content">
      <!--首页导航-->
      <nav class="msite_nav">
        <div class="swiper_container">
          <swiper
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide>
              <a href="javascript:" class="food_nav">
                <div class="food_container">
                  <img src="./images/nav/1.jpg">
                </div>
                <span>特色小吃</span>
              </a>
              <a href="javascript:" class="food_nav">
                <div class="food_container">
                  <img src="./images/nav/2.jpg">
                </div>
                <span>简餐便当</span>
              </a>
              <a href="javascript:" class="food_nav">
                <div class="food_container">
                  <img src="./images/nav/3.jpg">
                </div>
                <span>医药专送</span>
              </a>
              <a href="javascript:" class="food_nav">
                <div class="food_container">
                  <img src="./images/nav/4.jpg">
                </div>
                <span>商超便利</span>
              </a>
              <a href="javascript:" class="food_nav">
                <div class="food_container">
                  <img src="./images/nav/5.jpg">
                </div>
                <span>龙虾烧烤</span>
              </a>
              <a href="javascript:" class="food_nav">
                <div class="food_container">
                  <img src="./images/nav/6.jpg">
                </div>
                <span>营养早餐</span>
              </a>
              <a href="javascript:" class="food_nav">
                <div class="food_container">
                  <img src="./images/nav/7.jpg">
                </div>
                <span>咖啡甜点</span>
              </a>
              <a href="javascript:" class="food_nav">
                <div class="food_container">
                  <img src="./images/nav/8.jpg">
                </div>
                <span>土豪推荐</span>
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="javascript:" class="food_nav">
                  <div class="food_container">
                    <img src="./images/nav/9.jpg">
                  </div>
                  <span>地方菜系</span>
              </a>
              <a href="javascript:" class="food_nav">
                  <div class="food_container">
                    <img src="./images/nav/10.jpg">
                  </div>
                  <span>地方菜系</span>
              </a>
              <a href="javascript:" class="food_nav">
                  <div class="food_container">
                    <img src="./images/nav/11.jpg">
                  </div>
                  <span>米粉捞烫</span>
                </a>
              <a href="javascript:" class="food_nav">
                  <div class="food_container">
                    <img src="./images/nav/12.jpg">
                  </div>
                  <span>新店特惠</span>
                </a>
              <a href="javascript:" class="food_nav">
                  <div class="food_container">
                    <img src="./images/nav/13.jpg">
                  </div>
                  <span>能量西餐</span>
                </a>
              <a href="javascript:" class="food_nav">
                  <div class="food_container">
                    <img src="./images/nav/14.jpg">
                  </div>
                  <span>轻食沙拉</span>
                </a>
            </swiper-slide>
            <div class="swiper-pagination"></div>
          </swiper>
        </div>
      </nav>
      <!--首页附近商家-->
      <div class="msite_shop_list">
        <div class="shop_header">
          <i class="iconfont icon-xuanxiang"></i>
          <span class="shop_header_title">附近商家</span>
        </div>
        <ShopList/>
      </div>
    </div>
  </section>
</template>

<script>
import './MSite.css'
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.min.css'
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import ShopList from '../../components/ShopList/ShopList.vue'

import {mapState} from 'vuex'

export default {
  mounted(){
    this.$store.dispatch('getAddress')
    this.$store.dispatch('getShops')
  },
  computed:{
    ...mapState(['address','userInfo']),
  },

  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change');
    },
  },
  
  components:{
    Swiper,
    SwiperSlide,
    HeaderTop,
    ShopList
  }
}
</script>
