<script setup>
import { ref, computed } from 'vue'
import TaskCard from '@/components/TaskCard.vue'
import { useTaskStore } from '@/stores/taskStore'

const taskStore = useTaskStore()

const favouriteTasks = ref([])
const favTasks = ref(false)

const totalFavTasks = computed(() => {
    return taskStore.tasks.filter(task => task.isFav).length
})

const showFavTasks = () => {
    favTasks.value = true
    favouriteTasks.value = taskStore.tasks.filter(task => task.isFav)
}

const showAllTasks = () => {
    favTasks.value = false
}

const showTasks = computed(() => {
    return favTasks.value ? favouriteTasks.value : taskStore.tasks
})
</script>

<template>
    <section class="w-1/2 mx-auto mt-5 font-poppins md:w-1/2 lg:w-1/3">
        <article class="flex items-center justify-between mb-8">
            <p class="text-lg">You have {{ taskStore.tasks.length }} tasks left to do</p>
            <section class="flex gap-3">
                <button 
                    @click="showAllTasks"
                    :class="[!favTasks ? 'bg-yellow-300' : '', 'button']">All tasks</button>
                <button 
                    @click="showFavTasks"
                    :class="[favTasks ? 'bg-yellow-300' : '', 'button']">
                    Fav tasks ({{ totalFavTasks }})</button>
            </section>
        </article>
        <article v-for="(task, index) in showTasks" :key="index">
            <TaskCard 
                :title="task.title"
                :isFav="task.isFav"
                :id="task.id"
            />
        </article>
    </section>
</template>

<style scoped>
.button {
    @apply cursor-pointer rounded-full border border-2 py-2 px-4 select-none transition-all;
}
</style>
