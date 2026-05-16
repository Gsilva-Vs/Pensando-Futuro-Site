import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Search, TrendingUp, BookOpen, Award } from 'lucide-react';

interface Course {
  name: string;
  score: number;
  category: string;
  color: string;
}

const courses: Course[] = [
  // Medicina e Saúde
  { name: 'Medicina', score: 820, category: 'Saúde', color: '#ef4444' },
  { name: 'Odontologia', score: 780, category: 'Saúde', color: '#f97316' },
  { name: 'Veterinária', score: 750, category: 'Saúde', color: '#eab308' },
  { name: 'Fisioterapia', score: 720, category: 'Saúde', color: '#84cc16' },
  { name: 'Enfermagem', score: 680, category: 'Saúde', color: '#22c55e' },
  { name: 'Farmácia', score: 700, category: 'Saúde', color: '#10b981' },
  { name: 'Nutrição', score: 670, category: 'Saúde', color: '#06b6d4' },
  { name: 'Psicologia', score: 710, category: 'Saúde', color: '#0ea5e9' },

  // Engenharias
  { name: 'Engenharia Civil', score: 740, category: 'Engenharia', color: '#3b82f6' },
  { name: 'Engenharia Mecânica', score: 730, category: 'Engenharia', color: '#6366f1' },
  { name: 'Engenharia Elétrica', score: 735, category: 'Engenharia', color: '#8b5cf6' },
  { name: 'Engenharia de Computação', score: 745, category: 'Engenharia', color: '#a855f7' },
  { name: 'Engenharia Química', score: 725, category: 'Engenharia', color: '#d946ef' },
  { name: 'Engenharia de Produção', score: 720, category: 'Engenharia', color: '#ec4899' },
  { name: 'Engenharia Ambiental', score: 690, category: 'Engenharia', color: '#f43f5e' },
  { name: 'Engenharia de Alimentos', score: 680, category: 'Engenharia', color: '#ef4444' },

  // Tecnologia
  { name: 'Ciência da Computação', score: 730, category: 'Tecnologia', color: '#f97316' },
  { name: 'Sistemas de Informação', score: 690, category: 'Tecnologia', color: '#eab308' },
  { name: 'Análise e Desenvolvimento de Sistemas', score: 650, category: 'Tecnologia', color: '#84cc16' },
  { name: 'Jogos Digitais', score: 660, category: 'Tecnologia', color: '#22c55e' },
  { name: 'Segurança da Informação', score: 680, category: 'Tecnologia', color: '#10b981' },

  // Direito e Humanas
  { name: 'Direito', score: 740, category: 'Humanas', color: '#06b6d4' },
  { name: 'Relações Internacionais', score: 720, category: 'Humanas', color: '#0ea5e9' },
  { name: 'Jornalismo', score: 680, category: 'Humanas', color: '#3b82f6' },
  { name: 'Publicidade e Propaganda', score: 670, category: 'Humanas', color: '#6366f1' },
  { name: 'História', score: 620, category: 'Humanas', color: '#8b5cf6' },
  { name: 'Geografia', score: 610, category: 'Humanas', color: '#a855f7' },
  { name: 'Filosofia', score: 600, category: 'Humanas', color: '#d946ef' },
  { name: 'Sociologia', score: 590, category: 'Humanas', color: '#ec4899' },
  { name: 'Letras', score: 580, category: 'Humanas', color: '#f43f5e' },

  // Administração e Negócios
  { name: 'Administração', score: 690, category: 'Negócios', color: '#ef4444' },
  { name: 'Economia', score: 710, category: 'Negócios', color: '#f97316' },
  { name: 'Contabilidade', score: 650, category: 'Negócios', color: '#eab308' },
  { name: 'Marketing', score: 660, category: 'Negócios', color: '#84cc16' },
  { name: 'Recursos Humanos', score: 640, category: 'Negócios', color: '#22c55e' },
  { name: 'Gestão Financeira', score: 670, category: 'Negócios', color: '#10b981' },
  { name: 'Comércio Exterior', score: 680, category: 'Negócios', color: '#06b6d4' },

  // Educação
  { name: 'Pedagogia', score: 630, category: 'Educação', color: '#0ea5e9' },
  { name: 'Educação Física', score: 620, category: 'Educação', color: '#3b82f6' },
  { name: 'Matemática', score: 640, category: 'Educação', color: '#6366f1' },
  { name: 'Física', score: 650, category: 'Educação', color: '#8b5cf6' },
  { name: 'Química', score: 645, category: 'Educação', color: '#a855f7' },
  { name: 'Biologia', score: 660, category: 'Educação', color: '#d946ef' },

  // Artes e Design
  { name: 'Arquitetura e Urbanismo', score: 720, category: 'Artes', color: '#ec4899' },
  { name: 'Design Gráfico', score: 650, category: 'Artes', color: '#f43f5e' },
  { name: 'Design de Interiores', score: 640, category: 'Artes', color: '#ef4444' },
  { name: 'Artes Visuais', score: 600, category: 'Artes', color: '#f97316' },
  { name: 'Música', score: 590, category: 'Artes', color: '#eab308' },
  { name: 'Teatro', score: 580, category: 'Artes', color: '#84cc16' },
  { name: 'Cinema', score: 670, category: 'Artes', color: '#22c55e' },

  // Ciências Exatas
  { name: 'Estatística', score: 680, category: 'Exatas', color: '#10b981' },
  { name: 'Matemática Aplicada', score: 690, category: 'Exatas', color: '#06b6d4' },
  { name: 'Física Aplicada', score: 700, category: 'Exatas', color: '#0ea5e9' },
  { name: 'Química Industrial', score: 685, category: 'Exatas', color: '#3b82f6' },

  // Ciências Biológicas
  { name: 'Biomedicina', score: 730, category: 'Biológicas', color: '#6366f1' },
  { name: 'Biotecnologia', score: 720, category: 'Biológicas', color: '#8b5cf6' },
  { name: 'Ciências Biológicas', score: 660, category: 'Biológicas', color: '#a855f7' },
  { name: 'Zootecnia', score: 640, category: 'Biológicas', color: '#d946ef' },
  { name: 'Agronomia', score: 670, category: 'Biológicas', color: '#ec4899' },

  // Comunicação
  { name: 'Comunicação Social', score: 670, category: 'Comunicação', color: '#f43f5e' },
  { name: 'Rádio e TV', score: 650, category: 'Comunicação', color: '#ef4444' },
  { name: 'Relações Públicas', score: 640, category: 'Comunicação', color: '#f97316' },

  // Turismo e Hospitalidade
  { name: 'Turismo', score: 600, category: 'Turismo', color: '#eab308' },
  { name: 'Hotelaria', score: 590, category: 'Turismo', color: '#84cc16' },
  { name: 'Gastronomia', score: 580, category: 'Turismo', color: '#22c55e' },

  // Outros
  { name: 'Serviço Social', score: 610, category: 'Sociais', color: '#10b981' },
  { name: 'Teologia', score: 550, category: 'Humanas', color: '#06b6d4' },
  { name: 'Biblioteconomia', score: 570, category: 'Humanas', color: '#0ea5e9' },
  { name: 'Arqueologia', score: 630, category: 'Humanas', color: '#3b82f6' },
  { name: 'Museologia', score: 600, category: 'Humanas', color: '#6366f1' },

  // Cursos Técnicos Superiores
  { name: 'Gestão de Recursos Humanos', score: 620, category: 'Gestão', color: '#8b5cf6' },
  { name: 'Gestão Comercial', score: 610, category: 'Gestão', color: '#a855f7' },
  { name: 'Gestão Pública', score: 630, category: 'Gestão', color: '#d946ef' },
  { name: 'Logística', score: 640, category: 'Gestão', color: '#ec4899' },
  { name: 'Processos Gerenciais', score: 600, category: 'Gestão', color: '#f43f5e' },

  // Saúde Complementar
  { name: 'Fonoaudiologia', score: 690, category: 'Saúde', color: '#ef4444' },
  { name: 'Terapia Ocupacional', score: 680, category: 'Saúde', color: '#f97316' },
  { name: 'Radiologia', score: 660, category: 'Saúde', color: '#eab308' },

  // Tecnologias Específicas
  { name: 'Redes de Computadores', score: 630, category: 'Tecnologia', color: '#84cc16' },
  { name: 'Banco de Dados', score: 640, category: 'Tecnologia', color: '#22c55e' },
  { name: 'Desenvolvimento Web', score: 620, category: 'Tecnologia', color: '#10b981' },

  // Engenharias Específicas
  { name: 'Engenharia Aeronáutica', score: 750, category: 'Engenharia', color: '#06b6d4' },
  { name: 'Engenharia Naval', score: 740, category: 'Engenharia', color: '#0ea5e9' },
  { name: 'Engenharia de Materiais', score: 720, category: 'Engenharia', color: '#3b82f6' },
  { name: 'Engenharia Biomédica', score: 730, category: 'Engenharia', color: '#6366f1' },

  // Licenciaturas
  { name: 'Letras - Português', score: 580, category: 'Licenciatura', color: '#8b5cf6' },
  { name: 'Letras - Inglês', score: 590, category: 'Licenciatura', color: '#a855f7' },
  { name: 'Letras - Espanhol', score: 585, category: 'Licenciatura', color: '#d946ef' },
  { name: 'História - Licenciatura', score: 600, category: 'Licenciatura', color: '#ec4899' },
  { name: 'Geografia - Licenciatura', score: 590, category: 'Licenciatura', color: '#f43f5e' },

  // Cursos Emergentes
  { name: 'Inteligência Artificial', score: 760, category: 'Tecnologia', color: '#ef4444' },
  { name: 'Ciência de Dados', score: 750, category: 'Tecnologia', color: '#f97316' },
  { name: 'Cibersegurança', score: 740, category: 'Tecnologia', color: '#eab308' },
  { name: 'Robótica', score: 730, category: 'Tecnologia', color: '#84cc16' },
  { name: 'Nanotecnologia', score: 720, category: 'Tecnologia', color: '#22c55e' }
];

