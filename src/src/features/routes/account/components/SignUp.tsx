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
    <div className="absolute inset-0 flex items-center justify-center text-center text-gray-800 bg-transparent">
      <form className="bg-transparent p-8 rounded-lg shadow-none max-w-md border-none" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            id="email"
            type="text"
            className="w-full px-3 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder=" メール"
            {...register('email', {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && <span className="text-red-500">※メールアドレスが正しくありません。※</span>}
        </div>
        <div className="mb-4">
          <input
            id="password"
            type="password"
            className="w-full px-3 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder=" パスワード"
            {...register('password', { required: true })}
          />
          {errors.password && <span className="text-red-500">※パスワードが正しくありません。※</span>}
        </div>
        <div className="flex justify-center mb-4">
          <button className="custom-box font-sans text-black cursor-pointer" type="submit">
            ロギン
          </button>
        </div>
        <div className="flex justify-center mb-4">
          <span className="block w-full border-t border-gray-300"></span>
        </div>
        <div className="flex justify-center mb-4">
          <span className="text-gray-600">⎯⎯⎯⎯⎯⎯ はじめてご利用の方 ⎯⎯⎯⎯⎯⎯</span>
        </div>
        <div className="flex justify-center">
          <a
            href="/account/sign-in"
            className="custom-box font-sans text-black cursor-pointer"
          >
            登録
          </a>
        </div>
      </form>
    </div>
  )
}

export default SignUp
