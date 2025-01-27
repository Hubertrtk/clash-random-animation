import { calculateDistances, calculateDistance } from './calculateDistances.js'

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
