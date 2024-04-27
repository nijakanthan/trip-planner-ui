<template>
  <div class="route-content">
    <div class="header">
      <p>Home</p>
    </div>
    <div class="divider"></div>
    <div class="value">
      <div v-if="noSettingsError" class="error">
        <span>Please set the settings to view the day</span>
      </div>
      <div v-else-if="noDataError" class="error">
        <span>There are no data for selected settings</span>
      </div>
      <div v-else>
        <table v-if="isLoaded">
          <thead>
            <tr>
              <th width="150px">Date</th>
              <th width="150px">Day</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="holidayData in tableData" :key="holidayData.date">
              <td>{{ holidayData.date }}</td>
              <td>{{ holidayData.date }}</td>
              <td>{{ holidayData.summary }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getHolidays } from '@/apis/get-holidays'
import { Holiday } from '@/apis/interfaces'
import { useSettingsStore } from '@/store/settingsStore'
import { useHolidaysStore } from '@/store/holidaysStore'

const {
  selectedCountry,
  selectedYear
} = useSettingsStore()
const {
  holidays,
  setHolidays
} = useHolidaysStore()

const tableData = ref<Holiday[] | undefined>(undefined)
const noDataError = ref(false)
const noSettingsError = ref(false)
const isLoaded = ref(false)

onMounted(async(): Promise<void> => {
  await getTableData()
  isLoaded.value = true
})

const getTableData = async (): Promise<void> => {
  isLoaded.value = false
  if (selectedCountry && selectedYear) {
    const holidaysVal = (await getHolidays(selectedCountry, selectedYear)).data
    if (holidaysVal.holidays && holidaysVal.holidays.length !== 0) {
      setHolidays(holidaysVal.holidays)
      if (holidaysVal.holidays) {
        tableData.value = [...holidaysVal.holidays]
      }
      noDataError.value = false
      noSettingsError.value = false
    } else {
      noDataError.value = true
      noSettingsError.value = false
    }
  } else {
    noDataError.value = false
    noSettingsError.value = true
  }
}
</script>

<style lang="scss">
div.error {
  span {
    color: #a6a6a6;
    font-style: italic;
  }
}
</style>
