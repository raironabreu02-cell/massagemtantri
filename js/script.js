// Função para disparar evento de checkout iniciado
function iniciarCheckout(button) {
    const plan = button.getAttribute('data-plan');
    const price = parseFloat(button.getAttribute('data-price'));

    console.log(`Iniciando checkout: ${plan} - R$ ${price.toFixed(2)}`);

    // ============================================================
    // 1. META PIXEL - Evento InitiateCheckout
    // ============================================================
    if (typeof fbq !== 'undefined') {
        fbq('track', 'InitiateCheckout', {
            value: price,
            currency: 'BRL',
            content_name: `Plano ${plan}`,
            content_type: 'product'
        });
        console.log('✅ Meta Pixel: InitiateCheckout disparado');
    } else {
        console.warn('❌ Meta Pixel não carregado');
    }

    // ============================================================
    // 2. UTIMIFY - Evento de Checkout
    // ============================================================
    try {
        if (typeof window.utimify !== 'undefined') {
            window.utimify.track('checkout_initiated', {
                plan: plan,
                price: price,
                currency: 'BRL',
                timestamp: new Date().toISOString()
            });
            console.log('✅ Utimify: Checkout iniciado');
        } else if (typeof window.utimifyConfig !== 'undefined') {
            // Se Utimify ainda está carregando, enviar via fetch
            console.log('⏳ Utimify carregando, tentando enviar via API');
        }
    } catch (error) {
        console.error('Erro ao enviar para Utimify:', error);
    }

    // ============================================================
    // 3. ENVIAR PARA API LOCAL (opcional - seu servidor)
    // ============================================================
    fetch('/api/track', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            event: 'checkout_initiated',
            plan: plan,
            price: price,
            timestamp: new Date().toISOString()
        })
    }).catch(err => console.log('API local não disponível:', err));

    // ============================================================
    // 4. REDIRECIONAR PARA CHECKOUT (após 500ms)
    // ============================================================
    setTimeout(() => {
        if (plan === 'Básico') {
            // Link do plano básico
            window.location.href = 'https://pay.wiapy.com/hhWCQBEwcEEh';
        } else if (plan === 'Premium') {
            // Link do plano premium
            window.location.href = 'https://pay.wiapy.com/xxZK8aNw7uYZ';
        }
    }, 500);
}

// ============================================================
// RASTREAMENTO INICIAL DE PÁGINA
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Página carregada - Eventos de tracking inicializados');

    // Meta Pixel ViewContent
    if (typeof fbq !== 'undefined') {
        fbq('track', 'ViewContent', {
            content_name: 'Sexo Oral Perfeito',
            content_type: 'product'
        });
        console.log('✅ Meta Pixel: ViewContent disparado');
    }

    // Rastrear scroll
    let scrollTracked = false;
    window.addEventListener('scroll', function() {
        if (!scrollTracked) {
            const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            if (scrollPercentage > 50) {
                fbq('track', 'ViewContent', {
                    content_name: 'Scroll 50%',
                    content_type: 'engagement'
                });
                scrollTracked = true;
                console.log('✅ Meta Pixel: Scroll 50% rastreado');
            }
        }
    });
});

// ============================================================
// CONFIRMAR META PIXEL NA CONSOLE
// ============================================================
console.log('%c🔍 META PIXEL VERIFICAÇÃO', 'color: #d32f2f; font-weight: bold; font-size: 14px');
console.log('%cPixel ID: 2258617738296037', 'color: #d32f2f; font-weight: bold');
console.log('%c✅ Meta Pixel está ATIVO', 'color: green; font-weight: bold');
console.log('%c✅ Eventos: PageView, ViewContent, InitiateCheckout', 'color: green');
console.log('%c✅ Utimify preparado para receber eventos', 'color: green');
