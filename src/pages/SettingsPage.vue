<template>
  <div class="route-content">
    <div class="header">
      <p>Settings</p>
    </div>
    <vr />
    <div class="value">
      <el-form label-width="auto">
        <el-form-item label="Year">
          <el-select
            v-model="selectedYear"
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
          <el-radio-group v-model="selectedPreferredDay" @change="onDayChange">
            <el-radio label="Friday" value="FRI" />
            <el-radio label="Monday" value="MON" />
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useSettingsStore } from '@/store/settingsStore'
import { Country } from '@/apis/interfaces'
import { getAppSupportCountries } from '@/apis/get-countries'

const {
  setYear,
  setCountry,
  setPreferredDay,
  setAppSupportCountries
} = useSettingsStore()

const appSupportYears = [
  2024,
]

const selectedCountryCode = ref('')
const selectedYear = ref('')
const selectedPreferredDay = ref('')
const appSupportCountries = ref<Country[] | undefined>(undefined)

onMounted(async (): Promise<void> => {
  const response = (await getAppSupportCountries()).data
  if (response && response.countries) {
    appSupportCountries.value = response.countries
    setAppSupportCountries(response.countries)
  }
})

const onYearChange = () => {
  setYear(selectedYear.value)
}

const onCountryChange = () => {
  setCountry(selectedCountryCode.value)
}

const onDayChange = () => {
  setPreferredDay(selectedPreferredDay.value)
}
</script>

<style lang="scss"></style>
