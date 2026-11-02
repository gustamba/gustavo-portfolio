# Gustavo Miranda — Portfólio Angular

Portfólio/currículo em Angular, com visual escuro inspirado em terminal/ASCII, animações de entrada, layout responsivo e efeito ASCII do `ascii-magic`.

## Requisitos

- Node.js **22.22.3+** ou uma versão compatível com Angular 21 (Node 24 LTS também é compatível).
- npm.
- VS Code (opcional).

> O projeto usa Angular 21.2.x. Evite misturar um `angular-cli` antigo instalado globalmente com o CLI atual. O pacote correto é `@angular/cli`.

## Instalar e executar

Na pasta do projeto:

```bash
npm install
npm start
```

Abra `http://localhost:4200`.

## Build de produção

```bash
npm run build
```

Os arquivos de produção serão gerados em `dist/gustavo-portfolio/browser/`.

Para testar o build localmente, você pode usar um servidor estático, por exemplo:

```bash
npx http-server dist/gustavo-portfolio/browser -p 8080
```

## Instalação do Node e Angular CLI

O Angular CLI local do projeto já é instalado pelo `npm install`. Se quiser o comando `ng` global:

```bash
npm install -g @angular/cli
```

Confira:

```bash
node -v
npm -v
ng version
```

No Windows, se o PowerShell bloquear `ng.ps1`, abra o PowerShell como usuário e execute:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

## Personalização

1. **Foto:** coloque sua foto em `src/assets/gustavo.jpg`. O espaço reservado será substituído automaticamente.
2. **Conteúdo:** edite `src/app/app.component.ts`.
3. **Cores e animações:** edite `src/styles.css`.
4. **Efeito ASCII:** o script é carregado em `src/index.html` e o elemento `<ascii-art>` fica no fundo do hero. É necessário acesso à internet para carregar o efeito externo.
5. **Links:** revise LinkedIn, GitHub, telefone e e-mail antes de publicar.

## Observações sobre o conteúdo

- A timeline e a formação foram preenchidas com os dados profissionais já compartilhados.
- Os cards de projetos são apresentados como estudos/conceitos, não como entregas comerciais concluídas. Atualize os links e status conforme seus repositórios evoluírem.
- As ferramentas listadas representam tecnologias do repertório profissional e de estudos; ajuste os níveis de domínio conforme desejar.
- Não foi incluída uma fotografia real porque nenhuma foto foi anexada.

## Publicação

Depois de `npm run build`, publique o conteúdo de `dist/gustavo-portfolio/browser/` em qualquer hospedagem estática (Nginx, Cloudflare Pages, Netlify, Vercel ou GitHub Pages). Configure fallback para `index.html` se adicionar rotas Angular no futuro.

---

# Guia de Publicação: Angular + Docker + Nginx + Cloudflare Tunnel

Este manual descreve o processo de deploy de uma aplicação Angular utilizando **Docker Desktop** (com Nginx customizado para suporte a Single Page Applications) e exposição para a internet através de um **Cloudflare Tunnel já existente e rodando como serviço no host**.

---

## 📋 Arquitetura do Fluxo
`Internet` ➡️ `Cloudflare Tunnel (Serviço Host)` ➡️ `Porta Local (Ex: 8081)` ➡️ `Container Nginx (Porta 80)`

---

## 🛠️ Passo 1: Configuração do Roteamento do Nginx (`nginx.conf`)
Como o Angular gerencia as rotas no lado do cliente (SPA), precisamos configurar o Nginx para que ele não retorne erro **404** ao atualizar páginas internas (F5).

Crie um arquivo chamado **`nginx.conf`** na raiz do projeto:

```nginx
server {
    listen 80;
    server_name localhost;

    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
        # Redireciona rotas inexistentes para o index.html (essencial para Angular)
        try_files uri uri/ /index.html;
    }

    # Otimização de Cache para arquivos estáticos
    location ~* \.(?:ico|css|js|gif|jpe?g|png|woff2?|eot|ttf|svg)\$ {
        root /usr/share/nginx/html;
        expires 6M;
        access_log off;
        add_header Cache-Control "public";
    }

    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        root /usr/share/nginx/html;
    }
}
```

---

## 🐳 Passo 2: Criação do Dockerfile (`Dockerfile`)
O Dockerfile realiza o build de produção do Angular e transfere apenas os arquivos finais para a imagem leve do Nginx.

Crie um arquivo chamado **`Dockerfile`** na raiz do projeto:

```dockerfile
# Estágio 1: Build da aplicação Angular
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration=production

# Estágio 2: Servidor Nginx para entrega dos arquivos
FROM nginx:alpine

# Remove a configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia a nossa configuração customizada
COPY nginx.conf /etc/nginx/conf.d/

# Copia os arquivos compilados do Angular
# ATENÇÃO: Substitua 'nome-do-seu-app' pelo nome do seu projeto no angular.json
COPY --from=build /app/dist/nome-do-seu-app/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 📦 Passo 3: Criação do Docker Compose (`docker-compose.yml`)
Como o túnel roda direto no sistema operacional da sua máquina, precisamos expor uma porta do container para o host (por exemplo, `8081`).

Crie um arquivo chamado **`docker-compose.yml`** na raiz do projeto:

```yaml
version: '3.8'

services:
  web-app:
    build: .
    container_name: angular-nginx-app
    restart: always
    ports:
      - "8081:80" # Expõe a porta 80 do container na porta 8081 do servidor local
```

---

## 🌐 Passo 4: Configuração no Cloudflare Tunnel
Com a aplicação rodando localmente na porta `8081`, configure o túnel existente para encaminhar o tráfego externo para ela.

### Opção A: Pelo Painel Web (Cloudflare Zero Trust)
1. Acesse o painel **Cloudflare Zero Trust** (`://cloudflare.com`).
2. Vá em **Networks** > **Tunnels** e edite o seu túnel ativo.
3. Clique na aba **Public Hostname** e depois em **Add a public hostname**.
4. Preencha os campos:
   * **Subdomain / Domain:** O endereço web de acesso (ex: `://meudominio.com`).
   * **Type:** `HTTP`
   * **URL:** `localhost:8081` (ou `127.0.0.1:8081`)
5. Salve as alterações.

### Opção B: Por arquivo local (`config.yml` no Servidor)
Se o seu túnel é gerenciado via arquivo de configuração no servidor, adicione a rota abaixo dentro do bloco `ingress`:

```yaml
ingress:
  - hostname: ://meudominio.com
    service: http://localhost:8081
  - service: http_status:404
```
*Nota: Se alterar o arquivo manualmente, reinicie o serviço do cloudflared no host.*

---

## 🚀 Passo 5: Inicialização e Deploy
Para compilar o projeto e iniciar o container em modo de segundo plano (detached), execute o comando na raiz do projeto:

```bash
docker-compose up -d --build
```

### Principais comandos de manutenção:
* Ver logs da aplicação: `docker logs angular-nginx-app`
* Derrubar a aplicação: `docker-compose down`
* Atualizar o site após mudanças no código: `docker-compose up -d --build`