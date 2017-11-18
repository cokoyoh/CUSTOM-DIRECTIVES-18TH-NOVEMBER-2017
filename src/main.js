import Vue from 'vue'
import App from './App.vue'

//Custom directives defined here
Vue.directive('rainbow',{
    bind(el, binding, vnode){
        //pick a string of 6 random numbers and attache it to the styling
        el.style.color = '#' + Math.random().toString().slice(2,8);
    }
});

new Vue({
    el: '#app',
    render: h => h(App)
});
