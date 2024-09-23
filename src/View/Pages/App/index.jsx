import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Ícones de menu
import PlayerChart from "../../Components/App/App/UsuariosGraphic";
import ComprasGraphic from "../../Components/App/App/ComprasGraphic";

export default function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex min-h-screen">
            {/* Mini navbar com nome e ícone de menu */}
            <div className="md:hidden flex items-center justify-between p-4 fixed top-0 left-0 right-0 bg-gray-800 text-white z-50">
                <h1 className="text-xl font-semibold">AppName</h1>
                <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white flex flex-col h-full transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform md:translate-x-0`}>
                <div className="flex items-center justify-center h-16 bg-gray-900">
                    <h1 className="text-2xl font-semibold">Logo</h1>
                </div>
                <nav className="flex flex-col mt-4 space-y-2">
                    <a href="#" className="px-4 py-2 hover:bg-gray-700">Dashboard</a>
                    <a href="#" className="px-4 py-2 hover:bg-gray-700">Users</a>
                    <a href="#" className="px-4 py-2 hover:bg-gray-700">Settings</a>
                    <a href="#" className="px-4 py-2 hover:bg-gray-700">Analytics</a>
                </nav>
            </div>

            {/* Conteúdo principal */}
            <div className="mt-40 ml-0 md:mt-0 md:ml-64 p-4 w-full">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/2">
                        <PlayerChart />
                    </div>
                    <div className="w-full md:w-1/2">
                        <ComprasGraphic />
                    </div>
                </div>
            </div>
        </div>
    );
}
