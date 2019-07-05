import React, { useCallback, useMemo, useState, useEffect } from 'react'
import { Tree, Tooltip } from 'antd'
import styled from '@emotion/styled'
import { css } from 'emotion'

import Icon from '@components/Icon'
import { useModalProps, useModalHandlers } from '@hooks'
import { Modal } from '@components/modals'
import { AntdButton } from '@components/buttons'

import ActionFileAlertModal from './ActionFileAlertModal'

const { TreeNode, DirectoryTree } = Tree

const classNameModal = css`
  transform: unset;
  margin-right: unset;
  top: unset;
  bottom: 61px;
  left: calc(50% + 10px);
`
const tooltipClassName = css`
  z-index: 9999999;
`
const Card = styled.div`
  width: 300px;
  max-height: 400px;
  background-color: #fff;
  padding: 10px;
  position: relative;
  box-shadow: 0px 1px rgba(0, 0, 0, 0.2);
`

const ActionBar = styled.div`
  top: ${props => (props.isShow ? '-41px' : '0')};
  left: 0;
  opacity: ${props => (props.isShow ? '1' : '0')};
  position: absolute;
  padding: 10px;
  width: 100%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  transition: top 0.25s;
`
const ActionTitleIcon = styled(Icon)`
  margin-right: 5px;
`
const ActionFileTitle = styled.p`
  display: flex;
  align-content: center;
  align-items: center;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => props.theme.primaryColor};
`
const WrapperActionIcons = styled.div`
  display: flex;
`
const BaseIcon = styled(Icon)`
  cursor: pointer;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.35);
`
const PlusIcon = styled(BaseIcon)`
  &:hover {
    color: ${props => props.theme.primaryColor};
  }
`
const TrashIcon = styled(BaseIcon)`
  &:hover {
    color: #f5222d;
  }
`
const EditIcon = styled(BaseIcon)`
  &:hover {
    color: ${props => props.theme.primaryColor};
  }
`
const WrapperIcon = styled.div`
  padding: 0px 5px;
`
const WrapperCreateButtons = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
`

export default props => {
  const [isActionBarShow, setIsActionBarShow] = useState(false)
  const [selectFileName, setSelectFileName] = useState('')
  const isFolder = true
  const { isOpen, closeModal } = useModalProps('directoryTreeModal')
  const actionFileAlertModal = useModalHandlers('actionFileAlertModal')
  // let selectedKeys = ['1-0']

  // useEffect(() => {
  //   if (isOpen) {
  //     if (selectedKeys.length !== 0) {
  //       // #TODO ถ้ามีไฟล์ ที่กดดูอยู่แล้วให้แสดง selectedKeys
  //       setIsActionBarShow(true)
  //       setSelectFileName('file')
  //     } else {
  //       setIsActionBarShow(false)
  //       setSelectFileName('')
  //     }
  //   }
  // }, [isOpen])

  const handleOnSelect = useCallback((selectedKeys, obj) => {
    if (isActionBarShow) {
      setIsActionBarShow(false)
      setTimeout(() => {
        setIsActionBarShow(true)
      }, 100)
    } else {
      setIsActionBarShow(true)
    }

    const { title } = obj.node.props
    /* selectFilename เดียวเก็บไว้ใน duck เพื่อใช่ที่อื่นด้วย */
    setSelectFileName(title)
    console.log('selectedKeys', selectedKeys)
    console.log('obj', obj)
  })

  const fileStructure = useMemo(() => [
    {
      title: 'src',
      key: '1',
      children: [
        { title: 'file', key: '1-0', isLeaf: true },
        { title: 'file', key: '1-1', isLeaf: true },
      ],
    },
    {
      title: 'test package',
      key: '2',
      children: [
        { title: 'file', key: '2-0', isLeaf: true },
        { title: 'file', key: '2-1', isLeaf: true },
      ],
    },
  ])

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      shouldCloseOnOverlayClick
      className={classNameModal}
    >
      <Card>
        <ActionBar isShow={isActionBarShow}>
          {/* selectFilename เดียวเก็บไว้ใน duck เพื่อใช่ที่อื่นด้วย */}
          <ActionFileTitle>
            <ActionTitleIcon name={true ? 'file' : 'folder-open'} />
            <Tooltip placement="top" title={selectFileName} overlayClassName={tooltipClassName}>
              {selectFileName}
            </Tooltip>
          </ActionFileTitle>
          <WrapperActionIcons>
            <Tooltip placement="top" title="Delete file" overlayClassName={tooltipClassName}>
              <WrapperIcon>
                <TrashIcon
                  name="trash-alt"
                  onClick={() => {
                    actionFileAlertModal.openModal({
                      mode: 'delete',
                    })
                  }}
                />
              </WrapperIcon>
            </Tooltip>
            <Tooltip placement="top" title="Edit file" overlayClassName={tooltipClassName}>
              <WrapperIcon>
                <EditIcon
                  name="edit"
                  onClick={() => {
                    actionFileAlertModal.openModal({
                      mode: 'edit',
                    })
                  }}
                />
              </WrapperIcon>
            </Tooltip>
            {isFolder && (
              <Tooltip placement="top" title="Create file" overlayClassName={tooltipClassName}>
                <WrapperIcon>
                  <PlusIcon
                    name="plus"
                    onClick={() => {
                      actionFileAlertModal.openModal({
                        mode: 'create',
                      })
                    }}
                  />
                </WrapperIcon>
              </Tooltip>
            )}
          </WrapperActionIcons>
        </ActionBar>

        <DirectoryTree defaultExpandAll onSelect={handleOnSelect}>
          {/* #TODO recurcive folder stucture */}
          {fileStructure.map(folder => {
            const childrens = folder.children
            const { title, key, isLeaf } = folder
            if (childrens && childrens.length !== 0) {
              return (
                <TreeNode title={title} key={key}>
                  {childrens.map(file => {
                    return <TreeNode title={file.title} key={file.key} isLeaf={file.isLeaf} />
                  })}
                </TreeNode>
              )
            } else {
              return <TreeNode title={title} key={key} isLeaf={true} />
            }
          })}
        </DirectoryTree>
        <WrapperCreateButtons>
          <AntdButton
            type="primary"
            onClick={() => {
              actionFileAlertModal.openModal({
                mode: 'create',
                type: 'folder',
              })
            }}
          >
            Create folder
          </AntdButton>
        </WrapperCreateButtons>
      </Card>
      <ActionFileAlertModal />
    </Modal>
  )
}
