import { SocialLink, SocialLinksList, Copyright } from './styles'
import { Container, Logo } from '../../styles'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => {
  return (
    <Container>
      <Logo src={logo} alt="efood logo" />
      <SocialLinksList>
        <SocialLink>
          <img src={instagram} alt="Siga-nos no Instagram" />
        </SocialLink>
        <SocialLink>
          <img src={facebook} alt="Siga-nos no Facebook" />
        </SocialLink>
        <SocialLink>
          <img src={twitter} alt="Siga-nos no Twitter" />
        </SocialLink>
      </SocialLinksList>
      <Copyright>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Copyright>
    </Container>
  )
}

export default Footer
