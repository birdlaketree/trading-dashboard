import { useState } from "react";
import GoogleFontLoader from 'react-google-font-loader';

import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { getOrca, OrcaFarmConfig, OrcaPoolConfig } from "@orca-so/sdk";

import Graph from './Graph';
import './App.scss';

const App = () => {
  const intervals = [
    {
      label: "1D",
      value: 1
    },
    {
      label: "7D",
      value: 7
    },
    {
      label: "1M",
      value: 30
    },
    {
      label: "3M",
      value: 90
    },
    {
      label: "6M",
      value: 180
    },
    {
      label: "9M",
      value: 270
    }
    ,
    {
      label: "12M",
      value: 356
    }
  ];

  const [dataInterval, setDataInterval] = useState(intervals[1].value);
  const [viewType, setViewType] = useState(0);

  // const connection = new Connection("https://api.mainnet-beta.solana.com", "singleGossip");
  // const orca = getOrca(connection);
  // const keys = Object.keys(OrcaPoolConfig);
  // const tokens = [];

  // keys.forEach(item => {
  //   const pool = orca.getPool(OrcaPoolConfig[item])
  //   const tokenIDs = pool.poolParams.tokenIds;
  //   tokens.push({name: pool.poolParams.tokens[tokenIDs[0]].name, id: tokenIDs[0] })
  //   tokens.push({name: pool.poolParams.tokens[tokenIDs[1]].name, id: tokenIDs[1] })
  // })
  // console.log('+++ tokens', tokens);

  // const pk = new PublicKey('JET6zMJWkCN9tpRT2v2jfAmm5VnQFDpUBCyaKojmGtz')
  // console.log('+++ pk', pk);
  // connection.getAccountInfo(pk).then(response => {
  //   console.log('response', response);
  // })

  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: 'Roboto Mono',
            weights: [400, 700],
          },
        ]}
        subsets={['latin-ext']}
      />
      <div className="app">
        <div className="menu-holder">
          {intervals.map((interval) => (
            <button
              key={interval.value}
              className={dataInterval === interval.value ? "active" : "inactive"}
              onClick={() => setDataInterval(interval.value)}
            >
              {interval.label}
            </button>
          ))}
        <div className="menu-spacer"></div>
          <button
            key={10000}
            className={viewType === 1 ? "active" : "inactive"}
            onClick={() => setViewType(viewType === 0 ? 1 : 0)}
          >
            {'INF'}
          </button>
        </div>
        <p className="graph-group-name">MAIN L1</p>
        <div className="graphs">
          <Graph ticker={'bitcoin'} interval={dataInterval} viewType={viewType} />
          <Graph ticker={'ethereum'} interval={dataInterval} viewType={viewType} />
          <Graph ticker={'solana'} interval={dataInterval} viewType={viewType} />
          <Graph ticker={'avalanche-2'} interval={dataInterval} viewType={viewType} />
          <Graph ticker={'terra-luna'} interval={dataInterval} viewType={viewType} />
          <Graph ticker={'tezos'} interval={dataInterval} viewType={viewType} />
          <Graph ticker={'near'} interval={dataInterval} viewType={viewType} />
          <Graph ticker={'joe'} interval={dataInterval} viewType={viewType} />
        </div>
        <p className="graph-group-name">SOL ECO</p>
        <div className="graphs">
          <Graph ticker={'raydium'} interval={dataInterval} viewType={viewType} />
          <Graph ticker={'serum'} interval={dataInterval} viewType={viewType} />
          <Graph ticker={'orca'} interval={dataInterval} highlight={true} viewType={viewType} />
          <Graph ticker={'samoyedcoin'} interval={dataInterval} viewType={viewType} />
          <Graph ticker={'step-finance'} interval={dataInterval} viewType={viewType} />
          <Graph ticker={'mango-markets'} interval={dataInterval} viewType={viewType} />
          <Graph ticker={'apricot'} interval={dataInterval} viewType={viewType} />
          <Graph ticker={'solfarm'} interval={dataInterval} viewType={viewType} />
          <Graph ticker={'sunny-aggregator'} interval={dataInterval} viewType={viewType} />
          apricot
        </div>
        <p className="graph-group-name">ETH ECO</p>
        <div className="graphs">
          <Graph ticker={'aave'} interval={dataInterval} viewType={viewType} />
          <Graph ticker={'sushi'} interval={dataInterval} viewType={viewType} />
          <Graph ticker={'matic-network'} interval={dataInterval} viewType={viewType} />
          <Graph ticker={'uniswap'} interval={dataInterval} viewType={viewType} />
          <Graph ticker={'curve-dao-token'} interval={dataInterval} viewType={viewType} />
          <Graph ticker={'chainlink'} interval={dataInterval} viewType={viewType} />
        </div>
        <p className="graph-group-name">BNB ECO</p>
        <div className="graphs">
          <Graph ticker={'binancecoin'} interval={dataInterval} viewType={viewType} />
          <Graph ticker={'swipe'} interval={dataInterval} viewType={viewType} />
          <Graph ticker={'pancakeswap-token'} interval={dataInterval} viewType={viewType} />
          <Graph ticker={'bakerytoken'} interval={dataInterval} viewType={viewType} />
          <Graph ticker={'superfarm'} interval={dataInterval} viewType={viewType} />
          <Graph ticker={'force-protocol'} interval={dataInterval} viewType={viewType} />
        </div>
      </div>
    </>
  );
}

export default App;
