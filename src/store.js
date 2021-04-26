import { createApp } from 'vue'
import { createStore } from 'vuex'

let cart = window.localStorage.getItem('cart');
// Create a new store instance.
const store = createStore({
    state () {
        return {
            cart: cart ? JSON.parse(cart) : [],
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
        saveData(state){
            window.localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        removeFromCart(state, p){
            let index = state.cart.indexOf(p);
            state.cart.splice(index,1);
            this.commit('saveData');
        },
        removeAllFromCart(state){
            state.cart = [];
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
                return anterior + actual
            })
            s *= 1.036
            s += 3
            return s;
        }
    }
})

const app = createApp({} )
app.config.devtools = true
// Install the store instance as a plugin
app.use(store)

export default store;
