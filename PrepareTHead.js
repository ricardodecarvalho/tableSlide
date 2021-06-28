export default function PrepareTHead(payload) {
  return (
    <thead>
      <tr>
        {payload.map((key, i) => (
          <th key={i}>
            {key}
          </th>
        ))}
      </tr>
    </thead>
  );
}
