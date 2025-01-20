const TOTAL_TIME = 10 // czas całej animacji w sekundach

const FRAMES = [
  { frame: 2000, rotate: 1 }, // do 1000ms wykonaj 5 obrotow- (hardcoded dla 10 sekund animacji !!!)
  { frame: 6000, rotate: 1 },
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
    ;[faces.face1, faces.face2, faces.face3, faces.face4, faces.face5, faces.face6].forEach(
      (el, index) => {
        if (index == 0) {
          return
        }
        el[0] = oneStepTime * (index + 1)
      },
    )
    prevjump = oneStepTime * 3
  })
  console.log(faces)
}

facesTimeoutGenerator()
