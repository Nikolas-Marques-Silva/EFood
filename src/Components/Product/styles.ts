import styled from 'styled-components'

import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  align-items: center;
  width: 472px;
  position: relative;
  border: 2px solid ${colors.pink};
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: ${colors.pink};
  line-height: 22px;
  display: inline;
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
  color: ${colors.pink};
  margin: 0;
`

export const RatingContainer = styled.div`
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    margin: 0;
    padding: 0;

    p {
      font-size: 16px;
      font-weight: 700;
      line-height: 22px;
      color: ${colors.pink};
      display: inline-block;
      margin: 0 8px;
    }
  }
`
export const Button = styled(Link)`
  background-color: ${colors.pink};
  color: ${colors.lightPink};
  display: inline-block;

  padding: 8px;
  font-size: 14px;
  font-weight: 700;
  margin: 8px;
  text-align: center;
`
