# ATEGG - API de Gestão de Gatos e Treinamentos 🐱

O ATEGG é uma API robusta desenvolvida para o gerenciamento de felinos, focando no cadastro detalhado de gatos e na lógica avançada de agendamento de seus treinamentos. O sistema assegura regras de negócio importantes, como a exclusividade de horários de treinamento para cada gato.

## 🚀 Tecnologias e Ferramentas Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

* Node.js com Express
* TypeScript (para tipagem estática e maior segurança no desenvolvimento)
* PostgreSQL (Banco de dados relacional)
* Prisma ORM (Modelagem de dados e migrações)
* Docker (Containerização)
* Render (Plataforma de CI/CD)

## 🏗️ Arquitetura

O ATEGG adota uma arquitetura baseada em microsserviços, estruturada em um padrão de projeto claro e modular. O código é organizado separando as responsabilidades em camadas distintas:

* Rotas (Routes): Definição dos endpoints da API.
* Controladores (Controllers): Lógica de orquestração e tratamento das requisições HTTP.
* Serviços/Regras de Negócio: Tratamento de dados e validações (ex: choque de horários).

## ✨ Principais Funcionalidades

* Cadastro de Gatos: Registro completo de perfis felinos no sistema.
* Agendamento de Treinamentos: Marcação de sessões de treino para os gatos cadastrados.
* Validação de Conflitos: Lógica de negócio integrada que impede o agendamento de múltiplos treinamentos para o mesmo gato no mesmo horário.
* Persistência Segura: Gestão e persistência de dados consistentes via PostgreSQL e Prisma.

## ⚙️ Instalação e Configuração Local

### Pré-requisitos
Certifique-se de ter instalado:
* Node.js
* PostgreSQL
* Docker

### Passos para rodar o projeto

1. Clone o repositório:
   git clone <url-do-seu-repositorio>
   cd ategg

2. Instale as dependências:
   npm install

3. Configuração de Variáveis de Ambiente:
   Crie um arquivo .env na raiz do projeto:
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/ategg_db?schema=public"
   PORT=3000

4. Configuração do Prisma:
   npx prisma generate
   npx prisma migrate dev --name init

5. Iniciando o Servidor:
   npm run dev

## ☁️ Deploy

O projeto está configurado para deploy contínuo através da plataforma Render. O fluxo utiliza Docker e executa automaticamente as migrações do Prisma (npx prisma migrate deploy) no ambiente de produção para garantir a sincronia do banco de dados.

## 👨‍💻 Autor

Desenvolvido por Caio Lemos Dantas.
