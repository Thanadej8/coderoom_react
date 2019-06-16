import React from 'react'
import styled from '@emotion/styled'
import ReactSelect from 'react-select'

const WrapperSelect = styled.div`
  width: 100%;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};
  display: flex;
  flex-direction: column;
`

const styles = {
  container: (base, state) => ({
    ...base,
  }),
  control: (base, state) => ({
    ...base,
  }),
  menu: (base, state) => ({
    ...base,
    zIndex: 10,
  }),
}

export default props => {
  const {
    disabled,
    isSearchable = false,
    name,
    onChange,
    onBlur,
    defaultValue,
    placeholder,
    value,
    options,
    formatter,
    className,
    isClearable,
    isLoading,
    isOptionDisabled,
  } = props
  const formatterOptions = formatter ? formatter(options) : options
  const valueOption =
    formatterOptions && formatterOptions.length !== 0 && value !== ''
      ? formatterOptions.find(option => {
          return option.value === value
        })
      : ''
  return (
    <WrapperSelect className={className} disabled={disabled}>
      <ReactSelect
        name={name}
        styles={styles}
        isDisabled={disabled}
        isSearchable={isSearchable}
        options={formatterOptions}
        defaultValue={defaultValue}
        value={valueOption}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        isClearable={isClearable}
        isLoading={isLoading}
        isOptionDisabled={isOptionDisabled}
      />
    </WrapperSelect>
  )
}
