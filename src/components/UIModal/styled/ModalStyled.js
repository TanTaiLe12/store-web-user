import styled, { keyframes } from 'styled-components';


const slideIn = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;

  .modal {
    width: 50%;
    background-color: #FFF;
    border-radius: 15px;
    overflow: hidden;
    animation: ${slideIn} 0.3s ease-out;
    &__head {
      padding: 15px 20px;
      font-size: 20px;
      font-weight: bold;
      border-bottom: 1px solid #dfdfdf;
    }
    &__content {
      font-size: 16px;
      padding: 30px 20px;
    }
    &__footer {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
      padding: 25px 20px;
      border-top: 1px solid #dfdfdf;
    }
    &__btn {
      padding: 10px 20px;
      min-width: 150px;
      background-color: #043491;
      color: #FFF;
      border-radius: 10px;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
      cursor: pointer;
      transition: opacity 0.3s linear;
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

export default ModalStyled;
