import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import AuthApi from '~/api/v1/admin/authApi';
import useRedirect from '~/hooks/useRedirect';
import UIInput from '~/components/UIInput';
import RegisterFormStyled from './styled/RegisterFormStyled';

const authApi = new AuthApi();

const schema = yup
  .object({
    name: yup.string().required('Tên người dùng không được để trống'),
    email: yup.string().email('email không hợp lệ').required('email không được để trống'),
    password: yup
      .string()
      .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
      .required('Mật khẩu không được để trống'),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref('password')], 'Mật khẩu không khớp')
      .required('Xác nhận mật khẩu không được để trống'),
  })
  .required();

function FormRegister() {
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
      await authApi.register(data);
    } catch (error) {
      console.log(error);
    } finally {
      redirect.goBack();
    }
  };
  return (
    <RegisterFormStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="title">Register</h2>
        <div className="box">
          <div className="box-input">
            <label className="box-label">Username</label>
            <UIInput
              name="name"
              register={register}
              message={errors.name?.message}
              placeholder="User name"
            />
          </div>
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
        </div>
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
        <div className="box">
          <div className="box-input">
            <label className="box-label">Confirm Password</label>
            <UIInput
              name="password_confirmation"
              register={register}
              message={errors.password_confirmation?.message}
              type="password"
              placeholder="Password confirmation"
            />
          </div>
        </div>
        <div className="box-center">
          <button type="submit" className="button">
            Đăng Ký
          </button>
        </div>
      </form>
    </RegisterFormStyled>
  );
}

export default FormRegister;
