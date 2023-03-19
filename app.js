const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
      age: ''
    };
  },

  computed: {
    fullname() {
      if (this.confirmedName === '') {
        return '';
      } else {
        return 'Muhammad' + ' ' + this.confirmedName;
      }
    },
  },
  
  methods: {
    submitForm(e) {
      alert('Successfully submitted!');
    },
    confirm() {
      console.log('confirm...')
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = '';
      this.confirmedName = '';
      console.log('resetInput...')
    },
    resetCounter() {
      this.counter = 10;
      console.log('resetCounter...')
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
