import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';
import logo from './logo.svg';
import Image from 'next/image';

export interface HeaderProps {
  onLogout: () => void;
}

export const Header: FC<HeaderProps> = ({ onLogout }: HeaderProps) => {
  return (
    <div className={'flex justify-between'}>
      <Image src={logo} alt="Tabsly Logo" />
      <button className="bg-gray-50 rounded border-0 p-2 hover:bg-gray-100 w-10 flex justify-center content-center">
        <ArrowLeftOnRectangleIcon onClick={onLogout} className={'text-gray-900 '} />
      </button>
    </div>
  );
};
