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
  font-size: 16px;
  font-weight: 700;
  margin: 8px;
  line-height: 18px;
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
  padding: 8px;
  color: ${colors.lightPink};
  margin: 0;
`

export const Button = styled.button`
  background-color: ${colors.lightPink};
  color: ${colors.pink};
  width: 100%;

  padding: 8px;
  font-size: 14px;
  font-weight: 700;
  margin: 0;
  text-align: center;
  cursor: pointer;
  border: none;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: none;
  justify-content: center;
  align-items: center;

  &.visible {
    display: flex;
  }
`

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 1;
  transition: opacity 0.5s easy;
`

export const ModalContent = styled.div`
  width: 1024px;
  height: 350px;
  background-color: ${colors.pink};
  position: relative;
  display: flex;
  flex-direction: row;
  z-index: 2;
`

export const Close = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`

export const ModalImage = styled.img`
  max-width: 280px;
  width: 100%;
  object-fit: cover;
  height: 280px;
  margin: 32px;
`

export const ModalDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const ModalTitle = styled.h4`
  font-size: 18px;
  line-height: 22px;
  font-weight: 900;
  color: ${colors.lightPink};
  margin: 32px 0 8px 0;
`

export const ModalDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: ${colors.lightPink};
  margin: 8px 0;
`

export const ModalPortion = styled.p`
  margin: 24px 0 8px 0;
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;
  color: ${colors.lightPink};
`

export const ModalButton = styled.button`
  display: inline-block;
  width: 220px;
  background-color: ${colors.lightPink};
  color: ${colors.pink};

  padding: 4px 8px;
  font-size: 14px;
  font-weight: 700;
  margin: 0;
  text-align: center;
  cursor: pointer;
  border: none;
`
