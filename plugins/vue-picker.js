import Vue from 'vue'
import AwesomePicker from 'vue-awesome-picker/src/lib/vue-awesome-picker.vue'
export default () => {
    if (process.browser) {
        //console.log('浏览器端渲染');
        Vue.use(require('vue-awesome-picker/dist/vue-awesome-picker'), /* { default global options } */)
        Vue.component(AwesomePicker.name, AwesomePicker)
    }else{
        //console.log("非浏览器端渲染");
    }
}