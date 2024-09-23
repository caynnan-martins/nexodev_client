import React from 'react';

const Contato = () => {
    return (
<section className='py-16' id='contato'>
  <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">Entre em Contato</h2>
  <div className='flex flex-col sm:flex-row sm:justify-around items-center sm:items-start'>
    <ul className="mb-4 sm:mb-0 text-center sm:text-left">
      <h3 className='text-xl font-semibold text-blue-600'>Email</h3>
      <p className='text-gray-700'>contato@nexodev.site</p>
    </ul>
    <ul className="mb-4 sm:mb-0 text-center sm:text-left">
      <h3 className='text-xl font-semibold text-blue-600'>Telefone</h3>
      <p className='text-gray-700'>(17) 99270-0548</p>
    </ul>
    <ul className="text-center sm:text-left">
      <h3 className='text-xl font-semibold text-blue-600'>Instagram</h3>
      <a href="https://instagram.com/nexodev.site" className="text-blue-600 hover:underline">
        @nexodev.site
      </a>
    </ul>
  </div>
</section>

    );
};

export default Contato;
