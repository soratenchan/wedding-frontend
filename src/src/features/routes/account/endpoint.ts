// useSignUp.ts
import { getCookie } from 'cookies-next'
// import { useState } from 'react'

interface SignUpProps {
  email: string
  password: string
}

export const useSignUp = () => {
  const signUp = async (props: SignUpProps) => {
    const csrf = getCookie('_csrf')
    const params = new URLSearchParams()
    params.append('email', props.email)
    params.append('password', props.password)

    console.log(typeof props.email)
    console.log(typeof props.password)

    const headers: HeadersInit = {}
    if (csrf) {
      headers['X-CSRF-TOKEN'] = csrf
    }
    console.log('props', props)
    try {
      const response = await fetch('http://localhost:8081/signup', {
        headers,
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: params,
      })
      const data = await response.json()
      console.log('data', data)
      // ログイン成功時の処理
    } catch (error) {
      console.error('ログインエラー:', error)
      // router.push('/')
    }
  }

  return { signUp }
}
