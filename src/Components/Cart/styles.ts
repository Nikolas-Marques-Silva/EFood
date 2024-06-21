import styled from 'styled-components'
import { colors } from '../../styles'
import trash from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 2;

  &.active {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.pink};
  max-width: 360px;
  width: 100%;
  z-index: 1;
  padding: 16px 8px 0 8px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 8px;
  color: ${colors.pink};
  line-height: 22px;
`

export const Price = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${colors.pink};
  margin: 8px;
  display: block;
`

export const Total = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  color: ${colors.lightPink};
  margin: 16px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Item = styled.li`
  display: flex;
  background-color: ${colors.lightPink};
  padding: 8px;
  margin: 16px 8px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  button {
    background-image: url(${trash});
    width: 16px;
    height: 16px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`
