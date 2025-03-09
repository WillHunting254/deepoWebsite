'use client'

import { logout } from '@/app/actions/auth'
import React from 'react'

const LogoutButton = () => {
  return (
    <div>
      <button className="btn btn-sm btn-primary m-2 " onClick={() => logout()} >Log uit</button>
    </div>
  )
}

export default LogoutButton
