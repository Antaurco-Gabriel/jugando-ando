const lazy = {
    data() {
        return {
          msg: ''
        }
    }
}
Vue.createApp(lazy).mount('#v-model-lazy')

const number = {
    data() {
        return {
          age: null
        }
    },
    methods: {
        doSomething(age) {
          console.log(typeof age)
        }
      }
}
const vm = Vue.createApp(number).mount('#v-model-number')

const text = {
    data() {
        return {
          message: ''
        }
    }
}
Vue.createApp(text).mount('#v-model-trim')