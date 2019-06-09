export const dateFormat = 'DD/MM/YYYY'

export const getHourOptions = (min = 0, max = 23) => {
  let arrayOptions = []
  let objectOptions = {}
  for (let hour = min; hour <= max; hour++) {
    arrayOptions = [...arrayOptions, { label: hour, value: hour }]
    objectOptions = { ...objectOptions, [hour]: { label: hour, value: hour } }
  }
  return { arrayOptions, objectOptions }
}

export const getMinuteOptions = (min = 0, max = 59) => {
  let arrayOptions = []
  let objectOptions = {}
  for (let minute = min; minute <= max; minute++) {
    arrayOptions = [...arrayOptions, { label: minute, value: minute }]
    objectOptions = { ...objectOptions, [minute]: { label: minute, value: minute } }
  }
  return { arrayOptions, objectOptions }
}

export const formatterHour = options => {
  return options
    ? options.map(option => {
        const value = option && option.value
        const label = value < 10 ? `0${option.label}` : `${option.label}`
        return { ...option, label }
      })
    : []
}
export const formatterMinute = options => {
  return options
    ? options.map(option => {
        const value = option && option.value
        const label = value < 10 ? `0${option.label}` : `${option.label}`
        return { ...option, label }
      })
    : []
}
