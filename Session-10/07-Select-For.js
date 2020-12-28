const select = {
    data() {
        return {
            selected: 'A',
            options: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
            ]
        }
    }
}    
Vue.createApp(select).mount('#v-model-select-dynamic')