<template>
  <div class="pagination-wrapper">
    <button @click="() => handleButtons(PAGINATION_ENUM.DECREASE)"><</button>
    <button @click="() => handleButtons(PAGINATION_ENUM.INCREASE)">></button>
  </div>
</template>
<script setup>
import { PAGINATION_ENUM } from '@/utils/constants'

const emit = defineEmits(['pagination'])

const handleButtons = (action) => {
  emit('pagination', action)
}
</script>
<style>
.pagination-wrapper {
}
</style>
