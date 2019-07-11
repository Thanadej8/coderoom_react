import React, { useCallback, useMemo, useState } from 'react'
import { Tooltip } from 'antd'
import styled from '@emotion/styled'
import { css } from 'emotion'

import Icon from '@components/Icon'
import { useModalProps, useModalHandlers } from '@hooks'
import { Modal } from '@components/modals'

const tooltipClassName = css`
  z-index: 9999999;
`
const classNameModal = css`
  @keyframes openBottomSlide {
    from {
      bottom: -300px;
    }
    to {
      bottom: 61px;
    }
  }
  transform: unset;
  margin-right: unset;
  top: unset;
  bottom: 61px;
  left: 10px;
  animation: openBottomSlide 0.4s;
`

const Card = styled.div`
  width: 300px;
  background-color: #fff;
  padding: 10px;
  position: relative;
  box-shadow: 0px 1px rgba(0, 0, 0, 0.2);
`
const WrapperResources = styled.div`
  display: flex;
  flex-direction: column;
`
const Resource = styled.div`
  border-bottom: 1px solid #f1f1f1;
  padding: 10px 5px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  &:nth-last-of-type(1) {
    border-bottom: none;
  }
`
const ResourceName = styled.p`
  max-width: calc(100% - 50px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const DownloadIcon = styled(Icon)`
  color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  font-size: 12px;
  &:hover {
    color: ${props => props.theme.primaryColor};
  }
`

export default props => {
  const { isOpen, closeModal } = useModalProps('resourceModal')

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      shouldCloseOnOverlayClick
      className={classNameModal}
    >
      <Card>
        <WrapperResources>
          <Resource>
            <Tooltip placement="right" title="1.Labol.pdf" overlayClassName={tooltipClassName}>
              <ResourceName>1.Labol.pdf</ResourceName>
            </Tooltip>
            <DownloadIcon name="download" />
          </Resource>
          <Resource>
            <Tooltip placement="right" title="2.Labol.pdf" overlayClassName={tooltipClassName}>
              <ResourceName>2.Labol.pdf</ResourceName>
            </Tooltip>
            <DownloadIcon name="download" />
          </Resource>
          <Resource>
            <Tooltip placement="right" title="3.Labol.pdf" overlayClassName={tooltipClassName}>
              <ResourceName>3.Labol.pdf</ResourceName>
            </Tooltip>
            <DownloadIcon name="download" />
          </Resource>
          <Resource>
            <Tooltip placement="right" title="4.Labol.pdf" overlayClassName={tooltipClassName}>
              <ResourceName>4.Labol.pdf</ResourceName>
            </Tooltip>
            <DownloadIcon name="download" />
          </Resource>
        </WrapperResources>
      </Card>
    </Modal>
  )
}
