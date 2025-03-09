import React from 'react'

function useNotFound(page: string) {
  return (
    <div className='flex justify-center items-center h-screen'>
      <h1 className='text-4xl'>{page} niet gevonden</h1>
    </div>
  )
}

export default useNotFound