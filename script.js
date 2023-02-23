const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'Todo List',
            todos: []

        }
    },
    methods: {

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