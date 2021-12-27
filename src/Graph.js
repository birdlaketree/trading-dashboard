import { useState, useEffect } from "react";
import {
  VictoryLine,
} from "victory";
import axios from "axios";
import './Graph.scss';

const Graph = ({ticker, interval, highlight=null}) => {
  const [data, setData] = useState(null);
  const [info, setInfo] = useState(null);
  const [activeInterval, setActiveInterval] = useState(null)

  const paddingVertical = 20;
  const paddingHorizontal = 6;
  const paddingBottom = 6;
  const width = 428;
  const height = 140;

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
      let d = response.data.prices.map((item) => ({
        x: item[0],
        y: item[1],
      }));
      setData(d);

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
        currentMC: formatPrice(response.data.market_caps[response.data.market_caps.length - 1][1]),
        currentVolume: formatPrice(response.data.total_volumes[response.data.total_volumes.length - 1][1]),
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

  return (
    <div className="graph">
      <p className="graph-name">
        <span className={"ticker " + (highlight ? 'highlight' : '')}>{ticker}</span>
        {' ' + info?.current}<br/>
        {' H ' + info?.highestPrice + ' • L ' + info?.lowestPrice}
      </p>
      <p className="graph-details">
        {'M ' + info?.currentMC}<br/>
        {'V ' + info?.currentVolume}
      </p>
      <div className="graph-holder">
        {data && <VictoryLine
            style={{
              data: {
                stroke: "#fff",
                strokeWidth: 1
              }
            }}
            width={width}
            height={height}
            padding={{ top: paddingVertical, bottom: paddingBottom, left: paddingHorizontal, right: paddingHorizontal }}
            interpolation="linear"
            data={data}
          />}
      </div>
    </div>
  );
}

export default Graph;