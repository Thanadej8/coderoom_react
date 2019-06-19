import React from 'react'
import styled from '@emotion/styled'
import { useStore } from 'react-redux'

import { useModalHandlers } from '@hooks'
import ActionsTopic from '@components/ActionsTopic'
import AnnoucementCard from '@components/AnnoucementCard'
import { AddCircleButton } from '@components/buttons'
import ActionsCard from '@components/ActionsCard'

import AnnoucementModal from './components/AnnoucementModal'
import AnnoucementFormModal from './components/AnnoucementFormModal'

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

export default props => {
  const annoucements = [
    { title: 'เทส Annoucement นะจ๊ะ' },
    { title: 'เทส Annoucement นะจ๊ะ' },
    { title: 'เทส Annoucement นะจ๊ะ' },
    { title: 'เทส Annoucement นะจ๊ะ' },
  ]
  const annoucmentFormModal = useModalHandlers('annoucmentFormModal')
  return (
    <>
      <WrapperActionTopic>
        <ActionsTopic name="Announcements">
          <WrapperActionButton>
            <AddCircleButton
              onClick={() =>
                annoucmentFormModal.openModal({
                  mode: 'create',
                })
              }
            />
          </WrapperActionButton>
        </ActionsTopic>
      </WrapperActionTopic>
      <WrapperCards>
        {annoucements &&
          annoucements.length !== 0 &&
          annoucements.map((annoucement, index) => {
            const viewAnnoucementModal = useModalHandlers('viewAnnoucementModal')
            return (
              <ActionsCard
                key={`${annoucement.title}_${index}`}
                handleEditButtonClick={() => {
                  annoucmentFormModal.openModal({
                    annoucement,
                    mode: 'edit',
                  })
                }}
                handleDeleteButtonClick={() => {}}
              >
                <Card
                  title={annoucement.title}
                  onClick={() =>
                    viewAnnoucementModal.openModal({
                      ...annoucement,
                    })
                  }
                />
              </ActionsCard>
            )
          })}
      </WrapperCards>
      <AnnoucementFormModal />
      <AnnoucementModal />
    </>
  )
}
