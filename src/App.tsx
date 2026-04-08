import { ArrowUpRight, Link2, Mail } from 'lucide-react'

type Project = {
  title: string
  image: string
  description: string
  stacks: string[]
  process: string
  deployUrl: string
}

const projects: Project[] = [
  {
    title: 'Crypto Dashboard',
    image: '/thumb-crypto.png',
    description: 'Monitoramento de criptomoedas em tempo real com graficos e variação de tempo.',
    stacks: ['React', 'TS', 'Recharts', 'API CoinGecko', 'TanStack Query'],
    process:
      'Integracao de API externa com gerenciamento de cache e estado assincrono para garantir performance e evitar bloqueios de rate limit.',
    deployUrl: 'https://crypto-dashboard-sand-ten.vercel.app/',
  },
  {
    title: 'Task Master',
    image: '/thumb-tasks.png',
    description: 'Gerenciador de tarefas moderno com filtros e estados de edicao.',
    stacks: ['React', 'TS', 'Tailwind CSS', 'LocalStorage'],
    process:
      'Implementacao de um sistema CRUD completo com persistencia de dados local, focando em uma experiencia de usuario (UX) limpa e intuitiva.',
    deployUrl: 'https://tc-task-master.vercel.app/',
  },
  {
    title: 'Conversor de Bases Numericas',
    image: '/thumb-conversor.png',
    description:
      'Ferramenta para conversao entre bases Binaria, Octal, Decimal e Hexadecimal.',
    stacks: ['JavaScript (ES6+)', 'CSS3', 'HTML5'],
    process:
      'Desenvolvimento de algoritmos de conversao logica e tratamento de inputs em tempo real com foco em responsividade total.',
    deployUrl: 'https://tiagocoutinho3.github.io/conversor-bases/',
  },
]

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'TypeScript', 'REST APIs', 'Arquitetura de Sistemas'],
  },
  {
    category: 'Ferramentas',
    items: ['Git/GitHub', 'Linux (Bash)', 'Docker'],
  },
]

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
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
                href="#sobre"
                className="transition-all duration-300 hover:text-emerald-400"
              >
                Sobre
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
        <section id="home" className="space-y-8">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-emerald-400">
              Portfolio
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Tiago Coutinho | Full-stack Developer
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Apaixonado por transformar logica complexa em interfaces fluidas e
              intuitivas com React, TypeScript e Tailwind CSS.
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

        <section id="sobre" className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Sobre Mim
          </h2>
          <p className="max-w-4xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            Estudante de Sistemas de Computacao na UFF/CEDERJ, desenvolvedor
            Full-stack focado no ecossistema JavaScript e entusiasta de Seguranca
            da Informacao. Especialista em construir interfaces modernas com React
            e TypeScript, integrando-as a backends de alta performance em Node.js.
            Busco criar solucoes que unam uma experiencia de usuario impecavel com
            protecao de dados.
          </p>
        </section>

        <section id="skills" className="space-y-6">
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

        <section id="projetos" className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Projetos
            </h2>
            <p className="text-zinc-400">
              Vitrine dos principais projetos com foco em UX/UI e performance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/60"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover object-top transition-all duration-300 group-hover:scale-[1.02]"
                />
                <div className="flex h-full flex-col gap-4 p-5">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stacks.map((stack) => (
                      <span
                        key={stack}
                        className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {project.process}
                  </p>
                  <a
                    href={project.deployUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition-all duration-300 hover:text-emerald-300"
                  >
                    Ver Deploy
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contato" className="border-t border-zinc-800">
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
  )
}

export default App
