<template>
  <section class="profile">
    <HeaderTop title="我的"/>
    <div class="profile_number">
      <router-link :to="userInfo._id ? '': '/login'" class="profile_link clearfix">
        <div class="profile_image">
          <i class="iconfont icon-person"></i>
        </div>
        <div class="user_info">
          <p class="user_info_top" v-if="!userInfo.phone">{{userInfo.name || '登录/注册'}}</p>
          <p>
            <span class="user_icon">
              <i class="iconfont icon-shouji icon-mobile"></i>
            </span>
            <span class="icon-mobile-number">{{userInfo.phone || '暂无绑定手机号'}}</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-jiantou1"></i>
        </span>
      </router-link>
    </div>
    <div class="profile_data">
      <ul class="data_list clearfix">
        <li class="data_link">
          <span class="data_top"><span class="balance">0.00</span>元</span>
          <span class="data_bottom">我的余额</span>
        </li>
        <li class="data_link">
          <span class="data_top"><span class="discount">0</span>个</span>
          <span class="data_bottom">我的优惠</span>
        </li>
        <li class="data_link">
          <span class="data_top"><span class="integral">0</span>分</span>
          <span class="data_bottom">我的积分</span>
        </li>
      </ul>
    </div>
    <div class="profile_item">
      <!-- 我的订单 -->
      <div class="my_item">
        <span>
          <i class="iconfont icon-order-s"></i>
        </span>
        <div class="my_item_div">
          <span>我的订单</span>
          <span class="my_item_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </div>
      <!-- 积分商城 -->
      <div class="my_item">
        <span>
          <i class="iconfont icon-jifen"></i>
        </span>
        <div class="my_item_div">
          <span>积分商城</span>
          <span class="my_item_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </div>
      <!-- 外卖会员卡 -->
      <div class="my_item">
        <span>
          <i class="iconfont icon-vip"></i>
        </span>
        <div class="my_item_div">
          <span>外卖会员卡</span>
          <span class="my_item_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </div>
    </div>
    <div class="profile_item">
      <!-- 服务中心 -->
      <a href="javascript:" class="my_item">
        <span>
          <i class="iconfont icon-fuwu"></i>
        </span>
        <div class="my_item_div">
          <span>服务中心</span>
          <span class="my_item_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
    </div>
    <div class="profile_item">
      <mt-button type="danger" style="width: 100%" v-if="userInfo._id" @click="logout">退出登陆</mt-button>
    </div>
  </section>
</template>

<script>
import './Profile.css'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import { MessageBox, Toast } from 'mint-ui'
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['userInfo'])
  },

  methods: {
      logout () {
        MessageBox.confirm('确认退出吗?').then(
          action => {
            // 请求退出
            this.$store.dispatch('logout')
            Toast('登出完成')
          },
          action => {
            console.log('点击了取消')
          }
        );
      }
    },

  components: {
    HeaderTop
  }
}
</script>
