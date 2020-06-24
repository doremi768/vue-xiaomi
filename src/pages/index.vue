<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children">
                                <ul v-for="(item,index) in menuList" :key="index">
                                    <li v-for="(sub,index) in item" :key="index">
                                        <a v-bind:href="sub?'/#/product/'+ sub.id:''">
                                            <img v-bind:src="sub ? sub.img : '/imgs/item-box-1.png'" alt="">
                                            {{sub? sub.name : '小米9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电视 盒子</a>
                            <div class="children">
                                <ul v-for="(item,index) in menuList" :key="index">
                                    <li v-for="(sub,index) in item" :key="index">
                                        <a v-bind:href="sub?'/#/product/'+ sub.id:''">
                                            <img v-bind:src="sub ? sub.img : '/imgs/item-box-1.png'" alt="">
                                            {{sub? sub.name : '小米9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 平板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电 穿戴</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">智能 路由器 </a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">插线板 出行</a>
                        </li>
                         <li class="menu-item">
                            <a href="javascript:;">插线板 出行</a>
                        </li>
                         <li class="menu-item">
                            <a href="javascript:;">生活 箱包</a>
                        </li>
                    </ul>
                </div>
                <swiper v-bind:options="swiperOption">
                    <swiper-slide v-for="(item,index) in slideList" :key="index">
                        <a v-bind:href="'/#/product/'+item.id"><img :src="item.img"></a>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-box"></div>
            <div class="banner"></div>
            <div class="product-box"></div>
        </div>
        <service-bar></service-bar>
    </div>
</template>

<script>
import ServiceBar from './../components/ServiceBar'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    name:'index',
    components: {
        Swiper,
        SwiperSlide,
        ServiceBar
    },
    directives: {
        swiper: directive
    },
    data(){
        return {
            swiperOption:{
                // autoplay:true,
                effect:"cube",
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
            },
            slideList:[
                {
                 id: '7',
                img: '/imgs/slider/slide-1.jpg'
                },
                {
                 id: '8',
                img: '/imgs/slider/slide-2.jpg'
                },
                {
                 id: '9',
                img: '/imgs/slider/slide-3.jpg'
                },
                {
                 id: '10',
                img: '/imgs/slider/slide-4.jpg'
                },
                {
                 id: '11',
                img: '/imgs/slider/slide-5.jpg'
                }
            ],
            menuList:[
                [
                    {
                        id: 20,
                        img: '/imgs/item-box-1.png',
                        name: '小米cc9'
                    },
                    {
                        id: 21,
                        img: '/imgs/item-box-2.png',
                        name: '小米8青春版'
                    },
                    {
                        id: 22,
                        img: '/imgs/item-box-3.jpg',
                        name: 'Redmi K20 Pro'
                    },
                    {
                        id: 23,
                        img: '/imgs/item-box-4.jpg',
                        name: '移动4G专区'
                    }
                ],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
            ],
        }
    },
    
}
</script>

<style lang="scss">
    @import './../assets/scss/mixin.scss';
    @import './../assets/scss/config.scss';
    .index{
        .swiper-box{
            .nav-menu{
                position: absolute;
                width: 264px;
                height: 460px;
                z-index: 9;
                padding: 26px 0;
                background-color: #55585a7a;
                box-sizing: border-box;
                .menu-wrap{
                     position: relative;
                    .menu-item{
                        height: 50px;
                        line-height: 50px;
                        a{
                            position: relative;
                            display: block;
                            font-size: 16px;
                            color: #ffffff;
                            padding-left: 30px;
                            &:after{
                                position:absolute;
                                right: 30px;
                                top: 18px;
                                content:'';
                                @include bgImg(10px,15px,'/imgs/icon-arrow.png');
                            }
                        }
                        &:hover{
                            background-color: $colorA;
                            .children{
                                display: block;
                            }
                        }
                        .children{
                            position: absolute;
                            display: none;
                            width: 962px;
                            height: 458px;
                            background-color:$colorG;
                            top: -26px;
                            left: 264px;
                            border: 1px solid $colorH;
                            ul{
                                display: flex;
                                justify-content: space-between;
                                height: 75px;
                                li{
                                    flex: 1;
                                    padding-left: 23px;
                                    height: 100%;
                                    line-height: 75px;
                                }
                                a{
                                    color:$colorB;
                                    font-size: 14px;
                                }
                                img{
                                    width: 42px;
                                    height: 35px;
                                    vertical-align: middle;
                                    margin-right: 15px;
                                }
                            }
                        }
                    }
                }
            }
            .swiper-container{
                height: 451px;
                .swiper-button-prev{
                    left: 274px;
                }
                img{
                    width: 100%;
                }
            }
        }
    }
</style>