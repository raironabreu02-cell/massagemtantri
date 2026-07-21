# Curso de Massagem Tântrica - Landing Page

Uma landing page profissional para venda do Curso de Massagem Orgástica com validação de idade, dois planos de preço e integração com Meta Pixel.

## 🎯 Características

- ✅ Modal de verificação de idade (18+)
- ✅ Dois planos de preço (Básico R$18,90 e Premium R$37,90)
- ✅ Integração completa com Meta Pixel (Facebook)
- ✅ Design responsivo e moderno
- ✅ Layout otimizado para conversão
- ✅ Rastreamento de eventos (scroll depth, interações, etc)
- ✅ FAQ interativo
- ✅ Seção de depoimentos
- ✅ Garantia de 30 dias
- ✅ Certificado incluso (plano premium)
- ✅ Vídeo aulas e bônus destacados

## 📁 Estrutura do Projeto

```
projeto_massagem/
├── index.html          # Arquivo HTML principal
├── styles.css          # Estilos CSS responsivos
├── script.js           # JavaScript para interatividade
├── images/             # Pasta para imagens (PNG, JPG)
├── README.md           # Este arquivo
└── vercel.json         # Configuração do Vercel
```

## 🚀 Como Usar

### Localmente

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/curso-massagem-tantrica.git
cd curso-massagem-tantrica
```

2. Abra o arquivo `index.html` no navegador

### No GitHub

1. Crie um novo repositório no GitHub
2. Clone na sua máquina
3. Copie os arquivos do projeto
4. Faça o commit e push:
```bash
git add .
git commit -m "Initial commit: Landing page curso"
git push origin main
```

### No Vercel

#### Opção 1: Conectar direto do GitHub
1. Acesse [Vercel](https://vercel.com)
2. Clique em "New Project"
3. Selecione seu repositório do GitHub
4. Vercel vai detectar e fazer o deploy automaticamente

#### Opção 2: Deploy via CLI
```bash
npm install -g vercel
vercel
```

## 🎨 Customização

### Cores
Edite as variáveis CSS em `styles.css`:
```css
:root {
    --primary-red: #d32f2f;
    --dark-bg: #0f0f0f;
    --text-light: #e0e0e0;
    --text-white: #ffffff;
}
```

### Links de Checkout
Edite os links de pagamento em `index.html`:
- Plano Básico: `https://pay.cakto.com.br/wwnyx3n_993073`
- Plano Premium: `https://pay.cakto.com.br/rge4zxe_993035`

### Pixel do Meta
O Pixel ID já está configurado: `2258617738296037`
Para mudar, edite em `index.html`:
```javascript
fbq('init', '2258617738296037');
```

### Imagens
Crie uma pasta `images/` e adicione as imagens:
- hero-massagem.jpg
- mockup-curso.jpg
- massagem-nuru.jpg
- massagem-orgastica.jpg
- massagem-sensitiva.jpg
- massagem-tantrica.jpg
- esguicho-feminino.jpg
- mapa-prazer.jpg
- trilhas-sonoras.jpg
- protocolo-libido.jpg
- certificado.jpg
- garantia-30-dias.png
- avatar-1.jpg, avatar-2.jpg, avatar-3.jpg

## 📊 Rastreamento

### Meta Pixel
O site rastreia automaticamente:
- PageView (entrada na página)
- ViewContent (clique em cards)
- InitiateCheckout (clique nos botões de compra)
- Scroll Depth (25%, 50%, 75%, 100%)

### Eventos Customizados
Eventos são rastreados via JavaScript e podem ser visualizados no Dashboard do Meta Business.

## 🔐 Segurança

- Modal de verificação de idade obrigatória
- Sem armazenamento de dados sensíveis
- Links de checkout seguros via Cakto
- HTTPS automático no Vercel

## 📱 Responsividade

O site é totalmente responsivo:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## ⚙️ Configuração da Variável de Ambiente

Nenhuma variável de ambiente é necessária. Tudo funciona out-of-the-box!

## 🐛 Troubleshooting

### Imagens não aparecem
- Certifique-se de que a pasta `images/` está criada
- Verifique os nomes dos arquivos (case-sensitive no Linux/Mac)

### Pixel não rastreia eventos
- Verifique se o Pixel ID está correto
- Certifique-se de que o JavaScript está habilitado
- Verifique no Meta Business Suite > Eventos

### Modal de idade fica preso
- Limpe o localStorage do navegador: `localStorage.clear()`
- Limpe o cache do navegador

## 📈 Otimizações SEO

- Meta tags configuradas
- Estrutura semântica HTML5
- Schema.org para produtos
- Sitemap automático no Vercel

Para melhorar ainda mais:
1. Adicione uma página de política de privacidade
2. Configure robots.txt
3. Envie sitemap ao Google Search Console

## 🤝 Suporte

Para dúvidas ou issues, entre em contato via:
- GitHub Issues
- Email: suporte@curso.com

## 📄 Licença

Todos os direitos reservados © 2024 Curso de Massagem Tântrica

## ✨ Próximos Passos

- [ ] Adicionar mais imagens/vídeos
- [ ] Implementar chat ao vivo
- [ ] Adicionar página de política de privacidade
- [ ] Criar página de termos de serviço
- [ ] Implementar sistema de email marketing
- [ ] Adicionar analytics avançado

---

**Versão:** 1.0.0  
**Última atualização:** 2024
