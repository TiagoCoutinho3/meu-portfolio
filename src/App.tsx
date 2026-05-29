import { useState } from "react";
import {
  ArrowUpRight,
  Link2,
  Mail,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  images: string[];
  shortDescription: string;
  fullDescription: string;
  stacks: string[];
  process: string;
  deployUrl: string;
  isFeatured: boolean;
};

const projects: Project[] = [
  {
    id: "kicker-price",
    title: "Plataforma de Avaliação e Histórico de Futebol",
    subtitle: "KickerPrice",
    images: [
      "/mockups/mocckup-kicker-value (1).png",
      "/mockups/mocckup-kicker-value (2).png",
      "/mockups/mocckup-kicker-value (3).png",
    ],
    shortDescription:
      "Explore o valor histórico de 47 mil jogadores, 796 clubes e 157 mil transferências — e descubra quanto cada um valeria nos preços de hoje.",
    fullDescription:
      "KickerPrice é uma plataforma que cruza dados reais de mais de 600 mil registros históricos de valor de mercado com um algoritmo que considera crescimento do mercado, posição, liga e idade do jogador para ajustar qualquer valor histórico para os preços atuais. O resultado é uma ferramenta única que transforma dado frio em história, permitindo comparar jogadores e elencos de eras completamente diferentes em valores equivalentes. Conta ainda com o PriceMatch — um jogo onde o usuário descobre quem valia mais entre jogadores, clubes e transferências históricas.",
    stacks: [
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Recharts",
    ],
    process:
      "O maior desafio foi a escala dos dados — importar e estruturar 600 mil registros históricos sem comprometer a performance. A solução foi combinar materialized views no PostgreSQL com cache via React Query, reduzindo queries pesadas de rankings para respostas abaixo de 1 segundo. A modelagem do KickerIndex exigiu pesquisa sobre a evolução real do mercado de transferências desde 2004, identificando eventos que quebraram o mercado como os contratos de TV da Premier League em 2012 e a transferência do Neymar em 2017.",
    deployUrl: "https://kicker-value.vercel.app/",
    isFeatured: true,
  },
  {
    id: "coisa-fofa",
    title: "E-commerce Full-Stack de Produtos Artesanais",
    subtitle: "Coisa Fofa Ateliê",
    images: [
      "/mockups/mockup-coisa-fofa-atelie-1.png",
      "/mockups/mockups-coisa-fofa atelie (2).png",
      "/mockups/mockups-coisa-fofa atelie (3).png",
    ],
    shortDescription:
      "Plataforma de e-commerce completa para venda de produtos em crochê, equipada com painel administrativo automatizado para controle de estoque e catálogo em tempo real.",
    fullDescription:
      "Uma aplicação web full-stack desenvolvida para digitalizar as vendas do Coisa Fofa Ateliê. O projeto conta com uma vitrine dinâmica pública e um painel de controle (Admin) restrito. A arquitetura foi desenhada separando estritamente as camadas de privilégio: o front-end consome dados publicamente usando chaves anônimas restritas por políticas de segurança, enquanto as operações críticas de mutação de dados (escrita, edição e deleção) ficam isoladas em um ambiente de back-end privado. O upload de mídias também foi descentralizado, enviando arquivos direto do cliente para o storage via tokens controlados, eliminando gargalos de processamento no servidor.",
    stacks: [
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "Serverless Functions",
      "PostgreSQL",
      "Supabase Storage",
    ],
    process:
      "O desenvolvimento priorizou performance, resiliência e blindagem de credenciais. Para evitar o vazamento de dados sensíveis no cliente, implementei uma API Serverless na Vercel (Node.js) encarregada de centralizar o uso da Service Role Key (chave mestra) longe do navegador. No banco de dados (Supabase), o fluxo foi estruturado para suportar o Row Level Security (RLS), separando o tráfego anônimo de leitura das requisições administrativas. O processo cobriu desde a sanitização rigorosa de inputs no back-end (como validação de estoque negativo e preços zerados) até o provisionamento de buckets públicos protegidos contra injeção de arquivos maliciosos.",
    deployUrl: "https://coisa-fofa-atelie.vercel.app/",
    isFeatured: true,
  },
  {
    id: "conversor",
    title: "Ferramenta de Conversão Numérica",
    subtitle: "Conversor de Bases",
    images: ["/thumb-conversor.png"],
    shortDescription:
      "Ferramenta para conversao entre bases Binaria, Octal, Decimal e Hexadecimal.",
    fullDescription:
      "Uma aplicação web focada em estudantes e profissionais de computação. Permite converter instantaneamente valores entre as bases mais utilizadas na programação. A interface foi desenhada para ser limpa, responsiva e fornecer resultados em tempo real à medida que o usuário digita.",
    stacks: ["JavaScript (ES6+)", "CSS3", "HTML5"],
    process:
      "Desenvolvimento de algoritmos de conversao logica e tratamento de inputs em tempo real com foco em responsividade total.",
    deployUrl: "https://tiagocoutinho3.github.io/conversor-bases/",
    isFeatured: true,
  },
  {
    id: "crypto",
    title: "Monitoramento de Criptomoedas",
    subtitle: "Crypto Dashboard",
    images: ["/thumb-crypto.png"],
    shortDescription:
      "Monitoramento de criptomoedas em tempo real com graficos e variação de tempo.",
    fullDescription: "",
    stacks: ["React", "TS", "Recharts", "API CoinGecko", "TanStack Query"],
    process:
      "Integracao de API externa com gerenciamento de cache e estado assincrono para garantir performance e evitar bloqueios de rate limit.",
    deployUrl: "https://crypto-dashboard-sand-ten.vercel.app/",
    isFeatured: false,
  },
  {
    id: "task",
    title: "Gerenciador de Tarefas",
    subtitle: "Task Master",
    images: ["/thumb-tasks.png"],
    shortDescription:
      "Gerenciador de tarefas moderno com filtros e estados de edicao.",
    fullDescription: "",
    stacks: ["React", "TS", "Tailwind CSS", "LocalStorage"],
    process:
      "Implementacao de um sistema CRUD completo com persistencia de dados local, focando em uma experiencia de usuario (UX) limpa e intuitiva.",
    deployUrl: "https://tc-task-master.vercel.app/",
    isFeatured: false,
  },
];

