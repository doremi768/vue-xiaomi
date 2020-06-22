import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import orderList from './pages/orderList'
import orderConfirm from './pages/orderConfirm'
import orderPay from './pages/orderPay'
import AliPay from './pages/alipay'
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component:Home,
            redirect: '/index',//home组件中还嵌套了router-view，这里面还有三个页面，所以还要在Home中定义三个子路由
            children:[
                {
                    path:'/index',
                    name:'index',
                    component: Index
                },{
                    path:'/product/:id',//配一个商品都有一个id，所以这里要定义一个子路由
                    name:'product',
                    component: Product 
                },{
                    path:'/detail/:id',  // 此路由为商品详情路由
                    name:'detail',
                    component:Detail
                }
                
            ]
        },
        {
            path:'/cart',  //购物车的结构和根组件home的视图不一样，所以不需要home的视图
            name:'cart',
            component:Cart,
        },
        {
            path:'/order',  
            name:'order',
            component:Order,
            childen:[
                {
                    path:'list', //订单列表
                    name:'order-list',
                    component: orderList
                },
                {
                    path:'confirm', //订单支付
                    name:'order-confirm',
                    component: orderConfirm
                },
                {
                    path:'pay', //支付页面
                    name:'order-pay',
                    component: orderPay
                },
                {
                    path:"alipay",
                    name:'alipay',
                    component:AliPay
                }
            ]
        }
    ]
});