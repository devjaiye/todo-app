import { defineStore } from "pinia";

 export const useTaskStore = defineStore('taskStore', {
    state: () =>({
        tasks: [
            {id: 1, title: "Birthday Party", isFav: true }, 
            {id: 2, title: "Concert", isFav: false }
        ], 
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