import styled from 'styled-components';

const HeaderStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0, 0.2);
  z-index: 10;
  .header {
    &__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
      .logo {
        width: 250px;
        margin-right: 20px;
        &:hover {
          opacity: 0.7;
        }
      }
      &--right {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: calc(100% - 250px);
      }
    }
    &__search {
      position: relative;
      width: calc(100% - 29px);
      max-width: 500px;
      margin-right: 20px;
      border-radius:  10px;
      overflow: hidden;
      .btn-search {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 60px;
        background-color: #f57224;
        cursor: pointer;
        &:hover {
          opacity: 0.7;
        }
        img {
          width: 30px;
        }
      }
    }
    &__cart {
      width: 29px;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
      img {
        width: 100%;
      }
    }
  }
  .navi {
    display: flex;
    gap: 10px;
    &__item {
      padding: 10px 15px;
      font-size: 1.6rem;
      font-weight: bold;
      position: relative;
      cursor: pointer;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 4px;
        background-color: #5fcccf;
        transition: width 0.3s ease-out;
      }
      &.active {
        &::before {
          width: 100%;
        }
      }
      &:hover {
        &::before {
          width: 100%;
        }
      }
    }
  }
`;

export default HeaderStyled;
