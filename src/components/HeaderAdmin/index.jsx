import React from 'react';
import { VscLayoutSidebarRight } from 'react-icons/vsc';
import { HeaderAdminStyled } from './styled';
function HeaderAdmin() {
  return (
    <HeaderAdminStyled>
      <div className="h-admin">
        <div className="h-admin__future">
          <div className="">
            <VscLayoutSidebarRight />
          </div>
          <div className="h-admin-search"></div>
        </div>
        <div className="h-admin__auth">
          <div className="name">Danny</div>
          <div className="box-auth">
            <div className="login">login</div>
            <div className="logout">logout</div>
          </div>
        </div>
      </div>
    </HeaderAdminStyled>
  );
}

export default HeaderAdmin;
