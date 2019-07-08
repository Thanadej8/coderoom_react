import React from 'react'
import styled from '@emotion/styled'

import StructureDescription from '@components/StructureDescription'

const Title = styled.h3`
  font-weight: 400;
  color: ${props => props.theme.primaryColor};
  margin-bottom: 10px;
`
const WrapperStructures = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
`
const WrapperStructure = styled.div`
  margin-bottom: 10px;
  :nth-last-of-type(1) {
    margin: 0;
  }
`

export default props => {
  return (
    <>
      <Title>Structure</Title>
      <WrapperStructures>
        <WrapperStructure>
          <StructureDescription tpye="Class" point={20} />
        </WrapperStructure>
        <WrapperStructure>
          <StructureDescription tpye="Class" point={20} />
        </WrapperStructure>
        <WrapperStructure>
          <StructureDescription tpye="Class" point={20} />
        </WrapperStructure>
        <WrapperStructure>
          <StructureDescription tpye="Class" point={20} />
        </WrapperStructure>
        <WrapperStructure>
          <StructureDescription tpye="Class" point={20} />
        </WrapperStructure>
        <WrapperStructure>
          <StructureDescription tpye="Class" point={20} />
        </WrapperStructure>
      </WrapperStructures>
    </>
  )
}
