<script setup>
import { computed } from 'vue'
import TaskCard from '@/components/TaskCard.vue'
import { useTaskStore } from '@/stores/taskStore'

const taskStore = useTaskStore()

const favTasks = computed(() => {
    const totalFavTasks = taskStore.tasks.filter(task => task.isFav)
    return totalFavTasks.length
})
</script>

<template>
    <section class="w-1/2 mx-auto mt-5 font-poppins md:w-1/2 lg:w-1/3">
        <article class="flex items-center justify-between mb-8">
            <p class="text-lg">You have {{ taskStore.tasks.length }} tasks left to do</p>
            <section class="flex gap-3">
                <button class="cursor-pointer rounded-full border border-2 py-2 px-4">All tasks</button>
                <button class="cursor-pointer rounded-full border border-2 py-2 px-4">Fav tasks({{ favTasks }})</button>
            </section>
        </article>
        <article v-for="(task, index) in taskStore.tasks" :key="index">
            <TaskCard 
                :title="task.title"
                :isFav="task.isFav"
                :id="task.id"
            />
        </article>
    </section>
</template>