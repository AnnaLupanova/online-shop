import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'


Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        cart:[],
        cart_products:[],
        products_running:[],
        products_fitness:[],
        products_football:[]

    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state,products)=>{
            state.products = products;
        },
        SET_PRODUCTS_TO_CART:(state,products)=>{
            state.cart_products = products;
        },
        SET_PRODUCTS_TO_STATE_RUNNING:(state,products)=> {
            state.products_running = products;
        },
        SET_PRODUCTS_TO_STATE_FITNESS:(state,products)=> {
            state.products_running = products;
        },
        SET_PRODUCTS_TO_STATE_FOOTBALL:(state,products)=> {
            state.products_football = products;
        },
       /* SET_CART: (state,product)=>{
            if(state.cart.length){
               let isProductExists = false;
               state.cart.map(function (item){
                    if (item.article===product.article){
                        isProductExists = true;
                        item.quantity++;
                    }
                })
                if (!isProductExists){
                    state.cart.push(product)
                }
            }else {
                state.cart.push(product)
            }

        },*/
        INCREMENT: (state, index)=>{
            state.cart_products[index].quantity++
        },
        DECREMENT: (state, index)=>{
            if (state.cart_products[index].quantity>1){
                state.cart_products[index].quantity--
            }

        },
        REMOVE_FROM_CART: (state,index)=>{
            state.cart_products.splice(index,1)
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('http://localhost:8080/catalog', {
                method: "GET"
            })
         .then((products)=>{

             commit ("SET_PRODUCTS_TO_STATE",products.data);
             return products;
         })
                .catch((error)=>{
                   console.log(error);
                    return error;
                })
        },
        GET_PRODUCTS_FROM_API_RUNNING({commit}){
            return axios('http://localhost:8080/catalog/running', {
                method: "GET"
            })
                .then((products)=>{

                    commit ("SET_PRODUCTS_TO_STATE_RUNNING",products.data);
                    return products;
                })
                .catch((error)=>{
                    console.log(error);
                    return error;
                })
        },
        GET_PRODUCTS_FROM_API_FOOTBALL({commit}){
            return axios('http://localhost:8080/catalog/football', {
                method: "GET"
            })
                .then((products)=>{

                    commit ("SET_PRODUCTS_TO_STATE_FOOTBALL",products.data);
                    return products;
                })
                .catch((error)=>{
                    console.log(error);
                    return error;
                })
        },
        GET_PRODUCTS_FROM_API_FITNESS({commit}){
            return axios('http://localhost:8080/catalog/fitness', {
                method: "GET"
            })
                .then((products)=>{

                    commit ("SET_PRODUCTS_TO_STATE_FITNESS",products.data);
                    return products;
                })
                .catch((error)=>{
                    console.log(error);
                    return error;
                })
        },

        GET_CART_PRODUCT({commit}){
            return axios('http://localhost:8080/basket', {
                method: "GET"
            })
                .then((products)=>{

                    commit ("SET_PRODUCTS_TO_CART",products.data);
                    return products;
                })
                .catch((error)=>{
                    console.log(error);
                    return error;
                })
        },

        INCREMENT_CART({commit},index){
            commit('INCREMENT',index)
        },
        DECREMENT_CART({commit},index){
            commit('DECREMENT',index)
        },
        DELETE_FROM_CART({commit},index){
            commit('REMOVE_FROM_CART',index)
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART_PRODUCT(state){
            return state.cart_products;
        },
        CART(state){
            return state.cart;
        },
        PRODUCTS_RUNNING(state){
            return state.products_running
        },
        PRODUCTS_FITNESS(state){
            return state.products_running
        },
        PRODUCTS_FOOTBALL(state){
            return state.products_football
        }
    }
});

export default store;
