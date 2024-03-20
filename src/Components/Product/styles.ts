import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  border: 2px solid ${colors.pink};
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: ${colors.pink};
`

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 200px;
  border-radius: 8px;
`

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  padding: 8px;
  color: ${colors.pink};
  margin: 0;
`

export const RatingContainer = styled.div`
  padding: 8px;
  display: inline-block;
  align-items: center;
  align-items: center;

  p {
    display: inline-block;
    margin: 0;
  }
`

export const TitleAndRatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`

export const Button = styled.button`
  background-color: ${colors.pink};
  color: ${colors.lightPink};
  border-radius: 8px;
  padding: 8px;
  font-size: 16px;
  font-weight: 700;
  margin: 0 8px;
`
