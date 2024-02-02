import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', () => { 
  const tasks = ref([])
  function addTasks(task) {
    tasks.value.push({
      title: task,
      isFav: false
    })
  }

  return { 
    tasks,
    addTasks
  }
})