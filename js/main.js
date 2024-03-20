const { createApp } = Vue;

createApp({
    data() {
        return {
            disks: [],
        }
    },

    methods: {


    },

    mounted() {

        axios.get('server.php')
            .then(response => {
                this.disks = response.data;
            })

    },
}).mount('#app');