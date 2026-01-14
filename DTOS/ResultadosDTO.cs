namespace SistemaNotas.DTOS
{
    // Classe para transferência de dados entre camadas
    public class ResultadosDTO
    {
        public List<AlunosDTO> Alunos { get; set; } = new();
        public List<double> Medias { get; set; } = new();
        public List<string> AlunosAcimaDaMedia { get; set; } = new();
        public List<string> AlunosComFrequenciaBaixa { get;set;  } = new();
    }
}
