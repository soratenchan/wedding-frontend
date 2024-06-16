'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { useSignUp } from '../endpoint'

export const SignUp = () => {
  const { signUp } = useSignUp()
  type LoginForm = {
    email: string
    password: string
    token: string
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>()

  const onSubmit: SubmitHandler<LoginForm> = async (data: any) => {
    console.log('userId', data)
    signUp(data)
  }

  return (
    <div>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <div>Wedding Net Gateway!!</div>
          <div className="">
            {errors.email && <span>※Email is required</span>}
            {errors.password && <span>※Password is required</span>}
          </div>
          <div className="">
            <input
              type="text"
              placeholder="email"
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            <input
              placeholder="password"
              {...register('password', { required: true })}
            />
          </div>
          <button className="" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
