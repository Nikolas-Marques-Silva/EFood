import Product from '../Product'
import { Container } from './styles'
import ImgSushi from '../../assets/images/sushi.png'
import ImgSpagueti from '../../assets/images/spagueti.png'
import ImgPizza from '../../assets/images/pizza.png'

export type Props = {
  cols: 2 | 3
  type: 'restaurants' | 'products'
}

const ProductsList = ({ cols, type }: Props) => {
  if (type === 'restaurants') {
    return (
      <div className="container">
        <Container cols={cols} type={type}>
          <Product
            title="Hioki Sushi"
            description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
            image={ImgSushi}
            stars={4.9}
            infos={['Destaque da semana', 'Japonês']}
            id={1}
            to="/restaurante1"
            type="restaurant"
            buttonType="primary"
          />
          <Product
            title="La Dolce Vita Trattoria"
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            image={ImgSpagueti}
            stars={4.6}
            infos={['Italiano']}
            id={2}
            to="/restaurante2"
            type="restaurant"
            buttonType="primary"
          />
          <Product
            title="La Dolce Vita Trattoria"
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            image={ImgSpagueti}
            stars={4.6}
            infos={['Italiano']}
            id={3}
            to="/restaurant2"
            type="restaurant"
            buttonType="primary"
          />
          <Product
            title="La Dolce Vita Trattoria"
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            image={ImgSpagueti}
            stars={4.6}
            infos={['Italiano']}
            id={4}
            to="/2"
            type="restaurant"
            buttonType="primary"
          />
          <Product
            title="La Dolce Vita Trattoria"
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            image={ImgSpagueti}
            stars={4.6}
            infos={['Italiano']}
            id={5}
            to="/restaurant2"
            type="restaurant"
            buttonType="primary"
          />
          <Product
            title="La Dolce Vita Trattoria"
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            image={ImgSpagueti}
            stars={4.6}
            infos={['Italiano']}
            id={6}
            to="/restaurant2"
            type="restaurant"
            buttonType="primary"
          />
        </Container>
      </div>
    )
  } else {
    return (
      <div className="container">
        <Container cols={cols} type={type}>
          <Product
            title="Pizza Marguerita"
            image={ImgPizza}
            id={1}
            description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
            type="product"
            buttonType="secondary"
          />
          <Product
            title="Pizza Marguerita"
            image={ImgPizza}
            id={2}
            description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
            type="product"
            buttonType="secondary"
          />
          <Product
            title="Pizza Marguerita"
            image={ImgPizza}
            id={3}
            description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
            type="product"
            buttonType="secondary"
          />
          <Product
            title="Pizza Marguerita"
            image={ImgPizza}
            id={4}
            description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
            type="product"
            buttonType="secondary"
          />
          <Product
            title="Pizza Marguerita"
            image={ImgPizza}
            id={5}
            description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
            type="product"
            buttonType="secondary"
          />
          <Product
            title="Pizza Marguerita"
            image={ImgPizza}
            id={6}
            description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
            type="product"
            buttonType="secondary"
          />
        </Container>
      </div>
    )
  }
}

export default ProductsList
