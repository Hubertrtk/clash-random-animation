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

generator()

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

facesTimeoutGenerator()

/// uciac ostatni element sciany 6
