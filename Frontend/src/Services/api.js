// URL base da API backend
const API_URL = '/api/aluno'

// POST - cadastrar aluno
export async function cadastrarAluno(aluno) {
    const response = await fetch(`${API_URL}/alunos`, { // Chama /api/aluno/alunos
        method: 'POST', // Método POST
        headers: {
            'Content-Type': 'application/json' // Tipo de conteúdo enviado
        },
        body: JSON.stringify(aluno) // Converte o objeto aluno em JSON
    });

    // Se a resposta não for OK, lança um erro
    if (!response.ok) {
        throw new Error('Erro ao cadastrar aluno');
    }

    // Retorna o corpo da resposta como JSON
    return response.json();
}


// GET - obter relatório
export async function obterRelatorio() {
    const response = await fetch(`${API_URL}/relatorio`); // Chama /api/aluno/relatorio

    if (!response.ok) {
        throw new Error('Erro ao obter relatório');
    }

    return response.json(); // Retorna o relatório em JSON
}
