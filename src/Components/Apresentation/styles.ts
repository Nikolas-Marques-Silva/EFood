import styled from 'styled-components'
import { ApresentationProps } from '.'

export const ApresentationWrapper = styled.div<ApresentationProps>`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 280px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`

export const ApresentationText = styled.p`
  position: absolute;
  top: 24px;
  left: 170px;
  font-size: 32px;
  font-weight: 400;
  line-height: 37.5px;
  color: rgba(255, 255, 255, 0.8);
  z-index: 2;
`

export const ApresentationTitle = styled.h1`
  position: absolute;
  bottom: 32px;
  left: 170px;
  font-size: 32px;
  font-weight: 700;
  line-height: 37.5px;
  color: rgba(255, 255, 255, 1.2);
  z-index: 2;
`
