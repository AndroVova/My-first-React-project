import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart() {
  return (
    <div className="chart">
      {props.dataPoints.map((point) => (
        <ChartBar
          key={point.label}
          value={point.value}
          maxValue={null}
          label={point.label}
        />
      ))}
    </div>
  );
}
export default Chart;
