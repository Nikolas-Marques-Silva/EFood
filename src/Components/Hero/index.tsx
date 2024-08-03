import logo from '../../assets/images/logo.png'

import { Title } from './styles'
import { Container, Logo } from '../../styles'

const Hero = () => {
  return (
    <Container>
      <Logo src={logo} alt="EFood Logo" />
      <Title>Viva experiências gastronômicasno conforto da sua casa</Title>
    </Container>
  )
}

export default Hero
