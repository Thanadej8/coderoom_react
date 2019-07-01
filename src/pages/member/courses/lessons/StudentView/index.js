import React, { useMemo, useCallback, useEffect } from 'react'
import styled from '@emotion/styled'
import MonacoEditor from 'react-monaco-editor'
import { Dropdown, Menu, notification, message } from 'antd'
import { css } from 'emotion'
import uuidV1 from 'uuid/v1'

import { useTitlePage } from '@hooks'
import Inputs from '@components/Inputs'
import question from '@assets/problems/question.pdf'
import { OvalButton } from '@components/buttons'

import Layout from './components/Layout'
import ProblemDetailModal from './components/ProblemDetailModal'
import DropZone from './components/DropZone'

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
  position: relative;
  display: flex;
  justify-content: space-between;
`
const ProblemViewerSection = styled.div`
  width: 100%;
  background-color: #fff;
`
const ProblemEditorSection = styled.div`
  width: 100%;
  background-color: #fff;
  position: relative;
`
const Pdf = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
  position: relative;
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
  width: 20px;
  height: 100%;
  left: 50%;
  background-color: #a5a7b0;
  position: absolute;
  cursor: ew-resize;
  z-index: 10;
`
const WrapperEditor = styled.div`
  height: 100%;
  /* height: calc(100% - 60px); */
`
const WrapperResources = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`
const Footer = styled.div`
  width: 100%;
  height: 60px;
  border-top: 1px solid #a5a7b0;
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
  const handleDragStart = useCallback(event => {
    console.log('handleDragStart')
    console.log('event', event)
  })

  const resize = useCallback(event => {
    const ghostBarElement = document.getElementById('ghost_bar')
    const viewSection = document.getElementById('problem_view_section')
    const editorSection = document.getElementById('problem_editor_section')
    console.log('event', event)

    const percentage = (event.pageX / window.innerWidth) * 100
    const viewSectionWidth = 100 - percentage
    const editorSectionWidth = percentage
    // var mainPercentage = 100 - percentage
    // problemViewSection.style.width =
    // console.log('e.pageX+2', event.pageX + 2)
    console.log('percentage', percentage)
    console.log('viewSectionWidth', viewSectionWidth)
    console.log('editorSectionWidth', editorSectionWidth)
    console.log('event.pageX', event.pageX)
    // viewSection.style.width = viewSectionWidth + '%'
    // editorSection.style.width = editorSectionWidth + '%'

    ghostBarElement.style.left = event.pageX + 'px'
  })

  useEffect(() => {
    const ghostBarElement = document.getElementById('ghost_bar')
    ghostBarElement.addEventListener('mousedown', function(event) {
      event.preventDefault()
      ghostBarElement.addEventListener('mousemove', resize)
    })
  }, [])

  return <GhostBar id="ghost_bar" />
}
const menu = (
  <Menu>
    <Menu.Item>1</Menu.Item>
    <Menu.Item>2</Menu.Item>
    <Menu.Item>3</Menu.Item>
  </Menu>
)

export default props => {
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
        <WrapperSection>
          <ProblemViewerSection id="problem_view_section">
            <Pdf src={question} />
          </ProblemViewerSection>
          <SlideBar />
          <ProblemEditorSection id="problem_editor_section">
            <WrapperEditor>
              <MonacoEditor language="java" theme="vs-dark" value="test" options={options} />
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
