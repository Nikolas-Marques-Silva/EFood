import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${colors.white};
`

export const Title = styled.h4`
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  margin-bottom: 16px;
`
