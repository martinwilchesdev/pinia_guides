<script setup>
import TaskCard from '@/components/TaskCard.vue'
import { useTaskStore } from '@/stores/taskStore'

const taskStore = useTaskStore()
</script>

<template>
    <section class="w-1/2 mx-auto pt-5 md:w-1/2 lg:w-1/3">
        <p class="text-lg">You have {{ taskStore.tasks.length }} tasks left to do</p>
        <article v-for="(task, index) in taskStore.tasks" :key="index">
            <TaskCard 
                :title="task.title"
                :isFav="task.isFav"
            />
        </article>
    </section>
</template>