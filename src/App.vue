<template>
  <main>

    <!-- heading -->
    <header>
      <img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo">
      <h1>Todo</h1>
    </header>

    <!-- Task list items -->
    <div class="task-list">
        <div v-for="task in taskStore.tasks">
          
        </div>
    </div>

  </main>
</template>

<script>
  import {useTaskStore} from './stores/TaskStore.js'
  import TaskDetails from './components/TaskDetails.vue'

  export default {
    components: {TaskDetails},
    setup(){
      const taskStore = useTaskStore()
      return {taskStore}
    }
  }
</script>