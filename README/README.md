# Sistema de Notas - Teste Estágio DTI digital

Sistema web para cadastro de alunos, cálculo de médias, relatórios de desempenho e frequência. Desenvolvido com ASP.NET Core no backend e React no frontend.

# Tecnologias utilizadas

- Backend:
  - .NET 10 / ASP.NET Core Web API
  - C# com Controllers, Services e DTOs
  - Swagger / OpenAPI para documentação
  - CORS configurado para permitir requests do frontend

- Frontend:
  - React 18 (create-react-app)
  - JSX + Hooks (`useState`, `useEffect`)
  - Fetch API para consumir endpoints do backend
- Outras:
  - Visual Studio Community 2022
  - Navegador com suporte a HTTPS local (localhost)

# Estrutura do projeto

SistemaNotas:
 - Controllers:
	- AlunoController.cs
- DTOS:
	- AlunoDTO.cs
	- ResultadoDTO.cs
-Frontend:
	-src:
	   -Components:
			- AlunoForm.jsx
	        - Relatorio.jsx
		-Services:
	        - api.js
        App.jsx
-Models:
	- Aluno.cs
-README:
	- README.md
-Services:
	- AlunoService.cs
-Program.cs

# Passo a passo para rodar o projeto

# 1- Backend:

1- Abra o projeto no Visual Studio ou VS Code.
2- Certifique-se de que a porta configurada no `launchSettings.json` ou no log do console é **https://localhost:7249**.
3- Execute o backend (`F5` no Visual Studio ou `dotnet run` no terminal).
4- Confirme que o Swagger está acessível em `https://localhost:7249/swagger` e que as rotas:
   - `POST /api/aluno/alunos`
   - `GET /api/aluno/relatorio`
   estão funcionando.

# 2- Frontend:

1- Abra o terminal na pasta do frontend (React).
2- Instale as dependências:
- bash
- npm install

# 3- Execute o FrontEnd:

- Certifique-se de estar na pasta Frontend, digite no terminal:
	- npm start ou npm run dev

# 4- O React será aberto em http://localhost:3000 (padrão do create-react-app).

# 5- Confira se o api.js aponta para a URL correta do backend:

const API_URL = 'https://localhost:7249/api/aluno';

# 6- Teste o projeto:

- Cadastre um aluno no formulário, para que o relatório atualize.
- Cadastre pelo menos 2 alunos, para que os cálculos de acima da média sejam expostos.

# Funcionalidades:

- Cadastro de alunos com:
	- Nome
	- 5 notas
	- Frequência (%)

- Cálculo automático:
	- Média de cada aluno
	- Média por disciplina
	- Alunos acima da média geral
	- Alunos com frequência abaixo de 75%

- Relatório exibido no frontend em tempo real.