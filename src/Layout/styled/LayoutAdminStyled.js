import styled from 'styled-components';

const LayoutAdminStyled = styled.div`
  display: ${({ $isAuth }) => ($isAuth ? 'block' : 'flex')};
  align-items: center;
  justify-content: center;
  height: 100vh;
  .logo {
    padding: 15px 4px 15px 28px;
    color: #FFF;
    font-size: 18px;
    font-weight: bold;
  }
`;

export default LayoutAdminStyled;
