import Vue from 'vue'
import Router from 'vue-router'
import vCatalog from '../components/v-catalog'
import vCart from '../components/v-cart'
import vDelivery from '../components/v-delivery'
import vHome from "@/components/v-home";
import vProduct from '@/components/v-product-page'

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: vHome,
            props:true
        },
        {
            path: '/delivery',
            name: 'delivery',
            component: vDelivery,
            props:true

        },
        /*{
            path:'/catalog/rinning',
            name:'rinning',
            component: vRunning,
            props:true
        },
        {
            path:'/catalog/fitness',
            name:'fitness',
            component: vFitness,
            props:true
        },
        {
            path:'/catalog/football',
            name:'football',
            component: vFootball,
            props:true
        },*/
        {
            path:'/cart',
            name:'cart',
            component: vCart,
            props:true
        },
        {
            path:'/product',
            name:'product',
            component: vProduct,
            props:true
        },
        {
            path:'/catalog',
            name:'catalog',
            component: vCatalog,
            props:true
        }
    ]
})
export default router;