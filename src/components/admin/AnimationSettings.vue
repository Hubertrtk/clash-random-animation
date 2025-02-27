<template>
  <div class="settings-container">
    <div>Chose display column:</div>
    <button @click="handleStrtButton" class="start-button">START</button>
    <button @click="handleDeleteWinner" class="start-button">DELETE WINNER</button>
    <ul class="winner-list">
      <li v-for="item in props.columns" :key="item">
        <p class="description-column">{{ item }}</p>
        <p>{{ winnerData[props.columns.indexOf(item)] }}</p>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { formName, maskPhoneNumber, trimOrderPrefix } from '@/helpers/maskPhoneNumber'
import { onMounted, ref } from 'vue'
const winnerData = ref([])

onMounted(() => {
  const storedWinnerData = JSON.parse(localStorage.getItem('winnerData'))
  if (storedWinnerData) {
    winnerData.value = storedWinnerData // Zaktualizuj winnerData
  }
})

const props = defineProps({
  columns: Array,
  csvData: Array,
})

const handleStrtButton = () => {
  drawWinner()
}

const handleDeleteWinner = () => {
  localStorage.removeItem('winnerData')
  winnerData.value = []
}

const drawWinner = () => {
  let totalParticipantsIndexArray = Array.from({ length: props.csvData.length }, (_, i) => i)
  const wylosowaneIndeksy = losowanie(totalParticipantsIndexArray, [], 134)
  //131 winner
  const wybraneElementy = wylosowaneIndeksy.map((index) => props.csvData[index])
  winnerData.value = wybraneElementy[wybraneElementy.length - 3]
  const displayData = wybraneElementy.map((item) => {
    return {
      orderId: trimOrderPrefix(item[props.columns.indexOf('orderId')]),
      name: formName(
        item[props.columns.indexOf('firstname')],
        item[props.columns.indexOf('lastname')],
      ),
      phone: maskPhoneNumber(
        item[props.columns.indexOf('mobileNumber')],
        item[props.columns.indexOf('mobileCode')],
      ),
    }
  })
  localStorage.setItem('winnerData', JSON.stringify(winnerData.value))
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
  margin: 10px 0;
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
