const {createApp} = Vue;

createApp({
    data(){
        return{
            todoList : [
                {
                    text : "comprare il pane",
                    done : false
                },
                {
                    text : "andare in farmacia",
                    done : false
                },
                {
                    text : "indagare sul caso di Roger rabbit",
                    done : true
                },
                {
                    text : "preparere i regali per natale",
                    done : false
                }
            ]
        }
    },

    methods: {
        deleteElement(index){
            this.todoList.splice(index,1);
        }
    }
}).mount('#app');