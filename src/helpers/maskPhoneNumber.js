export function maskPhoneNumber(str) {
  if (str.length <= 3) return str // Jeśli string ma 3 lub mniej znaków, zwróć go bez zmian

  let maskedPart = 'x'.repeat(str.length - 3) // Zamiana wszystkich znaków oprócz ostatnich trzech na "x"
  let visiblePart = str.slice(-3) // Pobranie ostatnich trzech znaków

  return maskedPart + visiblePart
}
