<template>
  <div>
    <input type="text" v-model="search" placeholder="Search" @input="handleChange" />
    <select @change="handleChange" v-model="selected">
      <option disabled value="">Please select one</option>
      <option v-for="item in props.selectOptions" :key="item">{{ item }}</option>
    </select>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const emit = defineEmits(['filter'])

const props = defineProps({
  selectOptions: Number,
})

const search = ref('')
const selected = ref('')

const handleChange = () => {
  emit('filter', { search: search.value, selected: selected.value })
}
</script>
