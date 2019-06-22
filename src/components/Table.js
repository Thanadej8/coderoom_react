import React from 'react'
import { Table } from 'antd'
import styled from '@emotion/styled'

const TableAntd = styled(Table)`
  width: 100%;
  .ant-table {
    color: #000;
  }
  .ant-table-column-title {
    color: #000;
    font-family: ${props => props.theme.minorFont};
    font-weight: 500;
    font-size: 16px;
  }
  .ant-table-tbody {
    background-color: #fff;
  }
`

export default props => {
  const {
    columns,
    dataSource,
    onChange,
    bordered,
    scroll,
    className,
    loading,
    onRow,
    pagination = true,
  } = props
  return (
    <TableAntd
      className={className}
      columns={columns}
      dataSource={dataSource}
      onChange={onChange}
      bordered={bordered}
      scroll={scroll}
      loading={loading}
      onRow={onRow}
      pagination={pagination}
    />
  )
}
