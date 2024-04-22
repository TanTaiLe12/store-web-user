import styled from 'styled-components';

const ProductListStyled = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  > div {
    width: calc((100% - 45px) / 4);
    @media screen and (max-width: 768px) {
      width: calc((100% - 15px) / 2);
    }
  }
`;

export default ProductListStyled;
