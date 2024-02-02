<script setup>
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    isFav: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <section class="flex justify-between my-5 shadow-md px-4 py-6 rounded-md">
        <article class="text-xl font-extrabold text-gray-600">
            {{ props.title }}
        </article>
        <article class="flex gap-3">
            <span class="material-icons stateButtons">
                favorite
            </span>
            <span class="material-icons stateButtons">
                delete
            </span>
        </article>
    </section>
</template>

<style scoped>
.stateButtons {
    @apply cursor-pointer text-gray-400;
}
</style>