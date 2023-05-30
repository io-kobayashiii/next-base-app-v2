import { AiFillDashboard } from 'react-icons/ai';
import { BsGraphUpArrow } from 'react-icons/bs';
import { NavigationItem } from '../NavigationItem';
import { useIsSidebarOpenState } from '@/recoil/isSidebarOpen/isSidebarOpen';

export const Sidebar = () => {
  const isSidebarOpen = useIsSidebarOpenState();
  return (
    <>
      <nav
        className={`${
          isSidebarOpen ? '' : 'ml-minus-256'
        } w-256 bg-gray-900 p-20 duration-300`}
      >
        <NavigationItem Icon={AiFillDashboard} href={'/'} name={'HOME'} />
      </nav>
    </>
  );
};
