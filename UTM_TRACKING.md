# Guia de UTM Parameters e Rastreamento

Este documento explica como usar UTM parameters para rastrear a origem do tráfego no seu site de forma gratuita.

## 📊 O que são UTM Parameters?

UTM parameters são parâmetros adicionados à URL que rastreiam:
- **source**: Onde o tráfego vem (Google, Facebook, Instagram, etc)
- **medium**: Como o tráfego chegou (cpc, organic, social, email)
- **campaign**: Nome da campanha
- **content**: Variação específica (A/B test, anúncios diferentes)
- **term**: Termo de busca (para campanhas de busca)

## 🔗 Exemplos de URLs com UTM

### Facebook
```
https://seu-site.vercel.app/?utm_source=facebook&utm_medium=paid&utm_campaign=lancamento_curso
```

### Instagram
```
https://seu-site.vercel.app/?utm_source=instagram&utm_medium=social&utm_campaign=story_ads
```

### Email
```
https://seu-site.vercel.app/?utm_source=email&utm_medium=newsletter&utm_campaign=oferta_30dias
```

### Google Ads
```
https://seu-site.vercel.app/?utm_source=google&utm_medium=cpc&utm_campaign=massagem_tantrica&utm_term=curso+massagem
```

### Anúncios diretos
```
https://seu-site.vercel.app/?utm_source=direct&utm_medium=referral&utm_campaign=parceria_site
```

## 🛠️ Gerador de URLs UTM

### Opção 1: Ferramenta Google (Grátis)

1. Acesse: https://ga-dev-tools.web.app/campaign-url-builder/
2. Preencha:
   - Website URL: `https://seu-site.vercel.app/`
   - Campaign Source: `facebook`
   - Campaign Medium: `paid`
   - Campaign Name: `lancamento_julho`
3. Clique "Copy"
4. Use em suas campanhas

### Opção 2: UTMify (Opcional)

UTMify é uma ferramenta gratuita e paga para gerenciar UTM parameters:

**Grátis:**
- Crie URLs com UTM
- Dashboard básico
- Histórico de URLs

**Pago:**
- Integração com CRM
- Relatórios avançados
- Analytics em tempo real

Acesse: https://www.utmify.io/

## 📈 Integração com Google Analytics

### 1. Setup do Google Analytics

```html
<!-- Adicione isto antes da tag </head> em index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX'); // Substitua com seu ID
</script>
```

### 2. Ler UTM Parameters com JavaScript

```javascript
// Adicione isto em script.js

function getUTMParameters() {
    const params = new URLSearchParams(window.location.search);
    const utm = {
        source: params.get('utm_source') || 'direct',
        medium: params.get('utm_medium') || 'organic',
        campaign: params.get('utm_campaign') || 'direct',
        content: params.get('utm_content') || '',
        term: params.get('utm_term') || ''
    };
    
    // Armazenar em localStorage para usar depois
    localStorage.setItem('utm_params', JSON.stringify(utm));
    
    return utm;
}

// Chamar ao carregar página
const utmParams = getUTMParameters();

// Enviar para Google Analytics
if (typeof gtag !== 'undefined') {
    gtag('event', 'page_view', {
        utm_source: utmParams.source,
        utm_medium: utmParams.medium,
        utm_campaign: utmParams.campaign,
        utm_content: utmParams.content,
        utm_term: utmParams.term
    });
}

// Enviar para Meta Pixel
if (typeof fbq !== 'undefined') {
    fbq('track', 'PageView', {
        utm_source: utmParams.source,
        utm_medium: utmParams.medium,
        utm_campaign: utmParams.campaign
    });
}
```

### 3. Visualizar dados no Google Analytics

1. Acesse https://analytics.google.com/
2. Vá em "Reports" > "User acquisition"
3. Veja os dados por:
   - Source/Medium
   - Campaign
   - Content

## 🎯 Estratégia de UTM

### Por Canal

**Facebook Ads:**
```
utm_source=facebook
utm_medium=paid
utm_campaign=massagem_tantrica_[mes]
utm_content=[ad_id]
```

**Instagram Ads:**
```
utm_source=instagram
utm_medium=paid
utm_campaign=story_ads_[mes]
utm_content=carousel_[numero]
```

**Email Marketing:**
```
utm_source=email
utm_medium=newsletter
utm_campaign=oferta_30dias
utm_content=link_botao_cta
```

**WhatsApp:**
```
utm_source=whatsapp
utm_medium=social
utm_campaign=broadcast_mes
utm_content=link_descricao
```

**Organic Search:**
```
utm_source=google
utm_medium=organic
utm_campaign=seo
utm_term=[palavra_chave]
```

## 📱 Usar UTM com QR Code

