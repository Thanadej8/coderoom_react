import React from 'react'
import { Tree } from 'antd'
import styled from '@emotion/styled'
import { css } from 'emotion'

import { useModalProps } from '@hooks'
import { Modal } from '@components/modals'

const { TreeNode, DirectoryTree } = Tree

const classNameModal = css`
  transform: unset;
  margin-right: unset;
  top: unset;
  bottom: 61px;
  left: calc(50% + 10px);
`

const Card = styled.div`
  width: 300px;
  max-height: 400px;
  background-color: #fff;
  padding: 10px;
`

export default props => {
  const { isOpen, closeModal } = useModalProps('directoryTreeModal')
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      shouldCloseOnOverlayClick
      className={classNameModal}
    >
      <Card>
        <DirectoryTree multiple defaultExpandAll>
          <TreeNode title="parent 0" key="0-0">
            <TreeNode title="leaf 0-0" key="0-0-0">
              <TreeNode title="leaf 0-0" key="0-0-0-0" isLeaf />
            </TreeNode>
            <TreeNode title="leaf 0-1" key="0-0-1">
              <TreeNode title="leaf 0-0" key="0-0-1-0" isLeaf />
            </TreeNode>
          </TreeNode>
          <TreeNode title="parent 1" key="0-1">
            <TreeNode title="leaf 1-0" key="0-1-0" isLeaf />
            <TreeNode title="leaf 1-1" key="0-1-1" isLeaf />
          </TreeNode>
        </DirectoryTree>
      </Card>
    </Modal>
  )
}
