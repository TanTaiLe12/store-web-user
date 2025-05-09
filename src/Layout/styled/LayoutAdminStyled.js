import styled from 'styled-components';

const LayoutAdminStyled = styled.div`
  display: ${({ $isAuth }) => ($isAuth ? 'block' : 'flex')};
  align-items: center;
  justify-content: center;
  height: ${({ $isAuth }) => ($isAuth ? 'auto' : '100vh')};
  padding-top: ${({ $isAuth }) => ($isAuth ? '140px' : '0')};
  
  .h-admin {
    width: 100%;
    height: 70px;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    &__inner {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
    }
  }
  
  @media screen and (max-width: 768px) {
    padding-top: ${({ $isAuth }) => ($isAuth ? '70px' : '0')};
    padding-bottom: 21%;
  }
`;

export default LayoutAdminStyled;
