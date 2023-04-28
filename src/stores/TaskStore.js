import { defineStore } from "pinia";

 export const useTaskStore = defineStore('taskStore', {
    state: () =>({
        tasks: [
            {id: 1, title: "Birthday Party", isFav: true }, 
            {id: 2, title: "Concert", isFav: false }
        ], 
    }) 
  })