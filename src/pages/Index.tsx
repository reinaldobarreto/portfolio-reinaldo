import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import SkillCard from '../components/SkillCard';
import ExperienceTimeline from '../components/ExperienceTimeline';
import ProjectCard from '../components/ProjectCard';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import profilePhoto from '../assets/foto-perfil.png';
import corelabsLogo from '../assets/corelabs-logo.png';
import quizBiblicoImage from '../assets/quiz-biblico-real.png';
import {
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Code,
  Database,
  Server,
  Smartphone,
  Globe,
  Shield,
  Zap,
  Layers,
  Terminal,
  CloudLightning,
  Brain,
  Rocket,
  Star,
  Download,
  ArrowDown,
  Coffee,
  Heart,
  Award,
  Target,
  Briefcase
} from 'lucide-react';

const Index = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const downloadCV = () => {
    const cvUrl = `${import.meta.env.BASE_URL}curriculo/`;
    window.open(cvUrl, '_blank', 'noopener,noreferrer');
  };

  const skills = [
    {
      category: 'Flutter & Dart (Especialidade)',
      icon: <Smartphone className="w-8 h-8" />,
      technologies: ['Flutter', 'Dart', 'Material 3', 'Cupertino', 'Widgets', 'Slivers', 'Animations', 'Flutter Web'],
      description: 'Apps multiplataforma (Android, iOS e Web) com UI fluida 60/120fps, design system próprio e código único'
    },
    {
      category: 'Arquitetura & State Management',
      icon: <Layers className="w-8 h-8" />,
      technologies: ['Riverpod', 'Provider', 'BLoC/Cubit', 'GetX', 'Clean Architecture', 'MVVM', 'go_router', 'Freezed'],
      description: 'Camadas bem separadas, injeção de dependência, rotas declarativas e estado previsível em apps de produção'
    },
    {
      category: 'Dados & Offline-first',
      icon: <Database className="w-8 h-8" />,
      technologies: ['SQLite/sqflite', 'Hive', 'Isar', 'Drift', 'shared_preferences', 'Dio', 'Retrofit/Chopper', 'JSON Serializable'],
      description: 'Persistência local, cache, sincronização e consumo de APIs REST com resiliência offline'
    },
    {
      category: 'Firebase & Backend Mobile',
      icon: <CloudLightning className="w-8 h-8" />,
      technologies: ['Firebase Auth', 'Firestore', 'Cloud Functions', 'FCM Push', 'Crashlytics', 'Analytics', 'Remote Config', 'Supabase'],
      description: 'Autenticação, dados em tempo real, notificações push e monitoramento de crashes em apps publicados'
    },
    {
      category: 'Nativo & Publicação',
      icon: <Terminal className="w-8 h-8" />,
      technologies: ['Kotlin', 'Java', 'Swift', 'Platform Channels', 'Gradle', 'Xcode', 'Play Store', 'App Store'],
      description: 'Integrações nativas via platform channels, assinatura de builds e publicação nas lojas'
    },
    {
      category: 'Qualidade & CI/CD Mobile',
      icon: <Shield className="w-8 h-8" />,
      technologies: ['Widget Tests', 'Unit Tests', 'Integration Tests', 'Mocktail', 'Codemagic', 'GitHub Actions', 'Fastlane', 'Flavors'],
      description: 'Testes automatizados, builds por flavor (dev/prod) e entrega contínua para Android e iOS'
    },
    {
      category: 'Python Backend Engineering',
      icon: <Server className="w-8 h-8" />,
      technologies: ['Python', 'FastAPI', 'Django', 'DRF', 'Pydantic', 'SQLAlchemy', 'Celery', 'Uvicorn/Gunicorn'],
      description: 'APIs REST escaláveis para alimentar apps mobile, com validação robusta e arquitetura limpa'
    },

    {
      category: 'Automation & Integrations',
      icon: <Terminal className="w-8 h-8" />,
      technologies: ['Python', 'Requests', 'BeautifulSoup', 'Playwright', 'Selenium', 'AsyncIO', 'Cron', 'File Pipelines'],
      description: 'Automação de processos empresariais: ETL, integração com APIs, processamento de arquivos e rotinas agendadas'
    },
    {
      category: 'Data Analysis & Statistics',
      icon: <Brain className="w-8 h-8" />,
      technologies: ['Pandas', 'NumPy', 'Polars', 'Jupyter', 'Matplotlib', 'Plotly', 'Seaborn', 'Scikit-learn'],
      description: 'Data cleaning, estatística descritiva, EDA, KPIs, dashboards e análises orientadas a negócio'
    },
    {
      category: 'SQL & Databases',
      icon: <Database className="w-8 h-8" />,
      technologies: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'Redis', 'Indexes', 'Query Optimization', 'Transactions'],
      description: 'Modelagem, relacionamentos, consultas complexas, performance e consistência transacional em ambientes reais'
    },
    {
      category: 'Cloud & Delivery',
      icon: <CloudLightning className="w-8 h-8" />,
      technologies: ['Docker', 'Linux', 'GitHub Actions', 'CI/CD', 'Nginx', 'Observability', 'AWS', 'Azure'],
      description: 'Deploy, pipelines e operação de serviços com foco em entrega confiável e escalabilidade'
    },
    {
      category: 'JavaScript (Complementary)',
      icon: <Code className="w-8 h-8" />,
      technologies: ['TypeScript', 'Node.js', 'NestJS', 'Next.js', 'React', 'Express', 'Testing', 'Docs as Code'],
      description: 'Stack complementar para full-cycle: web, integrações e UI quando faz sentido ao redor do backend Python'
    },
    {
      category: 'Security & Auth',
      icon: <Shield className="w-8 h-8" />,
      technologies: ['OAuth2', 'JWT', 'RBAC', 'LGPD', 'Encryption', 'Audit Logs', 'Input Validation', 'Rate Limiting'],
      description: 'Autenticação robusta, validação de I/O e proteção de dados sensíveis aplicadas no backend'
    },
    {
      category: 'Mobile (Complementary)',
      icon: <Smartphone className="w-8 h-8" />,
      technologies: ['React Native', 'Expo', 'Offline-first', 'Push Notifications', 'Performance', 'Animations', 'Android', 'iOS'],
      description: 'Experiência complementar em mobile multiplataforma para produtos que pedem app nativo com UX premium'
    }
  ];

  const baseUrl = import.meta.env.BASE_URL;

  const experiences = [
    {
      company: 'PRODEB - Companhia de Processamento de Dados da Bahia',
      period: 'Mar/2024 – Set/2024',
      role: 'Desenvolvedor Full Stack',
      description: 'Desenvolvimento e manutenção de sistemas web utilizando Vue.js e Spring Boot. Construção de APIs RESTful seguras, versionamento com Git e práticas DevOps.',
      technologies: ['Vue.js', 'Spring Boot', 'Git', 'DevOps', 'APIs RESTful']
    },
    {
      company: 'LAMPP IT Solutions',
      period: 'Mar/2022 – Mai/2022',
      role: 'Desenvolvedor Full Stack',
      description: 'Participação em projetos de segurança pública com uso de Node.js no back-end e Angular 2+ no front. Integração de APIs REST com bancos relacionais.',
      technologies: ['Node.js', 'Angular', 'APIs REST', 'Bancos Relacionais']
    },
    {
      company: 'EDZA Planejamento Consultoria e Informática LTDA',
      period: 'Nov/2019 – Mar/2022',
      role: 'Desenvolvedor Full Stack',
      description: 'Desenvolvimento de sistemas administrativos para prefeituras (RH, Tributário, Contábil). Atuação com Java EE, JSP, JavaScript puro e jQuery.',
      technologies: ['Java EE', 'JSP', 'JavaScript', 'jQuery', 'Angular', 'Vue.js']
    }
  ];

  const projects = [
    {
      title: 'FastAPI — CRUD REST + OpenAPI',
      description: 'Demo Python-first com endpoints CRUD, documentação Swagger/Redoc e modelagem simples orientada a produção.',
      technologies: ['Python', 'FastAPI', 'Pydantic', 'OpenAPI', 'Swagger', 'Redoc', 'REST'],
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop',
      link: `${baseUrl}demos/apis-fastapi/`,
      featured: true
    },
    {
      title: 'Django + DRF — CRUD REST',
      description: 'Demo com padrões do Django REST Framework: serializer, viewset e rotas, com documentação OpenAPI.',
      technologies: ['Python', 'Django', 'Django REST Framework', 'OpenAPI', 'Swagger', 'Redoc', 'REST'],
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&h=300&fit=crop',
      link: `${baseUrl}demos/apis-django/`,
      featured: true
    },
    {
      title: 'Python Data Analysis — KPIs',
      description: 'Mini demo de análise de dados com estatística descritiva e indicadores a partir de um dataset CSV.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Statistics', 'KPIs', 'Data Cleaning'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      link: `${baseUrl}demos/data-analysis-python/`,
      featured: true
    },
    {
      title: 'PopFaxina — Marketplace de Limpeza',
      description: 'Plataforma em desenvolvimento para conectar clientes e prestadores de serviços de limpeza. Stack principal: Python/FastAPI no backend + Next.js/Tailwind CSS no frontend. Projeto privado — código-fonte e detalhes comerciais sob confidencialidade.',
      technologies: ['Python', 'FastAPI', 'Next.js', 'Tailwind CSS', 'REST API', 'SQL'],
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=300&fit=crop',
      link: '#',
      isPrivate: true,
      featured: true
    },
    {
      title: 'Portfolio React — Este Site',
      description: 'Portfólio com Vite, React, TypeScript e Tailwind. Reposicionado para Python como stack principal e JavaScript como complementar.',
      technologies: ['Vite', 'React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GitHub Pages'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      link: 'https://github.com/reinaldobarreto/portfolio-reinaldo',
      featured: true
    },
    {
      title: 'PDFTurbo — Otimizador Brutal',
      description: 'Produto focado em automação e otimização de PDFs com frontend em React + Tailwind CSS + Vite e apoio backend em Python para processamento, filas e rotinas pesadas. Preview público hospedado no GitHub Pages.',
      technologies: ['Python', 'React', 'Tailwind CSS', 'Vite', 'PDF', 'Automation'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop',
      link: `${baseUrl}demos/pdfturbo/`,
      githubLink: 'https://github.com/reinaldobarreto/pdfturbo',
      featured: true
    },
    {
      title: 'Show do Saber',
      description: 'Aplicação interativa em JavaScript com foco em experiência mobile-first, gamificação e interface simples.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Responsive UI'],
      image: quizBiblicoImage,
      link: 'https://ais-pre-4h6kbb4exa66hc6vpngoaf-502257953705.us-east1.run.app/',
      githubLink: 'https://github.com/reinaldobarreto/quiz-biblico',
      featured: false
    },
    {
      title: 'FinTrack360 — Controle Financeiro',
      description: 'Projeto de controle financeiro pessoal com foco mobile-first. Evolução do produto para stack JavaScript/React Native.',
      technologies: ['JavaScript', 'Mobile-first', 'Finance', 'Dashboard', 'PWA'],
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&h=300&fit=crop',
      link: 'https://reinaldobarreto.github.io/fintrack360/',
      featured: false
    },
    {
      title: 'APIs Node/NestJS',
      description: 'CRUD REST completo (GET/POST/PUT/PATCH/DELETE) com JWT, Swagger e Redoc. Demo pública no GitHub Pages.',
      technologies: ['Node.js', 'NestJS', 'JWT', 'Swagger', 'Redoc', 'REST'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop',
      link: `${baseUrl}demos/apis-nestjs/`,
      githubLink: 'https://github.com/reinaldobarreto/apis-node-nestjs-demo',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--neuo-bg)' }}>
      <Navigation />

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-16">
        <div className="container mx-auto px-6 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Profile — Neumorphic frame */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={heroInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.1 }}
              className="flex justify-center mb-10"
            >
              <div className="w-44 h-44 rounded-full neuo-flat-lg p-3 flex items-center justify-center">
                <div className="w-full h-full rounded-full neuo-inset p-2">
                  <Avatar className="w-full h-full">
                    <AvatarImage src={profilePhoto} alt="Reinaldo Barreto" className="object-cover" />
                    <AvatarFallback className="text-3xl font-black bg-transparent text-portfolio-primary">RB</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="inline-flex items-center justify-center gap-3 mb-4"
            >
              <img
                src={corelabsLogo}
                alt="CoreLabs Dev Nexus"
                className="w-8 h-8 rounded-xl object-contain"
              />
              <p className="text-xs uppercase tracking-[0.5em] text-portfolio-secondary">
                CoreLabs · Dev Nexus
              </p>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-black mb-5 portfolio-text-gradient neon-glow tracking-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.35 }}
            >
              Reinaldo Barreto da Silva
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl neuo-inset-sm mb-6"
            >
              <Server className="w-5 h-5 text-portfolio-secondary" />
              <span className="text-base md:text-lg text-foreground font-mono font-semibold">
                Python Backend Engineer · Automation · Data
              </span>
              <Rocket className="w-5 h-5 text-portfolio-primary" />
            </motion.div>

            <motion.p
              className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Foco atual em <span className="text-portfolio-primary font-semibold">Python</span> para construir
              <span className="text-portfolio-secondary font-semibold"> APIs REST</span>, automação de processos e
              <span className="text-portfolio-accent font-semibold"> análise de dados</span> com SQL.
              JavaScript/TypeScript continuam como stack complementar (Node/Nest, Next/React).
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-col sm:flex-row gap-5 justify-center mb-10"
            >
              <button
                onClick={downloadCV}
                className="px-8 py-4 rounded-2xl neuo-pressable text-portfolio-primary font-bold inline-flex items-center justify-center gap-3 group"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                Abrir CV / PDF
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-2xl neuo-pressable text-portfolio-secondary font-bold inline-flex items-center justify-center gap-3 group"
              >
                <Briefcase className="w-5 h-5 group-hover:rotate-6 transition-transform" />
                Ver Projetos
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center gap-4 mb-10"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {[
                { Icon: Github, href: 'https://github.com/reinaldobarreto', color: 'text-foreground' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/reinaldo-barreto/', color: 'text-portfolio-secondary' },
                { Icon: Mail, href: 'mailto:corelabs.dev.nexus@gmail.com', color: 'text-portfolio-primary' },
              ].map(({ Icon, href, color }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.92 }}
                  className={`p-4 rounded-2xl neuo-pressable ${color}`}
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Info pill */}
            <motion.div
              className="inline-flex items-center gap-6 px-6 py-4 rounded-2xl neuo-inset-sm text-sm text-muted-foreground"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-portfolio-primary" />
                Navegantes, SC
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-portfolio-secondary" />
                +55 (47) 98830-2308
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.4 }}
              className="mt-14 flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="w-12 h-12 rounded-full neuo-flat-sm flex items-center justify-center text-portfolio-primary"
              >
                <ArrowDown size={18} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Layers className="w-8 h-8 text-portfolio-primary mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold portfolio-text-gradient">
                Habilidades Técnicas
              </h2>
              <Zap className="w-8 h-8 text-portfolio-accent ml-3 animate-pulse" />
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Stack Python-first para backend, automação e dados, com experiência complementar em JavaScript/TypeScript
              para web/mobile e integrações de produto
            </p>
            <div className="flex items-center justify-center mt-4 space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-1 text-portfolio-green" />
                5+ Anos de Experiência
              </div>
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-1 text-portfolio-orange" />
                20+ Projetos Entregues
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 50, rotateY: 180 }}
                animate={skillsInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </div>
          
          {/* Skills Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: Server, label: 'Python Stack', count: 'Primary' },
              { icon: Terminal, label: 'Automation', count: 'Python' },
              { icon: Database, label: 'SQL & Data', count: 'Analytics' },
              { icon: Code, label: 'JavaScript', count: 'Complementary' },
              { icon: Coffee, label: 'Cups of Coffee', count: '∞', animate: true }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl neuo-flat">
                <stat.icon className={`w-8 h-8 mx-auto mb-2 text-portfolio-primary ${stat.animate ? 'animate-pulse' : ''}`} />
                <div className="text-2xl font-bold text-foreground">{stat.count}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" ref={experienceRef} className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Briefcase className="w-8 h-8 text-portfolio-secondary mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold portfolio-text-gradient">
                Experiência Profissional
              </h2>
              <Heart className="w-8 h-8 text-portfolio-red ml-3 animate-pulse" />
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experiência em sistemas corporativos e setor público, com evolução de foco para backend Python, automação
              e soluções orientadas a dados em ambientes reais
            </p>
          </motion.div>
          
          <ExperienceTimeline experiences={experiences} inView={experienceInView} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Rocket className="w-8 h-8 text-portfolio-orange mr-3 animate-bounce" />
              <h2 className="text-4xl md:text-5xl font-bold portfolio-text-gradient">
                Projetos em Destaque
              </h2>
              <Star className="w-8 h-8 text-portfolio-accent ml-3 animate-pulse" />
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Projetos Python-first (APIs, automação, dados) e stack complementar em JavaScript/TypeScript para web e mobile
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="relative"
              >
                {project.featured && (
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full neuo-flat-sm flex items-center justify-center text-portfolio-primary z-10">
                    <Star className="w-4 h-4" />
                  </div>
                )}
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
