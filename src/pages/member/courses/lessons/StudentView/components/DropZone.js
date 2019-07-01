import React, { useCallback } from 'react'
import styled from '@emotion/styled'
import { useDropzone } from 'react-dropzone'

const WrapperDropZone = styled.div`
  opacity: ${props => (props.isDragActive ? '0.5' : '0')};
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #f1f1f1;
  width: 100%;
  height: 100%;
  z-index: ${props => (props.isDragActive ? '9999999' : 'unset')};
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`
const Text = styled.p`
  font-size: 30px;
`

export default props => {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log('acceptedFiles', acceptedFiles)
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  return (
    <WrapperDropZone
      {...getRootProps()}
      onBlur={() => {}}
      onClick={() => {}}
      isDragActive={isDragActive}
      tabIndex="10"
    >
      <input {...getInputProps()} />
      <Text>Plase drop only file</Text>
    </WrapperDropZone>
  )
}
