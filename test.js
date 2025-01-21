// Helper function: Calculate a point on a cubic Bézier curve at parameter t
function cubicBezier(t, p0, p1, p2, p3) {
  const u = 1 - t
  return u * u * u * p0 + 3 * u * u * t * p1 + 3 * u * t * t * p2 + t * t * t * p3
}

// Main function: Find x for each y in the given range on a cubic Bézier curve
function findXForYFromBezierParams(bezierParams, yRange, precision = 0.001) {
  const [a, b, c, d] = bezierParams // cubic-bezier(a, b, c, d)

  // Define Bézier control points
  const bezierCurve = {
    p0: { x: 0, y: 0 },
    p1: { x: a, y: b },
    p2: { x: c, y: d },
    p3: { x: 1, y: 1 },
  }

  const { minY, maxY } = yRange // Range of y values
  const results = [] // To store the (y, x) pairs

  // Sample y values within the range
  for (let y = minY; y <= maxY; y += precision) {
    const xValues = []

    // Use binary search or iteration to find t values such that cubicBezier(t).y ≈ y
    for (let t = 0; t <= 1; t += precision) {
      const curveY = cubicBezier(
        t,
        bezierCurve.p0.y,
        bezierCurve.p1.y,
        bezierCurve.p2.y,
        bezierCurve.p3.y,
      )

      if (Math.abs(curveY - y) < precision) {
        const curveX = cubicBezier(
          t,
          bezierCurve.p0.x,
          bezierCurve.p1.x,
          bezierCurve.p2.x,
          bezierCurve.p3.x,
        )
        xValues.push(curveX)
      }
    }

    if (xValues.length > 0) {
      results.push({ y, x: xValues })
    }
  }

  return results // Array of {y, x: [x1, x2, ...]} objects
}

// Example usage
const cubicBezierParams = [0, 0.76, 0.61, 1.27] // cubic-bezier(0, .76, .61, 1.27)
const yRange = { minY: 0, maxY: 1 }
const precision = 0.01

const result = findXForYFromBezierParams(cubicBezierParams, yRange, precision)
console.log(result)
