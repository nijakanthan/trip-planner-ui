<template>
  <div class="route-content">
    <div class="header">
      <p>Settings</p>
    </div>
    <div class="divider"></div>
    <div class="value">
      <el-form label-width="auto">
        <el-form-item label="Year">
          <el-select
            v-model="selectedYearValue"
            placeholder="please select the year"
            @change="onYearChange"
          >
            <el-option
              v-for="year in appSupportYears"
              :key="year"
              :label="year"
              :value="year" />
          </el-select>
        </el-form-item>
        <el-form-item label="Country">
          <el-select
            v-model="selectedCountryCode"
            placeholder="please select your country"
            @change="onCountryChange"
          >
            <el-option
              v-for="country in appSupportCountries"
              :key="country.code"
              :label="country.name"
              :value="country.code" />
          </el-select>
        </el-form-item>
        <el-form-item label="Preferred day">
          <el-radio-group v-model="selectedPreferredDayValue" @change="onDayChange">
            <el-radio label="Friday" value="FRI" />
            <el-radio label="Monday" value="MON" />
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>
    <el-alert
      v-if="toast.show"
      :title="toast.title"
      :type="toast.type"
      :description="toast.description"
      effect="dark">
    </el-alert>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useSettingsStore } from '@/store/settingsStore'
import { Country } from '@/apis/interfaces'
import { getAppSupportCountries } from '@/apis/get-countries'

interface Toast {
  type: 'success' | 'warning' | 'info' | 'error'
  title: string
  description: string
  show: boolean
}

const {
  selectedYear,
  selectedCountry,
  selectedPreferredDay,
  setYear,
  setCountry,
  setPreferredDay,
  setAppSupportCountries
} = useSettingsStore()

const appSupportYears = [
  2024,
]

const selectedCountryCode = ref('')
const selectedYearValue = ref('')
const selectedPreferredDayValue = ref('')
const appSupportCountries = ref<Country[] | undefined>(undefined)
const toast = ref<Toast>({
  show: false,
  title: '',
  description: '',
  type: 'info',
})

onMounted(async (): Promise<void> => {
  const response = (await getAppSupportCountries()).data
  if (selectedYear) {
    selectedYearValue.value = selectedYear
  }
  if (selectedPreferredDay) {
    selectedPreferredDayValue.value = selectedPreferredDay
  }
  if (response && response.countries) {
    appSupportCountries.value = response.countries
    setAppSupportCountries(response.countries)
    if (selectedCountry) {
      selectedCountryCode.value = selectedCountry
    }
  }
})

const onYearChange = () => {
  setYear(selectedYearValue.value)
  showToast({
    show: true,
    title: 'Success',
    type: 'success',
    description: 'Year updated successfully'
  })
}

const onCountryChange = () => {
  setCountry(selectedCountryCode.value)
  showToast({
    show: true,
    title: 'Success',
    type: 'success',
    description: 'Country updated successfully'
  })
}

const onDayChange = () => {
  setPreferredDay(selectedPreferredDayValue.value)
  showToast({
    show: true,
    title: 'Success',
    type: 'success',
    description: 'Preferred day updated successfully'
  })
}

const showToast = (value: Toast) => {
  toast.value = value
  setTimeout(() => {
    toast.value.show = false
  }, 3000)
}
</script>

<style lang="scss">
.el-alert {
  position: absolute;
  z-index: 9;
  width: 300px;
  top: 20px;
  right: 20px;
}
</style>
