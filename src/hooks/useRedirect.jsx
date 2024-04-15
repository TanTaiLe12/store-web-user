import { useNavigate } from 'react-router-dom';

function useRedirect() {
  const navigate = useNavigate();

  const push = (route, options = {}) => {
    navigate(route, options);
  };

  const goBack = (scrollTop) => {
    if (scrollTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    navigate(-1);
  };

  return { push, goBack };
}

export default useRedirect;
