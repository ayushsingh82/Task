import React,{useStaet} from 'react'
import './index.css'

import Exchange from './components/Exchange'

// import { configureChains, createConfig } from "@wagmi/core";
// import { mainnet, arbitrum, bsc, optimism, polygon } from "@wagmi/core/chains";
// import { publicProvider } from "@wagmi/core/providers/public";
// import { alchemyProvider } from "@wagmi/core/providers/alchemy";
// import { infuraProvider } from "@wagmi/core/providers/infura";
// import { createModal } from "@rabby-wallet/rabbykit";
 
// const { chains, publicClient, webSocketPublicClient } = configureChains(
//   [mainnet, arbitrum, bsc, optimism, polygon],
//   [
//     // alchemyProvider({ apiKey: "yourAlchemyApiKey" }),
//     // infuraProvider({ apiKey: "yourInfuraApiKey" }),
//     alchemyProvider({ apiKey: "lYTRBI2DiVE0u9E1dyUMGmCabQATJGdw" }),
//     infuraProvider({ apiKey: "0f2cc737a50a487c945659469889bd2a" }),
//     publicProvider(),
//   ]
// );
 
// const config = createConfig({
//   autoConnect: true,
//   publicClient,
//   webSocketPublicClient,
// });
 
// export const rabbyKit = createModal({
//   chains,
//   wagmi: config,
//   // projectId: "yourProjectId",
//   projectId: "8d42c29b160d6f347649aa1cdf3e4cab",
//   appName: "RabbyKit",
// });
 
// rabbykit.open();
 
// console.log("current rabbykit modal open status:", rabbyKit.getOpenState());
 
// rabbykit.close();


function App() {
 

  return (
    <>
    <div className='bg-black '>
<Exchange/>
    </div>
    </>
  )
}

export default App
