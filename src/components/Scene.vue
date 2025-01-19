<template>
  <div class="scene">
    <div
      :key="animationRound"
      class="cube"
      @animationend="onAnimationEnd"
      :style="{
        animationDuration: `${animationDurationTime}ms`,
      }"
      :class="canimationName"
    >
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
import { computed, reactive, ref, watch } from 'vue'
import mockData from './../mockData'
const props = defineProps(['data', 'animationDuration'])
const animationRound = ref(1000)
const faces = reactive([1, 2, 3, 4, 5, 6])
const animationName = ref('animation-start')

const CONSTANTS = {
  JUMP: 2000,
  MAX_DURATION: 10000,
}

const displayFace1 = computed(() => {
  return mockData[faces[0]]
})

const displayFace2 = computed(() => {
  return mockData[faces[1]]
})

const displayFace3 = computed(() => {
  return mockData[faces[2]]
})

const displayFace4 = computed(() => {
  return mockData[faces[3]]
})

const displayFace5 = computed(() => {
  return mockData[faces[4]]
})

const displayFace6 = computed(() => {
  return mockData[faces[5]]
})

const onAnimationEnd = () => {
  console.log(animationRound.value)
  if (animationRound.value < CONSTANTS.MAX_DURATION) {
    animationRound.value = animationRound.value + CONSTANTS.JUMP
    activateTextChange()
    console.log('new keys')
    // gdy jest ostatni obrot
    if (animationRound.value >= CONSTANTS.MAX_DURATION) {
      animationName.value = 'animation-end'
      console.log('zmianla')
    }
  }
}

const activateTextChange = () => {
  setTimeout(() => {
    faces[0] += 6
  }, animationRound.value / 6)
  setTimeout(
    () => {
      faces[1] += 6
    },
    (animationRound.value / 6) * 2,
  )
  setTimeout(
    () => {
      faces[2] += 6
    },
    (animationRound.value / 6) * 3,
  )
  setTimeout(
    () => {
      faces[3] += 6
    },
    (animationRound.value / 6) * 4,
  )
  setTimeout(
    () => {
      faces[4] += 6
    },
    (animationRound.value / 6) * 5,
  )
  setTimeout(
    () => {
      faces[5] += 6
    },
    (animationRound.value / 6) * 6,
  )
}

const canimationName = computed(() => {
  return animationName.value
})

const animationDurationTime = computed(() => {
  return animationRound.value
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
  animation-duration: 10s;
  /* animation-timing-function: cubic-bezier(0.1, 0, 0.67, 1); */
  animation-timing-function: linear;
}

.animation-start {
  animation-name: rotate;
}

.animation-end {
  animation-name: rotateLast;
}

.face {
  position: absolute;
  width: 400px;
  height: 231px;
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  /* Ukrycie tylnej strony */
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

@keyframes rotate {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(360deg);
  }
}

@keyframes rotateLast {
  0% {
    transform: rotateX(0deg);
  }
  90% {
    transform: rotateX(380deg);
  }
  100% {
    transform: rotateX(360deg);
  }
}
</style>
