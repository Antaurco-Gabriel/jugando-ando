const checkbox_multi = {
    data() {
        return {
          checkedNames: []
        }
      }
}
Vue.createApp(checkbox_multi).mount('#v-model-multiple-checkboxes')