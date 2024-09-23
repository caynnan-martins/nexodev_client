import React from 'react';

const projects = [
    {
        title: "CrEnglish",
        description: "A Crenglish é uma plataforma de inglês online.",
        imageUrl: "https://ericknovaes56.netlify.app/static/media/cr2.1eed54dbac90007e1b9e.jpg",
        link: "https://crenglish.site/"
    },
    {
        title: "AnimesFlow",
        description: "Catalogo de animes online.",
        imageUrl: "https://cdn.discordapp.com/attachments/1280229037712740372/1287255916915462165/image.png?ex=66f0e1fe&is=66ef907e&hm=fa5d38909af3e94a3fa68e6c70990e3027c966b9a21137b02e710c6d8a727c92&", // Substitua pelo caminho da imagem
    },
    {
        title: "Wall-E",
        description: "Robô feito com arduino com sensores ultrassonico e sensor de luz.",
        imageUrl: "https://cdn.discordapp.com/attachments/1280229037712740372/1287257067567972414/IMG_20240829_205510_348.jpg?ex=66f0e310&is=66ef9190&hm=22dbf8b6057cd2b2560d62bbbcf6bed64b3970bdb1dcf491d86966ad74f26a9c&", // Substitua pelo caminho da imagem
    },
];

export function Portfolio() {
    return (
        <section className="p-4">
            <h2 className="text-blue-800 text-3xl font-bold text-center mb-8">Nosso Portfólio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-[#111d30] shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-gray-600">{project.description}</p>
                            <a href={project.link} className="mt-2 inline-block text-blue-500 hover:underline">Ver mais</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
