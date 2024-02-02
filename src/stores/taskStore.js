import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', () => { 
  const tasks = [
    {id: 1, title: 'buy some milk', isFav: false}
  ]

  return { 
    tasks 
  }
})