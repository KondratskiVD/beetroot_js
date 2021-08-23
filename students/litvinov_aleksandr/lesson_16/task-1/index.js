new Vue({
    el: '#app',
    data: {
        myPlaceholder: 'enter color',
        inputValue: '',
        colors: [],
        newColor: ''
    },
    methods: {
        inputChange(e) {
            this.inputValue = e.target.value
        },
        changeBG() {
            this.colors.push(this.inputValue)
            this.newColor = this.inputValue
            this.inputValue = ''
        }
    }
})
