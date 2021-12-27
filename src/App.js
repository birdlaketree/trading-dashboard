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
    }
  ];

  const [dataInterval, setDataInterval] = useState(intervals[1].value);

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
        </div>
        <p className="graph-group-name">MAIN L1</p>
        <div className="graphs">
          <Graph ticker={'bitcoin'} interval={dataInterval} />
          <Graph ticker={'ethereum'} interval={dataInterval} />
          <Graph ticker={'solana'} interval={dataInterval} />
          <Graph ticker={'avalanche-2'} interval={dataInterval} />
          <Graph ticker={'terra-luna'} interval={dataInterval} />
          <Graph ticker={'tezos'} interval={dataInterval} />
        </div>
        <p className="graph-group-name">SOL ECO</p>
        <div className="graphs">
          <Graph ticker={'raydium'} interval={dataInterval} />
          <Graph ticker={'serum'} interval={dataInterval} />
          <Graph ticker={'orca'} interval={dataInterval} highlight={true} />
          <Graph ticker={'samoyedcoin'} interval={dataInterval} />
          <Graph ticker={'step-finance'} interval={dataInterval} />
          <Graph ticker={'mango-markets'} interval={dataInterval} />
        </div>
        <p className="graph-group-name">ETH ECO</p>
        <div className="graphs">
          <Graph ticker={'aave'} interval={dataInterval} />
          <Graph ticker={'sushi'} interval={dataInterval} />
          <Graph ticker={'matic-network'} interval={dataInterval} />
          <Graph ticker={'uniswap'} interval={dataInterval} />
          <Graph ticker={'curve-dao-token'} interval={dataInterval} />
          <Graph ticker={'chainlink'} interval={dataInterval} />
        </div>
        <p className="graph-group-name">BNB ECO</p>
        <div className="graphs">
          <Graph ticker={'binancecoin'} interval={dataInterval} />
          <Graph ticker={'swipe'} interval={dataInterval} />
          <Graph ticker={'pancakeswap-token'} interval={dataInterval} />
          <Graph ticker={'bakerytoken'} interval={dataInterval} />
          <Graph ticker={'superfarm'} interval={dataInterval} />
          <Graph ticker={'force-protocol'} interval={dataInterval} />
        </div>
      </div>
    </>
  );
}

export default App;