```
1. Gere uma URL com UTM completa
2. Acesse qr-code-generator.com
3. Cole a URL
4. Gere o QR code
5. Imprima ou compartilhe
6. Os cliques serão rastreados
```

## 🔍 Como Usar UTM para Comparar Anúncios

```
Anúncio A: 
https://seu-site.com/?utm_campaign=ads&utm_content=ad_a

Anúncio B:
https://seu-site.com/?utm_campaign=ads&utm_content=ad_b

Anúncio C:
https://seu-site.com/?utm_campaign=ads&utm_content=ad_c

→ Compare as conversões de cada um em Google Analytics
```

## 💾 Armazenar UTM em Formulários

Se tiver um formulário de email (futuro):

```html
<form id="newsletterForm">
    <input type="email" id="email" required>
    <input type="hidden" id="utm_source" name="utm_source">
    <input type="hidden" id="utm_medium" name="utm_medium">
    <input type="hidden" id="utm_campaign" name="utm_campaign">
    <button type="submit">Inscrever</button>
</form>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    document.getElementById('utm_source').value = params.get('utm_source') || '';
    document.getElementById('utm_medium').value = params.get('utm_medium') || '';
    document.getElementById('utm_campaign').value = params.get('utm_campaign') || '';
});
</script>
```

## 🚀 Usar UTM com Ferramentas de Email

### Mailchimp
1. Crie uma campanha
2. Em "Tracking", habilite "Track clicks"
3. Adicione UTM parameters automáticamente

### ConvertKit
1. Quando criar um email
2. Habilite "UTM parameters"
3. Sistema adiciona automaticamente

## 📊 Relatório UTM Recomendado

Acompanhe regularmente:

**Semanal:**
- [ ] Traffic por source
- [ ] Conversões por source
- [ ] Taxa de conversão

**Mensal:**
- [ ] Melhor campanha
- [ ] ROI por canal
- [ ] Tendências

## ⚠️ Boas Práticas

✅ **Faça:**
- Use nomes consistentes (lowercase, sem espaços)
- Documente suas convenções
- Teste as URLs antes de usar
- Limpe parâmetros não utilizados

❌ **Evite:**
- Misturar maiúsculas e minúsculas
- Espaços (use hífens ou underscores)
- Caracteres especiais
- URLs muito longas

## 📝 Tabela de Padrões UTM

| Canal | Source | Medium | Campaign | Content |
|-------|--------|--------|----------|---------|
| Facebook Ads | facebook | paid | campanha_nome | ad_id |
| Instagram Stories | instagram | paid | story_ads | story_numero |
| Google Ads | google | cpc | search_campaign | keyword |
| Email | email | newsletter | promo_30dias | link_posicao |
| WhatsApp | whatsapp | social | broadcast | link_tipo |
| Influencer | [nome] | influencer | campanha | link |

## 🔗 Ferramentas Úteis

- **Google Analytics:** https://analytics.google.com/
- **UTM Generator:** https://ga-dev-tools.web.app/campaign-url-builder/
- **UTMify:** https://www.utmify.io/
- **Bitly:** https://bitly.com/ (encurta URLs com UTM)
- **QR Code:** https://qr-code-generator.com/

## 📈 Exemplo de Implementação Completa

```javascript
// Em script.js - adicione isto

function setupUTMTracking() {
    const urlParams = new URLSearchParams(window.location.search);
    const utm = {
        source: urlParams.get('utm_source') || 'direct',
        medium: urlParams.get('utm_medium') || 'direct',
        campaign: urlParams.get('utm_campaign') || 'direct',
        content: urlParams.get('utm_content') || '',
        term: urlParams.get('utm_term') || ''
    };
    
    // Armazenar
    sessionStorage.setItem('utm', JSON.stringify(utm));
    
    // Rastrear com Google Analytics
    if (window.gtag) {
        window.gtag('config', 'G-XXXXXXXXXX', {
            'campaign': utm.campaign,
            'source': utm.source,
            'medium': utm.medium
        });
    }
    
    // Rastrear com Meta Pixel
    if (window.fbq) {
        window.fbq('track', 'PageView', {
            utm_source: utm.source,
            utm_medium: utm.medium,
            utm_campaign: utm.campaign
        });
    }
    
    // Log para debug
    console.log('UTM Parameters:', utm);
    
    return utm;
}

// Chamar ao inicializar
document.addEventListener('DOMContentLoaded', setupUTMTracking);
```

## 🎓 Conclusão

- **UTM é grátis** e funciona com Google Analytics
- **Meta Pixel** já está integrado no site
- **Combine ambos** para máximo de insights
- **Rastreie tudo** para tomar decisões melhores
- **Otimize baseado em dados** (não em suposições)

---

**Próximos passos:** Implemente UTM em todas as suas campanhas de marketing!
