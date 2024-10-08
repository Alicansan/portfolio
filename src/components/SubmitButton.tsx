import React from 'react'
import { useFormStatus } from 'react-dom'
import { FaPaperPlane } from 'react-icons/fa'

export default function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type='submit'
      disabled={pending}
      className='group flex place-items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-800 text-white rounded-full outlin-none transition-all hover:bg-gray-900'
    >
      {pending ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
      ) : (
        <>
          Submit{' '}
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 disabled:scale-100 disabled-bg-opacity-65 ' />
        </>
      )}
    </button>
  )
}
