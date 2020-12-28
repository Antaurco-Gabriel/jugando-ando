const select = Vue.createApp({
    data() {
        return {
            picked:''
        }
    }
})
const vm = Vue.createApp(select).mount('#v-model-v-bind')

vm.pick === vm.a
