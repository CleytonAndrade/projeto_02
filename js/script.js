// JavaScript para o Projeto Economia Sustentável
document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // === CONFIGURAÇÕES INICIAIS ===
    const config = {
        animationDelay: 100,
        scrollOffset: 100,
        modalFadeTime: 300
    };

    // === ELEMENTOS DOM ===
    const elements = {
        loading: document.getElementById('loading'),
        navLinks: document.querySelectorAll('nav a'),
        sections: document.querySelectorAll('section'),
        cards: document.querySelectorAll('.card'),
        modal: document.getElementById('modal'),
        modalImg: document.getElementById('modal-img'),
        closeModal: document.querySelector('.close'),
        images: document.querySelectorAll('img[data-modal]'),
        galleryItems: document.querySelectorAll('.gallery-item')
    };

    // === LOADING ===
    function hideLoading() {
        if (elements.loading) {
            elements.loading.style.display = 'none';
        }
    }

    function showLoading() {
        if (elements.loading) {
            elements.loading.style.display = 'block';
        }
    }

    // === NAVEGAÇÃO SMOOTH SCROLL ===
    function initSmoothScroll() {
        elements.navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Remove classe active de todos os links
                    elements.navLinks.forEach(navLink => {
                        navLink.classList.remove('active');
                    });
                    
                    // Adiciona classe active ao link clicado
                    this.classList.add('active');
                    
                    // Scroll suave para a seção
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // === OBSERVER PARA ANIMAÇÕES ===
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Para cards dentro da seção, anima com delay
                    const cards = entry.target.querySelectorAll('.card, .aprendizado-item, .contato-item');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('fade-in');
                        }, index * config.animationDelay);
                    });
                }
            });
        }, observerOptions);

        elements.sections.forEach(section => {
            observer.observe(section);
        });
    }

    // === NAVEGAÇÃO ATIVA BASEADA NO SCROLL ===
    function initActiveNavigation() {
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '-20% 0px -60% 0px'
        };

        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const targetId = entry.target.id;
                    const correspondingLink = document.querySelector(`nav a[href="#${targetId}"]`);
                    
                    if (correspondingLink) {
                        // Remove active de todos os links
                        elements.navLinks.forEach(link => {
                            link.classList.remove('active');
                        });
                        
                        // Adiciona active ao link correspondente
                        correspondingLink.classList.add('active');
                    }
                }
            });
        }, observerOptions);

        elements.sections.forEach(section => {
            navObserver.observe(section);
        });
    }

    // === INTERATIVIDADE DOS CARDS ===
    function initCardInteractions() {
        elements.cards.forEach(card => {
            const header = card.querySelector('h3');
            const content = card.querySelector('p');
            
            if (header && content) {
                // Inicialmente esconde o conteúdo
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.transition = 'max-height 0.3s ease, opacity 0.3s ease';
                
                card.addEventListener('click', function() {
                    const isActive = header.classList.contains('active');
                    
                    if (isActive) {
                        header.classList.remove('active');
                        content.style.maxHeight = content.scrollHeight + 'px';
                        content.style.opacity = '1';
                    } else {
                        header.classList.add('active');
                        content.style.maxHeight = content.scrollHeight + 'px';
                        content.style.opacity = '1';
                    }
                });

                // Acessibilidade: suporte para Enter e Space
                card.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        card.click();
                    }
                });
            }
        });
    }

    // === MODAL PARA IMAGENS ===
    function initImageModal() {
        // Evento para abrir modal
        elements.images.forEach(img => {
            img.addEventListener('click', function() {
                if (elements.modal && elements.modalImg) {
                    elements.modal.style.display = 'block';
                    elements.modalImg.src = this.src;
                    elements.modalImg.alt = this.alt;
                    
                    // Previne scroll do body
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        // Evento para fechar modal
        if (elements.closeModal) {
            elements.closeModal.addEventListener('click', closeModal);
        }

        if (elements.modal) {
            elements.modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    closeModal();
                }
            });
        }

        // Fechar modal com ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && elements.modal.style.display === 'block') {
                closeModal();
            }
        });
    }

    function closeModal() {
        if (elements.modal) {
            elements.modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // === EFEITOS DE HOVER MELHORADOS ===
    function initHoverEffects() {
        // Efeito parallax sutil no header
        const header = document.querySelector('header');
        if (header) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const parallax = scrolled * 0.5;
                header.style.transform = `translateY(${parallax}px)`;
            });
        }

        // Efeito de tilt nos cards
        elements.cards.forEach(card => {
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            });
        });
    }

    // === PERFORMANCE OPTIMIZATION ===
    function initPerformanceOptimizations() {
        // Lazy loading para imagens
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));

        // Debounce para eventos de scroll
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            scrollTimeout = setTimeout(() => {
                updateScrollIndicator();
            }, 16); // ~60fps
        });
    }

    // === INDICADOR DE PROGRESSO DE SCROLL ===
    function createScrollIndicator() {
        const indicator = document.createElement('div');
        indicator.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 4px;
            background: linear-gradient(90deg, var(--secondary-color), var(--accent-color));
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(indicator);
        return indicator;
    }

    function updateScrollIndicator() {
        const indicator = document.querySelector('[style*="position: fixed"][style*="top: 0"]');
        if (indicator) {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            indicator.style.width = scrolled + '%';
        }
    }

    // === ACESSIBILIDADE ===
    function initAccessibility() {
        // Suporte para navegação por teclado
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', function() {
            document.body.classList.remove('keyboard-navigation');
        });

        // Skip link
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'Pular para o conteúdo principal';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--primary-color);
            color: white;
            padding: 8px;
            text-decoration: none;
            z-index: 10000;
        `;
        skipLink.addEventListener('focus', function() {
            this.style.top = '6px';
        });
        skipLink.addEventListener('blur', function() {
            this.style.top = '-40px';
        });
        document.body.insertBefore(skipLink, document.body.firstChild);
    }

    // === DARK MODE TOGGLE (BONUS) ===
    function initDarkMode() {
        const darkModeToggle = document.createElement('button');
        darkModeToggle.innerHTML = '🌙';
        darkModeToggle.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border: none;
            border-radius: 50%;
            background: var(--primary-color);
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            box-shadow: var(--shadow);
            z-index: 1000;
            transition: var(--transition);
        `;
        
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            this.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
            
            // Salva preferência
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });

        // Carrega preferência salva
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
            darkModeToggle.innerHTML = '☀️';
        }

        document.body.appendChild(darkModeToggle);
    }

    // === EASTER EGG ===
    function initEasterEgg() {
        let sequence = [];
        const targetSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];
        
        document.addEventListener('keydown', function(e) {
            sequence.push(e.code);
            sequence = sequence.slice(-targetSequence.length);
            
            if (sequence.join(',') === targetSequence.join(',')) {
                // Easter egg ativado!
                document.body.style.animation = 'rainbow 2s ease infinite';
                setTimeout(() => {
                    document.body.style.animation = '';
                }, 4000);
            }
        });
    }

    // === INICIALIZAÇÃO ===
    function init() {
        // Mostra loading brevemente para demonstrar
        showLoading();
        
        setTimeout(() => {
            hideLoading();
            
            // Inicializa todas as funcionalidades
            initSmoothScroll();
            initScrollAnimations();
            initActiveNavigation();
            initCardInteractions();
            initImageModal();
            initHoverEffects();
            initPerformanceOptimizations();
            initAccessibility();
            initDarkMode();
            initEasterEgg();
            
            // Cria indicador de scroll
            createScrollIndicator();
            
            // Anima entrada da primeira seção
            const firstSection = elements.sections[0];
            if (firstSection) {
                setTimeout(() => {
                    firstSection.classList.add('animate-in');
                }, 200);
            }
            
            console.log('🌱 Projeto Economia Sustentável carregado com sucesso!');
        }, 500);
    }

    // === TRATAMENTO DE ERROS ===
    window.addEventListener('error', function(e) {
        console.error('Erro no JavaScript:', e.error);
    });

    // CSS para dark mode
    const darkModeStyles = document.createElement('style');
    darkModeStyles.textContent = `
        body.dark-mode {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d30 100%);
            color: #e0e0e0;
        }
        
        body.dark-mode section {
            background: #2d2d30;
            color: #e0e0e0;
        }
        
        body.dark-mode nav {
            background: #2d2d30;
        }
        
        body.dark-mode nav a {
            color: #e0e0e0;
        }
        
        body.dark-mode h2,
        body.dark-mode h3 {
            color: #66bb6a;
        }
        
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
        
        body.keyboard-navigation *:focus {
            outline: 2px solid #4caf50 !important;
            outline-offset: 2px !important;
        }
    `;
    document.head.appendChild(darkModeStyles);

    // Inicia a aplicação
    init();
});

// === UTILITÁRIOS GLOBAIS ===
window.EconomiaSustentavel = {
    showNotification: function(message, type = 'info') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
            color: white;
            padding: 1rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            animation: slideInRight 0.3s ease;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    },
    
    scrollToSection: function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
};

// Animações CSS adicionais
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(additionalStyles);
