import { useIsSidebarOpenMutator } from '@/recoil/isSidebarOpen/isSidebarOpen';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaReact } from 'react-icons/fa';

export const Header = () => {
  const { toggleIsSidebarOpen } = useIsSidebarOpenMutator();
  return (
    <header className={'h-88 flex justify-between items-center p-20'}>
      <button
        className={'cursor-pointer'}
        onClick={() => toggleIsSidebarOpen()}
      >
        <RxHamburgerMenu size={24} />
      </button>
      <div className={'flex items-center'}>
        <FaReact size={24} />
        <p className={'ml-10 text-18'}>React App</p>
      </div>
      <p>example@kobayashiii.dev</p>
    </header>
  );
};
