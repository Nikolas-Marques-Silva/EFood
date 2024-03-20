import styled from 'styled-components'
import { colors } from '../../styles'

export const TagContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const TagStyle = styled.span`
  font-size: 10px;
  color: ${colors.lightPink};
  background-color: ${colors.pink};
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 8px;
  display: inline-block;
  margin-right: 8px;
`