const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Consumo de APIs",
      "Interfaces Responsivas", 
    ]
  },
  {
  category: "Banco de Dados",
    items: [
      "SQL",    
      "Otimização de Performance",
      "PostgreSQL",
      "Modelagem Relacional",
      "Segurança de Dados"
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      "Node.js",
      "TypeScript",
      "REST APIs",
      "Arquitetura Cloud",
      "Validação de Dados",
      "Autenticação",
    ],
  },
];

function FeaturedProjectCard({ project }: { project: Project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length,
    );
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900/40 transition-all duration-300 hover:border-emerald-400/60 shadow-lg shadow-black/20">
      {/* Top Section: Imagem + Info Curta */}
      <div className="flex flex-col lg:flex-row">
        {/* Slider de Imagens */}
        <div className="relative w-full lg:w-3/5 h-[300px] sm:h-[400px] lg:h-auto overflow-hidden bg-zinc-950 flex-shrink-0 lg:border-r lg:border-zinc-800/50">
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.subtitle} mockup`}
            className="w-full h-full object-cover object-top transition-all duration-500"
          />
          {project.images.length > 1 && (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/40 via-transparent to-zinc-950/40 pointer-events-none" />

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-zinc-950/70 text-white hover:bg-emerald-500 hover:text-zinc-950 hover:scale-110 backdrop-blur-md transition-all z-10"
                aria-label="Imagem anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-zinc-950/70 text-white hover:bg-emerald-500 hover:text-zinc-950 hover:scale-110 backdrop-blur-md transition-all z-10"
                aria-label="Próxima imagem"
              >
                <ChevronRight size={24} />
              </button>

              {/* Indicadores do slider */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-10 bg-zinc-950/50 px-3 py-2 rounded-full backdrop-blur-sm">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex
                        ? "bg-emerald-400 w-6"
                        : "bg-zinc-400 hover:bg-zinc-200"
                    }`}
                    aria-label={`Ir para imagem ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Conteúdo Curto */}
        <div className="flex w-full lg:w-2/5 flex-col p-8 sm:p-10 justify-center bg-zinc-900/10">
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-zinc-100 leading-tight">
                {project.title}
              </h3>
              <p className="text-emerald-400 font-semibold tracking-widest text-sm uppercase mt-2">
                {project.subtitle}
              </p>
            </div>

            <p className="text-base leading-relaxed text-zinc-300">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.stacks.map((stack) => (
                <span
                  key={stack}
                  className="rounded-full border border-zinc-700 bg-zinc-800/40 px-3.5 py-1.5 text-xs font-medium text-zinc-300"
                >
                  {stack}
                </span>
              ))}
            </div>

            <div className="pt-6 border-t border-zinc-800/80">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                {isExpanded ? "Ocultar detalhes" : "Ler mais sobre o projeto"}
                {isExpanded ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Section: Full Width */}
      {isExpanded && (
        <div className="w-full border-t border-zinc-800 bg-zinc-950/50 p-8 sm:p-10 animate-in slide-in-from-top-4 fade-in duration-300">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-5">
              <h4 className="text-lg font-semibold text-emerald-400">
                Sobre o Projeto
              </h4>
              <p className="text-base leading-relaxed text-zinc-300 bg-zinc-900/50 p-5 rounded-xl border border-zinc-800/50">
                {project.fullDescription}
              </p>
            </div>

            <div className="space-y-3 text-base leading-relaxed text-zinc-400 p-5 bg-zinc-900/30 rounded-xl border border-zinc-800/30">
              <strong className="text-zinc-200 font-medium block mb-2">
                Processo e Desafios:
              </strong>
              {project.process}
            </div>

            <div className="pt-4 flex">
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-8 py-4 text-sm font-bold text-zinc-950 transition-all duration-300 hover:bg-emerald-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/20"
              >
                Acessar Plataforma
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

function RegularProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/50 hover:shadow-xl hover:shadow-black/20">
      <div className="relative overflow-hidden h-48 w-full">
        <img
          src={project.images[0]}
          alt={project.subtitle}
          className="h-full w-full object-cover object-top transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-zinc-950/20 transition-all group-hover:bg-transparent" />
      </div>

      <div className="flex h-full flex-col gap-4 p-6">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-zinc-100">
            {project.title}
          </h3>
          <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mt-1.5">
            {project.subtitle}
          </p>
        </div>

        <p className="text-sm leading-relaxed text-zinc-300 flex-grow">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/60 mt-auto">
          {project.stacks.map((stack) => (
            <span
              key={stack}
              className="rounded-full border border-zinc-700/80 bg-zinc-800/30 px-2.5 py-1 text-[11px] font-medium text-zinc-400"
            >
              {stack}
            </span>
          ))}
        </div>

        <a
          href={project.deployUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition-all duration-300 hover:text-emerald-300 group/link"
        >
          Ver Deploy
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          />
        </a>
      </div>
    </article>
  );
}

function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const featuredProjects = projects.filter((p) => p.isFeatured);
  const otherProjects = projects.filter((p) => !p.isFeatured);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
      {/* Menu Fixo */}
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#home"
            className="text-lg font-semibold tracking-tight transition-all duration-300 hover:text-emerald-400"
          >
            Tiago Coutinho
          </a>
          <ul className="flex items-center gap-5 text-sm text-zinc-300">
            <li>
              <a
                href="#skills"
                className="transition-all duration-300 hover:text-emerald-400"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projetos"
                className="transition-all duration-300 hover:text-emerald-400"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="transition-all duration-300 hover:text-emerald-400"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-16 pt-12 sm:gap-24 sm:pt-16">
        
        {/* Adicionado scroll-mt-24 para compensar a barra do menu */}
        <section id="home" className="space-y-8 scroll-mt-24">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-emerald-400">
              Portfolio
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Tiago Coutinho | Full-stack Developer
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Acadêmico de Sistemas de Computação na UFF, traduzindo lógica
              complexa e arquitetura de dados em aplicações completas, seguras
              e com interfaces fluidas de ponta a ponta.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-medium text-zinc-950 transition-all duration-300 hover:bg-emerald-300"
            >
              Ver Projetos
              <ArrowUpRight size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/tiago-coutinho-39574b3bb"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-100 transition-all duration-300 hover:border-emerald-400 hover:text-emerald-400"
            >
              LinkedIn
              <Link2 size={18} />
            </a>
          </div>
        </section>

        {/* Adicionado scroll-mt-24 aqui */}
        <section id="skills" className="space-y-6 scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Skills
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skills.map((group) => (
              <article
                key={group.category}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 transition-all duration-300 hover:border-emerald-400/60"
              >
                <h3 className="mb-4 text-lg font-semibold text-emerald-400">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-200 transition-all duration-300 hover:border-emerald-400 hover:text-emerald-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Adicionado scroll-mt-24 aqui */}
        <section id="projetos" className="space-y-16 mt-8 scroll-mt-24">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Projetos em Destaque
            </h2>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Vitrine dos principais projetos.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            {featuredProjects.map((p) => (
              <FeaturedProjectCard key={p.id} project={p} />
            ))}
          </div>

          <div className="flex flex-col items-center justify-center pt-8 border-t border-zinc-800 mt-12 gap-10">
            {!showAllProjects ? (
              <button
                onClick={() => setShowAllProjects(true)}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-100 transition-all duration-300 hover:border-emerald-400 hover:text-emerald-400"
              >
                Ver todos os projetos
                <ChevronDown size={18} />
              </button>
            ) : (
              <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold tracking-tight text-zinc-100">
                    Outros Trabalhos
                  </h3>
                  <p className="text-sm text-zinc-400">
                    Mais trabalhos que desenvolvi ao longo da minha jornada.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {otherProjects.map((p) => (
                    <RegularProjectCard key={p.id} project={p} />
                  ))}
                </div>

                <div className="flex justify-center pt-8">
                  <button
                    onClick={() => {
                      setShowAllProjects(false);
                      document
                        .getElementById("projetos")
                        // Ajustado para o ID correto em minúsculo
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-all duration-300 hover:text-emerald-400"
                  >
                    Ocultar projetos extras
                    <ChevronUp size={18} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Adicionado scroll-mt-24 aqui */}
      <footer id="contato" className="border-t border-zinc-800 scroll-mt-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 py-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Vamos conversar?
          </h2>
          <p className="max-w-2xl text-zinc-300">
            Estou em busca de novas oportunidades e desafios no desenvolvimento
            web.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-300">
            <a
              href="https://github.com/TiagoCoutinho3"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 transition-all duration-300 hover:border-emerald-400 hover:text-emerald-400"
            >
              <Link2 size={16} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tiago-coutinho-39574b3bb"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 transition-all duration-300 hover:border-emerald-400 hover:text-emerald-400"
            >
              <Link2 size={16} />
              LinkedIn
            </a>
            <a
              href="mailto:tiagocoutinho898@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 transition-all duration-300 hover:border-emerald-400 hover:text-emerald-400"
            >
              <Mail size={16} />
              tiagocoutinho898@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
