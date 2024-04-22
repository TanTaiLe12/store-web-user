import ProductList from '~/components/ProductList';
import useRedirect from '~/hooks/useRedirect';
import config from '~/config';
import SliderLayout from '~/components/SliderLayout';
import { HomeStyled } from './styled';

const { productConfig, routes } = config;

function index() {
  const redirect = useRedirect();

  const handleGoToDetail = (id) => {
    redirect.push(`${routes.product}/${id}`);
  };
  return (
    <HomeStyled>
      <SliderLayout />
      <div className="inner">
        {Object.keys(productConfig)?.map((key, index) => (
          <section className="sec-cmn" key={index}>
            <h2 className="headline1">{productConfig[key].title}</h2>
            <ProductList lists={productConfig[key].list} />
            <div style={{ textAlign: 'center' }}>
              <div className="btn" onClick={() => handleGoToDetail(productConfig[key].id)}>
                More
              </div>
            </div>
          </section>
        ))}
      </div>
    </HomeStyled>
  );
}

export default index;
