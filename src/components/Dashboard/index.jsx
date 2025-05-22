import React from 'react';
import { DashboardStyled } from './styled';
import {
  AiFillDashboard,
  AiFillProduct,
  AiOutlineUser,
  AiTwotoneMedicineBox,
} from 'react-icons/ai';
import { MdCategory } from 'react-icons/md';

const DASHBOARD_MENU = [
  {
    title: 'Dashboard',
    icon: <AiFillDashboard size={20} />,
    path: '/admin/dashboard/product',
  },
  {
    title: 'Product',
    icon: <AiFillProduct size={20} />,
    path: '/admin/dashboard/product',
  },
  {
    title: 'Category',
    icon: <MdCategory size={20} />,
    path: '/admin/dashboard/category',
  },
  {
    title: 'Order',
    icon: <AiTwotoneMedicineBox size={20} />,
    path: '/admin/dashboard/order',
  },
  {
    title: 'User',
    icon: <AiOutlineUser size={20} />,
    path: '/admin/dashboard/user',
  },
];

function Dashboard() {
  return (
    <DashboardStyled>
      <div className="sidebar">
        <h2 className="sidebar__logo">Stone</h2>
        <ul className="s-menu">
          {DASHBOARD_MENU.map((item, index) => (
            <li key={index} className="s-menu__item">
              <span className="s-menu__item--icon">{item.icon}</span>
              <span className="s-menu__item--title">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </DashboardStyled>
  );
}

export default Dashboard;
