import React, { useState } from 'react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex justify-between items-center p-4 shadow-md">
            <ul>
                <h1 className="text-[20px]">Nexo<span className="mark">Dev</span></h1>
            </ul>
            <div className="hidden md:flex items-center gap-7">
                <ul className="flex space-x-7">
                    <li><a href="#">Início</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
                <a className="relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-blue-50 bg-gradient-to-tr from-blue-900/30 via-blue-900/70 to-blue-900/30 ring-4 ring-blue-900/20 rounded-full overflow-hidden hover:opacity-90 transition-opacity" href="#">Logar</a>
            </div>

            {/* Botão para Mobile */}
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Menu Mobile */}
            {isOpen && (
                <div className="absolute top-16 right-4 bg-[#0D1117] shadow-lg rounded-md z-10 md:hidden">
                    <ul className="flex flex-col p-4 space-y-2">
                        <li><a href="#">Início</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#contato">Contato</a></li>
                        <li><a href="#">Logar</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
