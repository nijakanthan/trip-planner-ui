import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Holiday } from '@/apis/interfaces'

export const useHolidaysStore = defineStore('useHolidaysStore', () => {
  const holidays = ref<Holiday[] | undefined>(undefined)

  function setHolidays(value: Holiday[]) {
    holidays.value = value
  }
  

  return {
    holidays,
    setHolidays
  }
})
