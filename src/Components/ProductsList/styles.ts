import styled from 'styled-components'
import { Props } from '.'

export const Container = styled.section<Props>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);
  column-gap: 80px;
  row-gap: 48px;
  padding-top: 40px;
  padding-bottom: 120px;
`
