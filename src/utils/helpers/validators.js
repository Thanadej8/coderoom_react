import validator from 'validator'

export const isEmpty = value => {
  return validator.isEmpty(value)
}

export const isMinString = ({ minString, value }) => {
  return validator.isByteLength(value, { min: minString })
}

export const isMobilePhone = value => {
  return validator.isMobilePhone(value, ['th-TH'])
}

export const isEmail = value => {
  return validator.isEmail(value)
}
