import styled from 'styled-components';

const LayoutStyled = styled.div`
  display: ${({ isAuth }) => (isAuth ? 'block' : 'flex')};
  align-items: center;
  justify-content: center;
  height: ${({ isAuth }) => (isAuth ? 'auto' : '100vh')};
  padding-top: ${({ isAuth }) => (isAuth ? '140px' : '0')};
  @media screen and (max-width: 768px) {
    padding-top: ${({ isAuth }) => (isAuth ? '70px' : '0')};
    padding-bottom: 21%;
  }
`;

export default LayoutStyled;
