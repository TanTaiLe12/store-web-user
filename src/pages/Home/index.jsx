import ProductList from '~/components/ProductList';
import useRedirect from '~/hooks/useRedirect';
import config from '~/config';
import { HomeStyled } from './styled';

const { productConfig, routes } = config;

function index() {
  const redirect = useRedirect();

  const handleGoToDetail = (id) => {
    redirect.push(routes.product + `/${id}`);
  };

  return (
    <HomeStyled>
      <div className="inner">
        {Object.keys(productConfig)?.map((key, index) => (
          <section className="sec-cmn" key={index}>
            <h2 className="headline1">{productConfig[key].title}</h2>
            <ProductList lists={productConfig[key].list} />
            <div
              onClick={() => handleGoToDetail(productConfig[key].urlDetail)}
              style={{ textAlign: 'center' }}
            >
              <div className="btn">More</div>
            </div>
          </section>
        ))}
      </div>
    </HomeStyled>
  );
}

export default index;
