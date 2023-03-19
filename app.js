const app = Vue.createApp({
    data() {
        return {
            goalA: 'Finish the course and learn Vue!',
            goalB: 'Master and build amazing Vue Apps!',
            vueLink: 'https://vuejs.org'
        };
    },
    methods: {
        outputGoal() {
            const randomNum = Math.random();
            if (randomNum < 0.5) {
                return this.goalA;
            } else {
                return this.goalB;
            }
        }
    }
});

app.mount('#user-goal');