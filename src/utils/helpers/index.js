import numeral from 'numeral'

export const isDev = process.env.NODE_ENV === 'development'

export {
  getHourOptions,
  getMinuteOptions,
  dateFormat,
  formatterHour,
  formatterMinute,
} from './dateTime'
export { isEmpty, isMinString, isEmail } from './validators'

export const formatterPrice = ({ price, format = '0,0' }) => {
  if (!price || price === '') return numeral(0).format(format)
  return numeral(price).format(format)
}

export const byteToSize = bytes => {
  const units = ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB']
  const defaultByte = 1024
  if (!bytes || bytes === 0) return { size: 0, unit: units[0], unitIndex: 0 }
  const power = Math.floor(Math.log(bytes) / Math.log(defaultByte))
  const size = parseFloat(bytes / Math.pow(defaultByte, power))
  return { size, unit: units[power], unitIndex: power }
}
