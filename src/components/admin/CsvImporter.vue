<template>
  <div class="csv-importer">
    <h2>Import CSV File</h2>
    <input type="file" @change="handleFileUpload" accept=".csv" />
    <div v-if="csvData.length"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['importCsv'])

const headers = ref([])
const csvData = ref([])

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = (e) => {
    const content = e.target.result
    processCsv(content)
  }
  reader.readAsText(file)
}

const processCsv = (content) => {
  const rows = content.split('\n').map((row) => row.trim())
  if (rows.length > 0) {
    headers.value = rows[0].split(',')
    csvData.value = rows.slice(1).map((row) => row.split(','))
  }
  emit('importCsv', { headers: headers.value, csvData: csvData.value })
}
</script>

<style scoped>
.csv-importer {
  margin: 20px;
  font-family: Arial, sans-serif;
}

table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
}

th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}
</style>
