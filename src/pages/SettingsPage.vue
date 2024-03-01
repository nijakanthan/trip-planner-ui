<template>
  <div class="route-content">
    <div class="header">
      <p>Settings</p>
    </div>
    <vr />
    <div class="value">
      <el-form :model="settings" label-width="auto">
        <el-form-item label="Country">
          <el-select
            v-model="settings.countryCode"
            placeholder="please select your country"
          >
            <el-option
              v-for="country in countries"
              :key="country.value"
              :label="country.label"
              :value="country.value" />
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

const countries = [
  {
    label: 'Sri Lanka',
    value: 'SL'
  },
  {
    label: 'United States',
    value: 'US'
  },
  {
    label: 'India',
    value: 'IN'
  },
  {
    label: 'Japan',
    value: 'JP'
  }
]

const settings = reactive({
  countryCode: 'SL',
  preferredDay: 'FRI',
})
</script>

<style lang="scss"></style>
