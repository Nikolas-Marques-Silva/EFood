import Product from '../Product'
import { Container } from './styles'
import ImgSushi from '../../assets/images/sushi.png'
import ImgSpagueti from '../../assets/images/spagueti.png'

const ProductsList = () => {
  return (
    <Container>
      <Product
        title="Hioki Sushi"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        image={ImgSushi}
        stars={5}
        infos={['Restaurante', 'Japonês']}
        id={1}
      />
      <Product
        title="La Dolce Vita Trattoria"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        image={ImgSpagueti}
        stars={5}
        infos={['Restaurante', 'Japonês']}
        id={2}
      />
      <Product
        title="La Dolce Vita Trattoria"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        image={ImgSpagueti}
        stars={5}
        infos={['Restaurante', 'Japonês']}
        id={3}
      />
      <Product
        title="La Dolce Vita Trattoria"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        image={ImgSpagueti}
        stars={5}
        infos={['Restaurante', 'Japonês']}
        id={4}
      />
      <Product
        title="La Dolce Vita Trattoria"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        image={ImgSpagueti}
        stars={5}
        infos={['Restaurante', 'Japonês']}
        id={5}
      />
      <Product
        title="La Dolce Vita Trattoria"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        image={ImgSpagueti}
        stars={5}
        infos={['Restaurante', 'Japonês']}
        id={6}
      />
    </Container>
  )
}

export default ProductsList
