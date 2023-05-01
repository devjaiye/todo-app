<template>
    <div class="task">
        <h3>{{ task.title }}</h3>
        <div class="icons">
            <i 
                class="material-icons"
                :class="{
                    //...add active color if fav is true
                    active: task.isFav
                    }"
                @click="taskStore.toogleFav(task.id)"
                >
                favorite
            </i>
            <i 
                class="material-icons"
                @click="taskStore.deleteTask(task.id)"
                >
                delete 
            </i>
        </div>
    </div>
</template>

<script>
import { useTaskStore } from '../stores/TaskStore';

    export default {
        props: ['task'],
        setup(props) {
            const taskStore = useTaskStore()

            return {taskStore}
        }
    }
</script>