import styled from 'styled-components';

const UIInputStyled = styled.div`
  width: 100%;
  height: 100%;
  input {
    width: 100%;
    height: 100%;
    padding: 12px 20px;
    font-size: 1.6rem;
    line-height: 1;
    color: #212121;
    border: none;
    outline: none;
    background: #eff0f5;
    border-radius: 2px;
  }
  @media screen and (max-width: 768px) {
    input {
      padding: 8px 15px;
      font-size: 1.2em;
      border-radius: 2px;
    }
  }
`;

export default UIInputStyled;
