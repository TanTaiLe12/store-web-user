import { useForm } from 'react-hook-form';
import config from '~/config';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useRedirect from '~/hooks/useRedirect';
import FormLoginStyled from './styled/FormLoginStyled';
import AuthApi from '~/api/v1/admin/authApi';
import UIInput from '~/components/UIInput';
import { setToken } from '~/utils/auth';

const { routesAdmin } = config;

const authApi = new AuthApi();

const schema = yup
  .object({
    email: yup.string().email('Email không hợp lệ').required('Email không được để trống'),
    password: yup
      .string()
      .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
      .required('Mật khẩu không được để trống'),
  })
  .required();

function FormLogin() {
  const redirect = useRedirect();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const { access_token } = await authApi.login(data);
      if (access_token) {
        setToken(access_token);
        redirect.push(routesAdmin.dashboard);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormLoginStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="title">Login</h2>
        <div className="box">
          <div className="box-input">
            <label className="box-label">Email</label>
            <UIInput
              name="email"
              register={register}
              message={errors.email?.message}
              placeholder="Email"
            />
          </div>
        </div>
        <div className="box">
          <div className="box-input">
            <label className="box-label">Password</label>
            <UIInput
              name="password"
              register={register}
              message={errors.password?.message}
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="box-center">
          <button type="submit" className="button">
            Login
          </button>
          <div className="button" onClick={() => redirect.push(routesAdmin.register)}>
            register
          </div>
        </div>
      </form>
    </FormLoginStyled>
  );
}

export default FormLogin;
