<template>
    <div class="shop_container">
        <ul class="shop_list" v-if="shops.length">
            <li class="shop_li" v-for="(shop, index) in shops"
                :key="index" @click="$router.push('/shop')">
                <a class="clearfix">
                    <div class="shop_left">
                        <img class="shop_img" :src="shop.image_path">
                    </div>
                    <div class="shop_right">
                        <div class="shop_detail_header clearfix">
                            <h4 class="shop_title ellipsis">{{shop.name}}</h4>
                            <ul class="shop_detail_ul">
                                <li class="supports" v-for="(support, index) in shop.supports" :key="index">
                                    {{support.icon_name}}
                                </li>
                            </ul>
                        </div>
                        <div class="shop_rating_order clearfix">
                            <div class="shop_rating_order_left">
                                <Star :score="shop.rating" :size="24"/>
                                <div class="rating_div">
                                    {{shop.rating}}
                                </div>
                                <div class="order_div">
                                    月售{{shop.recent_order_num}}单
                                </div>
                            </div>
                            <div class="shop_rating_order_right">
                                <span class="delivery_style delivery_right">速达专送</span>
                            </div>
                        </div>
                        <div class="shop_distance clearfix">
                            <p class="shop_delivery_msg">
                                <span>¥{{shop.float_minimum_order_amount}}起送</span>
                                <span class="segmentation">/</span>
                                <span>配送费约¥{{shop.float_delivery_fee}}</span>
                            </p>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
        <ul v-else>
            <li><img src="./images/shop_back.svg" alt="back"></li>
            <li><img src="./images/shop_back.svg" alt="back"></li>
            <li><img src="./images/shop_back.svg" alt="back"></li>
            <li><img src="./images/shop_back.svg" alt="back"></li>
            <li><img src="./images/shop_back.svg" alt="back"></li>
            <li><img src="./images/shop_back.svg" alt="back"></li>
        </ul>
    </div>
</template>

<script>
import './ShopList.css'
import {mapState} from 'vuex'
import Star from '../Star/Star.vue'

export default {
    computed: {
      ...mapState(['shops'])
    },
    components: {
      Star
    }
}
</script>
