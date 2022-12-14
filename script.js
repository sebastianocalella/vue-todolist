const {createApp} = Vue;

createApp({
    data(){
        return{
            newTodoElement:'',
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
        },
        addNewElement(){
            
            if (!this.todoList.find(item => item.text === this.newTodoElement)){
                this.todoList.push({text : this.newTodoElement, done : false});
            }
            
        },
        doneInverter(index){
            (this.todoList[index].done) ? this.todoList[index].done = false : this.todoList[index].done = true;
        }
    }
}).mount('#app');