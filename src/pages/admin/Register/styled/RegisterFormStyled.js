import styled from 'styled-components';

const RegisterFormStyled = styled.div`
  min-width: 510px;
  width: 50%;
  padding: 30px 25px;
  background-color: #fff;
  border-radius: 20px;
  .title {
    font-size: 24px;
    text-align: center;
    margin-bottom: 25px;
  }
  .box {
    margin-bottom: 20px;
    &-input {
      display: flex;
      align-items: center;
      width: 100%;
      gap: 20px;
    }
    &-label {
      font-size: 16px;
      width: 40%;
      font-weight: 500;
    }
  }
  .box-center {
    margin-top: 30px;
    text-align: center;
  }
  .button {
    background-color: #043491;
    color: #FFF;
    min-width: 150px;
    padding: 15px 20px;
    border-radius: 10px;
    margin: 0 auto;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
  }
`;

export default RegisterFormStyled;
