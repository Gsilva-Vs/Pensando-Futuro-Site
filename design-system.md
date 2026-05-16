# Design System - Pensando no Futuro

##  Paleta Cores

### Cores Principais
- **Purple Primary**: #9333ea (rgb(147, 51, 234))
- **Purple Secondary**: #a855f7 (rgb(168, 85, 247))
- **Purple Light**: #e9d5ff (rgb(233, 213, 255))
- **Yellow Accent**: #fbbf24 (rgb(251, 191, 36))

### Cores
- **Success**: #10b981 (rgb(16, 185, 129))
- **Warning**: #f59e0b (rgb(245, 158, 11))
- **Error**: #ef4444 (rgb(239, 68, 68))
- **Info**: #3b82f6 (rgb(59, 130, 246))

### Cores Neutras
- **Gray 50**: #f9fafb
- **Gray 100**: #f3f4f6
- **Gray 200**: #e5e7eb
- **Gray 300**: #d1d5db
- **Gray 400**: #9ca3af
- **Gray 500**: #6b7280
- **Gray 600**: #4b5563
- **Gray 700**: #374151
- **Gray 800**: #1f2937
- **Gray 900**: #111827

## 

### Fontes
- **Font Family**: Inter, system-ui, sans-serif
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Tamanhos de Texto
- **Heading 1**: 4rem (64px) - font-bold
- **Heading 2**: 2.5rem (40px) - font-bold
- **Heading 3**: 1.5rem (24px) - font-bold
- **Heading 4**: 1.25rem (20px) - font-bold
- **Body Large**: 1.25rem (20px) - font-normal
- **Body**: 1rem (16px) - font-normal
- **Body Small**: 0.875rem (14px) - font-normal
- **Caption**: 0.75rem (12px) - font-normal

##  

### Sistema de Grid (8px)
- **xs**: 0.5rem (8px)
- **sm**: 0.75rem (12px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)
- **3xl**: 4rem (64px)
- **4xl**: 5rem (80px)

### Containers
- **Max Width**: 1152px (max-w-6xl)
- **Padding Horizontal**: 1.5rem (24px)

## 

### Botões
#### Botão Primário
- **Background**: Purple Primary (#9333ea)
- **Text**: White
- **Padding**: 1rem 2rem (16px 32px)
- **Border Radius**: 9999px (rounded-full)
- **Font Weight**: 600 (semibold)
- **Hover**: Purple Secondary (#a855f7)

#### Botão Secundário
- **Background**: White/20 + backdrop-blur
- **Text**: White
- **Border**: 1px solid White/30
- **Padding**: 1rem 2rem (16px 32px)
- **Border Radius**: 9999px (rounded-full)
- **Font Weight**: 600 (semibold)
- **Hover**: White/30

### Cards
#### Card Padrão
- **Background**: White
- **Border Radius**: 1rem (16px)
- **Shadow**: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
- **Padding**: 1.5rem (24px)

#### Card com Hover
- **Hover Shadow**: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
- **Transition**: all 0.3s ease

### Sidebar
- **Width**: 16rem (256px)
- **Background**: Transparent + backdrop-blur-sm
- **Position**: Fixed
- **Top**: 4rem (64px)
- **Bottom**: 0

### Header
- **Height**: 4rem (64px)
- **Background**: Purple Primary (#9333ea)
- **Position**: Fixed
- **Z-index**: 50

## 📱 Breakpoints

### Mobile First
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 

### Hero Gradient
```css
background: linear-gradient(to bottom right, #7c3aed, #a855f7, #c084fc)
```

### Overlay Gradient
```css
background: linear-gradient(rgba(139, 92, 246, 0.8), rgba(168, 85, 247, 0.8))
```

## 

### Transições
- **Duration**: 300ms
- **Easing**: ease-in-out
- **Properties**: all, colors, transform, shadow

### Hover Effects
- **Scale**: transform: scale(1.05)
- **Shadow**: Aumentar shadow
- **Colors**: Mudança suave de cor

## 

### Biblioteca
- **Lucide React**
- **Tamanho Padrão**: 1.5rem (24px)
- **Tamanho Pequeno**: 1rem (16px)
- **Tamanho Grande**: 2rem (32px)

### Ícones Principais
- **GraduationCap**: Logo principal
- **BookOpen**: Estudos
- **Target**: Objetivos
- **Users**: Comunidade
- **Trophy**: Conquistas
- **Clock**: Tempo
- **Lightbulb**: Dicas

## 

### Hero Section
- **Height**: 100vh
- **Background**: Gradient + Image overlay
- **Text Alignment**: Center
- **Content Max Width**: 4xl (896px)

### Content Sections
- **Padding Vertical**: 5rem (80px)
- **Max Width**: 6xl (1152px)
- **Margin**: Auto

### Alternating Backgrounds
- **White**: Seções ímpares
- **Purple-50**: Seções pares

## 

### Preparação
- [ ] Criar artboards para diferentes breakpoints
- [ ] Configurar grid system (8px)
- [ ] Importar paleta de cores
- [ ] Configurar estilos de texto
- [ ] Criar componentes base (botões, cards, etc.)

### Componentes
- [ ] Header com navegação
- [ ] Sidebar responsiva
- [ ] Cards de conteúdo
- [ ] Botões (primário, secundário)
- [ ] Formulários (inputs, selects)
- [ ] Gráficos (placeholder)

### Páginas
- [ ] Homepage completa
- [ ] Página de Notas de Corte
- [ ] Versões mobile de todas as páginas

## 

### Imagens
- **Hero Background**: 1920x1080px
- **Faculdades**: Logos oficiais (200x200px)
- **Ícones**: Lucide React equivalents

### Fontes
- **Inter**: Baixar do Google Fonts
- **Weights**: 400, 500, 600, 700