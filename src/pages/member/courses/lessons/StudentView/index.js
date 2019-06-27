import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import MonacoEditor from 'react-monaco-editor'
import { Dropdown, Menu } from 'antd'
import { css } from 'emotion'

import { useTitlePage } from '@hooks'
import Inputs from '@components/Inputs'
import question from '@assets/problems/question.pdf'
import { OvalButton } from '@components/buttons'

import Layout from './components/Layout'
import ProblemDetailModal from './components/ProblemDetailModal'
import DropZone from './components/DropZone'

const dropdownClassName = css`
  z-index: 9999999;
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
  justify-content: space-between;
`
const ProblemViewerSection = styled.div`
  width: 100%;
  background-color: #fff;
`
const ProblemEditorSection = styled.div`
  width: 100%;
  background-color: #fff;
`
const Pdf = styled.iframe`
  width: 100%;
  /* height: calc(100% - 60px); */
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
const WrapperSlideBar = styled.div`
  width: 2px;
  height: 100%;
  background-color: #a5a7b0;
  cursor: ew-resize;
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
const ResourcesText = styled.p`
  margin-right: 5px;
`

const ResourcesSelect = styled(Inputs.Select)`
  width: 200px;
`

const Footer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #f1f1f1;
`

const SlideBar = props => {
  return <WrapperSlideBar />
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

  const options = useMemo(() => ({
    selectOnLineNumbers: true,
    fontSize: 14,
  }))

  return (
    <Layout>
      <DropZone />
      <Wrapper>
        <WrapperSection>
          <ProblemViewerSection>
            <Pdf src={question} />
            {/* <HeaderResourcesSection>
            <WrapperResources>
              <ResourcesText>Resources :</ResourcesText>
              <Dropdown overlay={menu} placement="bottomRight" overlayClassName={dropdownClassName}>
                <OvalButton>bottomRight</OvalButton>
              </Dropdown>
            </WrapperResources>
          </HeaderResourcesSection> */}
          </ProblemViewerSection>
          <SlideBar />
          <ProblemEditorSection>
            <WrapperEditor>
              <MonacoEditor language="java" theme="vs-dark" value="test" options={options} />
            </WrapperEditor>
            {/* <HeaderSection>test</HeaderSection> */}
          </ProblemEditorSection>
        </WrapperSection>
        <Footer>asdfasdfasdfasdfasfd</Footer>
      </Wrapper>
      <ProblemDetailModal />
    </Layout>
  )
}
