<template>
  <div class="scene">
    <div class="cube animated-box" @animationstart="animationStart">
      <div class="face face1">{{ displayFace3 }}</div>
      <div class="face face2">{{ displayFace4 }}</div>
      <div class="face face3">{{ displayFace5 }}</div>
      <div class="face face4">{{ displayFace2 }}</div>
      <div class="face face5">{{ displayFace1 }}</div>
      <div class="face face6">{{ displayFace6 }}</div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue'
import mockData from './../mockData'
const props = defineProps(['data', 'animationDuration'])
const faces = reactive({
  face1: 1,
  face2: 2,
  face3: 3,
  face4: 4,
  face5: 5,
  face6: 6,
})
const animationName = ref('animation-start')

const facesTimeouts = {
  face1: [833.3333333333334, 2500, 3750],
  face2: [1250, 2500, 3750],
  face3: [1666.6666666666667, 2500, 3750],
  face4: [2083.3333333333335, 2500, 3750],
  face5: [2500, 2500, 3750],
  face6: [2916.6666666666665, 2500, 3750],
}

const exRef = ref(0)

const CONSTANTS = {
  JUMP: 2000,
  MAX_DURATION: 10000,
}

const startAnimation = () => {
  // Tworzenie dynamicznej definicji keyframes
  const style = document.createElement('style')
  style.innerHTML = `
@keyframes rotate { 0% {
    transform: rotateX(0deg);
    }50% {
    transform: rotateX(720deg);
    }100% {
    transform: rotateX(1080deg);
    }}

        .animated-box {
          animation: rotate 10s linear;
        }
      `
  document.head.appendChild(style)
}

const runTimeout = (array, face, currentIndex = 0) => {
  console.log(currentIndex)
  if (currentIndex == array.length) {
    return
  }
  setTimeout(() => {
    exRef.value++
    console.log('change ' + face)
    currentIndex += 1
    faces[face] += 6
    runTimeout(array, face, currentIndex)
  }, array[currentIndex])
}

onMounted(() => {
  console.log('mounted')
  startAnimation()
  for (const [key, value] of Object.entries(facesTimeouts)) {
    runTimeout(value, key)
  }
})

const animationStart = () => {
  let i = 0
  // console.log(i)

  // setInterval(() => {
  //   console.log(i)
  //   i++
  // }, 1000)
}

const displayFace1 = computed(() => {
  return mockData[faces.face1]
})

const displayFace2 = computed(() => {
  return mockData[faces.face2]
})

const displayFace3 = computed(() => {
  return mockData[faces.face3]
})

const displayFace4 = computed(() => {
  return mockData[faces.face4]
})

const displayFace5 = computed(() => {
  return mockData[faces.face5]
})

const displayFace6 = computed(() => {
  return mockData[faces.face6]
})
</script>
<style scoped>
.scene {
  width: 250px;
  height: 200px;
  position: relative;
  perspective: 800px;
}

.cube {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  /* animation: rotate 5000ms 1 linear; */
  /* animation-duration: 10s; */
  /* animation-timing-function: cubic-bezier(0.1, 0, 0.67, 1); */
  /* animation-timing-function: linear; */
  /* animation-name: rotate; */
}

.face {
  position: absolute;
  width: 400px;
  height: 231px;
  background: rgba(255, 255, 255, 0.8);
  border-top: 1px solid rgb(49, 104, 221);
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  /* Ukrycie tylnej strony */
  letter-spacing: 10px;
}

.face1 {
  transform: rotateX(300deg) translateZ(200px);
}
.face2 {
  transform: rotateX(240deg) translateZ(200px);
}
.face3 {
  transform: rotateX(180deg) translateZ(200px);
}
.face4 {
  transform: rotateX(0deg) translateZ(200px);
}
.face5 {
  transform: rotateX(60deg) translateZ(200px);
}
.face6 {
  transform: rotateX(120deg) translateZ(200px);
}

/* @keyframes rotate {
  0% {
    transform: rotateX(0deg);
  }
  20% {
    transform: rotateX(360deg);
  }
  50% {
    transform: rotateX(720deg);
  }
  100% {
    transform: rotateX(1080deg);
  }
} */
</style>
