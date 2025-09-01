# Projeto Economia Sustentável

Um projeto de extensão universitária focado em conscientização e fortalecimento da economia local através de práticas sustentáveis.

## 🚀 Como Executar

### 🌐 **Acesso Online (GitHub Pages)**

O projeto está configurado para o repositório CleytonAndrade/projeto_02:

**🔗 URL do Site:** <https://cleytonandrade.github.io/projeto_02>

### 💻 **Desenvolvimento Local**

Para testar localmente:

1. **Servidor Local (Recomendado)**:

    ```bash
    python -m http.server 8000
    ```

    Acesse: `http://localhost:8000`

2. **Ou simplesmente abra** o arquivo `index.html` em seu navegador.

## 📁 Estrutura do Projeto

extencao/
├── index.html              # Página principal
├── css/
│   └── style.css          # Estilos organizados e modernos
├── js/
│   └── script.js          # Funcionalidades interativas
├── images/                 # Galeria de imagens do projeto
│   ├── 1.jpg              # Fotos das atividades
│   ├── 2.jpg              # e intervenções
│   └── ...                # (total: 10 imagens)
├── assets/                # Recursos do site
│   └── favicon.svg        # Ícone SVG responsivo
├── _config.yml            # Configuração GitHub Pages
├── .nojekyll              # Evita processamento Jekyll
├── .gitignore             # Arquivos ignorados pelo Git
├── manifest.json          # Configuração PWA
├── sw.js                  # Service Worker
├── robots.txt             # SEO e indexação
├── sitemap.xml            # Mapa do site
├── DEPLOY.md              # Instruções específicas de deploy
├── configure-github-pages.py  # Script de configuração automática
└── README.md              # Documentação principal

## ✨ Melhorias Implementadas

### 🎨 Design e UX

- **Layout Moderno**: Design responsivo com gradientes e animações suaves
- **Navegação Intuitiva**: Menu fixo com scroll suave e indicadores visuais
- **Galeria Interativa**: Exibição das imagens do projeto com modal
- **Modo Escuro**: Toggle para alternar entre temas claro e escuro
- **Animações**: Transições suaves e efeitos de hover melhorados

### 🏗️ Estrutura Técnica

- **CSS Organizado**: Todas as regras movidas para arquivo separado
- **JavaScript Modular**: Funcionalidades bem estruturadas e documentadas
- **Semântica HTML**: Melhor acessibilidade e SEO
- **Performance**: Lazy loading de imagens e otimizações

### 🎯 Funcionalidades

- **Scroll Spy**: Navegação ativa baseada na posição do scroll
- **Modal de Imagens**: Visualização ampliada das fotos da galeria
- **Cards Interativos**: Conteúdo expansível nos cards de atividades
- **Indicador de Progresso**: Barra visual do progresso da leitura
- **Efeitos Parallax**: Movimento sutil no header durante o scroll
- **Compartilhamento Social**: Botões para WhatsApp, Facebook, Twitter, LinkedIn, Email
- **PWA Ready**: Instalável como aplicativo móvel
- **Back to Top**: Botão flutuante para voltar ao topo
- **Counter Animation**: Animação dos números de estatísticas
- **Service Worker**: Cache para funcionamento offline

### ♿ Acessibilidade

- **Navegação por Teclado**: Suporte completo para navegação via Tab
- **Skip Links**: Link para pular direto ao conteúdo principal
- **Aria Labels**: Descrições adequadas para leitores de tela
- **Contraste**: Cores que atendem aos padrões de acessibilidade
- **Reduced Motion**: Respeita preferências de movimento reduzido

## 🎨 Cores e Tema

- **Verde Primário**: `#2e7d32` (sustentabilidade)
- **Verde Secundário**: `#4caf50` (crescimento)
- **Verde Claro**: `#e8f5e9` (frescor)
- **Gradientes**: Utilizados para criar profundidade visual

## 📱 Responsividade

O site foi otimizado para funcionar perfeitamente em:

- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Telas grandes (1200px+)

## 🎁 Easter Eggs

- **Konami Code**: Digite ↑↑↓↓←→←→ para uma surpresa colorida!
- **Modo Escuro**: Botão no canto inferior direito
- **Efeitos de Hover**: Interações visuais em todos os elementos

## 📊 Métricas de Performance

- ✅ **SEO Otimizado**: Meta tags completas, robots.txt, sitemap.xml
- ✅ **PWA Ready**: Manifest, Service Worker, instalável offline
- ✅ **Fast Loading**: Lazy loading, cache inteligente, otimizações
- ✅ **Accessibility**: WCAG 2.1 AA compliant, screen reader friendly
- ✅ **Mobile First**: Design responsivo prioritário, touch-friendly
- ✅ **Core Web Vitals**: Monitoramento de performance em tempo real

## 🚀 Novas Funcionalidades Adicionadas

### 📱 **PWA (Progressive Web App)**

- Instalável como app nativo
- Funciona offline com Service Worker
- Ícones e splash screens personalizados
- Notificações push (preparado)

### 🔗 **Compartilhamento Social**

- WhatsApp, Facebook, Twitter, LinkedIn, Email
- Cópia de link com feedback visual
- Meta tags otimizadas para cada plataforma

### 📈 **Estatísticas Animadas**

- Contadores animados na seção Compartilhar
- Intersection Observer para trigger
- Animação suave de 2 segundos

### 🔝 **UX Melhorado**

- Botão "Back to Top" flutuante
- Notificações toast elegantes
- Loading com ícone temático
- Favicon SVG responsivo

## 🌐 GitHub Pages - Configuração Específica

### 📋 **Informações do Repositório**

- **GitHub**: <https://github.com/CleytonAndrade/projeto_02>
- **Site**: <https://cleytonandrade.github.io/projeto_02>
- **Status**: ✅ URLs já configuradas automaticamente

### 🚀 **Deploy Rápido**

```bash
# Fazer commit das alterações
git add .
git commit -m "Deploy do projeto reorganizado com design moderno"
git push origin main

# Ativar GitHub Pages se ainda não estiver ativo:
# 1. Ir em Settings > Pages
# 2. Source: Deploy from branch
# 3. Branch: main / (root)
```

### 📖 **Documentação Completa**

- **Instruções detalhadas**: [`DEPLOY.md`](DEPLOY.md)
- **Script de configuração**: `configure-github-pages.py` (já não é mais necessário)

---

Desenvolvido com 💚 para um futuro mais sustentável.
