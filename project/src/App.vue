<template>
  <div id="app">
    <router-view/>
    <FooterNav v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterNav from './components/FooterNav/FooterNav.vue'
import {mapState} from 'vuex'

export default {
  name: 'App',
  mounted(){
    this.$store.dispatch('getAddress')
    this.$store.dispatch('getUserInfo')
  },
  computed:{
    ...mapState(['address','userInfo']),
  },
  components: {
    FooterNav
  }
}
</script>
