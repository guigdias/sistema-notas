using SistemaNotas.Models;   // Importa o modelo Aluno
using SistemaNotas.DTOS;     // Importa o DTO ResultadosDTO

namespace SistemaNotas.Services
{
    public class AlunoService
    {
        // Lista de alunos e contador de ID
        private static List<Aluno> alunos = new(); // Lista estática para armazenar os alunos
        private static int contID = 1; // Contador para gerar IDs únicos

        // Método para cadastrar aluno
        public void InsertAluno(Aluno aluno)
        {
            aluno.Id = contID++;  // Atribui um ID único e incrementa o contador
            alunos.Add(aluno);    // Adiciona o aluno à lista
        }

        // Método para gerar relatório
        public ResultadosDTO GerarRelatorio()
        {
            // Cria uma lista de strings para cada aluno
            var ListaAlunos = alunos.Select(a => new AlunosDTO
            {
                Nome = a.Nome,
                Media = a.Notas.Any() ? a.Notas.Average() : 0,
                Frequencia = a.Frequencia
            }).ToList();

            if (alunos.Count == 0) // Nenhum aluno cadastrado
            {
                return new ResultadosDTO
                {
                    Alunos = new List<AlunosDTO>(),
                    Medias = new List<double>(),
                    AlunosAcimaDaMedia = new List<string>(),
                    AlunosComFrequenciaBaixa = new List<string>()
                };
            }

            // Calcula a média de cada disciplina (índices 0 a 4)
            // Cada posição da lista "medias" corresponde a uma disciplina
            var medias = Enumerable.Range(0, 5)
            .Select(i => alunos.Any() ? Math.Round(alunos.Average(a => a.Notas[i]), 2) : 0)
            .ToList();

            // Calcula a média geral de todas as notas de todos os alunos
            var mediaGeral = alunos.Any() ? alunos.Average(a => a.Notas.Average()) : 0;

            // Lista com nomes de alunos que estão acima da média geral
            var acimaDaMedia = alunos
            .Where(a => a.Notas.Average() > mediaGeral)
            .Select(a => a.Nome)
            .ToList();

            // Lista com nomes de alunos que têm frequência abaixo de 75%
            var frequenciaBaixa = alunos
            .Where(a => a.Frequencia < 75)
            .Select(a => a.Nome)
            .ToList();

            // Retorna todos os resultados encapsulados em um DTO
            return new ResultadosDTO
            {
                Alunos = ListaAlunos, // Lista de alunos com média e frequência
                Medias = medias,      // Médias por disciplina
                AlunosAcimaDaMedia = acimaDaMedia, // Alunos acima da média
                AlunosComFrequenciaBaixa = frequenciaBaixa // Alunos com frequência baixa
            };
        }
    }
}
