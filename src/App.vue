<template>
  <main>

    <!-- heading -->
    <header>
      <img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo">
      <h1>Todo</h1>
    </header>

    <!-- filter toggle -->
    <nav class="filter">
       <button @click="filter = 'all'">All Tasks</button>
       <button @click="filter = 'favs'">Favorite Tasks</button>
    </nav>

    <!-- Task list items -->
    <div class="task-list" v-if="filter === 'all'">
        <p> You have {{taskStore.totalCount}} task(s) left</p>
        <div v-for="task in taskStore.tasks">
          <TaskDetails :task="task"/>
        </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ taskStore.favCount }} favorite to do</p>
      <div v-for="task in taskStore.favs">
        <TaskDetails :task="task" />
      </div>
    </div>

  </main>
</template>

<script>
  import {ref} from 'vue'
  import {useTaskStore} from './stores/TaskStore.js'
  import TaskDetails from './components/TaskDetails.vue'

  export default {
    components: {TaskDetails},
    setup(){
      const taskStore = useTaskStore()
      const filter = ref('all')
      return {taskStore, filter}
    }
  }
</script>