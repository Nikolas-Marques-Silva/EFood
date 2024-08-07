import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  lightPink: '#ffebd9',
  pink: '#e66767',
  white: '#fff2f8'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${colors.white};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    position: relative;
  }
`

export const Container = styled.div`
  background-color: ${colors.lightPink};
  width: 100%;
`

export const Logo = styled.img`
  margin: 0 auto;
  display: block;
  padding-top: 64px;
  padding-bottom: 64px;
`

export default GlobalStyle
