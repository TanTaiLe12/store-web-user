import styled from 'styled-components';

const ProductItemStyled = styled.div`
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
  overflow: hidden;
  cursor: pointer;
  .product {
    &--image {
      position: relative;
      padding-bottom: 95%;
      overflow: hidden;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        transform: translate(-50%, -50%) scale(1);
        object-fit: cover;
        transition: transform 0.3s linear;
      }
    }
    &--sale {
      position: absolute;
      top: 0;
      right: 0;
      padding: 4px 10px 6px;
      background-color: rgba(255,233,122, 1);
      color: rgba(236,56,20, 1);
      font-size: 1.5rem;
      text-align: center;
      z-index: 1;
    }
    &__content {
      padding: 10px;
      &--title {
        margin-bottom: 10px;
        font-size: 1.5rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        line-clamp: 2;
      }
      &--price {
        color: rgb(238,77,45);
        font-size: 1.5rem;
        > * {
          display: block;
        }
      }
    }
  }
  &:hover {
    .product--image {
      img {
        transform: translate(-50%, -50%) scale(1.2);
      }
    }
  }
`;

export default ProductItemStyled;
