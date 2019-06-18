import React from 'react'
import styled from '@emotion/styled'

import { useModalHandlers } from '@hooks'
import ActionsTopic from '@components/ActionsTopic'
import AnnoucementCard from '@components/AnnoucementCard'
import { AddCircleButton, AntdButton } from '@components/buttons'
import Icon from '@components/Icon'
import ActionsCard from '@components/ActionsCard'

import AnnoucementModal from './components/AnnoucementModal'

const WrapperActionTopic = styled.div`
  margin: 10px 0;
`
const WrapperActionButton = styled.div`
  margin: 0 5px;
  &:nth-last-of-type(1) {
    margin: 0;
  }
`
const WrapperCards = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 10px;
  margin-bottom: 10px;
  ${props => props.theme.media('tablet')} {
    grid-template-columns: calc(50% - 10px) calc(50% - 10px);
  }
`
const Card = styled(AnnoucementCard)`
  cursor: pointer;
`
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
  font-weight: 200;
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
  const annoucements = [
    { title: 'เทส Annoucement นะจ๊ะ' },
    { title: 'เทส Annoucement นะจ๊ะ' },
    { title: 'เทส Annoucement นะจ๊ะ' },
    { title: 'เทส Annoucement นะจ๊ะ' },
  ]
  return (
    <>
      <WrapperActionTopic>
        <ActionsTopic name="Announcements">
          <WrapperActionButton>
            <AddCircleButton />
          </WrapperActionButton>
        </ActionsTopic>
      </WrapperActionTopic>
      <WrapperCards>
        {annoucements &&
          annoucements.length !== 0 &&
          annoucements.map(annoucement => {
            const { openModal } = useModalHandlers('viewAnnoucementModal')
            return (
              <ActionsCard handleEditButtonClick={() => {}} handleDeleteButtonClick={() => {}}>
                <Card
                  title={annoucement.title}
                  onClick={() =>
                    openModal({
                      ...annoucement,
                    })
                  }
                />
              </ActionsCard>
            )
          })}
      </WrapperCards>
      <AnnoucementModal />
    </>
  )
}
