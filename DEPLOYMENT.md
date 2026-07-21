# Guia de Deployment - GitHub e Vercel

Este guia passo-a-passo mostra como fazer upload do projeto para GitHub e deployar no Vercel.

## 📋 Pré-requisitos

- Conta no GitHub (criar em github.com)
- Conta no Vercel (criar em vercel.com)
- Git instalado no seu computador
- VSCode ou outro editor de texto

## 🔧 Preparação Inicial

### 1. Instalar Git

**Windows:**
- Baixe em: https://git-scm.com/download/win
- Execute o instalador e siga as instruções

**Mac:**
```bash
brew install git
```

**Linux:**
```bash
sudo apt-get install git
```

### 2. Configurar Git

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@example.com"
```

## 📤 Enviando para GitHub

### Passo 1: Criar repositório no GitHub

1. Acesse https://github.com/new
2. Preencha os dados:
   - **Repository name:** `curso-massagem-tantrica`
   - **Description:** "Landing page para venda do Curso de Massagem Tântrica"
   - **Public** ou **Private** (recomendado: Public)
   - NÃO adicione .gitignore (você já tem um)
3. Clique em "Create repository"

### Passo 2: Configurar repositório local

Na pasta do projeto, execute:

```bash
# Inicializar git (se não já tiver feito)
git init

# Adicionar o repositório remoto
git remote add origin https://github.com/SEU_USUARIO/curso-massagem-tantrica.git

# Renomear branch (se necessário)
git branch -M main
```

### Passo 3: Fazer primeiro commit e push

```bash
# Adicionar todos os arquivos
git add .

# Criar commit
git commit -m "Initial commit: Landing page curso massagem tântrica com pixel Meta"

# Fazer push para GitHub
git push -u origin main
```

### Verificação

1. Acesse seu repositório no GitHub
2. Verifique se todos os arquivos estão lá
3. Clique em "About" e adicione uma descrição

## 🚀 Deployando no Vercel

### Opção 1: Deploy via Interface Web (Recomendado)

#### Passo 1: Conectar GitHub ao Vercel

1. Acesse https://vercel.com
2. Clique em "Sign Up" ou "Log In"
3. Clique em "Continue with GitHub"
4. Autorize o Vercel a acessar seu GitHub

#### Passo 2: Importar projeto

1. Após conectar, clique em "New Project"
2. Procure por "curso-massagem-tantrica"
3. Clique em "Import"

#### Passo 3: Configurar projeto

1. **Project Name:** `curso-massagem-tantrica` (ou seu nome preferido)
2. **Framework:** Select "Other"
3. **Root Directory:** ./ (deixar como está)
4. Clique em "Deploy"

#### Passo 4: Aguardar deployment

- O Vercel vai fazer o deploy automaticamente
- Vai gerar um URL como: `curso-massagem-tantrica.vercel.app`
- Após concluir, você verá "Congratulations!"

### Opção 2: Deploy via CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Fazer login
vercel login

# Fazer deploy
vercel

# Para deployment em produção
vercel --prod
```

## 🎯 Após o Deployment

### 1. Testar o site

1. Acesse a URL fornecida pelo Vercel
2. Teste:
   - Modal de verificação de idade
   - Clique nos botões de compra
   - Scroll por toda a página
   - FAQ funcionando
   - Responsividade no mobile

### 2. Configurar domínio customizado

**Se tiver um domínio:**

1. Em Vercel, acesse "Settings" > "Domains"
2. Adicione seu domínio (ex: `curso.com`)
3. Siga as instruções para configurar DNS
4. Aguarde propagação (pode levar 24-48h)

**Configurar DNS (exemplo com Godaddy):**
```
CNAME: curso.com -> cname.vercel-dns.com
```

### 3. Rastrear eventos no Meta

1. Acesse Meta Business Suite
2. Vá em "Events Manager"
3. Crie uma nova fonte de eventos web
4. Copie o Pixel ID
5. Configure em `index.html` (se não estiver já)
6. Teste o pixel com Meta Pixel Helper

