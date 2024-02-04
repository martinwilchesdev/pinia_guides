<script setup>
import { useTaskStore } from '@/stores/taskStore'

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    isFav: {
        type: Boolean,
        default: false
    },
    id: {
        type: Number,
        default: 0
    }
})

const taskStore = useTaskStore()

const deleteTask = (id) => {
    taskStore.deleteTask(id)
}

const favouriteTask = (id) => {
    taskStore.favouriteTask(id)
}
</script>

<template>
    <section class="flex justify-between my-5 shadow-md px-4 py-6 rounded-md">
        <article class="text-xl font-extrabold text-gray-600">
            {{ props.title }}
        </article>
        <article class="flex gap-3">
            <span 
                @click="favouriteTask(props.id)"
                :class="[props.isFav ? 'text-red-500' : 'text-gray-400', 'material-icons stateButtons cursor-pointer select-none']">
                favorite
            </span>
            <span 
                @click="deleteTask(props.id)"
                class="material-icons text-gray-400 cursor-pointer select-none">
                delete
            </span>
        </article>
    </section>
</template>