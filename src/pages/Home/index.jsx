import ProductList from '~/components/ProductList';
import useRedirect from '~/hooks/useRedirect';
import config from '~/config';
import SliderLayout from '~/components/SliderLayout';
import { HomeStyled } from './styled';
import AuthApi from '../../api/v1/authApi';
import { useEffect } from 'react';

const { productConfig, routes } = config;
const authApi = new AuthApi();
function index() {
  const redirect = useRedirect();

  useEffect(() => {
    (async () => {
      const test = await authApi.listAll();
      console.log(test);
    })();
  }, []);

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
