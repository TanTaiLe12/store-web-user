import React from 'react'
import { LayoutAdminStyled } from '../styled'

function LayoutAdmin({children, isAuth = false}) {
  return (
    <LayoutAdminStyled $isAuth={!isAuth}>
      <div className='h-admin'>
        <div className='h-admin__inner'>
          header
        </div>
      </div>
      <div className='container'>
        <div className='sidebar'></div>
        <div className='main'>
          {children}
        </div>
      </div>
    </LayoutAdminStyled>
  )
}

export default LayoutAdmin
