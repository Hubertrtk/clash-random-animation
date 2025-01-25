// facesTimeoutGenerator()

import { calculateDistance, calculateDistances } from './calculateDistances.js'
import { calculateTime } from './calculateTime.js'

/// uciac ostatni element sciany 6

const ILOSC_SCIAN_FIGURY = 10

export const generateBlockStyles = () => {
  let faces = {}
  let SINGLE_ANGEL = 360 / ILOSC_SCIAN_FIGURY
  for (let i = 1; i <= ILOSC_SCIAN_FIGURY; i++) {
    // jesli 360 to ma byc zero
    let updateOnClick =
      ILOSC_SCIAN_FIGURY / 4 + i - 1 >= ILOSC_SCIAN_FIGURY
        ? ILOSC_SCIAN_FIGURY / 4 + i - 1 - ILOSC_SCIAN_FIGURY
        : ILOSC_SCIAN_FIGURY / 4 + i - 1
    faces[`face${i}`] = { rotateX: SINGLE_ANGEL * (i - 1), updateOnClick }
  }
  for (const [face, value] of Object.entries(faces)) {
    value.face = face
    value.transformStyles = `rotateX(${value.rotateX}deg) translateZ(200px)`
  }
  let template = ''
  for (const [, value] of Object.entries(faces)) {
    template += value.cssTemplate
  }
  return { template, faces, wallAmmount: ILOSC_SCIAN_FIGURY }
}

// let TIMELINE_JUMP = []
// for (let i = 0; i <= ANIMATION_TIME; i += JUMP) {
//   TIMELINE_JUMP.push(i)
// }

/**
 * klucz - os czasu (ms)
 * wartosc - predkosc utzymywana do tego czasu ( deg/1000ms ) od poprzedniego klucza
 */
const SPEED_TIMELINE = {
  500: 1,
  1000: 5,
  1500: 12,
  2000: 22,
  2500: 34,
  3000: 49,
  3500: 66,
  4000: 86,
  4500: 109,
  5000: 135,
  5500: 163,
  6000: 194,
  6500: 228,
  7000: 265,
  7500: 304,
  8000: 346,
  8500: 390,
  9000: 437,
  9500: 487,
  10000: 540,
  10500: 541,
  11000: 488,
  11500: 438,
  12000: 391,
  12500: 347,
  13000: 305,
  13500: 266,
  14000: 229,
  14500: 195,
  15000: 164,
  15500: 136,
  16000: 110,
  16500: 87,
  17000: 67,
  17500: 50,
  18000: 35,
  18500: 23,
  19000: 13,
  19500: 6,
  20000: 2,
}

const ANIMATION_TIME = 20 * 1000 //ms
const JUMP = 500 // ms

console.log('calculateTime(SPEED_TIMELINE, 360)')
console.log(calculateTime(SPEED_TIMELINE, 360))

export const templateGenerator = () => {
  /**
   * [procent animacji, kat obrotu]
   */
  const rotatePerTime = []
  for (let time = JUMP; time <= ANIMATION_TIME; time += JUMP) {
    const rotate = calculateDistance(SPEED_TIMELINE, time)
    rotatePerTime.push([(time / ANIMATION_TIME) * 100, rotate])
  }
  let keyframeTemplate = '@keyframes rotate { '
  keyframeTemplate += `0% {
    transform: rotateX(0deg);
    }`
  rotatePerTime.forEach(([time, angel]) => {
    keyframeTemplate += `${time}% {
    transform: rotateX(-${angel}deg);
    }`
  })
  keyframeTemplate += '} '
  keyframeTemplate += `.animated-box { animation: rotate ${ANIMATION_TIME / 1000}s linear; animation-fill-mode: forwards; }`
  return { keyframeTemplate, finishAngel: rotatePerTime[rotatePerTime.length - 1][1] }
}

function reorderArray(arrays, firstElement) {
  // Find the index of the subarray where the first element is equal to firstElement
  const targetIndex = arrays.findIndex((subarray) => subarray[0] === firstElement)

  if (targetIndex === -1) {
    // If no such subarray is found, return the original array
    return arrays
  }

  // Split the array into two parts: before and after the target index
  const beforeTarget = arrays.slice(0, targetIndex)
  const afterTarget = arrays.slice(targetIndex)

  // Concatenate the two parts, starting with the target index
  return afterTarget.concat(beforeTarget)
}

export const facesTimeoutGenerator = () => {
  const finishAngel = templateGenerator().finishAngel
  let faces = []
  const faceAngel = 360 / ILOSC_SCIAN_FIGURY
  for (let i = 1; i <= ILOSC_SCIAN_FIGURY; i++) {
    let updateAngels = []
    let startAngel = faceAngel * (i - 1)
    for (let i = startAngel; i <= finishAngel; i += 360) {
      updateAngels.push(i)
    }
    faces.push(updateAngels)
  }
  faces = reorderArray(faces, 180)
  faces.forEach((intervalsArray, index) => {
    faces[index] = intervalsArray.map((interval) => {
      return calculateTime(SPEED_TIMELINE, interval) || 0
    })
  })
  faces = faces.map((array) => {
    for (let i = array.length - 1; i > 0; i--) {
      array[i] = array[i] - array[i - 1]
    }
    return array
  })

  /// !!!!!!!!!!!!!!!!!!!!!!!
  // usuwamy pierwsze elementy z ostatnich 3 indeksow TODO nie powinno updatowac scian z tylu
  for (let i = ILOSC_SCIAN_FIGURY / 2; i < ILOSC_SCIAN_FIGURY; i++) {
    if (faces[i].length > 1) {
      console.log('usuwam dla ' + faces[i])
      const firstIndex = faces[i].shift()
      // console.log(firstIndex)
      faces[i][0] += firstIndex
      console.log(faces[i][0])
      console.log('=========')
    }
  }

  return faces
}

console.log('timeouts:')
console.log(facesTimeoutGenerator())
console.log('==============================')
console.log('templateGenerator().keyframeTemplate')
console.log(templateGenerator().keyframeTemplate)
console.log('==============================')
console.log('generateBlockStyles().faces')
console.log(generateBlockStyles().faces)
