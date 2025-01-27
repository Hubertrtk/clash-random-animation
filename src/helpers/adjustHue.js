export function adjustHue(hslColor, increment) {
  // Wyrażenie regularne do dopasowania formatu HSL
  const hslRegex = /hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/i

  const match = hslColor.match(hslRegex)
  if (!match) {
    throw new Error("Nieprawidłowy format koloru. Użyj formatu 'hsl(h, s%, l%)'.")
  }

  // Parsowanie wartości H, S, L
  let hue = parseInt(match[1], 10) // Hue
  const saturation = parseInt(match[2], 10) // Saturation
  const lightness = parseInt(match[3], 10) // Lightness

  // Zwiększanie odcienia z uwzględnieniem zakresu 0-360
  hue = (hue + increment) % 360
  if (hue < 0) hue += 360 // W przypadku wartości ujemnych

  // Składanie koloru z powrotem
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}
for (let i = 0; i < 360; i++) {
  console.log(adjustHue('hsl(120, 50%, 50%)', i))
}
