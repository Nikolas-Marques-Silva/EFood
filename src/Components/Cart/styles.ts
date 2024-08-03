import styled from 'styled-components'
import { colors } from '../../styles'
import trash from '../../assets/images/lixeira.png'

type InputProps = {
  error?: string
  maxwidth?: string
}

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

export const Sidebar = styled.form`
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

export const Button = styled.button`
  margin-bottom: 8px;
  margin: 4px;
  background-color: ${colors.lightPink};
  color: ${colors.pink};
  width: 100%;

  padding: 8px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  border: none;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 34px;
`

export const InputGroup = styled.div<InputProps>`
  width: 100%;
  max-width: ${({ maxwidth }) => (maxwidth ? maxwidth : '100%')};

  label {
    font-size: 16px;
    font-weight: 700;
    color: ${colors.white};
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid ${colors.pink};
    background-color: ${colors.white};
    color: ${colors.pink};
    font-size: 14px;
    font-weight: 400;
    margin: 8px 0;
    border: 2px solid ${colors.white};
    outline: none;

    &.error {
      border: 3px solid red;
    }
  }
`

export const Empty = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: ${colors.white};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    margin: 40px 0;
  }
`
