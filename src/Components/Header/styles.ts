import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderText = styled.p`
  color: ${colors.pink};
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  cursor: pointer;
`

export const HeroWrapper = styled.header`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
