import { isEmpty, isMinString, isEmail as validateIsEmail, byteToSize } from '@utils/helpers'

// validate field
export const isRequired = value => {
  let status = true

  if (typeof value === 'number') {
    status = isEmpty(`${value}`)
  } else if (typeof value === 'string') {
    status = isEmpty(value)
  } else if (value instanceof Array) {
    status = value.length === 0
  } else if (value instanceof File) {
    status = false
  }

  return status ? '*required' : undefined
}

export const minString = minSize => value => {
  const status = isMinString({ minString: minSize, value })
  return !status ? `*greater than or equal to ${minSize} character` : undefined
}

export const fitString = size => value => {
  let status = false
  if (typeof value === 'string') {
    status = value.length === size
  }
  return !status ? `*equal to ${size} character` : undefined
}

export const isEmail = value => {
  let status = false
  if (!!value) {
    status = validateIsEmail(value)
  }
  return !status ? '*invalid email' : undefined
}

export const maxFileSize = maxByte => file => {
  if (!file || !(file instanceof File)) return undefined
  const byte = file.size
  const maxSizeObj = byteToSize(maxByte)
  const maxSize = maxSizeObj.size
  const maxUnit = maxSizeObj.unit
  const maxUnitIndex = maxSizeObj.unitIndex
  const { size, unitIndex } = byteToSize(byte)
  let status = false
  if (unitIndex > maxUnitIndex && size > maxSize) {
    status = true
  }
  return status ? `*please upload files that are no larger than ${maxSize} ${maxUnit}` : undefined
}

export const isSilpakornEmail = value => {
  let status = false
  status = /.+@silpakorn.edu$/.test(value)
  return !status ? '*required only @silpakorn.edu' : undefined
}

export const requiredFileType = (type, regular) => value => {
  let status = false
  if (value instanceof File) {
    const type = value.type
    status = regular.test(type)
  }
  return !status ? `*required file ${type} type` : undefined
}
