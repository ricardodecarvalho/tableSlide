export default function PrepareColumns(obj) {
    return Object.values(obj).map((v, i) => (
      <td key={i}>
        {typeof v === "object" ? JSON.stringify(v, null, 4) : v.toString()}
      </td>
    ));
  }