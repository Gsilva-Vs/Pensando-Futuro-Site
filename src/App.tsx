import React, { useState } from 'react';
import { 
  BookOpen, 
  Target, 
  Calendar, 
  Users, 
  Trophy, 
  Clock, 
  FileText, 
  Lightbulb,
  GraduationCap,
  Star,
  CheckCircle,
  ArrowRight,
  HelpCircle,
  Library,
  BookMarked,
  Compass,
  Building2,
  MapPin,
  Award,
  ExternalLink,
  BarChart3,
  Menu,
  X,
  ArrowLeft
} from 'lucide-react';
import EnemScoresChart from './components/EnemScoresChart';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sidebarItems = [
    { id: 'inicio', label: 'Início', icon: BookOpen },
    { id: 'oque-e', label: 'O que é?', icon: Target },
    { id: 'importancia', label: 'Importância', icon: Star },
    { id: 'como-escolher', label: 'Como Escolher um Curso', icon: Compass },
    { id: 'faculdades', label: 'Faculdades', icon: Building2 },
    { id: 'rotina-estudos', label: 'Rotina de Estudos', icon: Calendar },
    { id: 'duvidas', label: 'Dúvidas Frequentes', icon: HelpCircle },
    { id: 'materiais', label: 'Materiais Úteis', icon: Library },
    { id: 'dicas', label: 'Dicas', icon: Lightbulb },
    { id: 'preparacao', label: 'Preparação', icon: Trophy },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (activeTab === 'notas') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-purple-600 shadow-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-8 w-8 text-white" />
                <span className="text-xl font-bold text-white">Pensando no Futuro</span>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                <button 
                  onClick={() => setActiveTab('home')}
                  className="text-white/90 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Voltar ao Início</span>
                </button>
                <button 
                  onClick={() => setActiveTab('notas')}
                  className="text-white border-b-2 border-white pb-1 flex items-center space-x-1"
                >
                  <BarChart3 className="h-4 w-4" />
                  <span>Notas de Corte</span>
                </button>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden text-white p-2"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="md:hidden fixed inset-0 top-16 bg-white z-40">
              <div className="p-6 space-y-4">
                <button 
                  onClick={() => {
                    setActiveTab('home');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-left text-gray-700 hover:bg-purple-100 rounded-lg transition-colors"
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span className="font-medium">Voltar ao Início</span>
                </button>
                <button 
                  onClick={() => {
                    setActiveTab('notas');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-left bg-purple-200 text-purple-700 rounded-lg"
                >
                  <BarChart3 className="h-5 w-5" />
                  <span className="font-medium">Notas de Corte</span>
                </button>
              </div>
            </div>
          )}
        </header>

        {/* Back Button for Mobile (Additional) */}
        <div className="pt-20 pb-4 md:hidden">
          <div className="max-w-6xl mx-auto px-6">
            <button 
              onClick={() => setActiveTab('home')}
              className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition-colors font-medium"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Voltar ao Início</span>
            </button>
          </div>
        </div>

        {/* Notas de Corte Content */}
        <div className="pt-8 md:pt-20 py-12">
          <EnemScoresChart />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-purple-600 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white">Pensando no Futuro</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => setActiveTab('home')}
                className="text-white border-b-2 border-white pb-1"
              >
                Início
              </button>
              <button 
                onClick={() => setActiveTab('notas')}
                className="text-white/90 hover:text-white transition-colors flex items-center space-x-1"
              >
                <BarChart3 className="h-4 w-4" />
                <span>Notas de Corte</span>
              </button>
              <a href="#dicas" className="text-white/90 hover:text-white transition-colors">Dicas</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white z-40">
            <div className="p-6">
              {/* Top Navigation */}
              <div className="mb-6 space-y-2">
                <button 
                  onClick={() => {
                    setActiveTab('home');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-left bg-purple-200 text-purple-700 rounded-lg"
                >
                  <BookOpen className="h-5 w-5" />
                  <span className="font-medium">Início</span>
                </button>
                <button 
                  onClick={() => {
                    setActiveTab('notas');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-left text-gray-700 hover:bg-purple-100 rounded-lg transition-colors"
                >
                  <BarChart3 className="h-5 w-5" />
                  <span className="font-medium">Notas de Corte</span>
                </button>
              </div>

              {/* Section Navigation */}
              <div className="border-t pt-4">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Seções</h3>
                <div className="space-y-2">
                  {sidebarItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all ${
                          activeSection === item.id
                            ? 'bg-purple-200 text-purple-700'
                            : 'text-gray-700 hover:bg-purple-100'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="font-medium">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <div className="flex pt-16">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block fixed left-0 top-16 bottom-0 w-64 bg-white/10 backdrop-blur-sm shadow-lg overflow-y-auto z-40">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Navegação</h2>
            <nav className="space-y-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all ${
                      activeSection === item.id
                        ? 'bg-purple-200/60 text-purple-700 border-l-4 border-purple-500'
                        : 'text-gray-700 hover:bg-purple-100/50'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-64">
          {/* Hero Section */}
          <section 
            id="inicio" 
            className="relative h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 via-purple-600 to-purple-400"
            style={{
              backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.8), rgba(168, 85, 247, 0.8)), url("https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="text-center text-white max-w-4xl mx-auto px-6">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Seu Futuro Começa
                <span className="block text-yellow-300">Agora!</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-2xl mx-auto leading-relaxed">
                O vestibular é a porta de entrada para seus sonhos. Descubra tudo o que você precisa saber para começar sua jornada rumo à universidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => scrollToSection('oque-e')}
                  className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105 flex items-center space-x-2 mx-auto"
                >
                  <span>Começar a Descobrir</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => setActiveTab('notas')}
                  className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all transform hover:scale-105 flex items-center space-x-2 mx-auto border border-white/30"
                >
                  <BarChart3 className="h-5 w-5" />
                  <span>Ver Notas de Corte</span>
                </button>
              </div>
            </div>
            
            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
              </div>
            </div>
          </section>

          {/* O que é o Vestibular */}
          <section id="oque-e" className="py-20 px-6 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">O que é o Vestibular?</h2>
              <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  O vestibular é um processo seletivo que as universidades brasileiras utilizam para escolher seus futuros estudantes. É através dele que você pode conquistar uma vaga no ensino superior e dar o primeiro passo rumo à sua carreira profissional.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Porta de entrada</h4>
                      <p className="text-gray-600">Para universidades públicas e privadas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Avaliação completa</h4>
                      <p className="text-gray-600">Testa conhecimentos do ensino médio</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Oportunidade única</h4>
                      <p className="text-gray-600">Para realizar seus sonhos acadêmicos</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-8 rounded-2xl">
                <Target className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Principais Tipos</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>ENEM</strong> - Exame Nacional do Ensino Médio</li>
                  <li>• <strong>FUVEST</strong> - USP e outras universidades</li>
                  <li>• <strong>VUNESP</strong> - Vestibular da UNESP</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Importância */}
          <section id="importancia" className="py-20 bg-purple-50">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Por que é tão Importante?</h2>
                <p className="text-xl text-gray-600">O vestibular pode transformar completamente seu futuro</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <GraduationCap className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Acesso ao Ensino Superior</h3>
                  <p className="text-gray-600">É a principal forma de ingressar em universidades públicas e privadas de qualidade no Brasil.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Trophy className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Oportunidades de Carreira</h3>
                  <p className="text-gray-600">Abre portas para profissões de destaque e melhor remuneração no mercado de trabalho.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Crescimento Pessoal</h3>
                  <p className="text-gray-600">Desenvolve conhecimento, pensamento crítico e habilidades essenciais para a vida.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Como Escolher um Curso */}
          <section id="como-escolher" className="py-20 px-6 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Como Escolher um Curso</h2>
              <p className="text-xl text-gray-600">Descubra qual carreira combina com você</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <Compass className="h-8 w-8 text-purple-500 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cursos que se adequam à sua carreira</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Identifique suas paixões e interesses</li>
                    <li>• Reconheça suas habilidades naturais</li>
                    <li>• Considere seus valores pessoais</li>
                    <li>• Pense no estilo de vida que deseja</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <Users className="h-8 w-8 text-blue-500 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Pesquisa de Mercado</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Analise as oportunidades de trabalho</li>
                    <li>• Verifique a média salarial da área</li>
                    <li>• Conheça as tendências do mercado</li>
                    <li>• Converse com profissionais da área</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Áreas de Conhecimento</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-700">Ciências Exatas</h4>
                    <p className="text-sm text-gray-600">Matemática, Física, Engenharias, Computação</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-700">Ciências Humanas</h4>
                    <p className="text-sm text-gray-600">História, Geografia, Filosofia, Sociologia</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-700">Ciências Biológicas</h4>
                    <p className="text-sm text-gray-600">Medicina, Biologia, Enfermagem, Veterinária</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-700">Linguagens</h4>
                    <p className="text-sm text-gray-600">Letras, Comunicação, Artes, Design</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Faculdades */}
          <section id="faculdades" className="py-20 bg-purple-50">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Principais Faculdades de São Paulo</h2>
                <p className="text-xl text-gray-600">Conheça as melhores instituições de ensino superior do estado</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* USP */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
                  <div
                    className="h-48 bg-cover bg-center relative"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://www5.usp.br/wp-content/uploads/2018/10/campus_capital-960x322.jpg?x36440")'
                    }}
                  >
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      USP
                    </div>
                    {/*  Inscrições USP */}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <GraduationCap className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">USP</h3>
                        <p className="text-sm text-gray-600">Universidade de São Paulo</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700 mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                        <span>São Paulo, Ribeirão Preto, São Carlos</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 text-gray-500 mr-2" />
                        <span>Pública • Vestibular FUVEST</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      Maior universidade pública do Brasil, reconhecida mundialmente pela excelência em ensino, pesquisa e extensão.
                    </p>
                    <a
                      href="https://www5.usp.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      <span>Mais informações</span>
                    </a>
                  </div>
                </div>

                {/* UNICAMP */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
                  <div
                    className="h-48 bg-cover bg-center relative"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://s2-g1.glbimg.com/NzVW1yvdfnK6-R0LSgJJwNjXWpk=/0x0:1298x728/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/W/z/WKHNVgT4qPYbuTRL9AaQ/vista-aerea-unicamp.png")'
                    }}
                  >
                    <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      UNICAMP
                    </div>
                    {/*  Inscrições  UNICAMP */}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <GraduationCap className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">UNICAMP</h3>
                        <p className="text-sm text-gray-600">Universidade Estadual de Campinas</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700 mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                        <span>Campinas, Limeira, Piracicaba</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 text-gray-500 mr-2" />
                        <span>Pública • Vestibular próprio</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      Referência em inovação e pesquisa, especialmente nas áreas de tecnologia e ciências aplicadas.
                    </p>
                    <a
                      href="https://www.unicamp.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-600 text-sm font-medium hover:text-purple-800 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      <span>Mais informações</span>
                    </a>
                  </div>
                </div>

                {/* UNESP */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
                  <div
                    className="h-48 bg-cover bg-center relative"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://www.fmb.unesp.br/Home/ensino/Pos-Graduacao/mestradoacademicoedoutorado/pgclinicamedica/hospital-das-clinicas---hcfmb.jpg")'
                    }}
                  >
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      UNESP
                    </div>
                    {/* Inscrições  */}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <GraduationCap className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">UNESP</h3>
                        <p className="text-sm text-gray-600">Universidade Estadual Paulista</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700 mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                        <span>34 cidades do interior de SP</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 text-gray-500 mr-2" />
                        <span>Pública • Vestibular próprio</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      Maior universidade multicampi do país, com forte presença no interior paulista.
                    </p>
                    <a
                      href="https://unesp.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-red-600 text-sm font-medium hover:text-red-800 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      <span>Mais informações</span>
                    </a>
                  </div>
                </div>

                {/* FAMERP */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
                  <div 
                    className="h-48 bg-cover bg-center relative"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://www.famerp.br/wp-content/uploads/2025/07/fachada-famerp.jpg")'
                    }}
                  >
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      FAMERP
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <GraduationCap className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">FAMERP</h3>
                        <p className="text-sm text-gray-600">Faculdade de Medicina de São José do Rio Preto</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700 mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                        <span>São José do Rio Preto</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 text-gray-500 mr-2" />
                        <span>Pública • Estadual • Vestibular próprio (Vunesp)</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      Referência em Medicina, Enfermagem e Psicologia, com forte tradrição em saúde e pesquisa.
                    </p>
                    <a 
                      href="https://www.famerp.br/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-green-600 text-sm font-medium hover:text-red-800 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      <span>Mais informações</span>
                    </a>
                  </div>
                </div>

                {/* Mackenzie */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
                  <div 
                    className="h-48 bg-cover bg-center relative"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://horacampinas.com.br/wp-content/uploads/2023/04/universidade-scaled.jpg")'
                    }}
                  >
                    <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Mackenzie
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <GraduationCap className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Mackenzie</h3>
                        <p className="text-sm text-gray-600">Universidade Presbiteriana Mackenzie</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700 mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                        <span>São Paulo, Campinas, Barueri</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 text-gray-500 mr-2" />
                        <span>Privada • Vestibular próprio</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      Reconhecida pela qualidade em Engenharia, Arquitetura e cursos de negócios.
                    </p>
                    <a 
                      href="https://www.mackenzie.br/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-yellow-600 text-sm font-medium hover:text-yellow-800 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      <span>Mais informações</span>
                    </a>
                  </div>
                </div>

                {/* UFSCar */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
                  <div 
                    className="h-48 bg-cover bg-center relative"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://www.proace.ufscar.br/institucional/sao-carlos/aerea_campus_sao_carlos_fonte_imagem_arquivo_ccs.jpg")'
                    }}
                  >
                    <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      UFSCar
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <GraduationCap className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">UFSCar</h3>
                        <p className="text-sm text-gray-600">Universidade Federal de São Carlos</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700 mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                        <span>São Carlos</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 text-gray-500 mr-2" />
                        <span>Pública • Ingresso via SISU (ENEM)</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      Destaque em Ciências Exatas, Biológicas, Engenharias, Saúde e Humanas.
                    </p>
                    <a 
                      href="https://www.ufscar.br/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-600 text-sm font-medium hover:text-indigo-800 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      <span>Mais informações</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Dicas para Escolher sua Faculdade</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Pesquise o curso</h4>
                        <p className="text-gray-600 text-sm">Verifique a grade curricular, corpo docente e infraestrutura</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Considere a localização</h4>
                        <p className="text-gray-600 text-sm">Pense nos custos de transporte e moradia</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Avalie o reconhecimento</h4>
                        <p className="text-gray-600 text-sm">Verifique a nota do MEC e reputação no mercado</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Analise os custos</h4>
                        <p className="text-gray-600 text-sm">Compare mensalidades e possibilidades de bolsas</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Visite o campus</h4>
                        <p className="text-gray-600 text-sm">Conheça as instalações e converse com estudantes</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Oportunidades extras</h4>
                        <p className="text-gray-600 text-sm">Verifique programas de intercâmbio e estágio</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Rotina de Estudos */}
          <section id="rotina-estudos" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Rotina de Estudos</h2>
                <p className="text-xl text-gray-600">Organize seu tempo para maximizar o aprendizado</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-purple-50 p-6 rounded-xl shadow-md">
                  <Clock className="h-8 w-8 text-purple-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Planejamento Diário</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• 2-3 horas de estudo por dia</li>
                    <li>• Intervalos de 15 min a cada hora</li>
                    <li>• Revise o conteúdo do dia anterior</li>
                    <li>• Faça exercícios práticos</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl shadow-md">
                  <Calendar className="h-8 w-8 text-blue-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Planejamento Semanal</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Distribua as matérias pelos dias</li>
                    <li>• Reserve tempo para redação</li>
                    <li>• Faça simulados aos finais de semana</li>
                    <li>• Tenha um dia de descanso</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl shadow-md">
                  <BookOpen className="h-8 w-8 text-green-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Técnicas de Estudo</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Resumos e mapas mentais</li>
                    <li>• Flashcards para memorização</li>
                    <li>• Grupos de estudo</li>
                    <li>• Ensine o que aprendeu</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 bg-purple-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Cronograma de Estudos - Vestibular</h3>
                <div className="grid md:grid-cols-7 gap-4">
                  {['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo (opcional)'].map((dia, index) => (
                    <div key={dia} className="text-center">
                      <h4 className="font-semibold text-purple-700 mb-2">{dia}</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        {index === 0 ? ( // Segunda-feira
                          <>
                            <div className="bg-purple-200 p-2 rounded">Matemática</div>
                            <div className="bg-blue-200 p-2 rounded">Redação</div>
                            <div className="bg-blue-200 p-2 rounded">História</div>
                            <div className="bg-green-200 p-2 rounded">Física</div>
                          </>
                        ) : index === 1 ? ( // Terça-feira
                          <>
                            <div className="bg-green-200 p-2 rounded">Biologia</div>
                            <div className="bg-blue-200 p-2 rounded">Literatura</div>
                            <div className="bg-green-200 p-2 rounded">Química</div>
                            <div className="bg-blue-200 p-2 rounded">Geografia</div>
                          </>
                        ) : index === 2 ? ( // Quarta-feira
                          <>
                            <div className="bg-purple-200 p-2 rounded">Matemática</div>
                            <div className="bg-blue-200 p-2 rounded">Filosofia / Sociologia</div>
                            <div className="bg-green-200 p-2 rounded">Física</div>
                            <div className="bg-green-200 p-2 rounded">Química</div>
                          </>
                        ) : index === 3 ? ( // Quinta-feira
                          <>
                            <div className="bg-green-200 p-2 rounded">Biologia</div>
                            <div className="bg-blue-200 p-2 rounded">Redação</div>
                            <div className="bg-blue-200 p-2 rounded">História</div>
                            <div className="bg-purple-200 p-2 rounded">Matemática</div>
                          </>
                        ) : index === 4 ? ( // Sexta-feira
                          <>
                            <div className="bg-blue-200 p-2 rounded">Geografia</div>
                            <div className="bg-blue-200 p-2 rounded">Literatura</div>
                            <div className="bg-green-200 p-2 rounded">Física</div>
                            <div className="bg-green-200 p-2 rounded">Biologia</div>
                          </>
                        ) : index === 5 ? ( // Sábado
                          <>
                            <div className="bg-yellow-200 p-2 rounded">Simulado</div>
                            <div className="bg-yellow-300 p-2 rounded">Correção do simulado</div>
                            <div className="bg-indigo-200 p-2 rounded">Revisão geral</div>
                            {/* Div vazia para alinhar a altura, pois Sábado tem 3 itens */}
                            <div className="p-2 rounded invisible"></div>
                          </>
                        ) : ( // Domingo (opcional) - index === 6
                          <>
                            <div className="bg-gray-200 p-2 rounded">Revisão leve</div>
                            <div className="bg-gray-300 p-2 rounded">Atualidades</div>
                            {/* Duas divs vazias para alinhar a altura, pois Domingo tem 2 itens */}
                            <div className="p-2 rounded invisible"></div>
                            <div className="p-2 rounded invisible"></div>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Dúvidas Frequentes */}
          <section id="duvidas" className="py-20 px-6 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Dúvidas Frequentes</h2>
              <p className="text-xl text-gray-600">Respostas para as perguntas mais comuns</p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <HelpCircle className="h-5 w-5 text-purple-500 mr-2" />
                  Quando devo começar a me preparar?
                </h3>
                <p className="text-gray-700">O ideal é começar a se preparar desde o início do ensino médio. Quanto mais cedo você começar, melhor será sua preparação e menores serão os níveis de estresse.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <HelpCircle className="h-5 w-5 text-purple-500 mr-2" />
                  Preciso fazer cursinho?
                </h3>
                <p className="text-gray-700">Não é obrigatório, mas pode ser útil. Depende do seu nível de disciplina, da qualidade do seu ensino médio e dos seus objetivos. Muitos estudantes conseguem aprovação estudando por conta própria.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <HelpCircle className="h-5 w-5 text-purple-500 mr-2" />
                  Quantas horas devo estudar por dia?
                </h3>
                <p className="text-gray-700">Varia conforme o ano escolar e proximidade do vestibular. No ensino médio, 2-3 horas diárias são suficientes. No último ano, pode aumentar para 4-6 horas, sempre com intervalos.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <HelpCircle className="h-5 w-5 text-purple-500 mr-2" />
                  Como escolher entre universidade pública e privada?
                </h3>
                <p className="text-gray-700">Considere fatores como qualidade do curso, localização, custos, oportunidades de pesquisa e extensão. Universidades públicas são gratuitas mas mais concorridas. Privadas oferecem mais flexibilidade mas têm custos.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <HelpCircle className="h-5 w-5 text-purple-500 mr-2" />
                  E se eu não passar no primeiro ano?
                </h3>
                <p className="text-gray-700">É normal! Muitos estudantes precisam de mais de uma tentativa. Use a experiência para identificar pontos fracos, ajustar a estratégia de estudos e tentar novamente. Persistência é fundamental.</p>
              </div>
            </div>
          </section>

          {/* Materiais Úteis */}
          <section id="materiais" className="py-20 bg-purple-50">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Materiais Úteis</h2>
                <p className="text-xl text-gray-600">Recursos essenciais para sua preparação</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <Library className="h-8 w-8 text-purple-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Livros Didáticos</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Coleções aprovadas pelo MEC</li>
                    <li>• Livros específicos para vestibular</li>
                    <li>• Atlas geográfico e histórico</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <BookMarked className="h-8 w-8 text-blue-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Plataformas Online</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <a href="https://pt.khanacademy.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Khan Academy (gratuito)</a></li>
                    <li>• <a href="https://descomplica.com.br/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Descomplica</a></li>
                    <li>• <a href="https://www.stoodi.com.br/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Stoodi</a></li>
                    <li>• YouTube educativo</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <FileText className="h-8 w-8 text-green-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Provas Anteriores</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <a href="https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ENEM dos últimos 10 anos</a></li>
                    <li>• <a href="https://www.fuvest.br/provas-anteriores/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Provas da FUVEST</a></li>
                    <li>• <a href="https://www.comvest.unicamp.br/vestibular-unicamp-2024/provas/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Vestibulares da UNICAMP</a></li>
                    <li>• <a href="https://vestibular.brasilescola.uol.com.br/downloads/universidade-estadual-paulista.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Vestibulares da UNESP</a></li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <Target className="h-8 w-8 text-red-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Simulados</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <a href="https://quizenem.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Simulados online gratuitos</a></li>
                    <li>• Aplicativos de questões</li>
                    <li>• Simulados presenciais</li>
                    <li>• Cronômetro para treinar tempo</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <Lightbulb className="h-8 w-8 text-yellow-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Ferramentas de Estudo</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <a href="https://apps.ankiweb.net/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Anki (flashcards)</a></li>
                    <li>• <a href="https://www.notion.so/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Notion (organização)</a></li>
                    <li>• <a href="https://www.forestapp.cc/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Forest (foco)</a></li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <Users className="h-8 w-8 text-purple-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Apoio</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Grupos de estudo</li>
                    <li>• Professores particulares</li>
                    <li>• Orientação vocacional</li>
                    <li>• Psicólogo educacional</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Dicas */}
          <section id="dicas" className="py-20 bg-gradient-to-br from-purple-500 to-purple-700 text-white">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Dicas Importantes para Você</h2>
                <p className="text-xl text-purple-100">Comece a se preparar desde agora com essas orientações</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all">
                  <Clock className="h-8 w-8 text-yellow-300 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Comece Cedo</h3>
                  <p className="text-purple-100">Não deixe para o último ano. Quanto antes começar, melhor será sua preparação.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all">
                  <BookOpen className="h-8 w-8 text-yellow-300 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Foque nos Estudos</h3>
                  <p className="text-purple-100">Mantenha boas notas no ensino médio e desenvolva o hábito de estudar diariamente.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all">
                  <FileText className="h-8 w-8 text-yellow-300 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Pratique Redação</h3>
                  <p className="text-purple-100">A redação tem peso importante. Leia muito e pratique escrevendo regularmente.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all">
                  <Target className="h-8 w-8 text-yellow-300 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Defina Objetivos</h3>
                  <p className="text-purple-100">Tenha clareza sobre que curso deseja fazer e em qual instituição.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all">
                  <Users className="h-8 w-8 text-yellow-300 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Busque Apoio</h3>
                  <p className="text-purple-100">Converse com professores, familiares e pessoas que já passaram pelo processo.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all">
                  <Lightbulb className="h-8 w-8 text-yellow-300 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Mantenha-se Informado</h3>
                  <p className="text-purple-100">Acompanhe as novidades sobre vestibulares e mudanças nas provas.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Preparação */}
          <section id="preparacao" className="py-20 px-6 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Como se Preparar</h2>
              <p className="text-xl text-gray-600">Estratégias para começar sua jornada rumo ao sucesso</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Estratégias Essenciais:</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">Concentre-se nas matérias básicas do ensino médio</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">Desenvolva o hábito de leitura diária</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">Comece a praticar redação semanalmente</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">Pesquise sobre cursos e universidades</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">Participe de atividades extracurriculares</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">Faça simulados regularmente</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
                <Trophy className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Dica Especial</h3>
                <p className="text-gray-700 mb-4">
                  O segredo do sucesso no vestibular está na consistência. Pequenos esforços diários se transformam em grandes resultados ao longo do tempo.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-600 italic">
                    "O melhor momento para plantar uma árvore foi há 20 anos. O segundo melhor momento é agora."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <GraduationCap className="h-8 w-8 text-purple-400" />
                    <span className="text-xl font-bold">Pensando no Futuro</span>
                  </div>
                  <p className="text-gray-400">
                    Seu guia completo para entender e se preparar para o vestibular, construindo o caminho para seu futuro acadêmico.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ENEM</a></li>
                    <li><a href="https://www.fuvest.br/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">FUVEST</a></li>
                    <li><a href="https://www.comvest.unicamp.br/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">UNICAMP</a></li>
                    <li><a href="https://acessounico.mec.gov.br/prouni" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ProUni</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Contato</h4>
                  <p className="text-gray-400">
                    Tem dúvidas? Entre em contato com nossa equipe de orientação educacional: 
                    <a href="mailto:futuropensandono@gmail.com" className="text-blue-400 hover:underline"> futuropensandono@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2025 Pensando no Futuro. Todos os direitos reservados.</p>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;