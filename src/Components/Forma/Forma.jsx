import "./forma.css";
import { useState } from "react";
import "./forma.css";

export default function Forma() {
  const [totalValue, setTotalValue] = useState("");
  const [ndsValue, setNdsValue] = useState("");
  const [totalVolume, setTotalVolume] = useState("");
  const [beforeVolume, setBeforeVolume] = useState("");
  const [nowVolume, setNowVolume] = useState("");
  const [cost, setCost] = useState("");

  const nds = (total) => {
    setNdsValue((total * 0.2).toFixed(2));
  };

  const total = (volume, cost) => {
    const totalCalc = (volume * cost).toFixed(2);
    setTotalValue(totalCalc);
    window.sessionStorage.setItem('total', totalCalc);
    nds(totalCalc);
    console.log(totalCalc);
  };

  const handleBeforeVolumeChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setBeforeVolume(value);
    const volumeDiff = (nowVolume - value).toFixed(2);
    setTotalVolume(volumeDiff);
    total(volumeDiff, cost);
  };

  const handleNowVolumeChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setNowVolume(value);
    const volumeDiff = (value - beforeVolume).toFixed(2);
    setTotalVolume(volumeDiff);
    total(volumeDiff, cost);
  };

  const handleCostChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setCost(value);
    total(totalVolume, value);
  };

  return (
    <div className="forma">
      <div className="counter">
        <label> Введіть попередні показники</label>
        <input
          className="volume"
          id="beforevolume"
          type="number"
          value={beforeVolume}
          onChange={handleBeforeVolumeChange}
        ></input>{" "}
        <label> Введіть показники</label>
        <input
          className="volume"
          id="nowvolume"
          type="number"
          value={nowVolume}
          onChange={handleNowVolumeChange}
        ></input>{" "}
        <label> Різниця</label>
        <input
          className="volume"
          id="totalvolume"
          type="number"
          value={totalVolume}
          readOnly
        ></input>{" "}
        <label>Введіть ціну (грн.)</label>
        <input
          className="cost"
          id="cost"
          type="number"
          value={cost}
          onChange={handleCostChange}
        ></input>{" "}
        <label>ПДВ (грн.)</label>
        <input className="nds" id="nds" type="number" value={ndsValue} readOnly></input>
        <label>До сплати (грн.)</label>
        <input
          className="total"
          id="total"
          type="number"
          value={totalValue}
          readOnly
        ></input>{" "}
        
      </div>
    </div>
  );
}
