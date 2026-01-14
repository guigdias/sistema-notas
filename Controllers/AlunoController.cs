using Microsoft.AspNetCore.Mvc;
using SistemaNotas.Models;
using SistemaNotas.Services;
using System.Net.Mime;

namespace SistemaNotas.Controllers
{
    [ApiController] // Marca a classe como Controller de API, habilitando recursos como binding automático de JSON
    [Route("api/[controller]")] // Define a rota base: /api/aluno
    public class AlunoController : Controller
    {
        private readonly AlunoService _alunoService;

        public AlunoController()
        {
            _alunoService = new AlunoService(); // Inicializa o serviço que vai gerenciar os alunos
        }

        // GET /api/aluno/relatorio
        [HttpGet("relatorio")] // Define que esse método responde a GET na rota /relatorio
        public IActionResult Relatorio()
        {
            var resultado = _alunoService.GerarRelatorio();
            return Ok(resultado);
        }


        // POST /api/aluno/alunos
        [HttpPost("alunos")]
        public IActionResult InsertAluno([FromBody] Aluno aluno)
        {
            _alunoService.InsertAluno(aluno);
            return new JsonResult(new { mensagem = "Aluno cadastrado com sucesso!" })
            {
                ContentType = "application/json; charset=utf-8"
            };
        
        }
    }
}
