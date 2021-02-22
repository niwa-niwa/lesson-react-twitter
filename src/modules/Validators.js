export const textValidator = (text, min_length = 0) => {
  // reject only space text
  if (!text.match(/\S/g)) {
    return false
  } else if (text.length < min_length) {
    return false
  }

  return true
}
