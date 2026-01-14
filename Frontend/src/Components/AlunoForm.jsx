import { useState } from 'react'
import { cadastrarAluno } from '../Services/api'

function AlunoForm({ onCadastro }) {
    // Estados do formulário
    const [nome, setNome] = useState('')
    const [notas, setNotas] = useState([0, 0, 0, 0, 0])
    const [frequencia, setFrequencia] = useState('')

    // Atualiza uma nota específica
    function handleNotaChange(index, value) {
        const novasNotas = [...notas]
        novasNotas[index] = Number(value)
        setNotas(novasNotas)
    }

    // Função chamada ao enviar o formulário
    async function handleSubmit(e) {
        e.preventDefault() // Evita reload da página

        const aluno = {
            nome,
            notas,
            frequencia: Number(frequencia),
        }

        try {
            const result = await cadastrarAluno(aluno);
            console.log(result.mensagem);
            onCadastro(); // Atualiza relatório
        } catch (error) {
            console.error(error);
        }

        // Reset do formulário
        setNome('');
        setNotas([0, 0, 0, 0, 0]);
        setFrequencia('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Cadastrar Aluno</h2>

            <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} required />

            {notas.map((nota, i) => (
                <input
                    key={i}
                    type="number"
                    placeholder={`Nota ${i + 1}`}
                    min="0" //Validação que a nota mínima não pode ser menor que 0
                    max="10" //Validação que a nota máxima não pode ser maior que 10
                    value={nota}
                    onChange={e => handleNotaChange(i, e.target.value)}
                    required
                />
            ))}

            <input type="number" placeholder="Frequência (%)"
                min="0" //Validação que a frequência mínima não pode ser menor que 0%
                max="100" //Validação que a frequência máxima não pode ser maior que 100%
                value={frequencia} onChange={e => setFrequencia(e.target.value)} required />

            <button type="submit">Salvar</button>
        </form>
    )
}

export default AlunoForm
