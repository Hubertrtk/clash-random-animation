<template>
  <Menu @changeView="changeView" :currentView="currentView" />
  <Table
    :headers="csv.headers"
    :csvData="csv.csvData"
    v-if="isImported && currentView == ADMIN_VIEWS?.TABLE"
  />
  <CsvImporter v-if="!isImported" @importCsv="handleImportCsv" />
  <AnimationSettings
    :columns="csv.headers"
    :csvData="csv.csvData"
    v-if="isImported && currentView == ADMIN_VIEWS?.ANIMATION_SETTINGS"
  />
</template>
<script setup>
import AnimationSettings from '@/components/admin/AnimationSettings.vue'
import CsvImporter from '@/components/admin/CsvImporter.vue'
import Menu from '@/components/admin/Menu.vue'
import Table from '@/components/admin/Table.vue'
import { ADMIN_VIEWS } from '@/utils/constants'
import { reactive, ref } from 'vue'

const csv = reactive({ headers: [], csvData: [] })
const isImported = ref(false)
const currentView = ref(ADMIN_VIEWS.TABLE)

const changeView = (view) => {
  currentView.value = view
}

const handleImportCsv = ({ headers, csvData }) => {
  csv.headers = headers
  csv.csvData = csvData
  isImported.value = true
}
</script>
