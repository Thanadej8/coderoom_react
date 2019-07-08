import React from 'react'
import styled from '@emotion/styled'
import { Collapse } from 'antd'

import ActionsTopic from '@components/ActionsTopic'
import { AddCircleButton } from '@components/buttons'

import InSolSection from './components/InSolSection'
import StructureSection from './components/StructureSection'

const { Panel } = Collapse

const WrapperActionTopic = styled.div`
  margin: 10px 0;
`
const WrapperActionButton = styled.div`
  margin: 0 5px;
  &:nth-last-of-type(1) {
    margin: 0;
  }
`
const WrapperCollapse = styled.div`
  margin-bottom: 10px;
`

export default props => {
  // const resourceFormModal = useModalHandlers('resourceFormModal')
  return (
    <>
      <WrapperActionTopic>
        <ActionsTopic name="Files">
          <WrapperActionButton>
            <AddCircleButton
              onClick={() => {
                // resourceFormModal.openModal({
                //   mode: 'create',
                // })
              }}
            />
          </WrapperActionButton>
        </ActionsTopic>
      </WrapperActionTopic>
      <WrapperCollapse>
        <Collapse>
          <Panel header="Labol.java" key="1">
            <InSolSection />
            <StructureSection />
            {/* <p>{text}</p> */}
          </Panel>
          <Panel header="Labol2.java" key="2">
            <InSolSection />
            <StructureSection />
          </Panel>
        </Collapse>
      </WrapperCollapse>
    </>
  )
}
