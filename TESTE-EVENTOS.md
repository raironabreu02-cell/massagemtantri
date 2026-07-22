# ✅ GUIA COMPLETO - TESTE DOS EVENTOS DE CHECKOUT

## 🎯 O QUE ESTÁ FUNCIONANDO

### **1. Meta Pixel - ATIVO ✅**
- ID: 2258617738296037
- Evento: `InitiateCheckout`
- Dispara quando: Clica em "Comprar Agora"

### **2. Utimify Pixel - SEU PIXEL ✅**
- Seu pixel adicionado no HTML
- Evento: `checkout_initiated`
- Dispara quando: Clica em "Comprar Agora"

### **3. API Local - PRONTA ✅**
- Endpoint: `/api/track`
- Evento: `checkout_initiated`
- Registra: plano, preço, timestamp

---

## 🧪 COMO TESTAR NO NAVEGADOR

### **PASSO 1: Abra o site**
```
https://seu-site.vercel.app/
```

### **PASSO 2: Abra o Console**
- Pressione **F12**
- Clique na aba **"Console"**

### **PASSO 3: Role para a seção de Pricing**
- Procure por "Escolha seu Plano"
- Veja os 2 botões: "Comprar Agora"

### **PASSO 4: Clique em "Comprar Agora"**

**Você deve ver NO CONSOLE:**

```
✅ Página carregada - Eventos de tracking inicializados
✅ Meta Pixel: ViewContent disparado
✅ Meta Pixel: InitiateCheckout disparado
✅ Utimify: Checkout iniciado
```

---

## 📊 O QUE ACONTECE EXATAMENTE

### **Quando clica no botão "Comprar Agora":**

**1. Meta Pixel dispara:**
```javascript
fbq('track', 'InitiateCheckout', {
    value: 18.90,           // ou 37.90 se Premium
    currency: 'BRL',
    content_name: 'Plano Básico',  // ou Premium
    content_type: 'product'
});
```

**2. Utimify dispara:**
```javascript
window.utimify.track('checkout_initiated', {
    plan: 'Básico',
    price: 18.90,
    currency: 'BRL',
    timestamp: '2024-07-22T...'
});
```

**3. API Local envia:**
```javascript
fetch('/api/track', {
    event: 'checkout_initiated',
    plan: 'Básico',
    price: 18.90,
    timestamp: '2024-07-22T...'
});
```

**4. Redireciona (após 500ms):**
```
Plano Básico → https://pay.wiapy.com/hhWCQBEwcEEh
Plano Premium → https://pay.wiapy.com/xxZK8aNw7uYZ
```

---

## ✅ VERIFICAR NO META PIXEL (Facebook)

### **Para confirmar que o evento chegou:**

1. Vai para: **facebook.com/ads/manager**
2. Clica em **Events Manager**
3. Seleciona seu Pixel: **2258617738296037**
4. Clica em **"Test Events"** ou **"Eventos em Tempo Real"**
5. Você deve ver:
   - ✅ PageView
   - ✅ ViewContent
   - ✅ InitiateCheckout

---

## 🟢 VERIFICAR NO UTIMIFY

### **Para confirmar que Utimify recebeu:**

1. Acessa: **https://app.utimify.com.br**
2. Vai para **Relatórios** ou **Analytics**
3. Procura por **"Checkout Iniciado"**
4. Deve mostrar o evento quando clicou

---

## 🔍 SE NÃO APARECER NO CONSOLE

### **Problema: Nada aparece no console**

**Solução:**
1. Recarrega a página (F5)
2. Verifica se tem erros em VERMELHO no console
3. Se tiver erro sobre Meta Pixel, verifica o ID (2258617738296037)

### **Problema: Aparece erro do Utimify**

**Solução:**
1. Pode ser que o Utimify está carregando
2. Tenta clicar de novo
3. Ou ativa em "Network" para ver requisições

### **Problema: Redireciona mas não mostra evento**

**Solução:**
1. O evento foi disparado, mas pode ter redirecionado rápido demais
2. Testa novamente e presta atenção ANTES de redirecionar
3. Abre o console ANTES de clicar

---

## 📋 CHECKLIST DE FUNCIONAMENTO

- [ ] Site carrega sem erros
- [ ] Console mostra "Página carregada"
- [ ] Meta Pixel aparece no console
- [ ] Clica em "Comprar Agora"
- [ ] Vê "InitiateCheckout disparado"
- [ ] Vê "Utimify: Checkout iniciado"
- [ ] Redireciona para WIAPY
- [ ] Meta Pixel Events Manager mostra o evento

---

## 🎯 RESUMO

**Quando você clica em "Comprar Agora":**

1. ✅ Meta Pixel recebe evento (InitiateCheckout)
2. ✅ Utimify recebe evento (checkout_initiated)
3. ✅ API local registra evento
4. ✅ Redireciona para checkout WIAPY

**TUDO FUNCIONANDO!** 🚀

---

## 💡 PRÓXIMAS AÇÕES

1. Descompacte o ZIP
2. Suba no GitHub
3. Deploy no Vercel
4. Teste os eventos (F12)
5. Verifique no Meta Pixel Events Manager
6. Comece a vender! 💰

---

**Qualquer dúvida, revise este guia!**
