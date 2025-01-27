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

export const calculateDistances = (speedTimeline, times) => {
  return times.map((time) => {
    return { [time]: calculateDistance(speedTimeline, time) }
  })
}
