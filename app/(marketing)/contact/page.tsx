'use client'
import { useForm } from 'react-hook-form'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import { useState } from 'react'

interface FormData {
  name: string
  email: string
  message: string
  token: string
}

export default function ContactPage() {
  const { register, handleSubmit, setValue } = useForm<FormData>()
  const [submitted, setSubmitted] = useState(false)
  const onSubmit = async (data: FormData) => {
    await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
    setSubmitted(true)
  }
  if (submitted) return <p>전송되었습니다. 곧 연락드리겠습니다.</p>
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register('name')} placeholder="이름" className="w-full rounded p-2 text-black"/>
      <input {...register('email')} placeholder="이메일" type="email" className="w-full rounded p-2 text-black"/>
      <textarea {...register('message')} placeholder="요청사항" className="w-full rounded p-2 text-black"/>
      <HCaptcha sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!} onVerify={token => setValue('token', token)} />
      <button type="submit" className="rounded bg-primary px-4 py-2 text-white">보내기</button>
    </form>
  )
}
