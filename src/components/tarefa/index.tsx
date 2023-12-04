import * as S from './styles'

const Tarefa = () => (
  <S.Card>
    <S.Titulo>nome tarefa</S.Titulo>
    <S.Tag>Importante</S.Tag>
    <S.Tag>pendente</S.Tag>
    <S.Descricao />
    <S.BarraAcoes>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.BarraAcoes>
  </S.Card>
)

export default Tarefa
