const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      lastName: '',
      // fullname: '',
      // confirmedName: '',
      age: ''
    };
  },

  watch: {
    counter(value) {
      if (this.counter > 50) {
        const that = this
        setTimeout(function(){
          that.counter = 0;
        }, 500)
      }
    }
    // name(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + this.lastName
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + value
    //   }
    // }
  },

  computed: {
    fullname() {
      if (this.name === '' || this.lastName === '') {
        return '';
      } else {
        return this.name + ' ' + this.lastName;
      }
    },
  },
  
  methods: {
    submitForm(e) {
      alert('Successfully submitted!');
    },
    // confirm() {
    //   console.log('confirm...')
    //   this.confirmedName = this.name;
    // },
    resetInput() {
      this.name = '';
      this.lastName = '';
      this.fullname = '';
      // this.confirmedName = '';
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
