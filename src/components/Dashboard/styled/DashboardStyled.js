import styled from 'styled-components';

const DashboardStyled = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: #FFF;
  min-width: 240px;
  width: 240px;
  height: 100%;
  overflow-y: auto;
  .sidebar {
    &__logo {
      height: 70px;
      display: flex;
      align-items: center;
      padding: 0 20px;
      font-size: 24px;
      font-weight: bold;
      color: #333;
    }
    &__title {
      padding: 0 10px;
      margin-bottom: 20px;
      font-size: 20px;
      font-weight: 600;
      color: #333;
    }
    &__content {
    }
  }
  .s-menu {
    list-style: none;
    padding: 0;
    margin: 0;
    &__item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 15px 20px;
      cursor: pointer;
      &:hover {
        background-color: #f0f0f0;
      }
      &--icon {
        color: #333;
      }
      &--title {
        font-size: 16px;
        color: #333;
      }
    }
  }
`;

export default DashboardStyled;
