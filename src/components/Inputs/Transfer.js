import React from 'react'
import { Transfer } from 'antd'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  .ant-transfer {
    display: flex;
    align-content: center;
    align-items: center;
  }
  .ant-transfer-list {
    width: calc(100% - 30px);
  }
  .ant-transfer-operation {
    width: 30px;
    margin: 0 8px;
    overflow: unset;
    display: block;
  }
`

export default props => {
  const {
    dataSource,
    showSearch,
    filterOption,
    targetKeys,
    selectedKeys,
    onChange,
    onSelectChange,
    onScroll,
    render,
    disabled,
    titles,
    className,
    showSelectAll,
    rowKey,
    selectKeys,
  } = props

  return (
    <Wrapper className={className}>
      <Transfer
        dataSource={dataSource}
        selectKeys={selectKeys}
        showSearch={showSearch}
        filterOption={filterOption}
        targetKeys={targetKeys}
        selectedKeys={selectedKeys}
        onChange={onChange}
        onSelectChange={onSelectChange}
        onScroll={onScroll}
        render={render}
        disabled={disabled}
        titles={titles}
        showSelectAll={showSelectAll}
        rowKey={rowKey}
      />
    </Wrapper>
  )
}
