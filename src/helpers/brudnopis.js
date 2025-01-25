const step = 500

const change = (object) => {
  let newData = {}
  for (let i = step; i <= 10000; i += step) {
    newData[10000 + i] = null
  }
  let i = 10000 + step
  for (const [key, value] of Object.entries(object).reverse()) {
    newData[i] = (value || 1) + 1
    i += step
  }
  return newData
}

console.log(
  change({
    500: 1,
    1000: 5,
    1500: 12,
    2000: 22,
    2500: 34,
    3000: 49,
    3500: 66,
    4000: 86,
    4500: 109,
    5000: 135,
    5500: 163,
    6000: 194,
    6500: 228,
    7000: 265,
    7500: 304,
    8000: 346,
    8500: 390,
    9000: 437,
    9500: 487,
    10000: 540,
  }),
)
