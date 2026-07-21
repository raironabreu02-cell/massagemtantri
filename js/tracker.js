// Script de Rastreamento para Painel Admin
// Adicionar no final do body do seu site HTML

(function() {
  const API_URL = '/api/track';
  
  // Detectar dispositivo
  function getDevice() {
    const ua = navigator.userAgent;
    if (/mobile|android|iphone|ipod|blackberry|iemobile|opera mini/i.test(ua.toLowerCase())) {
      return 'mobile';
    }
    return 'desktop';
  }

  // Detectar país (usando IP - aproximado)
  function getCountry() {
    // Em produção, usar serviço de geolocalização
    return 'BR'; // Default
  }

  // Rastrear visita inicial
  function trackVisit() {
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: 'visit',
        device: getDevice(),
        country: getCountry(),
        page: window.location.pathname,
      }),
    }).catch(err => console.log('Track visit error:', err));
  }

  // Rastrear cliques em botões
  function setupClickTracking() {
    // Rastrear clique no botão Básico
    const btnBasico = document.querySelector('[href*="pay.wiapy.com/hhWCQBEwcEEh"]');
    if (btnBasico) {
      btnBasico.addEventListener('click', function() {
        trackEvent('click', 'basico', window.location.pathname);
      });
    }

    // Rastrear clique no botão Premium
    const btnPremium = document.querySelector('[href*="pay.wiapy.com/xxZK8aNw7uYZ"]');
    if (btnPremium) {
      btnPremium.addEventListener('click', function() {
        trackEvent('click', 'premium', window.location.pathname);
      });
    }

    // Rastrear scroll (Scroll Depth)
    trackScrollDepth();
  }

  // Função para rastrear eventos
  function trackEvent(event, button, page) {
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event,
        button,
        page,
        device: getDevice(),
        country: getCountry(),
      }),
    }).catch(err => console.log('Track event error:', err));
  }

  // Rastrear profundidade de scroll
  function trackScrollDepth() {
    let scrollTracked = {
      '25': false,
      '50': false,
      '75': false,
      '100': false,
    };

    window.addEventListener('scroll', function() {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercentage >= 25 && !scrollTracked['25']) {
        trackEvent('scroll', 'depth-25', window.location.pathname);
        scrollTracked['25'] = true;
      }
      
      if (scrollPercentage >= 50 && !scrollTracked['50']) {
        trackEvent('scroll', 'depth-50', window.location.pathname);
        scrollTracked['50'] = true;
      }
      
      if (scrollPercentage >= 75 && !scrollTracked['75']) {
        trackEvent('scroll', 'depth-75', window.location.pathname);
        scrollTracked['75'] = true;
      }
      
      if (scrollPercentage >= 100 && !scrollTracked['100']) {
        trackEvent('scroll', 'depth-100', window.location.pathname);
        scrollTracked['100'] = true;
      }
    });
  }

  // Inicializar rastreamento quando DOM estiver pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      trackVisit();
      setupClickTracking();
    });
  } else {
    trackVisit();
    setupClickTracking();
  }
})();
