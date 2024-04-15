import UIInputStyled from './styled/UIInputStyled';

function UIInput({ type, value, onChange, placeholder }) {
  return (
    <UIInputStyled>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
    </UIInputStyled>
  );
}

export default UIInput;
