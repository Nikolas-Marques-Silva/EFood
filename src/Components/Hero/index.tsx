import { Container, Logo, Title } from './styles'
import logo from '../../assets/images/logo.png'

const Hero = () => {
  return (
    <Container>
      <Logo src={logo} alt="EFood Logo" />
      <Title>Viva experiências gastronômicasno conforto da sua casa</Title>
    </Container>
  )
}

export default Hero
