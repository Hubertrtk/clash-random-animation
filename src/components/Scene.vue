<template>
  <div class="scene">
    <div class="cube" :style="{ transform: computedRoate }">
      <div
        class="face"
        :class="value.face"
        v-for="value in generateBlockStyles().faces"
        :key="value.face"
        :style="{ transform: value.transformStyles }"
      >
        {{ facesDisplayData[value.face]?.data }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { generateBlockStyles } from '../helpers/keyFrameGenerator'

const facesDisplayData = reactive({})
const round = ref(0)
const click = ref(0)

const props = defineProps({
  rotate: Number,
})

onMounted(() => {
  let i = 1
  for (const [face, value] of Object.entries(generateBlockStyles().faces)) {
    console.log(value)
    facesDisplayData[face] = { data: i++, updateOnClick: value.updateOnClick }
  }
})

watch(
  () => props.rotate,
  (value) => {
    click.value++
    if (click.value % generateBlockStyles().wallAmmount === 0) {
      console.log('zwiekszam round')
      round.value++
    }
    console.log(round.value)
    for (const [face, value] of Object.entries(facesDisplayData)) {
      if (value.updateOnClick + generateBlockStyles().wallAmmount * round.value == click.value) {
        console.log('update' + face)
        value.data += generateBlockStyles().wallAmmount
      }
    }
  },
)

const checkIfUpdate = (faceData, relativeRotate) => {}

const computedRoate = computed(() => {
  return `rotateX(${props.rotate}deg)`
})
</script>
<style scoped>
.scene {
  width: 250px;
  height: 200px;
  position: relative;
  perspective: 800px;
  border: 2px solid orange;
}

.cube {
  position: absolute;
  transform-style: preserve-3d;
  transition: 1000ms;
  border: 2px solid red;
  width: 100%;
  height: 100%;
}

.face {
  position: absolute;
  /* width: 400px;
   */
  height: 60px;
  left: 0;
  right: 0;
  bottom: calc(50% - 60px / 2);

  background: rgba(255, 255, 255, 0.8);
  /* border-top: 1px solid rgb(49, 104, 221); */
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  /* backface-visibility: hidden; */
  /* Ukrycie tylnej strony */
  letter-spacing: 10px;
}
</style>
