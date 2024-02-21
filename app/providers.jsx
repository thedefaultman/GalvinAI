'use client';
import { Toaster } from 'react-hot-toast';
export default function Providers({ children }) {
  return (
    <>
      <Toaster position='top-center' />
      {children}
    </>
  );
}