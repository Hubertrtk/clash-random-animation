<template>
  <div class="settings-container">
    <div>Chose display column:</div>
    <!-- <select @change="handleChange" v-model="selected">
      <option disabled value="">Please select one</option>
      <option v-for="item in props.columns" :key="item">{{ item }}</option>
    </select> -->
    <button @click="handleStrtButton" class="start-button">START</button>
    <ul class="winner-list">
      <li v-for="item in props.columns" :key="item">
        <p class="description-column">{{ item }}</p>
        <p>{{ winnerData[props.columns.indexOf(item)] }}</p>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { maskPhoneNumber } from '@/helpers/maskPhoneNumber'
import { onMounted, ref } from 'vue'

const props = defineProps({
  columns: Array,
  csvData: Array,
})

// const selected = ref('')
const winnerData = ref([])

const handleStrtButton = () => {
  startAnimation()
  drawWinner()
}

const drawWinner = () => {
  let totalParticipantsIndexArray = Array.from({ length: props.csvData.length }, (_, i) => i)
  const wylosowaneIndeksy = losowanie(totalParticipantsIndexArray, [], 134)
  //131 winner
  const wybraneElementy = wylosowaneIndeksy.map((index) => props.csvData[index])
  console.log(wybraneElementy)
  winnerData.value = wybraneElementy[wybraneElementy.length - 1]
  const displayData = wybraneElementy.map((item) => {
    return `${item[props.columns.indexOf('order_id')]} - ${item[props.columns.indexOf('first_name')]} - ${maskPhoneNumber(item[props.columns.indexOf('phone_number')])}`
  })
  // displayData[131] = 'Hubert Rutkowski'
  startAnimation(displayData)
}

const losowanie = (totalParticipantsIndexArray, wylosowaneIndeksy, iloscLiczbDoWylosowania) => {
  if (iloscLiczbDoWylosowania == 0) {
    return wylosowaneIndeksy
  }
  let losowaLiczba = Math.floor(Math.random() * totalParticipantsIndexArray.length)
  wylosowaneIndeksy.push(totalParticipantsIndexArray[losowaLiczba])
  totalParticipantsIndexArray.splice(losowaLiczba, 1)
  return losowanie(totalParticipantsIndexArray, wylosowaneIndeksy, iloscLiczbDoWylosowania - 1)
}

const startAnimation = (displayData) => {
  localStorage.setItem('key', JSON.stringify(displayData))
}
</script>
<style lang="css" scoped>
.settings-container {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.start-button {
}
.winner-list {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  li {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    border-bottom: 2px solid black;
  }
  .description-column {
    width: 200px;
  }
}
</style>
