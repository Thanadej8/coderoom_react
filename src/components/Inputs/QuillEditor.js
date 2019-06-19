import React from 'react'
import ReactQuill from 'react-quill'
import styled from '@emotion/styled'

const Wrapper = styled.div``

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image'],
    ['clean'],
  ],
}

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
]

export default props => {
  const { value, onChange, className, placeholder, readOnly = false, disabled } = props

  return (
    <Wrapper className={className}>
      <ReactQuill
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={disabled || readOnly}
        theme="snow"
        modules={modules}
        formats={formats}
        textIndex={true}
      />
    </Wrapper>
  )
}
