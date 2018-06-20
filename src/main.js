// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import Home from "@/pages/Home";
import Admin from "@/components/Admin";
import Cart from "@/pages/Cart";

// Admin Components
import Index from '@/pages/admin/Index';
import New from '@/pages/admin/New';
import Products from '@/pages/admin/Products';
import Edit from '@/pages/admin/Edit';

Vue.config.productionTip = false;
/* eslint-disable no-new */
Vue.use(VueRouter);

const routes = [{ 
  path: "/", 
  name: "Home", 
  component: Home 
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,

    component: Index,
    // Child routes
    children : [{
      path: 'new',
      name: 'New',
      component: New
    },
      {
        path: '',
        name: 'Products',
        component: Products
      },
      {
        path: 'edit/:id',
        name: 'Edit',
        component: Edit
      }
    ]
  } 
  
];
// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes, // short for routes: routes
  mode: "history"
});
/* eslint-disable no-new */
new Vue({
  //define the selector for the root component
  el: "#app",
  //pass the template to the root component
  template: "<App/>",
  //declare components that the root component can access
  components: { App },
  //pass in the router to the Vue instance
  router
}).$mount("#app"); //mount the router on the app
