import * as S from './styles'
import { Container, Logo } from '../../styles'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => {
  return (
    <Container>
      <Logo src={logo} alt="efood logo" />
      <S.SocialLinksList>
        <S.SocialLink>
          <img src={instagram} alt="Siga-nos no Instagram" />
        </S.SocialLink>
        <S.SocialLink>
          <img src={facebook} alt="Siga-nos no Facebook" />
        </S.SocialLink>
        <S.SocialLink>
          <img src={twitter} alt="Siga-nos no Twitter" />
        </S.SocialLink>
      </S.SocialLinksList>
      <S.Copyright>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.Copyright>
    </Container>
  )
}

export default Footer
