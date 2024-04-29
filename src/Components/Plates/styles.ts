import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  align-items: center;
  position: relative;
  background-color: ${colors.pink};
  width: 320px;
  border: 8px solid ${colors.pink};
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  line-height: 22px;
  display: inline;
  color: ${colors.lightPink};
`

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 200px;
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding: 16px 8px 0 8px;
  color: ${colors.lightPink};
  margin: 0;
`

export const Button = styled.button`
  background-color: ${colors.lightPink};
  color: ${colors.pink};
  display: block;

  padding: 8px;
  font-size: 14px;
  font-weight: 700;
  margin: 8px;
  text-align: center;
`
