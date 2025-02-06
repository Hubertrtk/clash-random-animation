export function maskPhoneNumber(str) {
  return 'xxx xxx ' + str.slice(-3)
}
