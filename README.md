# 🚀 O Sexo Oral Perfeito - Site Novo

## ✅ O QUE TEM AQUI

- ✅ **Meta Pixel** configurado CORRETAMENTE
  - ID: 2258617738296037
  - Eventos: PageView, ViewContent, InitiateCheckout

- ✅ **Utimify** preparado para receber eventos de checkout

- ✅ **Eventos de Checkout** nos 2 botões de compra
  - Quando clica em "Comprar Agora" → Dispara evento para Meta Pixel + Utimify
  - Depois redireciona para o checkout

---

## 📋 ESTRUTURA

```
site-novo/
├── index.html          ← Site completo
├── css/style.css       ← Estilos
├── js/script.js        ← Tracking e eventos
├── package.json        ← Dependências
├── vercel.json         ← Config Vercel
└── .gitignore
```

---

## 🔧 COMO USAR

### **1. Clonar ou criar repositório no GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main
```

### **2. Conectar no Vercel**

1. Vai para: vercel.com
2. Novo projeto
3. Seleciona seu repositório
4. Deploy automático!

### **3. Testar Tracking**

1. Abra o site: https://seu-site.vercel.app/
2. Abra o Console (F12)
3. Clique em "Comprar Agora"
4. Deve aparecer no console:
   ```
   ✅ Meta Pixel: InitiateCheckout disparado
   ✅ Utimify: Checkout iniciado
   ```

---

## 🎯 EVENTOS DISPARADOS

### **No carregamento da página:**
- ✅ `fbq('track', 'PageView')` → Meta Pixel
- ✅ `fbq('track', 'ViewContent')` → Meta Pixel

### **Quando clica em "Comprar Agora":**
- ✅ `fbq('track', 'InitiateCheckout')` → Meta Pixel
- ✅ `window.utimify.track('checkout_initiated')` → Utimify
- ✅ Redireciona para checkout (WIAPY)

---

## 📊 META PIXEL - CONFIRMADO ✅

**ID:** 2258617738296037

**Eventos Configurados:**
- PageView ✅
- ViewContent ✅
- InitiateCheckout ✅

**Verificar no Facebook:**
1. Vai para: facebook.com/ads/manager
2. Events Manager
3. Seleciona seu pixel
4. Vê os eventos em tempo real

---

## 🔗 LINKS DE CHECKOUT

- **Plano Básico:** https://pay.wiapy.com/hhWCQBEwcEEh
- **Plano Premium:** https://pay.wiapy.com/xxZK8aNw7uYZ

---

## 💡 PRÓXIMAS AÇÕES

1. ✅ Subir no GitHub
2. ✅ Deploy no Vercel
3. ✅ Testar eventos no console (F12)
4. ✅ Verificar no Meta Pixel (Events Manager)
5. ✅ Adicionar seu API Key do Utimify (se tiver)

---

## 🆘 TROUBLESHOOTING

### **Console mostra erro:**
- Recarrega a página (F5)
- Verifica se Meta Pixel script foi carregado

### **Eventos não aparecem no Meta:**
- Espera 5-10 minutos
- Verifica se o Pixel ID está correto
- Testa no Events Manager

### **Redireciona mas não mostra evento:**
- Deve esperar 500ms antes de redirecionar
- Verifique o console para erros

---

**Site pronto para VENDER!** 🚀
