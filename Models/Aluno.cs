namespace SistemaNotas.Models
{
    // Classe principal, com os atributos nececcários
    public class Aluno
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public List<double> Notas { get; set; }
        public double Frequencia { get; set; }
    }
}
