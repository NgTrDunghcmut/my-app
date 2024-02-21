import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  DataLabel,
  LineSeries,
  ILoadedEventArgs,
} from "@syncfusion/ej2-react-charts";
import { getElement } from "@syncfusion/ej2-charts";
function Chart() {
  var chart: any;
  var intervalId: any;
  var series1: any = [];
  var value = 10;
  var setTimeoutValue = 100;

  for (var i = 0; i < 50; i++) {
    if (Math.random() > 0.5) {
      value += Math.random() * 2.0;
    }
    series1[i] = { x: i, y: value };
  }
  chart = chart;

  function loaded(args: any) {
    intervalId = setTimeout(() => {
      if (chart === null) {
        clearInterval(intervalId);
      } else {
        if (Math.random() > 0.5) {
          value += Math.random() * 2.0;
        }
        i++;
        series1.push({ x: i, y: value });
        series1.shift();
        args.chart.series[0].dataSource = series1;
      }
    }, setTimeoutValue);
  }

  return (
    <ChartComponent id="charts" loaded={loaded.bind(this)}>
      <Inject services={[LineSeries]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={series1}
          xName="x"
          yName="y"
          type="Line"
        ></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}
export default Chart;
ReactDOM.render(<Chart />, document.getElementById("charts"));
// const Chart = ({ data, type }: { data: any; type?: string }) => {
//   console.log("data", data);

//   return <>chart</>;
// };

// export default Chart;
