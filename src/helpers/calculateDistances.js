/**
 * Funkcja oblicza dystans na podstawie SPEED_TIMELINE i podanej tablicy czasów.
 * @param {Object} speedTimeline - Obiekt zawierający klucze czasów i odpowiadające im prędkości.
 * @param {number[]} times - Tablica zawierająca jednostki czasu (ms).
 * @returns {number[]} - Tablica dystansów dla podanych jednostek czasu.
 */
export function calculateDistance(speedTimeline, time) {
  let distance = 0
  const speedTimelineArray = Object.entries(speedTimeline)
  let timeDone = 0
  for (let i = 0; i < speedTimelineArray.length; i++) {
    const [timeLine, speed] = speedTimelineArray[i]
    let [prevTimeLine, prevSpeed] = [0, 0]
    if (i > 0) {
      ;[prevTimeLine, prevSpeed] = speedTimelineArray[i - 1]
    }
    if (time >= timeLine) {
      distance += (timeLine - prevTimeLine) * speed
      timeDone += timeLine
    }
    if (time < timeLine) {
      distance += (time - prevTimeLine) * speed
      break
    }
  }
  return distance / 1000
}

// const SPEED_TIMELINE = {
//   1000: 720,
//   2000: 360,
//   3000: 360,
//   4000: 0,
// }

export const calculateDistances = (speedTimeline, times) => {
  return times.map((time) => {
    return { [time]: calculateDistance(speedTimeline, time) }
  })
}

// console.log(calculateDistance(SPEED_TIMELINE, 1000)) //720
// console.log(calculateDistance(SPEED_TIMELINE, 1500)) //900
// console.log(calculateDistance(SPEED_TIMELINE, 2000)) //1080
// console.log(calculateDistance(SPEED_TIMELINE, 2500)) // 1260
// console.log(calculateDistance(SPEED_TIMELINE, 3000)) //1440
// console.log(calculateDistance(SPEED_TIMELINE, 3500)) //1440
// console.log(calculateDistance(SPEED_TIMELINE, 500)) //360
// console.log(calculateDistance(SPEED_TIMELINE, 100)) //72
// console.log(calculateDistance(SPEED_TIMELINE, 50)) //36
// console.log(calculateDistance(SPEED_TIMELINE, 1)) //0.72
// console.log(calculateDistance(SPEED_TIMELINE, 3001)) //1440
// console.log(calculateDistance(SPEED_TIMELINE, 4000)) //1440
// console.log(calculateDistances(SPEED_TIMELINE, [500, 1500, 2500, 3500, 4000]))
