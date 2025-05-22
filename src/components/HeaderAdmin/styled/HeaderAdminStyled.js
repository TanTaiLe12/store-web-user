import styled from 'styled-components';

const HeaderAdminStyled = styled.div`
    height: 70px;
    background-color: #fff;
    .h-admin {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding: 0 20px;
      &__auth {
        display: flex;
        align-items: center;
        gap: 20px;
        .name {
          font-size: 16px;
          font-weight: bold;
          color: #333;
        }
        .box-auth {
          display: flex;
          align-items: center;
          gap: 10px;
          .login,
          .logout {
            padding: 5px 20px;
            border-radius: 5px;
            background-color: #f0f0f0;
            font-size: 14px;
            cursor: pointer;
            &:hover {
              background-color: #e0e0e0;
            }
          }
        }
      }
  }
`;

export default HeaderAdminStyled;
