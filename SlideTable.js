import PrepareTable from './PrepareTable'

export default function TableSlide ({ payload, isFecthing }) {
  return (
    <div>
      {isFecthing && <p>Carregando...</p>}
      {!isFecthing && payload.length > 0 && PrepareTable(payload)}
    </div>
  )
}
