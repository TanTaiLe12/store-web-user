import ProductItem from '../ProductItem';
import { ProductListStyled } from './styled';

function ProductList({ lists }) {
  return (
    <ProductListStyled>
      {lists?.map((product, index) => (
        <ProductItem
          key={index}
          image={product?.image}
          title={product?.title}
          price={product?.price}
          percent={product?.percent}
          link={product?.link}
        />
      ))}
    </ProductListStyled>
  );
}

export default ProductList;
