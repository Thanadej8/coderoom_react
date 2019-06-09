import React, { useCallback } from 'react'
import { DatePicker as AntdDatePicker } from 'antd'
import styled from '@emotion/styled'
import moment from 'moment'

const WrapperDatePicker = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const DatePickerStyle = styled(AntdDatePicker)`
  width: 100%;
`

export default props => {
  const {
    name,
    placeholder,
    onChange,
    disabled,
    showTime = false,
    showToday = false,
    format,
    value,
    onBlur,
  } = props

  const disabledDate = useCallback(current => {
    const { maxDate, minDate } = props
    if (minDate && maxDate) {
      return maxDate < current || current < minDate
    } else if (maxDate) {
      return maxDate.endOf('days') < current
    } else if (minDate) {
      return current < minDate
    } else {
      return current
    }
  })

  return (
    <WrapperDatePicker>
      <DatePickerStyle
        name={name}
        // locale={locale}
        showTime={showTime}
        format={showTime ? 'DD/MM/YYYY HH:mm' : format}
        disabled={disabled}
        placeholder={placeholder}
        showToday={showToday}
        onChange={onChange}
        onBlur={onBlur}
        value={value ? moment(value) : null}
        disabledDate={disabledDate}
      />
    </WrapperDatePicker>
  )
}
