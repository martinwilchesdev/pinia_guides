<script setup>
import { ref } from 'vue'

const placeholder = ref('I need to...')

</script>

<template>
    <header class="text-center pt-20 mb-3 bg-gray-100 font-poppins">
        <section class="flex justify-center gap-2 text-gray-400">
            <img class="w-14 -rotate-6" src="@/assets/pinia-logo.svg" alt="Pinia Logo">
            <h1 class="text-4xl font-extrabold self-center rotate-1">Pinia Tasks</h1>
        </section>
        <form class="flex justify-center gap-3 py-8">
            <input class="p-3 rounded-md outline-none" type="text" :placeholder="placeholder">
            <button class="px-8 bg-yellow-300 rounded-md pointer">Add</button>
        </form>
    </header>
</template>