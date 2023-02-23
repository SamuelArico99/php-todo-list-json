const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'Todo List',
            todos: [],
            newTask: {
                taskName: '',
                done: false
            }

        }
    },
    methods: {
        addTask() {
            console.log(this.newTask);
            axios.post('', {
                task: this.newTask
            }).then((response) => {
                console.log(response)
            });
        }
    },
    created() {
        axios
            .get('./api.php')
            .then((response) => {
                console.log(response);

                this.todos = response.data;
            })
    }
}).mount('#app');