import Tarefa from '../../components/tarefa'
import { Container } from './styles'

const ListaDeTarefas = () => (
  <Container>
    <p>2 Tarefasw marcadas como: &quot;categorias&quot; e &quot;termos&quot;</p>
    <ul>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
    </ul>
  </Container>
)

export default ListaDeTarefas
