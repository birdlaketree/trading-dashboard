import { useState, useEffect } from "react";
import {
  VictoryLine, VictoryChart, VictoryAxis, VictoryVoronoiContainer, VictoryTooltip
} from "victory";
import axios from "axios";
import './Graph.scss';

const Graph = ({ticker, interval, viewType, highlight=null}) => {
  const [data, setData] = useState(null);
  const [mcData, setMcData] = useState(null);
  const [csData, setCsData] = useState(null);
  const [info, setInfo] = useState(null);
  const [activeInterval, setActiveInterval] = useState(null)

  const paddingVertical = 20;
  const paddingHorizontal = 6;
  const paddingBottom = 6;
  const width = 428;
  const height = 100;

  useEffect(() => {
    if (interval !== activeInterval) {
      loadNewData();
      setActiveInterval(interval)
    }
  }, [interval]);

  const loadNewData = () => {
    const baseURL = `https://api.coingecko.com/api/v3/coins/${ticker}/market_chart?vs_currency=usd&days=${interval}`;
    // const baseURL = `https://api.coingecko.com/api/v3/coins/${ticker}/market_chart?vs_currency=usd&interval=daily&days=${interval}`;
    axios.get(baseURL).then((response) => {
      console.log('response', response);

      let d = response.data.prices.map((item) => ({
        x: item[0],
        y: item[1],
      }));
      setData(d);

      let mcd = response.data.market_caps.map((item) => ({
        x: item[0],
        y: item[1],
      }));
      setMcData(mcd);

      let csd = [];

      for (let index = 0; index < d.length; index++) {
        const elementD = d[index];
        const elementMcd = mcd[index];
        const elementCsd = elementMcd.y / elementD.y;
        csd.push({
          x: d[index].x,
          y: elementCsd,
        })
      }
      setCsData(csd);

      let highestPrice = 0;
      let lowestPrice = Infinity;

      response.data.prices.forEach(element => {
        if (element[1] > highestPrice) {
          highestPrice = element[1];
        }
        if (element[1] < lowestPrice) {
          lowestPrice = element[1];
        }
      });

      let i = {
        first: formatPrice(response.data.prices[0][1]),
        current: formatPrice(response.data.prices[response.data.prices.length - 1][1]),
        highestPrice: formatPrice(highestPrice),
        lowestPrice: formatPrice(lowestPrice),
        currentMC: formatPriceLarge(response.data.market_caps[response.data.market_caps.length - 1][1]),
        currentVolume: formatPriceLarge(response.data.total_volumes[response.data.total_volumes.length - 1][1]),
      }
      setInfo(i)
    });
  }

  const formatPrice = (price) => {
    // console.log('price',parseFloat(price), ((parseFloat(price) < 1) ? 4 : 2));
    const formatConfig = new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 4
    });
  
    return formatConfig.format(price);
  };

  const formatPriceLarge = (price) => {
    // console.log('price',parseFloat(price), ((parseFloat(price) < 1) ? 4 : 2));
    const formatConfig = new Intl.NumberFormat("en-US", {
      style: "decimal",
      notation: "compact",
    compactDisplay: "short"
    });
  
    return formatConfig.format(price);
  };

  return (
    <div className="graph">
      <p className="graph-name">
        <span className={"ticker " + (highlight ? 'highlight' : '')}>{ticker}</span>{' ' + info?.current}<br/>
        <span className={"indicator"}>H </span>{info?.highestPrice}
        <span className={"indicator"}> L </span>{info?.lowestPrice}
      </p>
      <p className="graph-details">
        <span className={"indicator"}>M </span>{info?.currentMC}
        <span className={"indicator"}> V </span>{info?.currentVolume}
      </p>
      {!viewType && data && <div className="graph-holder">
        <VictoryLine
            style={{
              data: {
                stroke: Number(info?.current) > Number(info?.first) ? "#c5ffc7" : "#f994b0",
                strokeWidth: 2
              }
            }}
            width={width}
            height={height}
            padding={{ top: paddingVertical, bottom: paddingBottom, left: paddingHorizontal, right: paddingHorizontal }}
            interpolation="linear"
            data={data}
          />
      </div>}
      {viewType && data && <div className="graph-holder">
        <VictoryChart
          width={width}
          height={height}
          padding={{ top: paddingVertical, bottom: paddingBottom, left: paddingHorizontal, right: paddingHorizontal }}
          containerComponent={
            <VictoryVoronoiContainer
             labels={({ datum }) => formatPrice(datum.y)}
              labelComponent={
                <VictoryTooltip
                  style={{
                    fill: "#000",
                    fontSize: 12
                  }}
                  flyoutStyle={{
                    fill: "#fff",
                    stroke: "#0000ff",
                    strokeWidth: 0,
                    margin: 6
                  }}
                />
              }
            />
          }
        >
          <VictoryLine
            style={{
              data: {
                stroke: Number(info?.current) > Number(info?.first) ? "#c5ffc7" : "#f994b0",
                strokeWidth: 2
              }
            }}
            width={width}
            height={height}
            padding={{ top: paddingVertical, bottom: paddingBottom, left: paddingHorizontal, right: paddingHorizontal }}
            interpolation="linear"
            data={data}
          />
          <VictoryAxis
            orientation="bottom"
            tickFormat={() => ""}
            style={{
              axis: {
                stroke: "#fff",
                strokeWidth: 0
              },
              tickLabels: {
                fill: "#fff"
              }
            }}
          />
        </VictoryChart>
      </div>}

      {viewType && mcData && <div className="graph-holder">
        <VictoryChart
          width={width}
          height={height}
          padding={{ top: paddingVertical, bottom: paddingBottom, left: paddingHorizontal, right: paddingHorizontal }}
          containerComponent={
            <VictoryVoronoiContainer
             labels={({ datum }) => formatPriceLarge(datum.y)}
              labelComponent={
                <VictoryTooltip
                  style={{
                    fill: "#000",
                    fontSize: 12
                  }}
                  flyoutStyle={{
                    fill: "#fff",
                    stroke: "#0000ff",
                    strokeWidth: 0,
                    margin: 6
                  }}
                />
              }
            />
          }
        >
          <VictoryLine
            style={{
              data: {
                stroke: "#bae4fd",
                strokeWidth: 2
              }
            }}
            width={width}
            height={height}
            padding={{ top: paddingVertical, bottom: paddingBottom, left: paddingHorizontal, right: paddingHorizontal }}
            interpolation="linear"
            data={mcData}
          />
          <VictoryAxis
            orientation="bottom"
            tickFormat={() => ""}
            style={{
              axis: {
                stroke: "#fff",
                strokeWidth: 0
              },
              tickLabels: {
                fill: "#fff"
              }
            }}
          />
        </VictoryChart>
      </div>}
      {viewType && csData && <div className="graph-holder">
        <VictoryChart
          width={width}
          height={height}
          padding={{ top: paddingVertical, bottom: paddingBottom, left: paddingHorizontal, right: paddingHorizontal }}
          containerComponent={
            <VictoryVoronoiContainer
             labels={({ datum }) => formatPriceLarge(datum.y)}
              labelComponent={
                <VictoryTooltip
                  style={{
                    fill: "#000",
                    fontSize: 12
                  }}
                  flyoutStyle={{
                    fill: "#fff",
                    stroke: "#0000ff",
                    strokeWidth: 0,
                    margin: 6
                  }}
                />
              }
            />
          }
        >
          <VictoryLine
            style={{
              data: {
                stroke: "#fff",
                strokeWidth: 2
              }
            }}
            width={width}
            height={height}
            padding={{ top: paddingVertical, bottom: paddingBottom, left: paddingHorizontal, right: paddingHorizontal }}
            interpolation="linear"
            data={csData}
          />
          <VictoryAxis
            orientation="bottom"
            tickFormat={() => ""}
            style={{
              axis: {
                stroke: "#fff",
                strokeWidth: 0
              },
              tickLabels: {
                fill: "#fff"
              }
            }}
          />
        </VictoryChart>
      </div>}
    </div>
  );
}

export default Graph;