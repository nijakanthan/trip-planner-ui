<template>
  <div class="route-content">
    <div class="header">
      <p>Settings</p>
    </div>
    <vr />
    <div class="value">
      <el-form :model="settings" label-width="auto">
        <el-form-item label="Year">
          <el-select
            v-model="settings.year"
            placeholder="please select the year"
          >
            <el-option
              v-for="year in availableYears"
              :key="year"
              :label="year"
              :value="year" />
          </el-select>
        </el-form-item>
        <el-form-item label="Country">
          <el-select
            v-model="settings.countryCode"
            placeholder="please select your country"
          >
            <el-option
              v-for="country in countries"
              :key="country.code"
              :label="country.name"
              :value="country.code" />
          </el-select>
        </el-form-item>
        <el-form-item label="Preferred day">
          <el-radio-group v-model="settings.preferredDay">
            <el-radio label="Friday" value="FRI" />
            <el-radio label="Monday" value="MON" />
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const availableYears = [
  2024,
]

const countries = [
  {
    name: 'Sri Lanka',
    code: 'LK'
  },
  {
    name: 'United States',
    code: 'US'
  },
  {
    name: 'India',
    code: 'IN'
  },
  {
    name: 'Japan',
    code: 'JP'
  }
]

const settings = reactive({
  year: 2024,
  countryCode: 'LK',
  preferredDay: 'FRI',
})
</script>

<style lang="scss"></style>