const EnemScoresChart: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course>(courses[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [chartType, setChartType] = useState<'bar' | 'pie'>('bar');

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getScoreLevel = (score: number) => {
    if (score >= 750) return { level: 'Muito Alta', color: 'text-red-600', bgColor: 'bg-red-100' };
    if (score >= 700) return { level: 'Alta', color: 'text-orange-600', bgColor: 'bg-orange-100' };
    if (score >= 650) return { level: 'Média-Alta', color: 'text-yellow-600', bgColor: 'bg-yellow-100' };
    if (score >= 600) return { level: 'Média', color: 'text-blue-600', bgColor: 'bg-blue-100' };
    return { level: 'Baixa', color: 'text-green-600', bgColor: 'bg-green-100' };
  };

  // --- ALTERAÇÕES AQUI ---
  const chartData = [
    { name: 'Pontuação do Curso', value: selectedCourse.score, fill: selectedCourse.color },
    { name: 'Pontuação Máxima', value: (1000 - selectedCourse.score), fill: '#e2e8f0' } // Cinza claro para o restante até 1000
  ];

  const barData = [
    { name: selectedCourse.name, score: selectedCourse.score, fill: selectedCourse.color }
  ];

  const scoreInfo = getScoreLevel(selectedCourse.score);

  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Notas de Corte ENEM</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Visualize a nota de corte para o curso dos seus sonhos!
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar curso..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setChartType('bar')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                chartType === 'bar'
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Barra
            </button>
            <button
              onClick={() => setChartType('pie')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                chartType === 'pie'
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Pizza
            </button>
          </div>
        </div>

        {/* Course Selection */}
        <div className="mt-4">
          <select
            value={selectedCourse.name}
            onChange={(e) => {
              const course = courses.find(c => c.name === e.target.value);
              if (course) setSelectedCourse(course);
            }}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {filteredCourses.map((course) => (
              <option key={course.name} value={course.name}>
                {course.name} - {course.score} pontos
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Course Info Card */}
      <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{selectedCourse.name}</h3>
            <p className="text-gray-600">Categoria: {selectedCourse.category}</p>
          </div>
          <div className={`px-4 py-2 rounded-full ${scoreInfo.bgColor}`}>
            <span className={`font-semibold ${scoreInfo.color}`}>
              {scoreInfo.level}
            </span>
          </div>
        </div>

        {/* --- ALTERAÇÕES AQUI: Layout de 2 colunas e remoção da Média Nacional --- */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <TrendingUp className="h-8 w-8 text-purple-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-purple-700">{selectedCourse.score}</p>
            <p className="text-sm text-gray-600">Nota de Corte</p>
          </div>
          {/* O box da Média Nacional foi removido */}
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <Award className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-green-700">
              {courses.filter(c => c.score > selectedCourse.score).length + 1}º {/* Corrigido para ser um ranking maior que a nota */}
            </p>
            <p className="text-sm text-gray-600">Posição no Ranking</p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
        {/* --- ALTERAÇÃO AQUI: Novo título para o gráfico --- */}
        <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
          Visualização da Nota de Corte do Curso
        </h4>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            {chartType === 'bar' ? (
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 1000]} />
                <Tooltip
                  formatter={(value) => [`${value} pontos`, 'Nota de Corte']}
                  labelStyle={{ color: '#374151' }}
                />
                <Bar dataKey="score" radius={[4, 4, 0, 0]} />
              </BarChart>
            ) : (
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                  nameKey="name" // Adicionado nameKey para o Tooltip mostrar o nome correto
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [
                    `${value} pontos`,
                    name === 'Pontuação do Curso' ? selectedCourse.name : name
                  ]}
                />
              </PieChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Courses */}
      <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
        <h4 className="text-xl font-bold text-gray-900 mb-6">Top 10 Cursos com Maiores Notas</h4>
        <div className="grid md:grid-cols-2 gap-4">
          {courses
            .sort((a, b) => b.score - a.score)
            .slice(0, 10)
            .map((course, index) => (
              <div
                key={course.name}
                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${
                  selectedCourse.name === course.name
                    ? 'bg-purple-100 border-2 border-purple-500'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedCourse(course)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{course.name}</p>
                    <p className="text-sm text-gray-600">{course.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-purple-700">{course.score}</p>
                  <p className="text-xs text-gray-500">pontos</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-2xl">
        <p className="text-sm text-yellow-800 text-center">
          <strong>Importante:</strong> As notas são médias nacionais estimadas com base nos dados mais recentes do SISU.
          Elas podem variar significativamente por universidade, modalidade de concorrência e ano.
          Sempre consulte os editais oficiais das instituições para informações precisas.
        </p>
      </div>
    </div>
  );
};

export default EnemScoresChart;