import { useEffect, useState } from 'react'
import AlunoForm from './Components/AlunoForm'
import Relatorio from './Components/Relatorio'
import { obterRelatorio } from './Services/api'
import './styles.css'

function App() {
    const [relatorio, setRelatorio] = useState({
        alunos: [],
        medias: [],
        alunosAcimaDaMedia: [],
        alunosComFrequenciaBaixa: []
    })

    async function carregarRelatorio() {
        const data = await obterRelatorio()
        setRelatorio(data)
    }

    useEffect(() => {
        carregarRelatorio()
    }, [])

    return (
        <div className="app-container">
            <h1>Sistema de Notas</h1>

            <div className="card">
                <AlunoForm onCadastro={carregarRelatorio} />
            </div>

            <div className="card">
                <Relatorio dados={relatorio} />
            </div>
        </div>
    )
}

export default App
