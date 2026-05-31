import { createRouter, createWebHistory } from "vue-router";
import Details from "../components/Details.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Home from "../views/Home.vue";
import ProductList from "../views/ProductList.vue";
import CartItem from "../components/CartItem.vue";


const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/product',
        component: ProductList
    },
    {
        path: '/details/:id',
        component: Details
    },
    {
        path: '/cart',
        component: CartItem
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    }

]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router