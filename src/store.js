import { createApp } from 'vue'
import { createStore } from 'vuex'

let cart = window.localStorage.getItem('cart');
let box = window.localStorage.getItem('box');
// let messages = window.localStorage.getItem('messages');
// Create a new store instance.
const store = createStore({
    state () {
        return {
            cart: cart ? JSON.parse(cart) : [],
            box: box ? JSON.parse(box) : [],
            count : 0
        }
    },
    mutations: {
        increment (state) {
            state.count++
        },
        addToCart(state, item){
            let found = state.cart.find(product => product.id == item.id);
            console.log(found);
            if(found){
                found.productQuantity++;
            }else{
                state.cart.push(item);
            }
            this.commit('saveData');
        },
        addToBox(state, product) {

            let found = state.box.find(p => product.id == p.id);
            console.log(found);
            if(!found){
                this.commit('saveData');
                state.box.push(product);
            }
        },
        deleteFromBox(state, product) {
            let idx = state.box.indexOf(product);
            state.box.splice(idx, 1);
            this.commit('saveData');
            console.log(state.box);
        },
        saveData(state){
            window.localStorage.setItem('cart', JSON.stringify(state.cart));
            window.localStorage.setItem('box', JSON.stringify(state.box));
        },
        removeFromCart(state, p){
            let index = state.cart.indexOf(p);
            state.cart.splice(index,1);
            this.commit('saveData');
        },
        removeAllItems(state){
            state.cart = [];
            state.box = [];
            this.commit('saveData');
        }
    },
    getters: {
        totalPrice: state => {
            let s = state.cart.map(p => {
                console.log(p);
                return p.productPrice * p.productQuantity;
            }).reduce((anterior, actual) => {
                return anterior + actual
            })
            return s;
        },
        totalPriceWithTax: state => {
            let s = state.cart.map(p => {
                console.log(p);
                return p.productPrice * p.productQuantity;
            }).reduce((anterior, actual) => {
                return anterior + actual;
            })
            s *= 1.05;
            return s;
        },
        boxPrice: state => {
            let s = state.box.map(p => {
                return p.price;
            }).reduce((anterior, actual) => {
                return anterior + actual;
            })
            return s;
        },
        boxPriceWithTax: state => {
            let s = state.box.map(p => {
                return p.price;
            }).reduce((anterior, actual) => {
                return anterior + actual;
            })
            s *= 1.05;
            return s;
        }
    }
})

const app = createApp({} )
app.config.devtools = true
// Install the store instance as a plugin
app.use(store)

export default store;
