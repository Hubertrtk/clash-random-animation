// facesTimeoutGenerator()

import { calculateDistances } from './calculateDistances.js'

/// uciac ostatni element sciany 6

const ILOSC_SCIAN_FIGURY = 4

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

// tzyma info ile zrobilo dystansu  od poprzedniej
const TIMELINE = {
  [1000]: 1, //1
  [3000]: 1, //2
  [5000]: 3, //5 jakie jest to laczny dystans
  [10000]: 1, //6
}

const ANIMATION_TIME = 20 * 1000 //ms
const JUMP = 200 //ms

let TIMELINE_JUMP = []
for (let i = 0; i <= ANIMATION_TIME; i += JUMP) {
  TIMELINE_JUMP.push(i)
}

/**
 * klucz - os czasu (ms)
 * wartosc - predkosc utzymywana do tego czasu ( deg/1000ms ) od poprzedniego klucza
 */
const SPEED_TIMELINE = {
  0: 0,
  1000: 360,
  2000: 360,
  3000: 360,
  4000: 0,
}

function calculateTimeToDistance(speedTimeline, distances) {
  // Zamiana speedTimeline na posortowaną tablicę par [czas, prędkość]
  const timeline = Object.entries(speedTimeline)
    .map(([time, speed]) => [parseInt(time, 10), speed])
    .sort((a, b) => a[0] - b[0])

  // Funkcja pomocnicza do obliczania dystansu na danym odcinku czasu
  function calculateSegmentDistance(speed, timeDelta) {
    return (speed / 1000) * timeDelta // speed w deg/1000ms i timeDelta w ms
  }

  const results = {}

  distances.forEach((targetDistance) => {
    let accumulatedDistance = 0
    let lastTime = 0
    let lastSpeed = 0

    for (let i = 0; i < timeline.length; i++) {
      const [currentTime, currentSpeed] = timeline[i]
      const timeDelta = currentTime - lastTime

      // Oblicz dystans dla bieżącego segmentu
      const segmentDistance = calculateSegmentDistance(lastSpeed, timeDelta)

      if (accumulatedDistance + segmentDistance >= targetDistance) {
        // Oblicz dokładny czas osiągnięcia celu
        const remainingDistance = targetDistance - accumulatedDistance
        const timeToTarget = remainingDistance / (lastSpeed / 1000)
        results[targetDistance] = lastTime + timeToTarget - 1000
        break
      }

      accumulatedDistance += segmentDistance
      lastTime = currentTime
      lastSpeed = currentSpeed
    }

    // Jeśli dystans nie został osiągnięty w czasie SPEED_TIMELINE
    if (!results[targetDistance]) {
      results[targetDistance] = targetDistance // null oznacza, że dystans jest nieosiągalny
    }
  })

  return results
}

const obiektCzasDoDystans = calculateDistances(SPEED_TIMELINE, [500, 1500, 2500, 3500, 4000])
let dystansce = []
for (const [, dystans] of Object.entries(obiektCzasDoDystans)) {
  dystansce.push(dystans)
}
const obiektDystansDoCzas = calculateTimeToDistance(SPEED_TIMELINE, [360, 720, 1080, 1440])
console.log('obiektDystansDoCzas')
console.log(obiektDystansDoCzas)

// obliczamy tak jakby sciana juz wykonala pierwszy update (jhest z tylu)
export const generateTimeOuts = () => {}

export const templateGenerator = () => {
  const keys = Object.keys(TIMELINE)
  const lastKey = keys[keys.length - 1]
  const TOTAL_TIME = Number(lastKey)
  console.log(TOTAL_TIME)
  let keyframeTemplate = '@keyframes rotate { '
  keyframeTemplate += `0% {
    transform: rotateX(0deg);
    }`
  let prevDistance = 0
  for (const [time, angel] of Object.entries(
    calculateTimeToDistance(SPEED_TIMELINE, TIMELINE_JUMP),
  )) {
    keyframeTemplate += `${ANIMATION_TIME / time}% { transform: rotateX(${angel}deg); }`
  }

  keyframeTemplate += '} '
  keyframeTemplate += `.animated-box { animation: rotate ${TOTAL_TIME / 1000}s linear; animation-fill-mode: forwards; }`
  console.log('keyframeTemplate')
  console.log(keyframeTemplate)
  return keyframeTemplate
}

// templateGenerator()