### 4. Configurar repositório automático

**Setup de Auto-deploy:**

- Toda vez que você faz `git push` para main, Vercel faz deploy automático
- Você pode ver o histórico em "Deployments"

## 📊 Monitorar Performance

### No Vercel Dashboard

1. Vá em "Analytics"
2. Visualize:
   - Requisições
   - Tempo de resposta
   - Erros

### Com Google PageSpeed Insights

1. Acesse https://pagespeed.web.dev/
2. Cole sua URL do Vercel
3. Verifique Performance, SEO, etc.

### Com Meta Business Suite

1. Vá em "Events Manager"
2. Veja eventos rastreados
3. Verifique conversões

## 🔄 Atualizando o Site

### Para fazer mudanças:

```bash
# 1. Fazer alterações nos arquivos locais
# (editar HTML, CSS, JS)

# 2. Adicionar mudanças ao git
git add .

# 3. Criar commit com mensagem descritiva
git commit -m "Descrição da mudança realizada"

# 4. Fazer push
git push

# 5. Vercel faz deploy automaticamente
# Aguarde 1-2 minutos e recarregue o site
```

## ⚠️ Troubleshooting

### Erro: "Failed to push"
```bash
# Verifique se tem acesso ao repositório
git remote -v

# Se precisar mudar a URL
git remote set-url origin https://github.com/SEU_USUARIO/seu-repo.git
```

### Erro: "Permission denied" no GitHub
```bash
# Configurar SSH (alternativa a HTTPS)
ssh-keygen -t ed25519 -C "seu.email@example.com"

# Copiar chave pública para GitHub
cat ~/.ssh/id_ed25519.pub

# Adicionar em GitHub Settings > SSH Keys
```

### Site não atualiza após push
1. Aguarde 2-3 minutos
2. Limpe cache (Ctrl+Shift+Del no Chrome)
3. Verifique em Vercel > Deployments
4. Se ainda não funcionar, redeploye manualmente:
   - Em Vercel > Deployments > clique em "Redeploy"

### Imagens não aparecem
1. Verifique se a pasta `images/` está versionada
2. Use `git add images/` se necessário
3. Faça um novo push
4. Limpe cache do navegador

### Pixel do Meta não rastreia
1. Teste com Meta Pixel Helper (extensão Chrome)
2. Verifique o Pixel ID
3. Verifique se o script está no `<head>`
4. Abra o console (F12) procure por erros

## 📱 Testar em Diferentes Dispositivos

### Teste Local

```bash
# Encontre seu IP local
ipconfig getifaddr en0  # Mac
ipconfig               # Windows

# Acesse no celular: http://SEU_IP:3000
```

### Teste Online

1. Compartilhe a URL do Vercel
2. Teste em:
   - iPhone (Safari)
   - Android (Chrome)
   - Tablet
   - Diferentes navegadores

## 🔐 Segurança

### Verificar

- [ ] HTTPS ativado (automático no Vercel)
- [ ] Modal de idade funcionando
- [ ] Sem dados sensíveis em localStorage
- [ ] Links de checkout seguros

## 📈 Próximos Passos

1. **Monitorar conversões** via Meta Ads Manager
2. **Adicionar email marketing** (Mailchimp, ConvertKit, etc)
3. **Setup de retargeting** com Facebook Pixel
4. **Criar anúncios** para dirigir tráfego
5. **Otimizar landing page** baseado em dados

## 🎓 Recursos Úteis

- [Documentação Vercel](https://vercel.com/docs)
- [Documentação Git](https://git-scm.com/doc)
- [Meta Pixel Guide](https://www.facebook.com/business/help/952192354843398)
- [SEO Best Practices](https://developers.google.com/search/docs)

## 📞 Suporte

Se tiver problemas:

1. Verifique os logs do Vercel (Deployments > Detalhes)
2. Consulte a documentação oficial
3. Abra uma issue no GitHub
4. Procure no Stack Overflow

---

**Parabéns!** Seu site está online! 🎉
