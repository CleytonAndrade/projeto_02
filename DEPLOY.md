# 🚀 Deploy no GitHub Pages

## Passo a Passo para Publicar o Projeto

### 1. **Preparar o Repositório**

1. **Crie um repositório no GitHub**:
   - Acesse [github.com](https://github.com) e faça login
   - Clique em "New repository"
   - Nome sugerido: `projeto-economia-sustentavel`
   - Marque como "Public"
   - **NÃO** inicialize com README (já temos um)

### 2. **Configurar URLs (IMPORTANTE)**

Antes de fazer o upload, substitua os placeholders no arquivo `index.html`:

```html
<!-- Trocar [SEU-USUARIO] pelo seu nome de usuário do GitHub -->
<!-- Trocar [NOME-DO-REPOSITORIO] pelo nome do seu repositório -->

Exemplo:
- Se seu usuário é "joaosilva" 
- E o repositório é "projeto-economia-sustentavel"

Substituir:
https://[SEU-USUARIO].github.io/[NOME-DO-REPOSITORIO]
Por:
https://joaosilva.github.io/projeto-economia-sustentavel
```

### 3. **Upload dos Arquivos**

**Opção A: Via Interface Web do GitHub**
1. No repositório criado, clique em "uploading an existing file"
2. Arraste todos os arquivos da pasta do projeto
3. Commit com a mensagem: "Primeiro deploy do projeto"

**Opção B: Via Git (Terminal)**
```bash
# Na pasta do projeto
git init
git add .
git commit -m "Primeiro deploy do projeto"
git branch -M main
git remote add origin https://github.com/[SEU-USUARIO]/[NOME-DO-REPOSITORIO].git
git push -u origin main
```

### 4. **Ativar GitHub Pages**

1. No repositório, vá em **Settings** (Configurações)
2. Role até a seção **Pages** no menu lateral
3. Em **Source**, selecione:
   - **Deploy from a branch**
   - **Branch**: `main` 
   - **Folder**: `/ (root)`
4. Clique em **Save**

### 5. **Acessar o Site**

- O GitHub levará alguns minutos para processar
- Seu site estará disponível em: `https://[SEU-USUARIO].github.io/[NOME-DO-REPOSITORIO]`
- Você receberá um email quando estiver pronto

## ✅ Checklist de Verificação

- [ ] Repositório criado no GitHub
- [ ] URLs atualizadas no `index.html`
- [ ] Todos os arquivos enviados
- [ ] GitHub Pages ativado
- [ ] Site acessível no navegador

## 🔧 Configurações Opcionais

### Domínio Personalizado
Se você tem um domínio próprio:
1. Crie um arquivo `CNAME` na raiz com seu domínio
2. Configure o DNS do seu domínio para apontar para o GitHub Pages

### Analytics (Opcional)
Para adicionar Google Analytics:
1. Crie uma conta no Google Analytics
2. Adicione o código de tracking no `<head>` do `index.html`

## 🐛 Resolução de Problemas

### Site não carrega imagens
- Verifique se os caminhos das imagens estão corretos
- Certifique-se de que as imagens foram enviadas para o repositório

### Erro 404
- Confirme que o arquivo `index.html` está na raiz do repositório
- Verifique se o GitHub Pages está ativado

### Mudanças não aparecem
- O GitHub Pages pode levar até 10 minutos para atualizar
- Limpe o cache do navegador (Ctrl+F5)

## 📞 Suporte

Se encontrar problemas:
1. Verifique a aba **Actions** no GitHub para ver logs de build
2. Consulte a [documentação oficial](https://docs.github.com/pages)
3. Verifique se todos os arquivos estão no repositório

---

**🎉 Parabéns!** Seu projeto de economia sustentável está agora disponível para o mundo! 🌱
