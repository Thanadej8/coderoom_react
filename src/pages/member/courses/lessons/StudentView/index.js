import React, { useMemo, useCallback, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Dropdown, Menu, notification, message } from 'antd'
import { css } from 'emotion'

import { useTitlePage } from '@hooks'
import Inputs from '@components/Inputs'
import question from '@assets/problems/question.pdf'
import { OvalButton } from '@components/buttons'
import Editor from '@components/Editor'

import Layout from './components/Layout'
import ProblemDetailModal from './components/ProblemDetailModal'

const classFileName = css`
  font-size: 12px;
  opacity: 0.8;
`

const Wrapper = styled.div`
  height: 100%;
  /* height: calc(100% - 60px); */
  /* background-color: #000; */
  overflow: hidden;
`
const WrapperSection = styled.div`
  height: calc(100% - 60px);
  display: flex;
  position: relative;
`
const ProblemViewerSection = styled.div`
  width: 50%;
  /* background-color: #fff; */
`
const ProblemEditorSection = styled.div`
  width: 50%;
  /* padding: 10px; */
  /* background-color: #fff; */
`
const Pdf = styled.embed`
  width: 100%;
  height: 100%;
  border: 0;
`
const HeaderSection = styled.div`
  height: 60px;
  padding: 0 10px;
`
const HeaderResourcesSection = styled(HeaderSection)`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
`
const GhostBar = styled.div`
  width: 18px;
  height: 100%;
  background-color: #f1f1f1;
  opacity: 1;
  cursor: col-resize;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  /* &:hover {
    opacity: 1;
  } */
`
const TextGhostBar = styled.p`
  transform: rotate(270deg);
  color: #000;
`
const WrapperEditor = styled.div`
  height: 100%;
`
const WrapperResources = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`
const Footer = styled.div`
  width: 100%;
  height: 60px;
  /* border-top: 1px solid #a5a7b0; */
  background-color: #f1f1f1;
  display: flex;
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

const SlideBar = props => {
  const handleResetLayout = useCallback(event => {
    const ghostBarElement = document.getElementById('ghost_bar')
    const viewSection = document.getElementById('problem_view_section')
    const editorSection = document.getElementById('problem_editor_section')
    viewSection.style.width = 50 + '%'
    editorSection.style.width = 50 + '%'
    ghostBarElement.style.left = 50 + '%'
  })

  const drag = useCallback(event => {
    const ghostBarElement = document.getElementById('ghost_bar')
    const viewSection = document.getElementById('problem_view_section')
    const editorSection = document.getElementById('problem_editor_section')
    document.selection ? document.selection.empty() : window.getSelection().removeAllRanges()
    const percentage = (event.pageX / window.innerWidth) * 100
    viewSection.style.width = percentage + '%'
    editorSection.style.width = 100 - percentage + '%'
    ghostBarElement.style.left = percentage + '%'
  })

  useEffect(() => {
    const ghostBarElement = document.getElementById('ghost_bar')
    const wrapperSectionElement = document.getElementById('wrapper_section')
    ghostBarElement.addEventListener('mousedown', () => {
      wrapperSectionElement.addEventListener('mousemove', drag)
    })
    ghostBarElement.addEventListener('mouseup', () => {
      wrapperSectionElement.removeEventListener('mousemove', drag)
    })
    ghostBarElement.addEventListener('dblclick', handleResetLayout)
    return () => {
      ghostBarElement.removeEventListener('mousedown', () => {
        wrapperSectionElement.removeEventListener('mousemove', drag)
      })
      ghostBarElement.removeEventListener('mouseup', () => {
        wrapperSectionElement.removeEventListener('mousemove', drag)
      })
      ghostBarElement.removeEventListener('dblclick', handleResetLayout)
    }
  })

  return (
    <GhostBar id="ghost_bar" ondblclick={handleResetLayout}>
      <TextGhostBar>SCOLLER</TextGhostBar>
    </GhostBar>
  )
}
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

  const options = useMemo(() => ({
    selectOnLineNumbers: true,
    fontSize: 14,
  }))

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
                  console.log('value', value)
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
          </ProblemSubmitSection>
        </Footer>
      </Wrapper>
      <ProblemDetailModal />
    </Layout>
  )
}
