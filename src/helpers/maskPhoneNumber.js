export function maskPhoneNumber(str, areaCode) {
  return `+${areaCode}` + ' xxx xxx ' + str.slice(-3)
}

export function formName(name, surname) {
  return name + ' ' + surname[0] + '.'
}

export function trimOrderPrefix(inputString) {
  const parts = inputString.split('.')
  if (parts.length < 4) return '' // Jeśli mniej niż 3 kropki, zwróć pusty string
  return parts.slice(3).join('.')
}
