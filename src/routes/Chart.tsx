import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
function Chart() {
  const { coinId } = useParams();
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => price.close) as number[],
            },
          ]}
          options={{
            grid: {
              show: false,
            },
            chart: {
              toolbar: {
                show: false,
              },
              height: 300,
              width: 500,
              background: "transparent",
            },
            theme: {
              mode: "dark",
            },
            stroke: {
              curve: "smooth",
              width: 3,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              type: "datetime",
              categories: data?.map((price) => price.time_open),
              labels: { show: false },
              axisTicks: { show: false },
              axisBorder: { show: false },
            },
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["#0984e3"],
                stops: [0, 100],
              },
            },
            colors: ["#00b894"],
            tooltip: {
              y: {
                formatter: (value) => `$ ${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
