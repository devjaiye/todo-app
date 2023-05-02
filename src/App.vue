<template>
  <main>

    <!-- heading -->
    <header>
      <img src="./assets/task.png" alt="pinia logo">
      <h1>Todo</h1>
    </header>

    <!-- add task form -->
      <div class="new-task-form">
        <TaskForm />
      </div>

    <!-- filter toggle -->
    <nav class="filter">
       <button @click="filter = 'all'">All Tasks</button>
       <button @click="filter = 'favs'">Favorite Tasks</button>
    </nav>

    <div class="loading" v-if="loading">
      Loading tasks...
    </div>

    <!-- Task list items -->
    <div class="task-list" v-if="filter === 'all'">
        <p> You have {{totalCount}} task(s) left</p>
        <div v-for="task in tasks" :key="task.id">
          <TaskDetails :task="task" />
        </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ favCount }} favorite to do</p>
      <div v-for="task in favs" :key="task.id">
        <TaskDetails :task="task"/>
      </div>
    </div>

    <!-- <button @click="taskStore.$reset">Reset </button> -->
    
  </main>
</template>

<script>
  import {ref} from 'vue'
  import {useTaskStore} from './stores/TaskStore.js'
  import TaskDetails from './components/TaskDetails.vue'
import TaskForm from './components/TaskForm.vue'   
import { storeToRefs } from 'pinia'

  export default {
    components: { TaskDetails, TaskForm },
    setup(){
      const taskStore = useTaskStore()

      const {tasks, loading, favs,
         totalCount, favCount} = storeToRefs(taskStore)
      
      taskStore.getTasks() //..fetch all tasks from db.json
      
      const filter = ref('all')

      return {
          taskStore, filter, tasks, 
          loading, favs, totalCount, favCount
      }
    }
  }
</script>