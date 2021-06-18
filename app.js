const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    }
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + '' + lastName;
    },
    add(num) {
      this.counter = this.counter + num
    },
    subtract(num) {
      this.counter = this.counter - num
    },
    resetInput() {
      this.name = ''
    }
  }
});

app.mount('#events');