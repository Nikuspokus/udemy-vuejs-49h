const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    }
  },
  methods: {
    outputFullname() {
    },
    setName(event, lastName) {
      this.name = event.target.value;
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
  },
  computed: {
    fullname() {
      console.log('Running Again');
      if (this.name === '') {
        return ''
      } else {
        return this.name + ' ' + 'Marquillier'
      }
    }
  },
});

app.mount('#events');