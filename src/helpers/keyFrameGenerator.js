const FRAMES = [
  { frame: 3000, rotate: 2 }, // do 1000ms wykonaj 5 obrotow- (hardcoded dla 10 sekund animacji !!!)
  { frame: 5000, rotate: 1 },
  { frame: 10000, rotate: 1 },
]

const ROTATE = 360

const generator = () => {
  let keyframeTemplate = '@keyframes rotate { '
  keyframeTemplate += `0% {
    transform: rotateX(0deg);
    }`
  let currentRotates = 0
  FRAMES.forEach((el) => {
    const degValue = ROTATE * (el.rotate + currentRotates)
    currentRotates += el.rotate
    const string = `${el.frame / 100}% {
    transform: rotateX(${degValue}deg);
    }`
    keyframeTemplate += string
  })
  keyframeTemplate += '}'
  console.log(keyframeTemplate)
}

// generator()

let faces = {
  face1: [],
  face2: [],
  face3: [],
  face4: [],
  face5: [],
  face6: [],
}

const facesTimeoutGenerator = () => {
  let prevjump = 0
  FRAMES.forEach((el, indexFrame) => {
    let arr = Array.from({ length: el.rotate })
    let fullRotateTime
    if (indexFrame == 0) {
      fullRotateTime = el.frame / el.rotate
    } else {
      fullRotateTime = (el.frame - FRAMES[indexFrame - 1].frame) / el.rotate
    }
    const oneStepTime = fullRotateTime / 6
    arr.forEach((el, index) => {
      if (index == 0) {
        arr[index] = oneStepTime * 3 + prevjump
      } else {
        arr[index] = fullRotateTime
      }
    })
    faces.face1.push(...arr)
    faces.face2.push(...arr)
    faces.face3.push(...arr)
    faces.face4.push(...arr)
    faces.face5.push(...arr)
    faces.face6.push(...arr)
    if (indexFrame == 0) {
      console.log('fullRotateTime')
      console.log(fullRotateTime)
      faces.face1[0] = oneStepTime * 2
      faces.face2[0] = oneStepTime * 3
      faces.face3[0] = oneStepTime * 4
      faces.face4[0] = fullRotateTime - oneStepTime
      faces.face5[0] = fullRotateTime
      faces.face6[0] = fullRotateTime + oneStepTime
    }
    prevjump = oneStepTime * 3
  })
  // faces.face6[0]
  console.log(faces)
}

// facesTimeoutGenerator()

/// uciac ostatni element sciany 6

const ILOSC_SCIAN_FIGURY = 14

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

const TIMELINE = {
  [5000]: 1, // ile dodatkowych obrotow w tym time (w obszarze czasu wod czesniejszego time do tego)
  [10000]: 1,
}
// expected: [500 500 500 500]
// obliczamy tak jakby sciana juz wykonala pierwszy update (jhest z tylu)
export const generateTimeOuts = () => {
  let face1 = []
  let prevTime = 0
  let prevDistance = 0
  for (const [time, distance] of Object.entries(TIMELINE)) {
    if (distance > 1) {
      const speedPerOneRotate = (time - prevTime) / distance
      let arr = Array.from({ length: distance })
      arr.forEach((el, i) => {
        arr[i] = speedPerOneRotate
      })
      face1.push(...arr)
    } else {
      const updateTime = time - prevTime
      face1.push(updateTime)
    }
    prevTime = time
  }
  console.log(face1)

  const FIRST_DELAY = face1[0]
  // obliczanie opznienia przyt pierwszym update
  const onePartTime = FIRST_DELAY / ILOSC_SCIAN_FIGURY
  let intervals = Array.from({ length: ILOSC_SCIAN_FIGURY })
  intervals.forEach((el, index) => {
    intervals[index] = [...face1]
    intervals[index][0] -= onePartTime * index - onePartTime * 2
  })
  console.log('intervals')
  console.log(intervals)
  //usunac oistatni indeks ostatniego
  return intervals.reverse()
}

generateTimeOuts()
