const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: [] };
  },
  methods: {
    //methode pour ajouter une tâche de la liste
    addGoal() {
      this.goals.push(this.enteredGoalValue)
      this.enteredGoalValue = ''
    },
    //methode pour supprimer une tâche de la liste
    removeGoal(index) {
      this.goals.splice(index,1)
    },
  }
});

app.mount('#user-goals');
