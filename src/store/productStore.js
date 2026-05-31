import axios from "axios";
import { defineStore } from "pinia";


const productStore = defineStore('product', {
    state: () => ({
        products: [],
        product: {},
        loading: false
    }),
    getters: {
        // 
    },
    actions: {
        // fetch all data 
        async fetchProduct(){
            try{
                const respone = await axios.get('https://fakestoreapi.com/products')
                this.products = respone.data
                this.loading = true
            }catch(err){
                console.error('Product Not Fount'. err)
            }
        },
        // fetch single data 
        async fetchProductById(id){
            const respone = await axios.get(`https://fakestoreapi.com/products/${id}`)
            this.product = respone.data
            this.loading = true
        }
    }
})

export default productStore





