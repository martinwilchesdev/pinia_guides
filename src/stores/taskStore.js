import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', () => { 
  const tasks = ref([])
  function addTasks(task) {
    tasks.value.push({
      id: tasks.value.length + 1,
      title: task,
      isFav: false
    })
  }
  function deleteTask(taskId) {
    tasks.value = tasks.value.filter(task => task.id != taskId)
  }
  function favouriteTask(taskId) {
    tasks.value = tasks.value.map(task => task.id == taskId ? {...task, isFav: !task.isFav} : task)
  }

  return { 
    tasks,
    addTasks,
    deleteTask,
    favouriteTask
  }
})