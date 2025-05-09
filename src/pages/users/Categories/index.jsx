import { CategoriesStyled } from './styled';
import CategoriesApi from '~/api/v1/categoriesApi';

const categoriesApi = new CategoriesApi();
const formValue = {
  name: 'test2 test2',
  description: 'test2',
};

function Categories() {
  const handleCreate = async () => {
    try {
      const response = await categoriesApi.store(formValue);
      console.log(response);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  return (
    <CategoriesStyled>
      <div className="btn" onClick={handleCreate}>
        Categories
      </div>
    </CategoriesStyled>
  );
}

export default Categories;
