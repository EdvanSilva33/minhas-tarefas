import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/barraLateral'
import ListaDeTarefas from '../../containers/listaDeTarefa'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros={true} />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)
export default Home
