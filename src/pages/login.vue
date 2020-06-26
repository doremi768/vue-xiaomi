<template>
    <div class="login">
        <div class="container">
            <a href="/#/index"><img src="/imgs/login-logo.png" alt=""></a>
        </div>
        <div class="wrapper">
            <div class="container">
                <div class="login-form">
                    <h3>
                        <span class="checked">账号登录</span>
                        <span class="sep-line">|</span>
                        <span>扫码登录</span>
                    </h3>
                    <div class="input">
                        <input type="text" placeholder="请输入账号" v-model="username">
                    </div>
                     <div class="input">
                         <input type="password" placeholder="请输入密码" v-model="password">
                     </div>
                     <div class="btn-box">
                        <a href="javascript:;" class="btn" @click="login">登录</a>
                    </div>
                    <div class="tips">
                        <div class="sms" @click="register">手机短信登录/注册</div>
                        <div class="reg">立即注册<span>|</span>忘记密码？</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
        <div class="footer-link">
            <a href="javascript:;" target="_blank"> 简体</a><span>|</span>
            <a href="javascript:;" target="_blank">繁体</a><span>|</span>
            <a href="javascript:;" target="_blank">常见问题</a><span>|</span>
            <a href="javascript:;" target="_blank">隐私政策</a>
        </div>
      <p class="copyright">小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号</p>
    </div>
    </div>
</template>

<script>
export default {
    name:'login',
    data(){
        return{
            username: '',
            password: '',
            userId: '',
            res:{}
        }
    },
    methods: {
        login(){
            let {username,password} = this;
            this.axios.post('/user/login',{
                username,
                password
            }).then(res => {
                this.$cookie.set('userId',res.id,{expires:'1M'});
                //to-do保存用户名
                this.$router.push('/index');
            }).catch(reason => {
                alert("请输入正确的账号或者密码")
            })
        },
        register(){
            this.axios.post('/user/login',{
                username: 'admin1',
                password: 'admin1',
                email: 'admin1@qq.com'
            }).then(res => {
                alert('注册成功');
            })
        }
    }
}
</script>

<style lang="scss">
.login{
    &>.container{
        height: 113px;
        img{
            width: auto;
            height: 100%;
        }
    }
    .wrapper{
        background: url('/imgs/login-bg.jpg') no-repeat center;
        .container{
            position: relative;
            height: 576px;
            .login-form{
                position: absolute;
                bottom: 29px;
                right: 0;
                box-sizing: border-box;
                padding:31px;
                width: 410px;
                height: 510px;
                background-color: #ffffff;
                h3{
                    margin: 40px auto 49px;
                    line-height: 23px;
                    font-size: 24px;
                    text-align: center;
                    .checked{
                        color: #ff6600;
                    }
                    .sep-line{
                        margin: 0 32px;
                    }
                }
                .input{
                    display:inline-block;
                    width:348px;
                    height:50px;
                    border:1px solid #E5E5E5;
                    margin-bottom:20px;
                    input{
                        width: 100%;
                        height: 100%;
                        border: none;
                        padding: 18px;
                        box-sizing: border-box;
                        font-size: 16px;
                    }
                }
                .btn{
                    width:100%;
                    line-height:50px;
                    margin-top:10px;
                    font-size:16px;
                    }
                .tips{
                 margin-top:14px;
                 display:flex;
                 justify-content:space-between;
                 font-size:14px;
                  cursor:pointer;
                }
                .sms{
                    color:#FF6600;
                }
                .reg{
                    color:#999999;
                    span{
                    margin:0 7px;
                    }
                }
            }
        }
    }
     .footer{
    height:100px;
    padding-top:60px;
    color:#999999;
    font-size:16px;
    text-align:center;
    background-color: #ffffff;
    border: none;
    .footer-link{
      a{
        color:#999999;
        display:inline-block;
      }
      span{
        margin:0 10px;
      }
    }
    .copyright{
      margin-top:13px;
    }
  }
}
</style>