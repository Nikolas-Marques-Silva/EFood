import styled from 'styled-components'

import { colors } from '../../styles'
import { Props } from '.'
import { Link } from 'react-router-dom'

export const Container = styled.div<
  Omit<Props, 'image' | 'title' | 'description' | 'buttonType'>
>`
  align-items: center;
  width: 472px;
  height: 400px;
  position: relative;
  border: 2px solid ${colors.pink};

  ${(props) =>
    props.type === 'product' &&
    `background-color: ${colors.pink};
  width: 320px;
  height: 100%;
  border: 8px solid ${colors.pink};`};
`

export const Title = styled.h3<
  Omit<Props, 'image' | 'description' | 'id' | 'title' | 'buttonType'>
>`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: ${colors.pink};
  line-height: 22px;
  display: inline;
  ${(props) => props.type === 'product' && `color: ${colors.lightPink}`};
`

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 200px;
`

export const Description = styled.p<
  Omit<Props, 'image' | 'title' | 'description' | 'id' | 'buttonType'>
>`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding: 16px 8px 0 8px;
  ${(props) => props.type === 'product' && `color: ${colors.lightPink}`};
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
export const Button = styled(Link)<
  Omit<Props, 'image' | 'title' | 'description' | 'id' | 'type'>
>`
  ${(props) =>
    props.buttonType === 'primary' &&
    `background-color: ${colors.pink};
  color: ${colors.lightPink};
  position: absolute;
  bottom: 8px;
  left: 8px;`};

  ${(props) =>
    props.buttonType === 'secondary' &&
    `background-color: ${colors.lightPink};
  color: ${colors.pink};
  display: block;`};

  padding: 8px;
  font-size: 16px;
  font-weight: 700;
  margin: 8px 0;
  text-align: center;
`
