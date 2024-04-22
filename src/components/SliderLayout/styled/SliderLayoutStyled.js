import styled from 'styled-components';

const SliderLayoutStyled = styled.div`
  --swiper-pagination-color: #fff;
  --swiper-theme-color: #5fcccf;
  margin-bottom: 50px;
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
  }
  .swiper-button {
    &-next,
    &-prev {
      background-color: #fff;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      &::after {
        font-size: 2rem;
      }
    }
  }
  .swiper img {
    object-fit: cover;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
    .swiper-button {
      &-next,
      &-prev {
        display: none;
      }
    }
    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
    }
  }
`;

export default SliderLayoutStyled;
