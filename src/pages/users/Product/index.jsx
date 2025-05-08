import productsApi from '~/api/v1/productsApi';
import { ProductStyled } from './styled';
const productApi = new productsApi();
const formValue = {
  name: 'test2',
  price: 100,
  description: 'test2',
  image: 'image',
  category_id: 2,
  brand: 'test2',
  stock: 100,
  discount: 0,
};
const handleCreate = async () => {
  try {
    const response = await productApi.store(formValue);
    console.log(response);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};
function ProductDetail() {
  return (
    <ProductStyled>
      <div className="btn" onClick={handleCreate}>
        ProductDetail
      </div>
    </ProductStyled>
  );
}

export default ProductDetail;
