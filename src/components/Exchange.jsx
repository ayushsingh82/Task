import React, { useState } from 'react';
import { ArrowSwapVertical } from "iconsax-react";

function Exchange() {
  const [sendValue, setSendValue] = useState('');
  const [receiveValue, setReceiveValue] = useState('');

  const [sendLabel, setSendLabel] = useState('USDT');
  const [receiveLabel, setReceiveLabel] = useState('USDC');

  const handleSwap = () => {
    const tempLabel = sendLabel;

    setSendLabel(receiveLabel);
    setReceiveLabel(tempLabel);
  };

  return (
    <div className='bg-slate-900 h-screen'>
      <div>
        <h1 className='text-white flex justify-center text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text'>Interloom</h1>
        <h1 className='text-white flex justify-center text-2xl font-bold mt-[20px] bg-gradient-to-r from-purple-500 to-purple-900 text-transparent bg-clip-text'>
          An easy compute solution for BSC leveraging Zero Knowledge.
        </h1>
      </div>

      <div className=' w-full h-screen flex justify-center items-center mt-[-80px]'>
        <div className=' h-[600px] w-[600px] bg-blue-200 mt-40 border rounded-2xl bg-gradient-to-r from-blue-400 to-violet-400 '>
          <div className='flex px-20 py-5 mb-[10px]'>
            <h1 className='mr-10 text-xl font-semibold text-gray-900 '>Swap</h1>
            <h2 className='text-xl font-semibold text-gray-900'>Bridge</h2>
          </div>

          <div className='h-[150px] w-[400px] bg-blue-300 mx-auto border rounded-2xl flex flex-col'>
            <div className=' h-[60px] w-[340px] mx-auto mt-[10px] text-xl py-[5px]'>
              send
            </div>
            <div className='bg-red-300 h-[60px] w-[340px] mx-auto mt-[10px] font-semibold text-4xl flex justify-between'>
              <input
                className='bg-blue-300 h-[40px] w-[40px] mt-[5px] ml-[5px]'
                placeholder='0'
                type='text'
                value={sendValue}
                onChange={(e) => setSendValue(e.target.value)}
              />
              <div className='bg-gray-300 h-[40px] w-[100px] text-[20px] flex justify-center items-center border rounded-xl mt-[10px] mr-[10px]'>
                {sendLabel}
              </div>
            </div>
          </div>

          <div className='mt-[-10px] h-[40px] mb-[-30px]  flex items-center justify-center'>
            <ArrowSwapVertical
              size="32"
              color="#FF8A65"
              variant="Bold"
              onClick={handleSwap}
            />
          </div>

          <div className='h-[150px] w-[400px] bg-blue-300 mx-auto border mt-[20px] rounded-2xl'>
            <div className=' h-[60px] w-[340px] mx-auto mt-[10px] text-xl py-[10px]'>
              receive
            </div>
            <div className='bg-red-300 h-[60px] w-[340px] mx-auto mt-[10px] font-semibold text-4xl flex justify-between'>
              <input
                className='bg-blue-300 h-[40px] w-[40px] mt-[5px] ml-[5px]'
                placeholder='0'
                type='text'
                value={receiveValue}
                onChange={(e) => setReceiveValue(e.target.value)}
              />
              <div className='bg-gray-300 h-[40px] w-[100px] text-[20px] flex justify-center items-center border rounded-xl mt-[10px] mr-[10px]'>
                {receiveLabel}
              </div>
            </div>
          </div>

          <div className='mx-auto w-[200px] h-[100px] mt-[20px] bg-transparent rounded-2xl flex items-center justify-center'>
            Wallet
          </div>

          <div className='mx-auto mt-[20px] h-[40px] bg:transparent w-[400px] flex items-center justify-center  rounded-2xl'>
            <h1 className='text-2xl tracking-wide'>Powered by <span className='text-2xl font-semibold '> Interllom</span></h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exchange;


// import React, { useState, useEffect } from 'react';
// import { ThirdwebSDK } from '@thirdweb-dev/sdk';

// const USDC_ETH_PAIR_ADDRESS = '0xC36442b4a4522E871399CD717aBDD847Ab11FE88'; // Uniswap v3 USDC/ETH pair address

// const Exchange = () => {
//   const [exchangeRate, setExchangeRate] = useState(null);
//   const [sdk, setSDK] = useState(null);

//   useEffect(() => {
//     const initSDK = async () => {
//       const sdk = new ThirdwebSDK('ethereum');
//       setSDK(sdk);
//     };

//     initSDK();
//   }, []);

//   useEffect(() => {
//     if (!sdk) return;

//     const fetchExchangeRate = async () => {
//       const pair = sdk.getPair(USDC_ETH_PAIR_ADDRESS);
//       const reserves = await pair.getReserves();
//       const exchangeRate = reserves[1] / reserves[0];
//       setExchangeRate(exchangeRate);
//     };

//     fetchExchangeRate();
//   }, [sdk]);

//   return (
//     <div>
//       <h2>USDC to ETH Exchange Rate</h2>
//       {exchangeRate ? (
//         <p>1 USDC = {exchangeRate.toFixed(6)} ETH</p>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Exchange;