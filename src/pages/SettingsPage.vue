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
            v-model="selectedCountry"
            placeholder="please select your country"
          >
            <el-option
              v-for="country in appSupportCountries"
              :key="country.code"
              :label="country.name"
              :value="country.code" />
          </el-select>
        </el-form-item>
        <el-form-item label="Preferred day">
          <el-radio-group v-model="selectedPreferredDay">
            <el-radio label="Friday" value="FRI" />
            <el-radio label="Monday" value="MON" />
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useSettingsStore } from '@/store/settingsStore'
import { getAppSupportCountries } from '@/apis/get-countries'

const {
  selectedYear,
  selectedCountry,
  selectedPreferredDay,
  appSupportCountries,
  setYear,
  setCountry,
  setPreferredDay,
  setAppSupportCountries
} = useSettingsStore()

const appSupportYears = [
  2024,
]

onMounted(async (): Promise<void> => {
  const response = (await getAppSupportCountries()).data
  if (response && response.countries) {
    setAppSupportCountries(response.countries)
  }
})

</script>

<style lang="scss"></style>
