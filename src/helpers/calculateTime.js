import { calculateDistances, calculateDistance } from './calculateDistances.js'

// const SPEED_TIMELINE = {
//   1000: 720,
//   2000: 360,
//   3000: 360,
//   4000: 0,
// }

// zrobic przedzialy czasowe

//zwraca czas w ktorym obiekt znajduje sie w danym dystansie
export const calculateTime = (speedTimeline, distanceToFind) => {
  const maxTime = Math.max(...Object.keys(speedTimeline))
  let prevDistance = 0
  for (let currentTime = 1; currentTime <= maxTime; currentTime++) {
    const currentTimeDistance = calculateDistance(speedTimeline, currentTime)
    if (currentTimeDistance >= distanceToFind && distanceToFind > prevDistance) {
      return currentTime
    }
    prevDistance = currentTimeDistance
  }
}

export const calculateTimes = (speedTimeline, distances) => {
  return distances.map((distance) => {
    return { [distance]: calculateTime(speedTimeline, distance) }
  })
}

// const timeDistance = calculateDistances(SPEED_TIMELINE, [100, 500, 600, 1200, 1600, 1900, 3100])
// const distanceTime = calculateTimes(
//   SPEED_TIMELINE,
//   timeDistance.map((time) => Object.values(time)[0]),
// )
// console.log(timeDistance)
// console.log(distanceTime)
