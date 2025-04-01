import UIInputStyled from './styled/UIInputStyled';

function UIInput({ type = 'text', placeholder, name = '', register = () => {}, message = '' }) {
  return (
    <UIInputStyled>
      <input type={type} placeholder={placeholder} {...register(name)} />
      {message && <p className="text-error">{message}</p>}
    </UIInputStyled>
  );
}

export default UIInput;
