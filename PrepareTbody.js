import PrepareColumns from "./PrepareColumns";

export default function PrepareTBody(payload) {
    return (
      <tbody>
        {payload.map((obj, i) => (
          <tr key={i}>{PrepareColumns(obj)}</tr>
        ))}
      </tbody>
    );
  }