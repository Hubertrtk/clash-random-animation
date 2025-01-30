<template>
  <div class="container">
    <TableTools @filter="handleFilter" :selectOptions="props.headers" />
    <Pagination @pagination="handleRangeChange" />
    <table>
      <thead>
        <tr>
          <th v-for="item in props.headers" :key="item">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in csvData" :key="item">
          <td v-for="columnData in item" :key="columnData">
            {{ columnData }}
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination @pagination="handleRangeChange" />
  </div>
</template>
<script setup>
import { computed, reactive, ref } from 'vue'
import { PAGINATION_ENUM } from '@/utils/constants'
import Pagination from './Pagination.vue'
import TableTools from './TableTools.vue'

const range = ref(0)
const filterData = reactive({ search: '', selected: '' })

const handleFilter = (data) => {
  filterData.search = data.search
  filterData.selected = data.selected
  if (filterData.search && filterData.selected) {
    console.log('ustawiamtage 0')
    range.value = 0
  }
}

const handleRangeChange = (value) => {
  switch (value) {
    case PAGINATION_ENUM.DECREASE:
      if (range.value === 0) return
      range.value -= 500
      break
    case PAGINATION_ENUM.INCREASE:
      if (range.value + 500 > props.csvData.length) return
      range.value += 500
      break
  }
}

const props = defineProps({
  headers: Array,
  csvData: Array,
})

const csvData = computed(() => {
  const indexFilter = props.headers.indexOf(filterData.selected)
  let array = props.csvData
  array = array.filter((item, index) => {
    if (!filterData.selected || !filterData.search) {
      return item
    }
    if (filterData.selected && indexFilter) {
      if (
        item[indexFilter] &&
        item[indexFilter].toLowerCase().includes(filterData.search.toLowerCase())
      ) {
        return item
      }
    }
  })
  return array.slice(range.value, range.value + 500)
})
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.container {
  /* background-color: black; */
  margin-top: 50px;
}
thead {
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.5); /* Półprzezroczyste białe tło */
  backdrop-filter: blur(10px); /* Rozmycie tła za elementem */
  -webkit-backdrop-filter: blur(10px); /* Dla wsparcia w Safari */
  /* border-radius: 10px;  */
  /* padding: 20px; */
  /* box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);  */
  border-bottom: 1px solid grey;
}
tr {
  border: 1px solid black;
}
td {
  /* background-color: white; */
}
table {
  width: 100%;
  border-collapse: collapse;
}
</style>
