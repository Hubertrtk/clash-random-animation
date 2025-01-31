<template>
  <div class="scene">
    <div class="cube animated-box">
      <div
        class="face"
        :class="value.face"
        v-for="value in facesDisplayData"
        :key="value.face"
        :style="{
          transform: value.transformStyles,
          // background: `hsl(60, 100%, 37.5%)`,
        }"
      >
        {{ props.displayData[facesDisplayData[value.face]?.data] }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue'

const facesDisplayData = reactive({
  face1: {
    rotateX: 0,
    updateOnClick: 3,
    face: 'face1',
    transformStyles: 'rotateX(0deg) translateZ(200px)',
  },
  face2: {
    rotateX: 30,
    updateOnClick: 4,
    face: 'face2',
    transformStyles: 'rotateX(30deg) translateZ(200px)',
  },
  face3: {
    rotateX: 60,
    updateOnClick: 5,
    face: 'face3',
    transformStyles: 'rotateX(60deg) translateZ(200px)',
  },
  face4: {
    rotateX: 90,
    updateOnClick: 6,
    face: 'face4',
    transformStyles: 'rotateX(90deg) translateZ(200px)',
  },
  face5: {
    rotateX: 120,
    updateOnClick: 7,
    face: 'face5',
    transformStyles: 'rotateX(120deg) translateZ(200px)',
  },
  face6: {
    rotateX: 150,
    updateOnClick: 8,
    face: 'face6',
    transformStyles: 'rotateX(150deg) translateZ(200px)',
  },
  face7: {
    rotateX: 180,
    updateOnClick: 9,
    face: 'face7',
    transformStyles: 'rotateX(180deg) translateZ(200px)',
  },
  face8: {
    rotateX: 210,
    updateOnClick: 10,
    face: 'face8',
    transformStyles: 'rotateX(210deg) translateZ(200px)',
  },
  face9: {
    rotateX: 240,
    updateOnClick: 11,
    face: 'face9',
    transformStyles: 'rotateX(240deg) translateZ(200px)',
  },
  face10: {
    rotateX: 270,
    updateOnClick: 0,
    face: 'face10',
    transformStyles: 'rotateX(270deg) translateZ(200px)',
  },
  face11: {
    rotateX: 300,
    updateOnClick: 1,
    face: 'face11',
    transformStyles: 'rotateX(300deg) translateZ(200px)',
  },
  face12: {
    rotateX: 330,
    updateOnClick: 2,
    face: 'face12',
    transformStyles: 'rotateX(330deg) translateZ(200px)',
  },
})

const props = defineProps({
  displayData: Number,
})

onMounted(() => {
  let i = 1
  for (const [face] of Object.entries(facesDisplayData)) {
    facesDisplayData[face] = { data: i, ...facesDisplayData[face] }
    i++
  }
  let intervals = [
    [4390, 2058, 1236, 944, 777, 676, 692, 804, 992, 1349, 2525],
    [4634, 1934, 1203, 925, 771, 669, 699, 819, 1014, 1389, 2817],
    [4856, 1826, 1175, 908, 760, 667, 704, 835, 1035, 1445, 3219],
    [5065, 1730, 1149, 889, 748, 666, 710, 850, 1057, 1501, 4027],
    [5249, 1659, 1119, 875, 735, 666, 718, 863, 1079, 1559],
    [5433, 1586, 1085, 867, 721, 666, 732, 871, 1109, 1635],
    [5598, 1519, 1064, 854, 713, 666, 744, 884, 1141, 1705],
    [5753, 1463, 1042, 839, 706, 666, 758, 902, 1167, 1789],
    [5908, 1407, 1020, 824, 700, 668, 768, 920, 1193, 1898],
    [6053, 1360, 999, 808, 694, 675, 775, 938, 1223, 2007],
    [6185, 1326, 978, 793, 688, 680, 782, 956, 1268, 2149],
    [6316, 1281, 962, 784, 682, 687, 788, 975, 1312, 2311],
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
    face.data += 12
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
    transform: rotateX(-3900deg);
    }} .animated-box { animation: rotate 20s linear; animation-fill-mode: forwards; }`
  document.head.appendChild(style)
}
</script>
<style scoped>
.scene {
  width: 720px;
  /* dodane */
  width: 900px;
  height: 500px;
  position: relative;
  perspective: 800px;
  /* border: 2px solid rgba(177, 42, 255, 0.952); */
  &::after {
    content: '';
    position: absolute;
    left: 100%;
    top: 40%;
    height: 100px;
    width: 140px;
    border: 5px solid #ffcc00;
    z-index: -12;
    background: white;
    border-left: none;
    border-radius: 20px;
  }
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 40%;
    height: 100px;
    width: 140px;
    border: 5px solid #ffcc00;
    border-right: none;
    background: white;
    z-index: -12;
    border-radius: 20px;
  }
  /* overflow: hidden; */
}

.cube {
  position: absolute;
  transform-style: preserve-3d;
  width: 100%;
  /* dodane */
  width: 720px;
  height: 100%;
  /* border: 2px solid red; */
  left: 90px;
}

.face {
  position: absolute;
  height: 100px;
  left: 0;
  right: 0;
  bottom: calc(50% - 52px);

  /* background: hsl(221, 27%, 58%); */
  /* border-top: 1px solid rgb(49, 104, 221); */
  border: 2px solid white;
  /* border: 2px solid #ff3b30; */
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  /* Ukrycie tylnej strony */
  text-align: center;
  letter-spacing: 10px;

  color: #fff;
  color: #4b0082;
  color: black;

  letter-spacing: 4px;
  font-weight: 750;
  font-family: 'Saira', serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings: 'wdth' 111.2;
  font-size: 19px;

  background: rgb(255, 255, 178);
  background: radial-gradient(circle, rgba(255, 255, 178, 1) 0%, rgba(255, 254, 0, 1) 100%);

  z-index: 10;
  background: linear-gradient(45deg, #ffec5f, #ffc700);
  box-shadow: 0 4px 15px rgba(255, 200, 0, 0.6);
  border: 2px solid #ffcc00;
  border-radius: 10px;

  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 0 10px rgba(255, 255, 0, 0.8);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 255, 0, 1);
  }
}
</style>
