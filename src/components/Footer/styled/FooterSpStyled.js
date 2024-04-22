import styled from 'styled-components';

const FooterSpStyled = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;
  background-color: #fff;
  box-shadow: 0 2px 6px 2px rgba(0,0,0, 0.16);
  z-index: 10;
  display: none;
  .f-navigate {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: calc(100% / 4);
      text-align: center;
      color: #333;
      text-decoration: none;
      font-size: 1.2rem;
      img {
        width: 35%;
        aspect-ratio: 148/148;
      }
      span {
        display: block;
        margin-top: 5px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export default FooterSpStyled;
