import React from 'react'
import styled from '@emotion/styled'

import { AntdButton } from '@components/buttons'
import Icon from '@components/Icon'
import { Authorized } from '@utils/ability'

const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
`
const WrapperActions = styled.div`
  background-color: #fff;
  margin-top: 1px;
  padding: 5px 10px;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
`
const ActionTitle = styled.p`
  font-weight: 300;
  margin-right: 5px;
`
const WrapperActionIcons = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`
const ActionButton = styled(AntdButton)`
  i {
    font-size: 12px;
  }
  margin-right: 10px;
  &:nth-last-of-type(1) {
    margin-right: 0px;
  }
`
export default props => {
  const {
    handleEditButtonClick,
    handleDeleteButtonClick,
    children,
    disableDeleteButton,
    disableEditButton,
  } = props
  return (
    <WrapperCard>
      {children}
      <Authorized requiredRole="teacher">
        <WrapperActions>
          <ActionTitle>Managements :</ActionTitle>
          <WrapperActionIcons>
            {!disableEditButton && (
              <ActionButton onClick={handleEditButtonClick}>
                <Icon name="edit" />{' '}
              </ActionButton>
            )}
            {!disableDeleteButton && (
              <ActionButton type="danger" onClick={handleDeleteButtonClick}>
                <Icon name="trash-alt" />{' '}
              </ActionButton>
            )}
          </WrapperActionIcons>
        </WrapperActions>
      </Authorized>
    </WrapperCard>
  )
}
