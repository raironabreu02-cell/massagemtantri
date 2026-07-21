// Verificação de Idade
document.addEventListener('DOMContentLoaded', function() {
    const ageModal = document.getElementById('ageModal');
    const mainContent = document.getElementById('mainContent');
    const btnSim = document.getElementById('btnSim');
    const btnNao = document.getElementById('btnNao');

    // Verificar se o usuário já confirmou a idade
    if (localStorage.getItem('ageConfirmed') === 'true') {
        ageModal.style.display = 'none';
        mainContent.classList.remove('hidden');
    } else {
        ageModal.style.display = 'flex';
        mainContent.classList.add('hidden');
    }

    // Botão "Não" - redireciona para Google
    btnNao.addEventListener('click', function() {
        window.location.href = 'https://www.google.com';
    });

    // Botão "Sim" - confirma a idade e mostra conteúdo
    btnSim.addEventListener('click', function() {
        localStorage.setItem('ageConfirmed', 'true');
        ageModal.style.display = 'none';
        mainContent.classList.remove('hidden');
        
        // Track no Meta Pixel
        if (typeof fbq !== 'undefined') {
            fbq('track', 'ViewContent', {
                content_type: 'product',
                content_name: 'Curso de Massagem Tântrica',
                currency: 'BRL'
            });
        }
    });

    // FAQ Toggle
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', function() {
            // Fechar outros FAQs abertos
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    otherAnswer.style.display = 'none';
                }
            });

            // Toggle do item atual
            item.classList.toggle('active');
            if (answer.style.display === 'none' || answer.style.display === '') {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        });
    });

    // Smooth scroll para botões
    const buyButtons = document.querySelectorAll('.btn-buy, .btn-guarantee');
    buyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // O href já vai redirecionar, mas podemos adicionar tracking antes
            if (typeof fbq !== 'undefined') {
                const planName = this.closest('.price-card') ? 
                    (this.closest('.price-card').classList.contains('premium') ? 'Plano Premium' : 'Plano Básico') : 
                    'Garantia';
                
                fbq('track', 'InitiateCheckout', {
                    content_type: 'product',
                    content_name: planName,
                    value: planName.includes('Premium') ? 37.90 : 18.90,
                    currency: 'BRL'
                });
            }
        });
    });

    // Scroll spy para navbar (opcional - se adicionar navbar depois)
    window.addEventListener('scroll', function() {
        // Implementar efeitos de scroll aqui se necessário
    });

    // Lazy loading para imagens (melhorar performance)
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src; // Forçar carregamento
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Rastreamento de eventos customizados
    trackUserInteractions();
});

// Rastreamento de interações do usuário
function trackUserInteractions() {
    // Track de clique nos cards de aulas
    const aulaCards = document.querySelectorAll('.aula-card');
    aulaCards.forEach(card => {
        card.addEventListener('click', function() {
            if (typeof fbq !== 'undefined') {
                const title = this.querySelector('h3').textContent;
                fbq('track', 'ViewContent', {
                    content_type: 'product',
                    content_name: title,
                    currency: 'BRL'
                });
            }
        });
    });

    // Track de clique nos destaques
    const highlights = document.querySelectorAll('.highlight-card');
    highlights.forEach(card => {
        card.addEventListener('click', function() {
            if (typeof fbq !== 'undefined') {
                const title = this.querySelector('h3').textContent;
                fbq('track', 'ViewContent', {
                    content_type: 'product',
                    content_name: title,
                    currency: 'BRL'
                });
            }
        });
    });
}

// Função para track de eventos customizados
function trackEvent(eventName, eventData = {}) {
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, eventData);
    }
    
    // Também log para debug
    console.log('Evento rastreado:', eventName, eventData);
}

// Detectar quando o usuário está prestes a sair do site
window.addEventListener('beforeunload', function() {
    if (typeof fbq !== 'undefined') {
        fbq('track', 'CompleteRegistration'); // ou outro evento apropriado
    }
});

// Rastreamento de scroll depth (quanto do conteúdo o usuário viu)
let scrollTracked = {
    '25': false,
    '50': false,
    '75': false,
    '100': false
};

window.addEventListener('scroll', function() {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    if (scrollPercentage >= 25 && !scrollTracked['25']) {
        trackEvent('ScrolledTo25', { scroll_depth: '25%' });
        scrollTracked['25'] = true;
    }
    
    if (scrollPercentage >= 50 && !scrollTracked['50']) {
        trackEvent('ScrolledTo50', { scroll_depth: '50%' });
        scrollTracked['50'] = true;
    }
    
    if (scrollPercentage >= 75 && !scrollTracked['75']) {
        trackEvent('ScrolledTo75', { scroll_depth: '75%' });
        scrollTracked['75'] = true;
    }
    
    if (scrollPercentage >= 100 && !scrollTracked['100']) {
        trackEvent('ScrolledTo100', { scroll_depth: '100%' });
        scrollTracked['100'] = true;
    }
});

// Adicionar classe active em elementos quando ficam visíveis
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideIn 0.5s ease-out forwards';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('section');
    elements.forEach(el => observer.observe(el));
});
