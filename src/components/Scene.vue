<template>
  <div class="scene">
    <div class="cube animated-box">
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
import { generateBlockStyles, templateGenerator } from '../helpers/keyFrameGenerator'

const facesDisplayData = reactive({})

const props = defineProps({
  rotate: Number,
})

onMounted(() => {
  let i = 1
  for (const [face, value] of Object.entries(generateBlockStyles().faces)) {
    facesDisplayData[face] = { data: i++, updateOnClick: value.updateOnClick }
    console.log('i')
    console.log(i)
    // runTimeout(generateTimeOuts()[i - 2], facesDisplayData[face])
  }
  startAnimation()
})

const runTimeout = (array, face, currentIndex = 0) => {
  if (currentIndex == array.length) {
    return
  }
  setTimeout(() => {
    currentIndex += 1
    //update
    face.data += generateBlockStyles().wallAmmount
    //============
    runTimeout(array, face, currentIndex)
  }, array[currentIndex])
}

const startAnimation = () => {
  // Tworzenie dynamicznej definicji keyframes
  const style = document.createElement('style')
  style.innerHTML = templateGenerator().keyframeTemplate
  document.head.appendChild(style)
}
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
