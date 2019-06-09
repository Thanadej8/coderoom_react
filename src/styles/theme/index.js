import studentStyled from './student'
import teacherStyled from './teacher'
import adminStyled from './admin'

const media = device => {
  switch (device) {
    case 'tablet':
      return '@media (min-width: 768px)'
    case 'large-tablet':
      return '@media (min-width: 1024px)'
    case 'computer':
      return '@media (min-width: 1240px)'
  }
}

const commonStyled = {
  majorFont: 'kanit',
  minorFont: 'maitree',
  media,
}

export default role => {
  switch (role) {
    case 'student':
      return { ...commonStyled, ...studentStyled }
    case 'teacher':
      return { ...commonStyled, ...teacherStyled }
    case 'admin':
      return { ...commonStyled, ...adminStyled }
    default:
      return { ...commonStyled, ...studentStyled }
  }
}
