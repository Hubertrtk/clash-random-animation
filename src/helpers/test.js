//---- PARAMS:

const tTotal = 10000 // całkowiuty czas symulacji (ms)
const tStep = 500 // krok czasowy(ms)
const vMax = 3 // maksymalna prędkość (obr/s)

//--------------
// computed:
const nSteps = Math.trunc(tTotal / tStep) // liczba kroków czasowych
const lastStepRest = tTotal % tStep // po zakonczeniu, pozostała reszta kroku do wykonania

const vMaxDeg = vMax * 360 // maksymalna prędkość (stopnie/s)
const vMaxDegStep = vMaxDeg / (1000 / tStep) // maksymalna prędkość kątowa w kroku czasowym (deg/krok))

// funkcja x * x, dla x z przedziału <0, 2>, wartości <0, 4>
const fVelocity = (x) => {
  // funkcja multiplikatora prędkości <0, 1>
  return x * x
}
const fMax_Y = 4
const fMax_X = 2

const tStepScaled = fMax_X / nSteps // krok czasowy przeskalowany dla funkcji fVelocity

const exe = (step, nSteps, result = {}) => {
  if (step > nSteps) return result

  const x = step * tStepScaled
  const v = Math.round(vMaxDegStep * (fVelocity(x) / fMax_Y))
  result[step * tStep] = v

  return exe(step + 1, nSteps, result)
}

console.log(exe(1, nSteps))
