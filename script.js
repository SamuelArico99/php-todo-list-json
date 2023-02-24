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
            console.log('chiamato task', this.newTask);

            axios
                .post('./create.php', {
                    task: this.newTask
                },
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                .then((response) => {
                    console.log(response);

                    this.todos.push({
                        taskName: this.newTask.taskName,
                        done: this.newTask.done
                    })
                    this.newTask.taskName = '';
                })
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