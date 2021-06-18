const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment(num) {
      this.counter = this.counter + num
    },
    decrement() {
      this.counter--
    },
  }
});

app.mount('#events');
