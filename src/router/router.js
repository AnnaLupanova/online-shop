import Vue from 'vue'
import Router from 'vue-router'
import vCatalog from '../components/v-catalog'
import vCart from '../components/v-cart'
import vDelivery from '../components/v-delivery'
import vHome from "@/components/v-home";
import vProduct from '@/components/v-product-page'
import vRunning from '@/components/v-catalog-running'
import vFitness from '@/components/v-catalog-fitness'
import vFootball from '@/components/v-catalog-football'

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: vHome,
            props:true,
            hashbang:false
        },
        {
            path: '/delivery',
            name: 'delivery',
            component: vDelivery,
            props:true,
            hashbang:false

        },
        {
            path:'/catalog/running',
            name:'running',
            component: vRunning,
            props:true,
            hashbang:false
        },
        {
            path:'/catalog/fitness',
            name:'fitness',
            component: vFitness,
            props:true,
            hashbang:false
        },
        {
            path:'/catalog/football',
            name:'football',
            component: vFootball,
            props:true,
            hashbang:false
        },
        {
            path:'/basket',
            name:'cart',
            component: vCart,
            props:true,
            hashbang:false
        },
        {
            path:'/product',
            name:'product',
            component: vProduct,
            props:true,
            hashbang:false
        },
        {
            path:'/catalog',
            name:'catalog',
            component: vCatalog,
            props:true,
            hashbang:false
        }
    ]
})
export default router;