/**
 * Funkcja oblicza dystans na podstawie SPEED_TIMELINE i podanej tablicy czasów.
 * @param {Object} speedTimeline - Obiekt zawierający klucze czasów i odpowiadające im prędkości.
 * @param {number[]} times - Tablica zawierająca jednostki czasu (ms).
 * @returns {number[]} - Tablica dystansów dla podanych jednostek czasu.
 */
export function calculateDistances(speedTimeline, times) {
  const result = {}
  let currentDistance = 0
  let wczesniejszaPredkosc = 0
  let czasDoNasteopnegoMaxa = 0
  let wczesniejszCzas = 0
  times.forEach((time) => {
    let { min, max } = znajdzPrzedzial(speedTimeline, time)
    console.log(time)
    console.log({ min, max })
    if (speedTimeline[max] == 0) {
      console.log('max dla ' + max)
    }
    const predkosc = speedTimeline[max]
    if (czasDoNasteopnegoMaxa && wczesniejszaPredkosc !== predkosc) {
      console.log('problem dla', time)
      let zaleglaOdleglosc = czasDoNasteopnegoMaxa * wczesniejszaPredkosc
      let res = (time - min) * predkosc
      result[time] = zaleglaOdleglosc + currentDistance + res
    } else {
      result[time] = predkosc * (time - wczesniejszCzas) + currentDistance
    }
    currentDistance = result[time]
    wczesniejszaPredkosc = predkosc
    wczesniejszCzas = time
    czasDoNasteopnegoMaxa = max - time
    // console.log(time, ' czasDoNasteopnegoMaxa ', czasDoNasteopnegoMaxa)
  })
  for (const key in result) {
    result[key] = result[key] / 1000
  }
  return result
}

// bierze gorny gdy ttf jest taki jak timeKeys
const znajdzPrzedzial = (SPEED_TIMELINE, timeToFind) => {
  if (timeToFind == 0) {
    return 0
  }
  let min = null
  let max = null
  const timeKeys = Object.keys(SPEED_TIMELINE)
    .map(Number)
    .sort((a, b) => a - b)
  timeKeys.forEach((el, index) => {
    if (el <= timeToFind && timeToFind <= timeKeys[index + 1]) {
      if (el == timeToFind) {
        min = timeKeys[index - 1]
        max = timeKeys[index]
        return
      }
      min = el
      max = timeKeys[index + 1]
    }
  })
  return { min, max }
}
