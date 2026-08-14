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
      category: 'UI/UX Mobile',
      icon: <Zap className="w-8 h-8" />,
      technologies: ['Material 3', 'Responsive Layout', 'Dark Mode', 'Hero Animations', 'Rive/Lottie', 'Acessibilidade', 'Design System', 'Figma'],
      description: 'Interfaces mobile polidas, com micro-interações, temas dinâmicos e acessibilidade'
    },
    {
      category: 'Java & Spring (Complementary)',
      icon: <Server className="w-8 h-8" />,
      technologies: ['Java', 'Spring Boot', 'Spring Security', 'Java EE', 'JPA/Hibernate', 'REST', 'Maven', 'Oracle'],
      description: 'Backends corporativos em Java/Spring Boot usados nas três empresas (EDZA, LamppIT e PRODEB), com APIs REST seguras'
    }
  ];


  const baseUrl = import.meta.env.BASE_URL;

  const experiences = [
    {
      company: 'Freelance Mobile — Flutter/Dart (RBtech)',
      period: '2024 – Atual · 1+ ano',
      role: 'Desenvolvedor Mobile Flutter/Dart',
      description: 'Mais de 1 ano dedicado a projetos freelance em Flutter/Dart: apps multiplataforma (Android, iOS e Web) com Clean Architecture, state management (Riverpod/BLoC), offline-first com SQLite/Hive e integração com APIs REST. Projetos entregues: FinTrack360 e Contagem de Assistência; em andamento: PopFaxina (marketplace de serviços de limpeza, app Flutter + backend Python/FastAPI).',
      technologies: ['Flutter', 'Dart', 'Riverpod', 'BLoC', 'Firebase', 'SQLite', 'FastAPI', 'Android', 'iOS', 'Flutter Web']
    },
    {
      company: 'PRODEB - Companhia de Processamento de Dados da Bahia',
      period: 'Mar/2024 – Set/2024',
      role: 'Desenvolvedor Full Stack',
      description: 'Desenvolvimento e manutenção de sistemas web utilizando Vue.js e Spring Boot. Construção de APIs RESTful seguras (OAuth2/JWT), versionamento com Git e práticas DevOps/CI-CD para órgãos estaduais — APIs preparadas para consumo também por clientes mobile.',
      technologies: ['Vue.js', 'Spring Boot', 'APIs RESTful', 'OAuth2/JWT', 'Git', 'CI/CD', 'PostgreSQL']
    },
    {
      company: 'LAMPP IT Solutions',
      period: 'Mar/2022 – Mai/2022',
      role: 'Desenvolvedor Full Stack & Mobile',
      description: 'Projetos de segurança pública com Node.js e serviços Java/Spring Boot no back-end e Angular 2+ no front. Atuação no módulo de aplicativo interno mobile (Flutter/Dart) para consulta em campo: telas responsivas, autenticação segura, cache offline e consumo das APIs REST existentes — reduzindo dependência do desktop nas operações externas.',
      technologies: ['Flutter', 'Dart', 'Node.js', 'Java/Spring Boot', 'Angular', 'APIs REST', 'Offline Cache', 'JWT']
    },
    {
      company: 'EDZA Planejamento Consultoria e Informática LTDA',
      period: 'Nov/2019 – Mar/2022',
      role: 'Desenvolvedor Full Stack & Mobile',
      description: 'Sistemas administrativos para prefeituras (RH, Tributário, Contábil) com Java EE/Spring Boot, JSP, Vanilla JS e jQuery, além de módulos modernos em Angular e Vue.js. Prototipação e desenvolvimento do módulo de app interno em Flutter/Dart para servidores públicos (holerite, protocolo e consultas tributárias no celular), integrando-se às APIs REST dos sistemas legados.',
      technologies: ['Flutter', 'Dart', 'Java EE', 'Spring Boot', 'JSP', 'jQuery', 'Angular', 'Vue.js', 'Oracle', 'PostgreSQL']
    }
  ];

  const projects = [
    {
      title: 'FinTrack360 — App Flutter Financeiro',
      description: 'App Flutter/Dart de controle financeiro pessoal e familiar. Mobile-first (Android/iOS) com build web para teste rápido: dashboards, categorias, metas e persistência local.',
      technologies: ['Flutter', 'Dart', 'Material 3', 'State Management', 'SQLite', 'Flutter Web', 'Android', 'iOS'],
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&h=300&fit=crop',
      link: 'https://reinaldobarreto.github.io/fintrack360/',
      githubLink: 'https://github.com/reinaldobarreto/fintrack360',
      featured: true
    },
    {
      title: 'Contagem Assistência Teocrática — Flutter',
      description: 'App Flutter/Dart para registro e contagem de assistência, com foco em uso offline, interface simples e relatórios rápidos direto no celular.',
      technologies: ['Flutter', 'Dart', 'Offline-first', 'SQLite', 'Material Design', 'Android'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
      link: 'https://github.com/reinaldobarreto/contagem_assistencia_teocratica',
      githubLink: 'https://github.com/reinaldobarreto/contagem_assistencia_teocratica',
      featured: true
    },

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
      title: 'PopFaxina — App de Serviços (Em andamento)',
      description: 'Projeto freelance em andamento: marketplace de serviços de limpeza com app Flutter/Dart (Android e iOS) e backend Python/FastAPI. Agendamentos, perfis de prestadores, notificações push e pagamentos. Repositório público no GitHub em desenvolvimento ativo.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Push Notifications', 'Python', 'FastAPI', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=300&fit=crop',
      link: 'https://github.com/reinaldobarreto/popfaxina',
      githubLink: 'https://github.com/reinaldobarreto/popfaxina',
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
              <Smartphone className="w-5 h-5 text-portfolio-secondary" />
              <span className="text-base md:text-lg text-foreground font-mono font-semibold">
                Senior Full Stack · Flutter/Dart Mobile Specialist
              </span>
              <Rocket className="w-5 h-5 text-portfolio-primary" />
            </motion.div>

            <motion.p
              className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Especialista em <span className="text-portfolio-primary font-semibold">Flutter &amp; Dart</span> para apps
              <span className="text-portfolio-secondary font-semibold"> Android, iOS e Web</span> com código único, arquitetura limpa e UI 60/120fps.
              Complemento full stack sênior com <span className="text-portfolio-accent font-semibold">Python/FastAPI</span>, Node/NestJS,
              Java/Spring Boot e bancos relacionais — do app à API em produção.
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
                Currículo Completo
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
              Flutter/Dart em primeiro plano, com base full stack sênior em backend, dados e cloud
            </p>
            <div className="flex items-center justify-center mt-4 space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-1 text-portfolio-green" />
                6+ Anos de Experiência
              </div>
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-1 text-portfolio-orange" />
                Flutter/Dart · 1+ ano dedicado
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
              { icon: Smartphone, label: 'Flutter & Dart', count: 'Especialidade' },
              { icon: Layers, label: 'Apps Multiplataforma', count: 'Android · iOS · Web' },
              { icon: Server, label: 'Backend Full Stack', count: 'Python · Node · Java' },
              { icon: Database, label: 'Banco & APIs', count: 'SQL · REST' },
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
              Sistemas corporativos e setor público com evolução para mobile: módulos de aplicativo interno em Flutter/Dart
              na EDZA e na LamppIT, e mais de 1 ano dedicado a projetos freelance Flutter
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
              Apps Flutter/Dart em destaque (Android, iOS e Web) apoiados por backends Python, Node e Java
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
