import styled from 'styled-components';

const ProductListStyled = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  > div {
    width: calc((100% - 45px) / 4);
  }
`;

export default ProductListStyled;
