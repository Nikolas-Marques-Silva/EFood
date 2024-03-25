import styled from 'styled-components'
import { colors } from '../../styles'

export const SocialLinksList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  margin-bottom: 64px;
  margin-top: 0;
  align-items: center;
`

export const SocialLink = styled.li`
  list-style: none;
  margin-right: 8px;
`

export const Copyright = styled.p`
  color: ${colors.pink};
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  text-align: center;
  margin: 0;
  padding: 40px 0;
`
