<script setup>
import { ref } from 'vue'
import { useTaskStore } from '@/stores/taskStore'

const taskStore = useTaskStore()

const task = ref('')

const addTask = () => {
    taskStore.addTasks(task.value)
}

</script>

<template>
    <header class="text-center pt-20 bg-gray-100 font-poppins">
        <section class="flex justify-center gap-2 text-gray-400">
            <img class="w-14 -rotate-6" src="@/assets/pinia-logo.svg" alt="Pinia Logo">
            <h1 class="text-4xl font-extrabold self-center rotate-1">Pinia Tasks</h1>
        </section>
        <form class="flex justify-center gap-3 py-8">
            <input v-model="task" class="p-3 rounded-md outline-none" type="text" placeholder="I need to...">
            <button @click.prevent="addTask" class="px-8 bg-yellow-300 rounded-md pointer">Add</button>
        </form>
    </header>
</template>