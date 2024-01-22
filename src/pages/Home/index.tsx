import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/barraLateral'
import ListaDeTarefas from '../../containers/listaDeTarefa'

const Home = () => (
  <>
    <BarraLateral />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)
export default Home
