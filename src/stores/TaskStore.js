import { defineStore } from "pinia";

 export const useTaskStore = defineStore('taskStore', {
    state: () =>({
        loading: false,
        tasks: [], 
    }), 

    //.. getters
    getters: {
        //...store favorite tasks
        favs(){
            return this.tasks.filter(savedTasks => savedTasks.isFav)
        },
        favCount(){
            return this.tasks.reduce((prev, current)=> {
                return current.isFav ? prev + 1 : prev
            }, 0)
        }, 
        totalCount: (state) => {
            return state.tasks.length
        }, 
    }, 
    //..actions
    actions: {
        async getTasks(){
            this.loading = true

            const res = await fetch('http://localhost:3000/tasks')
            const data = await res.json()
            this.tasks = data
            this.loading = false
        },

        addTask(task){
            this.tasks.push(task)
        }, 
        deleteTask(id){
            this.tasks = this.tasks.filter(t => {
                return t.id == id
            })
        }, 
        toogleFav(id){
            const task = this.tasks.find(t => t.id === id)
            task.isFav = !task.isFav
        }
    } 
  })