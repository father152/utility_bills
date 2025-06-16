import "./forma.css";

export default function Forma() {
  const nds = () => {
    const totalValue = parseFloat(document.getElementById("total").value) || 0;
    const ndsInput = document.getElementById("nds");
    ndsInput.value = (totalValue * 0.2).toFixed(2);
  };

  const total = () => {
    const volume =
      parseFloat(document.getElementById("totalvolume").value) || 0;
    const cost = parseFloat(document.getElementById("cost").value) || 0;
    const totalInput = document.getElementById("total");
    totalInput.value = (volume * cost).toFixed(2);
    nds(); // Update NDS whenever total is recalculated
  };
  const totalpokasnuku = () => {
    const volumebefore =
      parseFloat(document.getElementById("beforevolume").value) || 0;
    const volumenow =
      parseFloat(document.getElementById("nowvolume").value) || 0;
    const pokasnukuInput = document.getElementById("totalvolume");
    pokasnukuInput.value = (volumenow - volumebefore).toFixed(2);
    total();
  };

  return (
    <div className="forma">
      <div className="counter">
        <label> Введіть попередні показники</label>
        <input
          className="volume"
          id="beforevolume"
          type="number"
          onChange={totalpokasnuku}
        ></input>{" "}
        <label> Введіть показники</label>
        <input
          className="volume"
          id="nowvolume"
          type="number"
          onChange={totalpokasnuku}
        ></input>{" "}
        <label> Різниця</label>
        <input
          className="volume"
          id="totalvolume"
          type="number"
          readOnly
        ></input>{" "}
        <label>Введіть ціну (грн.)</label>
        <input
          className="cost"
          id="cost"
          type="number"
          onChange={total}
        ></input>{" "}
        <label>ПДВ (грн.)</label>
        <input className="nds" id="nds" type="number" readOnly></input>
        <label>До сплати (грн.)</label>
        <input
          className="total"
          id="total"
          type="number"
          onChange={total}
        ></input>{" "}
      </div>
    </div>
  );
}
