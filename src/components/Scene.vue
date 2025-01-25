<template>
  <div class="scene">
    <div class="cube animated-box">
      <div
        class="face"
        :class="value.face"
        v-for="value in facesDisplayData"
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

const facesDisplayData = reactive({
  face1: {
    rotateX: 0,
    updateOnClick: 2.5,
    face: 'face1',
    transformStyles: 'rotateX(0deg) translateZ(200px)',
  },
  face2: {
    rotateX: 36,
    updateOnClick: 3.5,
    face: 'face2',
    transformStyles: 'rotateX(36deg) translateZ(200px)',
  },
  face3: {
    rotateX: 72,
    updateOnClick: 4.5,
    face: 'face3',
    transformStyles: 'rotateX(72deg) translateZ(200px)',
  },
  face4: {
    rotateX: 108,
    updateOnClick: 5.5,
    face: 'face4',
    transformStyles: 'rotateX(108deg) translateZ(200px)',
  },
  face5: {
    rotateX: 144,
    updateOnClick: 6.5,
    face: 'face5',
    transformStyles: 'rotateX(144deg) translateZ(200px)',
  },
  face6: {
    rotateX: 180,
    updateOnClick: 7.5,
    face: 'face6',
    transformStyles: 'rotateX(180deg) translateZ(200px)',
  },
  face7: {
    rotateX: 216,
    updateOnClick: 8.5,
    face: 'face7',
    transformStyles: 'rotateX(216deg) translateZ(200px)',
  },
  face8: {
    rotateX: 252,
    updateOnClick: 9.5,
    face: 'face8',
    transformStyles: 'rotateX(252deg) translateZ(200px)',
  },
  face9: {
    rotateX: 288,
    updateOnClick: 0.5,
    face: 'face9',
    transformStyles: 'rotateX(288deg) translateZ(200px)',
  },
  face10: {
    rotateX: 324,
    updateOnClick: 1.5,
    face: 'face10',
    transformStyles: 'rotateX(324deg) translateZ(200px)',
  },
})

const props = defineProps({
  rotate: Number,
})

onMounted(() => {
  let i = 1
  for (const [face] of Object.entries(facesDisplayData)) {
    facesDisplayData[face] = { data: i, ...facesDisplayData[face] }
    i++
  }
  let intervals = [
    [4390, 2058, 1236, 944, 777, 676, 692, 804, 992, 1349, 2525],
    [4678, 1913, 1197, 922, 769, 668, 700, 822, 1018, 1401, 2875],
    [4945, 1782, 1165, 900, 756, 666, 707, 840, 1044, 1467, 3471],
    [5175, 1688, 1133, 879, 739, 667, 713, 859, 1070, 1534],
    [5396, 1603, 1090, 868, 724, 666, 729, 870, 1101, 1621],
    [5598, 1519, 1064, 854, 713, 666, 744, 884, 1141, 1705],
    [5784, 1452, 1038, 835, 705, 666, 760, 906, 1172, 1811],
    [5970, 1384, 1012, 817, 698, 671, 770, 928, 1204, 1940],
    [6132, 1341, 985, 799, 691, 677, 780, 949, 1249, 2093],
    [6290, 1290, 965, 786, 683, 685, 788, 970, 1303, 2269],
  ]
  intervals.forEach((intervalArray, index) => {
    runTimeout(intervalArray, facesDisplayData[`face${index + 1}`])
  })
  startAnimation()
})

const runTimeout = (array, face, currentIndex = 0) => {
  if (currentIndex == array.length) {
    return
  }
  setTimeout(() => {
    currentIndex += 1
    //update
    face.data += 10
    //============
    runTimeout(array, face, currentIndex)
  }, array[currentIndex])
}

const startAnimation = () => {
  // Tworzenie dynamicznej definicji keyframes
  const style = document.createElement('style')
  style.innerHTML = `@keyframes rotate { 0% {
    transform: rotateX(0deg);
    }2.5% {
    transform: rotateX(-0.5deg);
    }5% {
    transform: rotateX(-3deg);
    }7.5% {
    transform: rotateX(-9deg);
    }10% {
    transform: rotateX(-20deg);
    }12.5% {
    transform: rotateX(-37deg);
    }15% {
    transform: rotateX(-61.5deg);
    }17.5% {
    transform: rotateX(-94.5deg);
    }20% {
    transform: rotateX(-137.5deg);
    }22.5% {
    transform: rotateX(-192deg);
    }25% {
    transform: rotateX(-259.5deg);
    }27.500000000000004% {
    transform: rotateX(-341deg);
    }30% {
    transform: rotateX(-438deg);
    }32.5% {
    transform: rotateX(-552deg);
    }35% {
    transform: rotateX(-684.5deg);
    }37.5% {
    transform: rotateX(-836.5deg);
    }40% {
    transform: rotateX(-1009.5deg);
    }42.5% {
    transform: rotateX(-1204.5deg);
    }45% {
    transform: rotateX(-1423deg);
    }47.5% {
    transform: rotateX(-1666.5deg);
    }50% {
    transform: rotateX(-1936.5deg);
    }52.5% {
    transform: rotateX(-2207deg);
    }55.00000000000001% {
    transform: rotateX(-2451deg);
    }57.49999999999999% {
    transform: rotateX(-2670deg);
    }60% {
    transform: rotateX(-2865.5deg);
    }62.5% {
    transform: rotateX(-3039deg);
    }65% {
    transform: rotateX(-3191.5deg);
    }67.5% {
    transform: rotateX(-3324.5deg);
    }70% {
    transform: rotateX(-3439deg);
    }72.5% {
    transform: rotateX(-3536.5deg);
    }75% {
    transform: rotateX(-3618.5deg);
    }77.5% {
    transform: rotateX(-3686.5deg);
    }80% {
    transform: rotateX(-3741.5deg);
    }82.5% {
    transform: rotateX(-3785deg);
    }85% {
    transform: rotateX(-3818.5deg);
    }87.5% {
    transform: rotateX(-3843.5deg);
    }90% {
    transform: rotateX(-3861deg);
    }92.5% {
    transform: rotateX(-3872.5deg);
    }95% {
    transform: rotateX(-3879deg);
    }97.5% {
    transform: rotateX(-3882deg);
    }100% {
    transform: rotateX(-3883deg);
    }} .animated-box { animation: rotate 20s linear; animation-fill-mode: forwards; }`
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
