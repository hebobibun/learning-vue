const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
      age: ''
    };
  },
  methods: {
    submitForm(e) {
      alert('Successfully submitted!');
    },
    confirm() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = '';
      this.confirmedName = '';
    },
    resetCounter() {
      this.counter = 10;
    },
    add(num) {
        this.counter = this.counter + num;
    },
    reduce(num) {
      if (this.counter >= num) {
        this.counter = this.counter - num;
      }
    },
    setAge(e, tahun) {
      this.age = e.target.value + ' ' + tahun;
      console.log(e)
    },
  }
});

app.mount('#events');
