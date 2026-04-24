# ATEGG - API de Gestão de Gatos e Treinamentos 🐱

O **ATEGG** é uma API robusta desenvolvida para o gerenciamento de felinos, focando no cadastro detalhado de gatos e na lógica avançada de agendamento de seus treinamentos. O sistema assegura regras de negócio importantes, como a exclusividade de horários de treinamento para cada gato.

## 🚀 Tecnologias e Ferramentas Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

* **Node.js** com **Express**
* **TypeScript** (para tipagem estática e maior segurança no desenvolvimento)
* **PostgreSQL** (Banco de dados relacional)
* **Prisma ORM** (Modelagem de dados e migrações)
* **Docker** (Containerização)
* **Render** (Plataforma de CI/CD)

## 🏗️ Arquitetura

O ATEGG adota uma arquitetura baseada em microsserviços, estruturada em um padrão de projeto claro e modular. O código é organizado separando as responsabilidades em camadas distintas:

* **Rotas (Routes):** Definição dos endpoints da API.
* **Controladores (Controllers):** Lógica de orquestração e tratamento das requisições HTTP.
* **Serviços/Regras de Negócio:** Tratamento de dados e validações (ex: choque de horários).

## ✨ Principais Funcionalidades

* **Cadastro de Gatos:** Registro completo de perfis felinos no sistema.
* **Agendamento de Treinamentos:** Marcação de sessões de treino para os gatos cadastrados.
* **Validação de Conflitos:** Lógica de negócio integrada que impede o agendamento de múltiplos treinamentos para o mesmo gato no mesmo horário.
* **Persistência Segura:** Gestão e persistência de dados consistentes via PostgreSQL e Prisma.

## ⚙️ Instalação e Configuração Local

### Pré-requisitos
Certifique-se de ter instalado:
* [Node.js](https://nodejs.org/)
* [PostgreSQL](https://www.postgresql.org/)
* [Docker](https://www.docker.com/)

### Passos para rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone <url-do-seu-repositorio>
   cd ategg
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configuração de Variáveis de Ambiente:**
   Crie um arquivo `.env` na raiz do projeto:
   ```env
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/ategg_db?schema=public"
   PORT=3000
   ```

4. **Configuração do Prisma:**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. **Iniciando o Servidor:**
   ```bash
   npm run dev
   ```

## ☁️ Deploy e Status do Projeto

O projeto foi configurado com um fluxo de deploy contínuo através da plataforma **Render**, utilizando **Docker** e migrações automatizadas do Prisma. 

⚠️ **Aviso de Disponibilidade:** Devido ao tempo de expiração do banco de dados PostgreSQL na camada gratuita do Render (30 dias), o link de produção pode se encontrar temporariamente indisponível. 

Para testar a aplicação e suas rotas, recomenda-se fortemente seguir as instruções de **Instalação e Configuração Local** detalhadas acima.

## 👨‍💻 Autor

Desenvolvido por **Caio Lemos Dantas**.
