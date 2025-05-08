import styled from 'styled-components';

const LayoutStyled = styled.div`
  height: ${({ isHeader }) => (isHeader ? 'auto' : '100vh')};
  padding-top: ${({ isHeader }) => (isHeader ? '140px' : '0')};
  @media screen and (max-width: 768px) {
    padding-top: ${({ isHeader }) => (isHeader ? '70px' : '0')};
    padding-bottom: 21%;
  }
`;

export default LayoutStyled;
