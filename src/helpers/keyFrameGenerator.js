// facesTimeoutGenerator()

import { calculateDistance, calculateDistances } from './calculateDistances.js'
import { calculateTime } from './calculateTime.js'

/// uciac ostatni element sciany 6

const ILOSC_SCIAN_FIGURY = 6

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
  5000: 180,
  10000: 180,
}

const ANIMATION_TIME = 10 * 1000 //ms
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

export const facesTimeoutGenerator = () => {
  const finishAngel = templateGenerator().finishAngel
  console.log('finishAngel ' + finishAngel)
  const faces = []
  const faceAngel = 360 / ILOSC_SCIAN_FIGURY
  for (let i = 1; i <= ILOSC_SCIAN_FIGURY; i++) {
    let updateAngels = []
    let startAngel = faceAngel * (i - 1)
    for (let i = startAngel; i <= finishAngel; i += 360) {
      updateAngels.push(i)
    }
    let intervals = []
    updateAngels.forEach((angel) => {
      intervals.push(angel)
      // const interval = calculateTime(SPEED_TIMELINE, angel)
      // if (interval !== undefined) {
      //   intervals.push(interval)
      // }
    })
    faces.push(intervals)
  }
  return faces
}

// console.log(facesTimeoutGenerator())
console.log(templateGenerator().keyframeTemplate)
