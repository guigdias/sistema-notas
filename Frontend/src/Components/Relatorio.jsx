function Relatorio({ dados }) {
    if (!dados) return null

    return (
        <div>
            <h2>Relatório</h2>

            <h3>Alunos</h3>
            <ul>
                {dados.alunos.map((a, i) => (
                    <li key={i}>
                        {a.nome} – Média: <strong>{a.media.toFixed(2)}</strong> – Frequência: {a.frequencia}%
                    </li>
                ))}
            </ul>

            <h3>Média da Turma por Disciplina</h3>
            <ul>
                {dados.medias.map((m, i) => (
                    <li key={i}>Disciplina {i + 1}: {m.toFixed(2)}</li>
                ))}
            </ul>

            <h3>Alunos acima da média</h3>
            <ul>
                {dados.alunosAcimaDaMedia.map((a, i) => (
                    <li key={i} className="destaque">{a}</li>
                ))}
            </ul>

            <h3>Frequência abaixo de 75%</h3>
            <ul>
                {dados.alunosComFrequenciaBaixa.map((a, i) => (
                    <li key={i} className="alerta">{a}</li>
                ))}
            </ul>
        </div>
    )
}

export default Relatorio
