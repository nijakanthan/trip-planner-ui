import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Country } from '@/apis/interfaces'

export const useSettingsStore = defineStore('useSettingsStore', () => {
  const selectedYear = ref<string | undefined>(undefined)
  const appSupportCountries = ref<Country[] | undefined>(undefined)
  const selectedCountry = ref<string | undefined>(undefined)
  const selectedPreferredDay = ref<string | undefined>(undefined)

  function setYear(value: string) {
    selectedYear.value = value
  }

  function setAppSupportCountries(value: Country[]) {
    appSupportCountries.value = value
  }

  function setCountry(value: string) {
    selectedCountry.value = value
  }

  function setPreferredDay(value: string) {
    selectedPreferredDay.value = value
  }

  return {
    selectedYear,
    selectedCountry,
    selectedPreferredDay,
    appSupportCountries,
    setYear,
    setCountry,
    setPreferredDay,
    setAppSupportCountries,
  }
})
