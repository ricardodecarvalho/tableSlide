import { useEffect, useState } from "react";
import PrepareTBody from "./PrepareTbody";
import PrepareTHead from "./PrepareTHead";

export default function PrepareTable(payload) {
  const initialState = {
    freeze: [0, 1],
    show: [2, 3, 4, 5, 6, 7],
  };

  const [state, setState] = useState(initialState);
  const [columns, setColumns] = useState({
    all: [],
    visible: [],
    shown: [],
    rows: [],
  });

  function prepareData() {
    const all = Object.keys(payload[0]).map((key) => key);
    const visible = all.filter((el, index) => state.show.includes(index));

    let shown = [];
    for (const i of state.freeze) {
      shown.push(all[i]);
    }

    shown = shown.concat(visible);

    const rows = payload.slice(0, 10).map((obj, i) => shown.map((v) => obj[v]));

    setColumns({
      all: all,
      visible: visible,
      shown: shown,
      rows: rows,
    });
  }

  function slideColumns(way) {
    const stopCondition =
      (way === "previous" &&
        state.show[0] === state.freeze[state.freeze.length - 1] + 1) ||
      (way === "next" &&
        state.show[state.show.length - 1] === columns.all.length - 1);

    if (stopCondition) return;

    const show = state.show.map((v) => (way === "next" ? v + 1 : v - 1));

    setState({ ...state, show: show });
  }

  useEffect(() => {
    prepareData();
  }, [state]);

  return (
    <div>
      <button onClick={() => slideColumns("previous")}>Anterior</button>
      <button onClick={() => slideColumns("next")}>Próximo</button>

      <table>
        {columns.shown.length > 0 && PrepareTHead(columns.shown)}
        {columns.rows.length > 0 && PrepareTBody(columns.rows)}
      </table>

      {/*
      <table>
        <thead>
          <tr>
            {tHeadVisible.map((key, i) => (
              <th key={i}>{key}</th>
            ))}
          </tr>
        </thead>
      </table>
      */}
    </div>
  );
}
