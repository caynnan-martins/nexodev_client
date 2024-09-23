import React from 'react';

const posts = [
    {
        title: "Como a Tecnologia Está Transformando o Mundo",
        description: "Uma análise sobre as últimas inovações tecnológicas e seu impacto em diversas indústrias.",
        imageUrl: "https://th.bing.com/th/id/OIP.r_q1I8T05nxrcqGPUK9PVgHaFj?rs=1&pid=ImgDetMain",
        date: "01/10/2023",
        link: "#"
    },
    {
        title: "Dicas para Criar um Site Eficiente",
        description: "Explore as melhores práticas para desenvolver sites que atraem e retêm usuários.",
        imageUrl: "https://th.bing.com/th/id/OIP.lAY_4TfbwpzAD7iGJW3d0gHaEK?rs=1&pid=ImgDetMain",
        date: "15/10/2023",
        link: "#"
    },
    {
        title: "Tendências em Desenvolvimento de Software",
        description: "Descubra as tendências que estão moldando o futuro do desenvolvimento de software.",
        imageUrl: "https://th.bing.com/th/id/OIP.oIwMItI6qonJdcEXgwe4AQHaEK?rs=1&pid=ImgDetMain",
        date: "30/10/2023",
        link: "#"
    },
];

export function Blog() {
    return (
        <section className="px-4 py-8">
            <h2 className="text-blue-800 text-3xl font-bold text-center mb-8">Últimos Posts do Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                    <div key={index} className="shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{post.title}</h3>
                            <p className="text-gray-600">{post.description}</p>
                            <p className="text-gray-400 text-sm">{post.date}</p>
                            <a href={post.link} className="mt-2 inline-block text-blue-500 hover:underline">Leia mais</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
