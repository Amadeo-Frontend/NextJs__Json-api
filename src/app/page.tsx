"use client"
import React from 'react';
import InputForm from '@/app/components/InputForm';

const Home: React.FC = () => {
  return (
    <div className='p-36'>
      <div className='flex flex-col items-center justify-center'>
        <h1>Conversor de Dados</h1>
      <InputForm />
      </div>
      
    </div>
  );
};

export default Home;
