export function isLeapYear(year) {
  if(year % 1 != 0 || year <= 0){
    return false
  }

  if(year % 4 === 0){
    if(year % 100 === 0 && year % 400 === 0){
      return true
    }

    if(year % 100 === 0){
      return false
    }

    return true
  }

  return false
}
