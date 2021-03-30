<template>
  <section class="order">
    <HeaderTop title="订单列表"/>
    <div class="order_unlogin" v-if="!userInfo._id">
      <img src="./images/person.png">
      <h3>登录后查看外卖订单</h3>
      <button @click="gologin">立即登陆</button>
    </div>
  </section>
</template>

<script>
import './Order.css'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['userInfo'])
  },
  methods:{
    gologin(){
      this.$router.replace("/login")
    }
  },
  components: {
    HeaderTop
  }
}
</script>
