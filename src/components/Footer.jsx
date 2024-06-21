import React, {useContext} from 'react';
import ThemeContext from '../context/ThemeContext';
const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className='w-full h-10 flex justify-center items-center text-slate-500'
      style={{
        backgroundColor: theme === 'dark' ? '#111113' : '#f5f5f5',
        color: theme === 'dark' ? '#f5f5f5' : '#444',
      }}
    >
      <p className='mt-4'>© {new Date().getFullYear()} Seven-Up Bottling Company Limited. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
