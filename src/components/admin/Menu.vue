<template>
  <nav>
    <ul>
      <li @click="() => handleChange(ADMIN_VIEWS.TABLE)">Table</li>
      <li @click="() => handleChange(ADMIN_VIEWS.ANIMATION_SETTINGS)">settings</li>
    </ul>
  </nav>
</template>
<script setup>
import { ADMIN_VIEWS } from '@/utils/constants'

const props = defineProps({
  currentView: Number,
})
const emit = defineEmits(['changeView'])

const handleChange = (view) => {
  emit('changeView', view)
}
</script>
<style scoped>
nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  border-bottom: 2px solid black;
  ul {
    display: flex;
    list-style: none;
    padding: 0 20px;
    li {
      margin: 0 10px;
      cursor: pointer;
    }
  }
}
</style>
