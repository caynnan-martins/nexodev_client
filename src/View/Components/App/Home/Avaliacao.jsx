import React from 'react';

const avaliacoes = [
    {
        nome: "CrEnglish",
        description: "A NexoDev, ajudou a desenvolver paginas no front-end e sistemas no Back-end, além de outros sistemas.",
        imageUrl: "https://ericknovaes56.netlify.app/static/media/cr2.1eed54dbac90007e1b9e.jpg",
        link: "https://crenglish.site/"
    },
    {
      nome: "JmBots",
        description: "Além da criação do site online, tambem foi utilizado a parte de automação de arduino e sensores.",
        imageUrl: "https://cdn.discordapp.com/attachments/1280229037712740372/1287255916915462165/image.png?ex=66f0e1fe&is=66ef907e&hm=fa5d38909af3e94a3fa68e6c70990e3027c966b9a21137b02e710c6d8a727c92&", // Substitua pelo caminho da imagem
    },
    {
      nome: "AnimesFlow",
        description: "Catalago feito exclusivamente pela NexoDev, todo o sistema, deis da listagem até legendas.",
        imageUrl: "https://cdn.discordapp.com/attachments/1280229037712740372/1287257067567972414/IMG_20240829_205510_348.jpg?ex=66f0e310&is=66ef9190&hm=22dbf8b6057cd2b2560d62bbbcf6bed64b3970bdb1dcf491d86966ad74f26a9c&", // Substitua pelo caminho da imagem
    },
];

export function Avaliacao() {
    return (
<section className="py-16" id="avaliacoes">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">Avaliações</h2>
    <div className="flex flex-col gap-5 justify-center items-center md:flex-row md:justify-around">
      {avaliacoes.map((avaliacao, index) => (
        <article key={index} className="w-72 bg-[#111d30] shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300">
          <div className="flex items-center gap-3">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-10 h-10 text-gray-300 bg-gray-600 rounded-full p-1"
            >
              <path
                d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
                stroke="currentColor"
              />
            </svg>
            <span className="text-lg text-white">{avaliacao.nome}</span>
          </div>
          <p className="text-sm w-full text-gray-400">
            {avaliacao.description}
          </p>
        </article>
      ))}
    </div>
  </div>
</section>
    );
}
