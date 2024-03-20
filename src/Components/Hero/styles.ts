import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  background-color: ${colors.lightPink};
  width: 100%;
  height: 384px;
`

export const Title = styled.h1`
  color: ${colors.pink};
  font-size: 24px;
  font-weight: 700;
  line-height: 22px;
  text-align: center;
  padding: 32px;
`

export const Logo = styled.img`
  margin: 0 auto;
  display: block;
  padding-top: 64px;
  padding-bottom: 64px;
`
