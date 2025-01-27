// facesTimeoutGenerator()

import { calculateDistance } from './calculateDistances.js'
import { calculateTime } from './calculateTime.js'

/// uciac ostatni element sciany 6

const ILOSC_SCIAN_FIGURY = 12

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
  return faces
}

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

const ANIMATION_TIME = Object.keys(SPEED_TIMELINE)[Object.keys(SPEED_TIMELINE).length - 1] // dlugosc animacji w ms
const JUMP = 500 // ms

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
  let lastAngel
  rotatePerTime.forEach(([time, angel], index) => {
    let newAngel = angel
    if (index === rotatePerTime.length - 1) {
      // console.log('angel')
      // console.log(angel)
      // newAngel += 360 / ILOSC_SCIAN_FIGURY - (newAngel % (360 / ILOSC_SCIAN_FIGURY))
      lastAngel = newAngel
      // console.log('lastAngel')
      // console.log(lastAngel)
    }
    keyframeTemplate += `${time}% {
    transform: rotateX(-${newAngel}deg);
    }`
  })
  keyframeTemplate += '} '
  keyframeTemplate += `.animated-box { animation: rotate ${ANIMATION_TIME / 1000}s linear; animation-fill-mode: forwards; }`
  return { keyframeTemplate, finishAngel: lastAngel }
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
      const firstIndex = faces[i].shift()
      // console.log(firstIndex)
      faces[i][0] += firstIndex
    }
  }

  return faces
}

console.log('INTERVALS: ', facesTimeoutGenerator())
console.log('====================================')
console.log('face styles: ', generateBlockStyles())
console.log('====================================')
console.log('face styles: ', templateGenerator().keyframeTemplate)
console.log('====================================')
