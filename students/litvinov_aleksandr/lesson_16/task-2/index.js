new Vue({
    el: '#app',
    data: {
        button: '',
        none: 'none',
        show: 'block',
        time: '',
    },
    methods: {
        clickButton() {
            this.none = this.show
        },
        showMouseKey(e) {
            if (e.which === 1) {
                this.button = 'You clicked left button'
            } else if (e.which === 3) {
                this.button = 'You clicked right button'
            }
        },
        showTime() {
            this.time = (new Date).toLocaleTimeString()
        }
    }
})


