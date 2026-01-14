# Sistema de Notas – Teste Estágio DTI Digital

Sistema web para cadastro de alunos, cálculo de médias, relatórios de desempenho e controle de frequência.  
Desenvolvido com **ASP.NET Core Web API** no backend e **React** no frontend, com integração para execução simplificada.

## Autor
**Guilherme Guimarães Dias Coelho**

## Tecnologias Utilizadas

### Backend
- .NET 10  
- ASP.NET Core Web API  
- C# (Controllers, Services e DTOs)  
- Swagger / OpenAPI para documentação  
- CORS configurado para consumo do frontend  

### Frontend
- React 18  
- JSX + Hooks (`useState`, `useEffect`)  
- Fetch API para consumo dos endpoints  
- Build integrado ao backend via `wwwroot`

### Outras
- Visual Studio Community 2022  
- IIS Express  
- Navegador com suporte a HTTPS/HTTP local  

# Estrutura do projeto

SistemaNotas:
 - Controllers:
	- AlunoController.cs
- DTOS:
	- AlunoDTO.cs
	- ResultadoDTO.cs
- Frontend:
	- src:
      - Components:
		- AlunoForm.jsx
		- Relatorio.jsx
	- Services:
		- api.js
    - App.jsx
- Models:
	- Aluno.cs
- wwwroot
     - index.html
     - assets/ (build do React)
- README:
	- README.md
- Services:
	- AlunoService.cs
- Program.cs


> O frontend React foi **buildado e integrado ao backend**, sendo servido diretamente pelo ASP.NET Core.

## Como Executar o Projeto

## Execução Simplificada

1. Abra o projeto no **Visual Studio**.
2. Selecione **IIS Express**.
3. Pressione **F5** para executar.
4. A aplicação será aberta automaticamente no navegador.

## Verificação da API (Opcional)

- Swagger disponível em:  
  `http://localhost:7249/swagger`

### Endpoints:
- `POST /api/aluno/alunos`
- `GET /api/aluno/relatorio`

## Como Testar

1. Abra a aplicação no navegador.
2. Cadastre alunos informando:
   - Nome
   - 5 notas
   - Frequência (%)
3. O relatório será atualizado automaticamente exibindo:
   - Médias por aluno
   - Média por disciplina
   - Alunos acima da média geral
   - Alunos com frequência abaixo de 75%

## Funcionalidades

### Cadastro de Alunos
- Nome
- Cinco notas (0 a 10)
- Frequência (0% a 100%)

### Relatórios Automáticos
- Média individual do aluno
- Média da turma por disciplina
- Alunos acima da média geral
- Alunos com frequência inferior a 75%
