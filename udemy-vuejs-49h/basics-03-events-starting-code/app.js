const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name
    },
    submitForm() {
      // lors du submit, vueJS recherche la page et on perd les info contenu dans les compteur
      // en utilisant un event avec la methode preventDefault() on informe à Vue qu'on prend la main sur la methode
      // ne pas oublier de passer l'event dans les parametre de la fonction
      // event.preventDefault();
      alert('Sumitted !!!')
    },
    setName(event) {
      this.name = event.target.value
    },
    increment(num) {
      this.counter = this.counter + num
    },
    decrement() {
      this.counter--
    },
  }
});

app.mount('#events');
