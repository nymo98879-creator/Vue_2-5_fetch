import { defineStore } from "pinia";


const cartItem = defineStore('card', {
    state: (state)=> ({
        cart: []
    }),
    getters:{
        countCard: (state)=>{
            return state.cart.length
        },
        countTotal: (state)=>{
            return state.cart.reduce((total, item)=>{
                return total + (item.price * item.qty)
            }, 0)
        }
        
    },
    actions:{
        addToCard(product){
           const exiting = this.cart.find(item =>(
                item.id === product.id
           ))
           if(exiting){
                exiting.qty++
           }else{
                this.cart.push({
                    ...product,
                    qty: 1
                })
           }
        },
        increaseQty(id) {
            const item = this.cart.find(item => item.id === id);

            if (item) {
                item.qty++;
            }
        },

        decreaseQty(id) {
            const item = this.cart.find(item => item.id === id);

            if (item && item.qty > 1) {
                item.qty--;
            }
        }
    }
})

export default cartItem