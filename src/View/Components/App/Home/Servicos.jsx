import React from 'react';

const Servicos = () => {
    const servicos = [
        {
            nome: 'Desenvolvimento Web',
            descricao: 'Criamos sites responsivos e atraentes para empresas de todos os tamanhos.',
            icon: '🌐' // Você pode substituir por um ícone real
        },
        {
            nome: 'Aplicativos',
            descricao: 'Desenvolvemos aplicativos móveis personalizados para Android e iOS.',
            icon: '📱' // Você pode substituir por um ícone real
        },
        {
            nome: 'Consultoria Tecnológica',
            descricao: 'Oferecemos consultoria para ajudar sua empresa a adotar as melhores soluções tecnológicas.',
            icon: '💡' // Você pode substituir por um ícone real
        },
        {
            nome: 'Suporte e Manutenção',
            descricao: 'Fornecemos suporte contínuo e manutenção para garantir o funcionamento ideal do seu site.',
            icon: '🛠️' // Você pode substituir por um ícone real
        }
    ];

    return (
        <section className="py-16" id='servicos'>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">Nossos Serviços</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicos.map((servico) => (
                        <div key={servico.nome} className="bg-[#111d30] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="text-4xl mb-4">{servico.icon}</div>
                            <h3 className="text-xl font-semibold text-blue-600">{servico.nome}</h3>
                            <p className="text-gray-700">{servico.descricao}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Servicos;
