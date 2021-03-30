<template>
    <section class="loginContainer">
      <div class="loginInner">
        <div class="login_header">
          <h2 class="login_logo">速达外卖</h2>
          <div class="login_header_title">
            <a href="javascript:;" :class="{on: loginWay}" @click="loginWay=true">短信登录</a>
            <a href="javascript:;" :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>
          </div>
        </div>
        <div class="login_content">
          <form @submit.prevent="login">
            <div :class="{on: loginWay}">
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
                <button :disabled="!rightPhone" class="get_verification" 
                        :class="{right_phone: rightPhone}" @click.prevent="getCode">
                        {{computeTime>0 ? `已发送(${computeTime}s)` : '获取验证码'}}
                </button>
              </section>
              <section class="login_verification">
                <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
              </section>
              <section class="login_hint">
                温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
                <a href="javascript:;">《用户服务协议》</a>
              </section>
            </div>
            <div :class="{on: !loginWay}">
              <section>
                <section class="login_message">
                  <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
                </section>
                <section class="login_verification">
                    <input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="pwd">
                    <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd">
                    <div class="switch_button" :class="showPwd?'open':'close'" @click="showPwd=!showPwd">
                        <div class="switch_circle" :class="{right: showPwd}"></div>
                        <span class="switch_text">{{showPwd?'on':'off'}}</span>
                    </div>
                </section>
                <section class="login_message">
                  <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                  <img class="get_verification" src="./images/captcha.svg" alt="captcha" @click="getCaptcha" ref="captcha">
                </section>
              </section>
            </div>
            <button type="submit" class="login_submit">登录</button>         
          </form>
          <a href="javascript:;" class="about_us">关于我们</a>
        </div>
        <a href="javascript:" class="go_back" @click="$router.back()">
          <i class="iconfont icon-jiantou2"></i>
        </a>
      </div>
    </section>
</template>

<script>
import './Login.css'
import {reqSendCode,reqSmsLogin, reqPwdLogin} from '../../api'
import { MessageBox } from 'mint-ui'
import 'mint-ui/lib/style.css'

export default {
    data(){
        return{
            loginWay:false,
            showPwd: false,
            computeTime: 0, // 计时的时间
            phone: '', // 手机号
            code:'', // 短信验证码
            name: '', // 用户名
            pwd: '', // 密码
            captcha: '', // 图形验证码
        }
    },

    computed: {
      rightPhone () {
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods:{
        // 异步获取短信验证码
        async getCode(){
            if(!this.computeTime) {
                // 启动倒计时
                this.computeTime = 30
                this.intervalId = setInterval(() => {
                    this.computeTime--
                    if(this.computeTime<=0) {
                    // 停止计时
                    clearInterval(this.intervalId)
                    }
                }, 1000)
            }

            // 发送ajax请求(向指定手机号发送验证码短信)
            const result = await reqSendCode(this.phone)
            if(result.code===1) {
                // 显示提示
                MessageBox.alert(result.msg)
                // 停止计时
                if(this.computeTime) {
                this.computeTime = 0
                clearInterval(this.intervalId)
                this.intervalId = undefined
                }
            }
        },
        // 获取一个新的图片验证码
        getCaptcha(){
            // this.$refs.captcha.src = 'http://localhost:8080/api/captcha?time='+Date.now()
        },
        // 异步登陆
        async login(){
            let result
            if(this.loginWay) {  // 短信登陆
                const {rightPhone, code ,phone} = this
                if(!rightPhone) {
                    // 手机号不正确
                    MessageBox.alert('手机号不正确')      
                    // this.showAlert('手机号不正确')
                    return
                } else if(!/^\d{6}$/.test(code)) {
                    // 验证必须是6位数字
                    MessageBox.alert('验证必须是6位数字')
                    // this.showAlert('验证必须是6位数字')
                    return
                }
                // 发送ajax请求短信登陆
                result = await reqSmsLogin(phone, code)

            } else {// 密码登陆
                const {name, pwd, captcha} = this
                if(!name) {
                    // 用户名必须指定
                    MessageBox.alert('用户名必须指定')
                    // this.showAlert('用户名必须指定')
                    return
                } else if(!pwd) {
                    // 密码必须指定
                    MessageBox.alert('密码必须指定')
                    // this.showAlert('密码必须指定')
                    return
                } else if(!captcha) {
                    // 验证码必须指定
                    MessageBox.alert('验证码必须指定')
                    // this.showAlert('验证码必须指定')
                    return
                }
                // 发送ajax请求密码登陆
                result = await reqPwdLogin({name, pwd, captcha})
            }

            // 停止计时
            if(this.computeTime) {
            this.computeTime = 0
            clearInterval(this.intervalId)
            this.intervalId = undefined
            }

            // 根据结果数据处理
            if(result.code===0) {
            const user = result.data
            // 将user保存到vuex的state
            this.$store.dispatch('recordUser', user)
            // 去个人中心界面
            this.$router.replace('/profile')
            } else {
            // 显示新的图片验证码
            this.getCaptcha()
            // 显示警告提示
            const msg = result.msg
            MessageBox.alert(msg)
            }
        },
        
    }
}
</script>

