import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

Vue.use(Vuex);
Vue.use(VueRouter);

var main = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})


