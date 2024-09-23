import { Navbar } from "../../Components/App/Navbar";
import { motion } from "framer-motion";
import image from '../../../assets/img/undraw_website_5bo8.svg'
import Servicos from "../../Components/App/Home/Servicos";
import Contato from "../../Components/App/Home/Contato";
import { Portfolio } from "../../Components/App/Home/Port";
import { Avaliacao } from "../../Components/App/Home/Avaliacao";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <section className="flex flex-col items-center justify-center min-h-[80vh] gap-5 text-wrap p-4">
                <motion.h1
                    className="text-white text-3xl md:text-4xl text-center w-full"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Conectando <span className="mark">Inovação</span> e <span className="mark">Tecnologia</span> para impulsionar seu <span className="mark">futuro digital</span>.
                </motion.h1>
                <h3 className="text-center text-lg md:text-xl">
                    Transformamos suas ideias em <span className="mark">soluções digitais</span> que fazem a diferença.
                </h3>
            </section>
            <section id="sobre" className="flex flex-col items-center justify-center min-h-[60vh] gap-10 text-wrap p-4">
            <div class="container mx-auto px-6">
                <div class="flex flex-col lg:flex-row items-center">
                    <div class="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 class="text-3xl font-bold text-blue-800 mb-4">Sobre a NexoDev</h2>
                        <p class="text-gray-700 mb-4">
                            Na NexoDev, acreditamos que a tecnologia de ponta deve ser acessível a todos, independentemente do tamanho da sua empresa ou do valor investido.
                        </p>
                        <p class="text-gray-700 mb-4">
                            Nossa equipe é formada por profissionais apaixonados por transformar ideias em soluções digitais que se destacam no mercado.
                        </p>
                        <h3 class="text-2xl font-semibold text-blue-600 mt-6 mb-2">Por que Escolher a NexoDev?</h3>
                        <ul class="list-disc list-inside text-gray-700">
                            <li><strong>Experiência:</strong> Nossa equipe possui uma vasta experiência em desenvolvimento web, utilizando as mais recentes tecnologias.</li>
                            <li><strong>Flexibilidade:</strong> Adaptamos nossos serviços para atender clientes de todos os tamanhos.</li>
                            <li><strong>Compromisso:</strong> Estamos comprometidos em entregar projetos dentro do prazo e com eficiência.</li>
                        </ul>
                        <p class="text-gray-700 mt-6">
                            Estamos prontos para levar seu projeto ao próximo nível. <a href="#contato" class="text-blue-600 underline">Entre em contato</a> e descubra como podemos ajudá-lo!
                        </p>
                    </div>
                    <div class="lg:w-1/2">
                    <img src={image} alt="Equipe NexoDev" className="w-full h-auto rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
        <Servicos />
        <Portfolio />
        <Avaliacao />
        <Contato />
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p>&copy; {new Date().getFullYear()} NexoDev. Todos os direitos reservados.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="/politica-privacidade" className="hover:underline">Política de Privacidade</a>
                        <a href="/termos-servico" className="hover:underline">Termos de Serviço</a>
                        <a href="https://instagram.com/nexodev.site" className="hover:underline">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
        </main>
    );
}
