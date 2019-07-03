import React, { useMemo, useCallback, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Dropdown, Menu, notification, message } from 'antd'
import { css } from 'emotion'

import { useTitlePage, useModalHandlers, useModalProps } from '@hooks'
import Inputs from '@components/Inputs'
import question from '@assets/problems/question.pdf'
import { OvalButton, AntdButton } from '@components/buttons'
import Editor from '@components/Editor'
import Icon from '@components/Icon'

import Layout from './components/Layout'
import ProblemDetailModal from './components/ProblemDetailModal'
import DirectoryTreeModal from './components/DirectoryTreeModal'
import SlideBar from './components/Slidebar'

const classFileName = css`
  font-size: 12px;
  opacity: 0.8;
`
const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
`
const WrapperSection = styled.div`
  height: calc(100% - 60px);
  display: flex;
  position: relative;
`
const ProblemViewerSection = styled.div`
  width: 50%;
`
const ProblemEditorSection = styled.div`
  width: 50%;
`
const Pdf = styled.embed`
  width: 100%;
  height: 100%;
  border: 0;
`

const WrapperResources = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`
const Footer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #f1f1f1;
  display: flex;
  position: fixed;
  z-index: 99999;
`
const ProblemResourceSection = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-content: center;
  align-items: center;
`
const ProblemSubmitSection = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`
const FileUploadButton = styled(Inputs.FileUploadButton)`
  border-radius: 30px;
  width: 120px;
  padding: 0px 15px;
  height: 32px;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  &:hover {
    color: #40a9ff;
    border-color: #40a9ff;
  }
`
const ResourcesButton = styled(OvalButton)`
  color: #000;
`
const WrapperEditor = styled.div`
  height: 100%;
`
const OpenDirectoryTreeButton = styled(AntdButton)`
  color: ${props => props.theme.primaryColor};
`
const FileIcon = styled(Icon)`
  color: ${props => props.theme.primaryColor};
  margin-right: 5px;
  font-size: 16px !important;
`
const WrapperSubmitButtons = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`

const menu = (
  <Menu>
    <Menu.Item>1</Menu.Item>
    <Menu.Item>2</Menu.Item>
    <Menu.Item>3</Menu.Item>
  </Menu>
)

export default props => {
  const [editorValue, setEditorValue] = useState('')
  useTitlePage('Problem Name')

  const openNotification = useCallback(({ type, title, description }) => {
    notification[type]({
      message: title,
      description: description,
    })
  }, [])

  useEffect(() => {
    notification.config({
      placement: 'bottomRight',
      bottom: 50,
      duration: 4,
    })
    message.config({
      top: 70,
      duration: 3,
      maxCount: 5,
    })
    openNotification({ type: 'error', title: 'Test', description: 'notification' })
    message.success('This is a success message')
    message.error('This is an error message')
    message.warning('This is a warning message')
  }, [])

  const directoryTreeModal = useModalHandlers('directoryTreeModal')
  const directoryTreeModalProps = useModalProps('directoryTreeModal')
  return (
    <Layout>
      <Wrapper>
        <WrapperSection id="wrapper_section">
          <ProblemViewerSection id="problem_view_section">
            <Pdf src={question} />
          </ProblemViewerSection>
          <SlideBar />
          <ProblemEditorSection id="problem_editor_section">
            <WrapperEditor>
              <Editor
                name="student_editor"
                mode="java"
                placeholder="test"
                value={editorValue}
                onChange={value => {
                  setEditorValue(value)
                }}
              />
            </WrapperEditor>
          </ProblemEditorSection>
        </WrapperSection>
        <Footer>
          <ProblemResourceSection>
            <WrapperResources>
              <Dropdown overlay={menu} placement="topLeft" trigger={['hover', 'click']}>
                <ResourcesButton type="dashed">Resources</ResourcesButton>
              </Dropdown>
            </WrapperResources>
          </ProblemResourceSection>
          <ProblemSubmitSection>
            <OpenDirectoryTreeButton
              onClick={() => {
                directoryTreeModalProps.isOpen
                  ? directoryTreeModal.closeModal()
                  : directoryTreeModal.openModal({})
              }}
            >
              <FileIcon name="file" />
              Labor.java
            </OpenDirectoryTreeButton>
            <WrapperSubmitButtons>
              <FileUploadButton
                name="code_student_uploader"
                type="file"
                accept="application/zip, application/octet-stream, .java"
                multiple
                classNameFileName={classFileName}
                planceholder=""
              >
                Select Files
              </FileUploadButton>
              <OvalButton
                type="primary"
                onClick={() => {
                  openNotification({ type: 'success', title: 'Test', description: 'notification' })
                }}
              >
                Submit
              </OvalButton>
            </WrapperSubmitButtons>
          </ProblemSubmitSection>
        </Footer>
      </Wrapper>
      <ProblemDetailModal />
      <DirectoryTreeModal />
    </Layout>
  )
}
