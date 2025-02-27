export function maskPhoneNumber(phoneNumber, areaCode) {
  if (!phoneNumber) return ''
  return `+${areaCode}` + ' xxx xxx ' + phoneNumber.slice(-3)
}

export function formName(name, surname) {
  let formedSurname = ''
  if (!name) {
    name = ''
  }
  if (!surname) {
    surname = ' '
  } else {
    if (surname.length >= 1) {
      formedSurname = surname[0] + '.'
    }
  }
  return name + ' ' + formedSurname
}

export function trimOrderPrefix(orderId) {
  const parts = orderId.split('.')
  if (parts.length < 4) return ''
  return parts.slice(3).join('.')
}
