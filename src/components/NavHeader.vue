<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="username">{{username}}</a>
                    <a href="javascript:;" v-if="!username" @click="login">登录</a>
                    <a href="javascript:;" v-if="username">订单</a>
                    <a href="javascript:;" class="my-cart" @click="goToCart"><span class="icon-cart"></span>购物车</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item,index) in phoneList" :key="index">
                                    <a :href="'/#/product/'+ item.id" target="_blank">
                                        <div class="pro-img">
                                            <img :src="item.mainImage" :alt="item.subtitle">
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{item.price | currency}}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>红米手机</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children"></div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'nav-header',
    data() {
        return{
            res: {},
            username: false,
            phoneList: []
        };
    },
    mounted() {
       this. getProductList()
    },
    filters:{
        currency(val){
            if(!val) return '0.00';
            return '￥' + val.toFixed(2) + '元';
        }
    },
    methods:{
        getProductList(){
             this.axios.get('/products').then((res) => {
                this.phoneList = res.list;
                console.log(this.phoneList)
             });
        },
        goToCart(){
            this.$router.push('/cart')
        },
        login(){
            this.$router.push('/login')
        }
    }
}
</script>
<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
.header{
    .nav-topbar{
        height:39px;
        line-height:39px;
        background-color: #333333;
        color: #B0B0B0;
        .container{
            @include flex();
            a{
                display:inline-block;
                color:#B0B0B0;
                margin-right: 17px;
            }
            .my-cart{
                width: 100px;
                background-color: #FF6600;
                text-align: center;
                color: #ffffff;
                .icon-cart{
                    @include bgImg(32px,16px,'/imgs/icon-cart-checked.png');
                    margin-right: 4px;
                    vertical-align: text-bottom;
                }
            }
         }
      }
    .nav-header{
        .container{
            position: relative;
            height: 112px;
             @include flex();
            .header-logo{
                display: inline-block;
                width: 55px;
                height: 55px;
                a{
                    display: inline-block;
                    height: 55px;
                    background-color: #FF6600;
                    &:before{
                        content: '';
                        @include bgImg(55px,55px,'/imgs/mi-logo.png',55px);
                        transition: margin .2s;
                    }
                    &:after{
                        content: '';
                        @include bgImg(55px,55px,'/imgs/mi-home.png',55px);
                    }
                    &:hover:before{
                        margin-left: -55px;
                        transition: margin .2s;
                    }
                }
            }
            .header-menu{
                display: inline-block;
                width: 643px;
                padding-left: 209px;
                .item-menu{
                    display:inline-block;
                    margin-right: 20px;
                    color: #333333;
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 112px;
                    span{
                        cursor: pointer;
                    }
                    &:hover{
                        color: $colorA;
                        .children{
                            height: 220px;
                            opacity: 1;
                            transition: .5s;
                        }
                    }
                    .children{
                        position: absolute;
                        top: 112px;
                        left: 0;
                        width: 1226px;
                        height:0;
                        opacity: 0;
                        overflow: hidden;
                        border-top: 1px solid #e5e5e5;
                        box-shadow: 0px 3px 7px 0 rgba(0,0,0,0.11);
                        transition: .5s;
                        .product{
                            position: relative;
                            float: left;
                            width: 16.6%;
                            height: 220px;
                            font-size: 12px;
                            line-height: 12px;
                            &:before{
                              content: '';
                              position: absolute;
                              top: 28px;
                               right: 20px;
                               border-left: 1px solid $colorF;
                                height: 100px;
                                width: 1px;
                            }
                            &:last-child:before{
                               display: none;
                            }
                            a{
                                display:inline-block;
                                text-align: center;
                                    img{
                                        height:111px;
                                        margin-top: 26px;
                                    }
                                    .pro-img{
                                        height: 137px;
                                    }
                                    .pro-name{
                                        margin-top: 19px;
                                        font-weight: blod;
                                        margin-bottom: 8px;
                                        color: $colorB;
                                    }
                                    .pro-price{
                                        color: $colorA;
                                    }
                              }
                        }
                    }
                }
            }
            .header-search{
                width: 319px;
                .wrapper{
                    height: 50px;
                    border:1px solid #e0e0e0;
                    display: flex;
                    align-items: center;
                    input{
                        border: none;
                        border-right: 1px solid #E0E0E0;
                        width: 264px;
                        height: 50px;
                        padding-left: 14px;
                        box-sizing: border-box;
                    }
                    a{
                        @include bgImg(18px,18px,'/imgs/icon-search.png');
                        // display: inline-block;
                        margin-left: 15px;
                        // width: 18px;
                        // height: 18px;
                        // background:url('/imgs/icon-search.png') no-repeat center;
                        // background-size: contain;
                       
                    }
                }
            }
        }
    }


}
</style>