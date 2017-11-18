import Vue from 'vue'
import App from './App.vue'

//Custom directives defined here for h4 heading
Vue.directive('rainbow', {
    bind(el, binding, vnode) {
        //pick a string of 6 random numbers and attache it to the styling
        el.style.color = '#' + Math.random().toString().slice(2, 8);
    }
});

Vue.directive('theme', {
    bind(el, binding, vnode) {
       if(binding.value == 'wide'){
            el.style.maxWidth = "1200px";
       } else if(binding.value == 'narrow'){
           el.style.maxWidth = "560px";
       }
       if(binding.arg == 'column'){
           // el.style.background = "gray";
           el.style.opacity = "0.9";
           el.style.padding = "20px";
       }
    }
});

new Vue({
    el: '#app',
    render: h => h(App)
});
